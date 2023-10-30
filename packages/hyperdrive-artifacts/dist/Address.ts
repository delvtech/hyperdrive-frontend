export const Address = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122020bf2b4cb14df64ca14bc20b07da07e46cb85b0a321904ae95be1ba60da94e8364736f6c63430008130033",
    "sourceMap": "194:9169:83:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;194:9169:83;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122020bf2b4cb14df64ca14bc20b07da07e46cb85b0a321904ae95be1ba60da94e8364736f6c63430008130033",
    "sourceMap": "194:9169:83:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Collection of functions related to the address type\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":\"Address\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
        "lib/openzeppelin-contracts/contracts/utils/Address.sol": "Address"
      },
      "libraries": {}
    },
    "sources": {
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
    "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Address.sol",
    "id": 59994,
    "exportedSymbols": {
      "Address": [
        59993
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:9263:83",
    "nodes": [
      {
        "id": 59665,
        "nodeType": "PragmaDirective",
        "src": "101:23:83",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".1"
        ]
      },
      {
        "id": 59993,
        "nodeType": "ContractDefinition",
        "src": "194:9169:83",
        "nodes": [
          {
            "id": 59681,
            "nodeType": "FunctionDefinition",
            "src": "1412:320:83",
            "nodes": [],
            "body": {
              "id": 59680,
              "nodeType": "Block",
              "src": "1478:254:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 59678,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "expression": {
                          "id": 59674,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59669,
                          "src": "1702:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 59675,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1710:4:83",
                        "memberName": "code",
                        "nodeType": "MemberAccess",
                        "src": "1702:12:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 59676,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1715:6:83",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1702:19:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 59677,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1724:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1702:23:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 59673,
                  "id": 59679,
                  "nodeType": "Return",
                  "src": "1695:30:83"
                }
              ]
            },
            "documentation": {
              "id": 59667,
              "nodeType": "StructuredDocumentation",
              "src": "216:1191:83",
              "text": " @dev Returns true if `account` is a contract.\n [IMPORTANT]\n ====\n It is unsafe to assume that an address for which this function returns\n false is an externally-owned account (EOA) and not a contract.\n Among others, `isContract` will return false for the following\n types of addresses:\n  - an externally-owned account\n  - a contract in construction\n  - an address where a contract will be created\n  - an address where a contract lived, but was destroyed\n Furthermore, `isContract` will also return true if the target contract within\n the same transaction is already scheduled for destruction by `SELFDESTRUCT`,\n which only has an effect at the end of a transaction.\n ====\n [IMPORTANT]\n ====\n You shouldn't rely on `isContract` to protect against flash loan attacks!\n Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\n like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\n constructor.\n ===="
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isContract",
            "nameLocation": "1421:10:83",
            "parameters": {
              "id": 59670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59669,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1440:7:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59681,
                  "src": "1432:15:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59668,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1432:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1431:17:83"
            },
            "returnParameters": {
              "id": 59673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59672,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59681,
                  "src": "1472:4:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 59671,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1472:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1471:6:83"
            },
            "scope": 59993,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59715,
            "nodeType": "FunctionDefinition",
            "src": "2647:312:83",
            "nodes": [],
            "body": {
              "id": 59714,
              "nodeType": "Block",
              "src": "2718:241:83",
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
                        "id": 59696,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 59692,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "2744:4:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$59993",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$59993",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 59691,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2736:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 59690,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2736:7:83",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 59693,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2736:13:83",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 59694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2750:7:83",
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "2736:21:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 59695,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59686,
                          "src": "2761:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2736:31:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e6365",
                        "id": 59697,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2769:31:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        },
                        "value": "Address: insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        }
                      ],
                      "id": 59689,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2728:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 59698,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2728:73:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59699,
                  "nodeType": "ExpressionStatement",
                  "src": "2728:73:83"
                },
                {
                  "assignments": [
                    59701,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59701,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "2818:7:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59714,
                      "src": "2813:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 59700,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2813:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 59708,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 59706,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2861:2:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "id": 59702,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59684,
                          "src": "2831:9:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 59703,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2841:4:83",
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "2831:14:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 59705,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 59704,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59686,
                          "src": "2853:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "2831:29:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 59707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2831:33:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2812:52:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59710,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59701,
                        "src": "2882:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564",
                        "id": 59711,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2891:60:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        },
                        "value": "Address: unable to send value, recipient may have reverted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        }
                      ],
                      "id": 59709,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2874:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 59712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2874:78:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59713,
                  "nodeType": "ExpressionStatement",
                  "src": "2874:78:83"
                }
              ]
            },
            "documentation": {
              "id": 59682,
              "nodeType": "StructuredDocumentation",
              "src": "1738:904:83",
              "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.8.0/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sendValue",
            "nameLocation": "2656:9:83",
            "parameters": {
              "id": 59687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59684,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "2682:9:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59715,
                  "src": "2666:25:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 59683,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2666:15:83",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59686,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2701:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59715,
                  "src": "2693:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59685,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2693:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2665:43:83"
            },
            "returnParameters": {
              "id": 59688,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2718:0:83"
            },
            "scope": 59993,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59733,
            "nodeType": "FunctionDefinition",
            "src": "3701:185:83",
            "nodes": [],
            "body": {
              "id": 59732,
              "nodeType": "Block",
              "src": "3790:96:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59726,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59718,
                        "src": "3829:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59727,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59720,
                        "src": "3837:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 59728,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3843:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c206661696c6564",
                        "id": 59729,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3846:32:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        },
                        "value": "Address: low-level call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        }
                      ],
                      "id": 59725,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        59773,
                        59817
                      ],
                      "referencedDeclaration": 59817,
                      "src": "3807:21:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 59730,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3807:72:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 59724,
                  "id": 59731,
                  "nodeType": "Return",
                  "src": "3800:79:83"
                }
              ]
            },
            "documentation": {
              "id": 59716,
              "nodeType": "StructuredDocumentation",
              "src": "2965:731:83",
              "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason, it is bubbled up by this\n function (like regular Solidity function calls).\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert.\n _Available since v3.1._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nameLocation": "3710:12:83",
            "parameters": {
              "id": 59721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59718,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "3731:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59733,
                  "src": "3723:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3723:7:83",
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
                  "id": 59720,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "3752:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59733,
                  "src": "3739:17:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59719,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3739:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3722:35:83"
            },
            "returnParameters": {
              "id": 59724,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59723,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59733,
                  "src": "3776:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59722,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3776:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3775:14:83"
            },
            "scope": 59993,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59753,
            "nodeType": "FunctionDefinition",
            "src": "4108:223:83",
            "nodes": [],
            "body": {
              "id": 59752,
              "nodeType": "Block",
              "src": "4255:76:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59746,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59736,
                        "src": "4294:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59747,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59738,
                        "src": "4302:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 59748,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4308:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "id": 59749,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59740,
                        "src": "4311:12:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 59745,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        59773,
                        59817
                      ],
                      "referencedDeclaration": 59817,
                      "src": "4272:21:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 59750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4272:52:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 59744,
                  "id": 59751,
                  "nodeType": "Return",
                  "src": "4265:59:83"
                }
              ]
            },
            "documentation": {
              "id": 59734,
              "nodeType": "StructuredDocumentation",
              "src": "3892:211:83",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nameLocation": "4117:12:83",
            "parameters": {
              "id": 59741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59736,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "4147:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59753,
                  "src": "4139:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59735,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4139:7:83",
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
                  "id": 59738,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4176:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59753,
                  "src": "4163:17:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59737,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4163:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59740,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "4204:12:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59753,
                  "src": "4190:26:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59739,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4190:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4129:93:83"
            },
            "returnParameters": {
              "id": 59744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59743,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59753,
                  "src": "4241:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59742,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4241:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4240:14:83"
            },
            "scope": 59993,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59773,
            "nodeType": "FunctionDefinition",
            "src": "4693:224:83",
            "nodes": [],
            "body": {
              "id": 59772,
              "nodeType": "Block",
              "src": "4806:111:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59766,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59756,
                        "src": "4845:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59767,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59758,
                        "src": "4853:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 59768,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59760,
                        "src": "4859:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564",
                        "id": 59769,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4866:43:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        },
                        "value": "Address: low-level call with value failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        }
                      ],
                      "id": 59765,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        59773,
                        59817
                      ],
                      "referencedDeclaration": 59817,
                      "src": "4823:21:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 59770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4823:87:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 59764,
                  "id": 59771,
                  "nodeType": "Return",
                  "src": "4816:94:83"
                }
              ]
            },
            "documentation": {
              "id": 59754,
              "nodeType": "StructuredDocumentation",
              "src": "4337:351:83",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`.\n _Available since v3.1._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nameLocation": "4702:21:83",
            "parameters": {
              "id": 59761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59756,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "4732:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59773,
                  "src": "4724:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59755,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4724:7:83",
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
                  "id": 59758,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4753:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59773,
                  "src": "4740:17:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59757,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4740:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59760,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4767:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59773,
                  "src": "4759:13:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59759,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4759:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4723:50:83"
            },
            "returnParameters": {
              "id": 59764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59763,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59773,
                  "src": "4792:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59762,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4792:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4791:14:83"
            },
            "scope": 59993,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59817,
            "nodeType": "FunctionDefinition",
            "src": "5165:446:83",
            "nodes": [],
            "body": {
              "id": 59816,
              "nodeType": "Block",
              "src": "5344:267:83",
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
                        "id": 59794,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 59790,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "5370:4:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$59993",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$59993",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 59789,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5362:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 59788,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "5362:7:83",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 59791,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5362:13:83",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 59792,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5376:7:83",
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "5362:21:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 59793,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59780,
                          "src": "5387:5:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5362:30:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c",
                        "id": 59795,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5394:40:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        },
                        "value": "Address: insufficient balance for call"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        }
                      ],
                      "id": 59787,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5354:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 59796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5354:81:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59797,
                  "nodeType": "ExpressionStatement",
                  "src": "5354:81:83"
                },
                {
                  "assignments": [
                    59799,
                    59801
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59799,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "5451:7:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59816,
                      "src": "5446:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 59798,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5446:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 59801,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "5473:10:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59816,
                      "src": "5460:23:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 59800,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "5460:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59808,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 59806,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59778,
                        "src": "5513:4:83",
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
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "id": 59802,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59776,
                          "src": "5487:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 59803,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5494:4:83",
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "5487:11:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 59805,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 59804,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59780,
                          "src": "5506:5:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "5487:25:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 59807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5487:31:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5445:73:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59810,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59776,
                        "src": "5562:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59811,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59799,
                        "src": "5570:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 59812,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59801,
                        "src": "5579:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 59813,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59782,
                        "src": "5591:12:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 59809,
                      "name": "verifyCallResultFromTarget",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59948,
                      "src": "5535:26:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bool,bytes memory,string memory) view returns (bytes memory)"
                      }
                    },
                    "id": 59814,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5535:69:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 59786,
                  "id": 59815,
                  "nodeType": "Return",
                  "src": "5528:76:83"
                }
              ]
            },
            "documentation": {
              "id": 59774,
              "nodeType": "StructuredDocumentation",
              "src": "4923:237:83",
              "text": " @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n with `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nameLocation": "5174:21:83",
            "parameters": {
              "id": 59783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59776,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "5213:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59817,
                  "src": "5205:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59775,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5205:7:83",
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
                  "id": 59778,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "5242:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59817,
                  "src": "5229:17:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59777,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5229:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59780,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5264:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59817,
                  "src": "5256:13:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59779,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5256:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59782,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "5293:12:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59817,
                  "src": "5279:26:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59781,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5279:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5195:116:83"
            },
            "returnParameters": {
              "id": 59786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59785,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59817,
                  "src": "5330:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59784,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5330:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5329:14:83"
            },
            "scope": 59993,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59834,
            "nodeType": "FunctionDefinition",
            "src": "5788:197:83",
            "nodes": [],
            "body": {
              "id": 59833,
              "nodeType": "Block",
              "src": "5888:97:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59828,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59820,
                        "src": "5924:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59829,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59822,
                        "src": "5932:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564",
                        "id": 59830,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5938:39:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        },
                        "value": "Address: low-level static call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        }
                      ],
                      "id": 59827,
                      "name": "functionStaticCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        59834,
                        59863
                      ],
                      "referencedDeclaration": 59863,
                      "src": "5905:18:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) view returns (bytes memory)"
                      }
                    },
                    "id": 59831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5905:73:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 59826,
                  "id": 59832,
                  "nodeType": "Return",
                  "src": "5898:80:83"
                }
              ]
            },
            "documentation": {
              "id": 59818,
              "nodeType": "StructuredDocumentation",
              "src": "5617:166:83",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nameLocation": "5797:18:83",
            "parameters": {
              "id": 59823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59820,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "5824:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59834,
                  "src": "5816:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59819,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5816:7:83",
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
                  "id": 59822,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "5845:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59834,
                  "src": "5832:17:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59821,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5832:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5815:35:83"
            },
            "returnParameters": {
              "id": 59826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59825,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59834,
                  "src": "5874:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59824,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5874:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5873:14:83"
            },
            "scope": 59993,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59863,
            "nodeType": "FunctionDefinition",
            "src": "6169:326:83",
            "nodes": [],
            "body": {
              "id": 59862,
              "nodeType": "Block",
              "src": "6327:168:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59847,
                    59849
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59847,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "6343:7:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59862,
                      "src": "6338:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 59846,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "6338:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 59849,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "6365:10:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59862,
                      "src": "6352:23:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 59848,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "6352:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59854,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 59852,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59839,
                        "src": "6397:4:83",
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
                        "id": 59850,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59837,
                        "src": "6379:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 59851,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6386:10:83",
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "6379:17:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 59853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6379:23:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6337:65:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59856,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59837,
                        "src": "6446:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59857,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59847,
                        "src": "6454:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 59858,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59849,
                        "src": "6463:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 59859,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59841,
                        "src": "6475:12:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 59855,
                      "name": "verifyCallResultFromTarget",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59948,
                      "src": "6419:26:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bool,bytes memory,string memory) view returns (bytes memory)"
                      }
                    },
                    "id": 59860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6419:69:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 59845,
                  "id": 59861,
                  "nodeType": "Return",
                  "src": "6412:76:83"
                }
              ]
            },
            "documentation": {
              "id": 59835,
              "nodeType": "StructuredDocumentation",
              "src": "5991:173:83",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nameLocation": "6178:18:83",
            "parameters": {
              "id": 59842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59837,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "6214:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59863,
                  "src": "6206:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59836,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6206:7:83",
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
                  "id": 59839,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "6243:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59863,
                  "src": "6230:17:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59838,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6230:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59841,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "6271:12:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59863,
                  "src": "6257:26:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59840,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6257:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6196:93:83"
            },
            "returnParameters": {
              "id": 59845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59844,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59863,
                  "src": "6313:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59843,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6313:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6312:14:83"
            },
            "scope": 59993,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59880,
            "nodeType": "FunctionDefinition",
            "src": "6674:198:83",
            "nodes": [],
            "body": {
              "id": 59879,
              "nodeType": "Block",
              "src": "6771:101:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59874,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59866,
                        "src": "6809:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59875,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59868,
                        "src": "6817:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",
                        "id": 59876,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6823:41:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        },
                        "value": "Address: low-level delegate call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        }
                      ],
                      "id": 59873,
                      "name": "functionDelegateCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        59880,
                        59909
                      ],
                      "referencedDeclaration": 59909,
                      "src": "6788:20:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 59877,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6788:77:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 59872,
                  "id": 59878,
                  "nodeType": "Return",
                  "src": "6781:84:83"
                }
              ]
            },
            "documentation": {
              "id": 59864,
              "nodeType": "StructuredDocumentation",
              "src": "6501:168:83",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nameLocation": "6683:20:83",
            "parameters": {
              "id": 59869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59866,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "6712:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59880,
                  "src": "6704:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59865,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6704:7:83",
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
                  "id": 59868,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "6733:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59880,
                  "src": "6720:17:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59867,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6720:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6703:35:83"
            },
            "returnParameters": {
              "id": 59872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59871,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59880,
                  "src": "6757:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59870,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6757:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6756:14:83"
            },
            "scope": 59993,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59909,
            "nodeType": "FunctionDefinition",
            "src": "7058:325:83",
            "nodes": [],
            "body": {
              "id": 59908,
              "nodeType": "Block",
              "src": "7213:170:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59893,
                    59895
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59893,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "7229:7:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59908,
                      "src": "7224:12:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 59892,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "7224:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 59895,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "7251:10:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59908,
                      "src": "7238:23:83",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 59894,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "7238:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59900,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 59898,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59885,
                        "src": "7285:4:83",
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
                        "id": 59896,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59883,
                        "src": "7265:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 59897,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7272:12:83",
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "7265:19:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 59899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7265:25:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7223:67:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59902,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59883,
                        "src": "7334:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59903,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59893,
                        "src": "7342:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 59904,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59895,
                        "src": "7351:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 59905,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59887,
                        "src": "7363:12:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 59901,
                      "name": "verifyCallResultFromTarget",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59948,
                      "src": "7307:26:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bool,bytes memory,string memory) view returns (bytes memory)"
                      }
                    },
                    "id": 59906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7307:69:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 59891,
                  "id": 59907,
                  "nodeType": "Return",
                  "src": "7300:76:83"
                }
              ]
            },
            "documentation": {
              "id": 59881,
              "nodeType": "StructuredDocumentation",
              "src": "6878:175:83",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nameLocation": "7067:20:83",
            "parameters": {
              "id": 59888,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59883,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "7105:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59909,
                  "src": "7097:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59882,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7097:7:83",
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
                  "id": 59885,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "7134:4:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59909,
                  "src": "7121:17:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59884,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7121:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59887,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "7162:12:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59909,
                  "src": "7148:26:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59886,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7148:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7087:93:83"
            },
            "returnParameters": {
              "id": 59891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59890,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59909,
                  "src": "7199:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59889,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7199:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7198:14:83"
            },
            "scope": 59993,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59948,
            "nodeType": "FunctionDefinition",
            "src": "7671:628:83",
            "nodes": [],
            "body": {
              "id": 59947,
              "nodeType": "Block",
              "src": "7865:434:83",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 59923,
                    "name": "success",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 59914,
                    "src": "7879:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 59945,
                    "nodeType": "Block",
                    "src": "8235:58:83",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 59941,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59916,
                              "src": "8257:10:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 59942,
                              "name": "errorMessage",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59918,
                              "src": "8269:12:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
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
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 59940,
                            "name": "_revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59992,
                            "src": "8249:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,string memory) pure"
                            }
                          },
                          "id": 59943,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8249:33:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 59944,
                        "nodeType": "ExpressionStatement",
                        "src": "8249:33:83"
                      }
                    ]
                  },
                  "id": 59946,
                  "nodeType": "IfStatement",
                  "src": "7875:418:83",
                  "trueBody": {
                    "id": 59939,
                    "nodeType": "Block",
                    "src": "7888:341:83",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 59927,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 59924,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59916,
                              "src": "7906:10:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 59925,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7917:6:83",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "7906:17:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 59926,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7927:1:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "7906:22:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 59936,
                        "nodeType": "IfStatement",
                        "src": "7902:286:83",
                        "trueBody": {
                          "id": 59935,
                          "nodeType": "Block",
                          "src": "7930:258:83",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "id": 59930,
                                        "name": "target",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 59912,
                                        "src": "8132:6:83",
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
                                      "id": 59929,
                                      "name": "isContract",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 59681,
                                      "src": "8121:10:83",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                                        "typeString": "function (address) view returns (bool)"
                                      }
                                    },
                                    "id": 59931,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "8121:18:83",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    }
                                  },
                                  {
                                    "hexValue": "416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374",
                                    "id": 59932,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "8141:31:83",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                                      "typeString": "literal_string \"Address: call to non-contract\""
                                    },
                                    "value": "Address: call to non-contract"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                                      "typeString": "literal_string \"Address: call to non-contract\""
                                    }
                                  ],
                                  "id": 59928,
                                  "name": "require",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    -18,
                                    -18
                                  ],
                                  "referencedDeclaration": -18,
                                  "src": "8113:7:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                  }
                                },
                                "id": 59933,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8113:60:83",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 59934,
                              "nodeType": "ExpressionStatement",
                              "src": "8113:60:83"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 59937,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59916,
                          "src": "8208:10:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "functionReturnParameters": 59922,
                        "id": 59938,
                        "nodeType": "Return",
                        "src": "8201:17:83"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 59910,
              "nodeType": "StructuredDocumentation",
              "src": "7389:277:83",
              "text": " @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling\n the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.\n _Available since v4.8._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "verifyCallResultFromTarget",
            "nameLocation": "7680:26:83",
            "parameters": {
              "id": 59919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59912,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "7724:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59948,
                  "src": "7716:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59911,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7716:7:83",
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
                  "id": 59914,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "7745:7:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59948,
                  "src": "7740:12:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 59913,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7740:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59916,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nameLocation": "7775:10:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59948,
                  "src": "7762:23:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59915,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7762:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59918,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "7809:12:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59948,
                  "src": "7795:26:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59917,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7795:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7706:121:83"
            },
            "returnParameters": {
              "id": 59922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59921,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59948,
                  "src": "7851:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59920,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7851:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7850:14:83"
            },
            "scope": 59993,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59972,
            "nodeType": "FunctionDefinition",
            "src": "8520:295:83",
            "nodes": [],
            "body": {
              "id": 59971,
              "nodeType": "Block",
              "src": "8680:135:83",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 59960,
                    "name": "success",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 59951,
                    "src": "8694:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 59969,
                    "nodeType": "Block",
                    "src": "8751:58:83",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 59965,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59953,
                              "src": "8773:10:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            {
                              "id": 59966,
                              "name": "errorMessage",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59955,
                              "src": "8785:12:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
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
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 59964,
                            "name": "_revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59992,
                            "src": "8765:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bytes memory,string memory) pure"
                            }
                          },
                          "id": 59967,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8765:33:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 59968,
                        "nodeType": "ExpressionStatement",
                        "src": "8765:33:83"
                      }
                    ]
                  },
                  "id": 59970,
                  "nodeType": "IfStatement",
                  "src": "8690:119:83",
                  "trueBody": {
                    "id": 59963,
                    "nodeType": "Block",
                    "src": "8703:42:83",
                    "statements": [
                      {
                        "expression": {
                          "id": 59961,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59953,
                          "src": "8724:10:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "functionReturnParameters": 59959,
                        "id": 59962,
                        "nodeType": "Return",
                        "src": "8717:17:83"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 59949,
              "nodeType": "StructuredDocumentation",
              "src": "8305:210:83",
              "text": " @dev Tool to verify that a low level call was successful, and revert if it wasn't, either by bubbling the\n revert reason or using the provided one.\n _Available since v4.3._"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "verifyCallResult",
            "nameLocation": "8529:16:83",
            "parameters": {
              "id": 59956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59951,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "8560:7:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59972,
                  "src": "8555:12:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 59950,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8555:4:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59953,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nameLocation": "8590:10:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59972,
                  "src": "8577:23:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59952,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8577:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59955,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "8624:12:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59972,
                  "src": "8610:26:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59954,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8610:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8545:97:83"
            },
            "returnParameters": {
              "id": 59959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59958,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59972,
                  "src": "8666:12:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59957,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8666:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8665:14:83"
            },
            "scope": 59993,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59992,
            "nodeType": "FunctionDefinition",
            "src": "8821:540:83",
            "nodes": [],
            "body": {
              "id": 59991,
              "nodeType": "Block",
              "src": "8904:457:83",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 59982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 59979,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59974,
                        "src": "8980:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 59980,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8991:6:83",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "8980:17:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 59981,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9000:1:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8980:21:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 59989,
                    "nodeType": "Block",
                    "src": "9310:45:83",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 59986,
                              "name": "errorMessage",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59976,
                              "src": "9331:12:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 59985,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "9324:6:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 59987,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9324:20:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 59988,
                        "nodeType": "ExpressionStatement",
                        "src": "9324:20:83"
                      }
                    ]
                  },
                  "id": 59990,
                  "nodeType": "IfStatement",
                  "src": "8976:379:83",
                  "trueBody": {
                    "id": 59984,
                    "nodeType": "Block",
                    "src": "9003:301:83",
                    "statements": [
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "9161:133:83",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "9179:40:83",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "returndata",
                                    "nodeType": "YulIdentifier",
                                    "src": "9208:10:83"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "9202:5:83"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "9202:17:83"
                              },
                              "variables": [
                                {
                                  "name": "returndata_size",
                                  "nodeType": "YulTypedName",
                                  "src": "9183:15:83",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "9247:2:83",
                                        "type": "",
                                        "value": "32"
                                      },
                                      {
                                        "name": "returndata",
                                        "nodeType": "YulIdentifier",
                                        "src": "9251:10:83"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "9243:3:83"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "9243:19:83"
                                  },
                                  {
                                    "name": "returndata_size",
                                    "nodeType": "YulIdentifier",
                                    "src": "9264:15:83"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "9236:6:83"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "9236:44:83"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "9236:44:83"
                            }
                          ]
                        },
                        "documentation": "@solidity memory-safe-assembly",
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 59974,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "9208:10:83",
                            "valueSize": 1
                          },
                          {
                            "declaration": 59974,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "9251:10:83",
                            "valueSize": 1
                          }
                        ],
                        "id": 59983,
                        "nodeType": "InlineAssembly",
                        "src": "9152:142:83"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revert",
            "nameLocation": "8830:7:83",
            "parameters": {
              "id": 59977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59974,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nameLocation": "8851:10:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59992,
                  "src": "8838:23:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 59973,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8838:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59976,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "8877:12:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59992,
                  "src": "8863:26:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59975,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8863:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8837:53:83"
            },
            "returnParameters": {
              "id": 59978,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8904:0:83"
            },
            "scope": 59993,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Address",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 59666,
          "nodeType": "StructuredDocumentation",
          "src": "126:67:83",
          "text": " @dev Collection of functions related to the address type"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          59993
        ],
        "name": "Address",
        "nameLocation": "202:7:83",
        "scope": 59994,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 83
} as const;
