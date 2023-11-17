export const FixedPointMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076954b5d32293e7f46551de85082148de5b0f4deea40dd5ecbf4a0b3edb11abb64736f6c63430008130033",
    "sourceMap": "464:14851:42:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;464:14851:42;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076954b5d32293e7f46551de85082148de5b0f4deea40dd5ecbf4a0b3edb11abb64736f6c63430008130033",
    "sourceMap": "464:14851:42:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"FixedPointMath\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"A fixed-point math library.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/FixedPointMath.sol\":\"FixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]}},\"version\":1}",
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
        "contracts/src/libraries/FixedPointMath.sol": "FixedPointMath"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5",
        "urls": [
          "bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70",
          "dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d",
        "urls": [
          "bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85",
          "dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad",
        "urls": [
          "bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6",
          "dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb",
        "urls": [
          "bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f",
          "dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639",
        "urls": [
          "bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d",
          "dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
    "id": 10534,
    "exportedSymbols": {
      "FixedPointMath": [
        10533
      ],
      "IHyperdrive": [
        3759
      ],
      "ONE": [
        9788
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:15276:42",
    "nodes": [
      {
        "id": 9783,
        "nodeType": "PragmaDirective",
        "src": "40:23:42",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 9785,
        "nodeType": "ImportDirective",
        "src": "65:60:42",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 10534,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9784,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "74:11:42",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9788,
        "nodeType": "VariableDeclaration",
        "src": "127:27:42",
        "nodes": [],
        "constant": true,
        "mutability": "constant",
        "name": "ONE",
        "nameLocation": "144:3:42",
        "scope": 10534,
        "stateVariable": false,
        "storageLocation": "default",
        "typeDescriptions": {
          "typeIdentifier": "t_uint256",
          "typeString": "uint256"
        },
        "typeName": {
          "id": 9786,
          "name": "uint256",
          "nodeType": "ElementaryTypeName",
          "src": "127:7:42",
          "typeDescriptions": {
            "typeIdentifier": "t_uint256",
            "typeString": "uint256"
          }
        },
        "value": {
          "hexValue": "31653138",
          "id": 9787,
          "isConstant": false,
          "isLValue": false,
          "isPure": true,
          "kind": "number",
          "lValueRequested": false,
          "nodeType": "Literal",
          "src": "150:4:42",
          "typeDescriptions": {
            "typeIdentifier": "t_rational_1000000000000000000_by_1",
            "typeString": "int_const 1000000000000000000"
          },
          "value": "1e18"
        },
        "visibility": "internal"
      },
      {
        "id": 10533,
        "nodeType": "ContractDefinition",
        "src": "464:14851:42",
        "nodes": [
          {
            "id": 9792,
            "nodeType": "UsingForDirective",
            "src": "493:33:42",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 9790,
              "name": "FixedPointMath",
              "nameLocations": [
                "499:14:42"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "499:14:42"
            },
            "typeName": {
              "id": 9791,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "518:7:42",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 9799,
            "nodeType": "VariableDeclaration",
            "src": "532:52:42",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_UINT256",
            "nameLocation": "558:11:42",
            "scope": 10533,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9793,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "532:7:42",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              },
              "id": 9798,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                },
                "id": 9796,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 9794,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "572:1:42",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_2_by_1",
                    "typeString": "int_const 2"
                  },
                  "value": "2"
                },
                "nodeType": "BinaryOperation",
                "operator": "**",
                "rightExpression": {
                  "hexValue": "323536",
                  "id": 9795,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "577:3:42",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_256_by_1",
                    "typeString": "int_const 256"
                  },
                  "value": "256"
                },
                "src": "572:8:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31",
                "id": 9797,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "583:1:42",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "src": "572:12:42",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9813,
            "nodeType": "FunctionDefinition",
            "src": "941:556:42",
            "nodes": [],
            "body": {
              "id": 9812,
              "nodeType": "Block",
              "src": "1068:429:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1130:361:42",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1343:44:42",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1368:1:42",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1371:1:42",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1361:6:42"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1361:12:42"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1361:12:42"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "1272:11:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "1296:1:42"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "1302:1:42"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1309:11:42"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1322:1:42"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "1305:3:42"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "1305:19:42"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "1299:2:42"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1299:26:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "1292:3:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1292:34:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1285:6:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1285:42:42"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1268:3:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1268:60:42"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1244:6:42"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1244:98:42"
                        },
                        "nodeType": "YulIf",
                        "src": "1241:146:42"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1449:32:42",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "1462:1:42"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "1465:1:42"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1458:3:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1458:9:42"
                            },
                            {
                              "name": "denominator",
                              "nodeType": "YulIdentifier",
                              "src": "1469:11:42"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "1454:3:42"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1454:27:42"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "1449:1:42"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 9799,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1309:11:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9806,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1272:11:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9806,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1469:11:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9802,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1302:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9802,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1462:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9804,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1296:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9804,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1322:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9804,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1465:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9809,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1449:1:42",
                      "valueSize": 1
                    }
                  ],
                  "id": 9811,
                  "nodeType": "InlineAssembly",
                  "src": "1121:370:42"
                }
              ]
            },
            "documentation": {
              "id": 9800,
              "nodeType": "StructuredDocumentation",
              "src": "591:345:42",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivDown",
            "nameLocation": "950:10:42",
            "parameters": {
              "id": 9807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9802,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "978:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9813,
                  "src": "970:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9801,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "970:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9804,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "997:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9813,
                  "src": "989:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9803,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "989:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9806,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "1016:11:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9813,
                  "src": "1008:19:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9805,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1008:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "960:73:42"
            },
            "returnParameters": {
              "id": 9810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9809,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1065:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9813,
                  "src": "1057:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1057:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1056:11:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9831,
            "nodeType": "FunctionDefinition",
            "src": "1771:119:42",
            "nodes": [],
            "body": {
              "id": 9830,
              "nodeType": "Block",
              "src": "1842:48:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 9824,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9816,
                            "src": "1871:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 9825,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9818,
                            "src": "1874:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 9826,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1877:4:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            }
                          ],
                          "id": 9823,
                          "name": "mulDivDown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9813,
                          "src": "1860:10:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9827,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1860:22:42",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 9828,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1859:24:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9822,
                  "id": 9829,
                  "nodeType": "Return",
                  "src": "1852:31:42"
                }
              ]
            },
            "documentation": {
              "id": 9814,
              "nodeType": "StructuredDocumentation",
              "src": "1503:263:42",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a * b rounded down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDown",
            "nameLocation": "1780:7:42",
            "parameters": {
              "id": 9819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9816,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1796:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9831,
                  "src": "1788:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9815,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1788:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9818,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1807:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9831,
                  "src": "1799:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9817,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1799:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1787:22:42"
            },
            "returnParameters": {
              "id": 9822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9821,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9831,
                  "src": "1833:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1833:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1832:9:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9849,
            "nodeType": "FunctionDefinition",
            "src": "2164:165:42",
            "nodes": [],
            "body": {
              "id": 9848,
              "nodeType": "Block",
              "src": "2235:94:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 9842,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9834,
                            "src": "2264:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 9843,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2267:4:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          {
                            "id": 9844,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9836,
                            "src": "2273:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 9841,
                          "name": "mulDivDown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9813,
                          "src": "2253:10:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9845,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2253:22:42",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 9846,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2252:24:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9840,
                  "id": 9847,
                  "nodeType": "Return",
                  "src": "2245:31:42"
                }
              ]
            },
            "documentation": {
              "id": 9832,
              "nodeType": "StructuredDocumentation",
              "src": "1896:263:42",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a / b rounded down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divDown",
            "nameLocation": "2173:7:42",
            "parameters": {
              "id": 9837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9834,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2189:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9849,
                  "src": "2181:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2181:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9836,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2200:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9849,
                  "src": "2192:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9835,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2192:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2180:22:42"
            },
            "returnParameters": {
              "id": 9840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9839,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9849,
                  "src": "2226:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2226:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2225:9:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9863,
            "nodeType": "FunctionDefinition",
            "src": "2683:748:42",
            "nodes": [],
            "body": {
              "id": 9862,
              "nodeType": "Block",
              "src": "2808:623:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2870:555:42",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3083:44:42",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3108:1:42",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3111:1:42",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "3101:6:42"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3101:12:42"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3101:12:42"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "3012:11:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "3036:1:42"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "3042:1:42"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3049:11:42"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3062:1:42"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "3045:3:42"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "3045:19:42"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "3039:2:42"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3039:26:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "3032:3:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3032:34:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "3025:6:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3025:42:42"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "3008:3:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3008:60:42"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2984:6:42"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2984:98:42"
                        },
                        "nodeType": "YulIf",
                        "src": "2981:146:42"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3296:119:42",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "3333:1:42"
                                        },
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "3336:1:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "3329:3:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3329:9:42"
                                    },
                                    {
                                      "name": "denominator",
                                      "nodeType": "YulIdentifier",
                                      "src": "3340:11:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "3325:3:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3325:27:42"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3354:1:42",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "3322:2:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3322:34:42"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "3382:1:42"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "3385:1:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "3378:3:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3378:9:42"
                                },
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "3389:11:42"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "3374:3:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3374:27:42"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3301:3:42"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3301:114:42"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "3296:1:42"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 9799,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3049:11:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9856,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3012:11:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9856,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3340:11:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9856,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3389:11:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9852,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3042:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9852,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3333:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9852,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3382:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9854,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3036:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9854,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3062:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9854,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3336:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9854,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3385:1:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9859,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3296:1:42",
                      "valueSize": 1
                    }
                  ],
                  "id": 9861,
                  "nodeType": "InlineAssembly",
                  "src": "2861:564:42"
                }
              ]
            },
            "documentation": {
              "id": 9850,
              "nodeType": "StructuredDocumentation",
              "src": "2335:343:42",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded up."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivUp",
            "nameLocation": "2692:8:42",
            "parameters": {
              "id": 9857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9852,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2718:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9863,
                  "src": "2710:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2710:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9854,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "2737:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9863,
                  "src": "2729:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9853,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2729:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9856,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "2756:11:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9863,
                  "src": "2748:19:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9855,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2748:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2700:73:42"
            },
            "returnParameters": {
              "id": 9860,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9859,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2805:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9863,
                  "src": "2797:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9858,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2797:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2796:11:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9881,
            "nodeType": "FunctionDefinition",
            "src": "3707:115:42",
            "nodes": [],
            "body": {
              "id": 9880,
              "nodeType": "Block",
              "src": "3776:46:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 9874,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9866,
                            "src": "3803:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 9875,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9868,
                            "src": "3806:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 9876,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3809:4:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            }
                          ],
                          "id": 9873,
                          "name": "mulDivUp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9863,
                          "src": "3794:8:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9877,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3794:20:42",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 9878,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3793:22:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9872,
                  "id": 9879,
                  "nodeType": "Return",
                  "src": "3786:29:42"
                }
              ]
            },
            "documentation": {
              "id": 9864,
              "nodeType": "StructuredDocumentation",
              "src": "3437:265:42",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a * b rounded up."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulUp",
            "nameLocation": "3716:5:42",
            "parameters": {
              "id": 9869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9866,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3730:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9881,
                  "src": "3722:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9865,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3722:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9868,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3741:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9881,
                  "src": "3733:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3733:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3721:22:42"
            },
            "returnParameters": {
              "id": 9872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9871,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9881,
                  "src": "3767:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9870,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3767:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3766:9:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9899,
            "nodeType": "FunctionDefinition",
            "src": "4098:115:42",
            "nodes": [],
            "body": {
              "id": 9898,
              "nodeType": "Block",
              "src": "4167:46:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 9892,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9884,
                            "src": "4194:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 9893,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4197:4:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          {
                            "id": 9894,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9886,
                            "src": "4203:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 9891,
                          "name": "mulDivUp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9863,
                          "src": "4185:8:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9895,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4185:20:42",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 9896,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4184:22:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9890,
                  "id": 9897,
                  "nodeType": "Return",
                  "src": "4177:29:42"
                }
              ]
            },
            "documentation": {
              "id": 9882,
              "nodeType": "StructuredDocumentation",
              "src": "3828:265:42",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a / b rounded up."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divUp",
            "nameLocation": "4107:5:42",
            "parameters": {
              "id": 9887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9884,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4121:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9899,
                  "src": "4113:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9883,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4113:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9886,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4132:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9899,
                  "src": "4124:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4124:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4112:22:42"
            },
            "returnParameters": {
              "id": 9890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9889,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9899,
                  "src": "4158:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9888,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4158:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4157:9:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9958,
            "nodeType": "FunctionDefinition",
            "src": "4628:840:42",
            "nodes": [],
            "body": {
              "id": 9957,
              "nodeType": "Block",
              "src": "4695:773:42",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9909,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9904,
                      "src": "4752:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 9910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4757:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4752:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9915,
                  "nodeType": "IfStatement",
                  "src": "4748:47:42",
                  "trueBody": {
                    "id": 9914,
                    "nodeType": "Block",
                    "src": "4760:35:42",
                    "statements": [
                      {
                        "expression": {
                          "id": 9912,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9788,
                          "src": "4781:3:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 9908,
                        "id": 9913,
                        "nodeType": "Return",
                        "src": "4774:10:42"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9916,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9902,
                      "src": "4848:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 9917,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4853:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4848:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9922,
                  "nodeType": "IfStatement",
                  "src": "4844:45:42",
                  "trueBody": {
                    "id": 9921,
                    "nodeType": "Block",
                    "src": "4856:33:42",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 9919,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4877:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 9908,
                        "id": 9920,
                        "nodeType": "Return",
                        "src": "4870:8:42"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    9924
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9924,
                      "mutability": "mutable",
                      "name": "y_int256",
                      "nameLocation": "5034:8:42",
                      "nodeType": "VariableDeclaration",
                      "scope": 9957,
                      "src": "5027:15:42",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 9923,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5027:6:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9929,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 9927,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9904,
                        "src": "5052:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 9926,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5045:6:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 9925,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5045:6:42",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 9928,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5045:9:42",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5027:27:42"
                },
                {
                  "assignments": [
                    9931
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9931,
                      "mutability": "mutable",
                      "name": "lnx",
                      "nameLocation": "5224:3:42",
                      "nodeType": "VariableDeclaration",
                      "scope": 9957,
                      "src": "5217:10:42",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 9930,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5217:6:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9938,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9935,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9902,
                            "src": "5241:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 9934,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5234:6:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 9933,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5234:6:42",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9936,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5234:9:42",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 9932,
                      "name": "_ln",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10397,
                      "src": "5230:3:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 9937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5230:14:42",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5217:27:42"
                },
                {
                  "assignments": [
                    9940
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9940,
                      "mutability": "mutable",
                      "name": "ylnx",
                      "nameLocation": "5261:4:42",
                      "nodeType": "VariableDeclaration",
                      "scope": 9957,
                      "src": "5254:11:42",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 9939,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5254:6:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9941,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5254:11:42"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5300:50:42",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5314:26:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "y_int256",
                              "nodeType": "YulIdentifier",
                              "src": "5326:8:42"
                            },
                            {
                              "name": "lnx",
                              "nodeType": "YulIdentifier",
                              "src": "5336:3:42"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "5322:3:42"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5322:18:42"
                        },
                        "variableNames": [
                          {
                            "name": "ylnx",
                            "nodeType": "YulIdentifier",
                            "src": "5314:4:42"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 9931,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5336:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9924,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5326:8:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 9940,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5314:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 9942,
                  "nodeType": "InlineAssembly",
                  "src": "5275:75:42"
                },
                {
                  "expression": {
                    "id": 9948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9943,
                      "name": "ylnx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9940,
                      "src": "5359:4:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 9946,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9788,
                          "src": "5374:3:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 9945,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5367:6:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 9944,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5367:6:42",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9947,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5367:11:42",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "5359:19:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 9949,
                  "nodeType": "ExpressionStatement",
                  "src": "5359:19:42"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9953,
                            "name": "ylnx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9940,
                            "src": "5455:4:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "id": 9952,
                          "name": "exp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10155,
                          "src": "5451:3:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                            "typeString": "function (int256) pure returns (int256)"
                          }
                        },
                        "id": 9954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5451:9:42",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 9951,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5443:7:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 9950,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5443:7:42",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 9955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5443:18:42",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9908,
                  "id": 9956,
                  "nodeType": "Return",
                  "src": "5436:25:42"
                }
              ]
            },
            "documentation": {
              "id": 9900,
              "nodeType": "StructuredDocumentation",
              "src": "4219:404:42",
              "text": "@dev Exponentiation (x^y) with unsigned 18 decimal fixed point base and exponent.\n @dev Partially inspired by Balancer LogExpMath library (https://github.com/balancer-labs/balancer-v2-monorepo/blob/master/pkg/solidity-utils/contracts/math/LogExpMath.sol)\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @return The result of x^y."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pow",
            "nameLocation": "4637:3:42",
            "parameters": {
              "id": 9905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9902,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "4649:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9958,
                  "src": "4641:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9901,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4641:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9904,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "4660:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 9958,
                  "src": "4652:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9903,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4652:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4640:22:42"
            },
            "returnParameters": {
              "id": 9908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9907,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9958,
                  "src": "4686:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4686:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4685:9:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10155,
            "nodeType": "FunctionDefinition",
            "src": "5724:3347:42",
            "nodes": [],
            "body": {
              "id": 10154,
              "nodeType": "Block",
              "src": "5780:3291:42",
              "nodes": [],
              "statements": [
                {
                  "id": 10153,
                  "nodeType": "UncheckedBlock",
                  "src": "5790:3275:42",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 9969,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9966,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9961,
                          "src": "5947:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 9968,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "-",
                          "prefix": true,
                          "src": "5952:21:42",
                          "subExpression": {
                            "hexValue": "3432313339363738383534343532373637353531",
                            "id": 9967,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5953:20:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42139678854452767551_by_1",
                              "typeString": "int_const 42139678854452767551"
                            },
                            "value": "42139678854452767551"
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_minus_42139678854452767551_by_1",
                            "typeString": "int_const -42139678854452767551"
                          }
                        },
                        "src": "5947:26:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 9972,
                      "nodeType": "IfStatement",
                      "src": "5943:40:42",
                      "trueBody": {
                        "expression": {
                          "hexValue": "30",
                          "id": 9970,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5982:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 9965,
                        "id": 9971,
                        "nodeType": "Return",
                        "src": "5975:8:42"
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 9975,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9973,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9961,
                          "src": "6177:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "hexValue": "313335333035393939333638383933323331353839",
                          "id": 9974,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6182:21:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_135305999368893231589_by_1",
                            "typeString": "int_const 135305999368893231589"
                          },
                          "value": "135305999368893231589"
                        },
                        "src": "6177:26:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 9981,
                      "nodeType": "IfStatement",
                      "src": "6173:99:42",
                      "trueBody": {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 9976,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "6228:11:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 9978,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6240:30:42",
                            "memberName": "FixedPointMath_InvalidExponent",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3733,
                            "src": "6228:42:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 9979,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6228:44:42",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9980,
                        "nodeType": "RevertStatement",
                        "src": "6221:51:42"
                      }
                    },
                    {
                      "expression": {
                        "id": 9991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 9982,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9961,
                          "src": "6529:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 9990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 9985,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 9983,
                                  "name": "x",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9961,
                                  "src": "6534:1:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "hexValue": "3738",
                                  "id": 9984,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6539:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_78_by_1",
                                    "typeString": "int_const 78"
                                  },
                                  "value": "78"
                                },
                                "src": "6534:7:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 9986,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "6533:9:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_rational_3814697265625_by_1",
                              "typeString": "int_const 3814697265625"
                            },
                            "id": 9989,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                              "hexValue": "35",
                              "id": 9987,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6545:1:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_5_by_1",
                                "typeString": "int_const 5"
                              },
                              "value": "5"
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "**",
                            "rightExpression": {
                              "hexValue": "3138",
                              "id": 9988,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6550:2:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            },
                            "src": "6545:7:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_3814697265625_by_1",
                              "typeString": "int_const 3814697265625"
                            }
                          },
                          "src": "6533:19:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6529:23:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 9992,
                      "nodeType": "ExpressionStatement",
                      "src": "6529:23:42"
                    },
                    {
                      "assignments": [
                        9994
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 9994,
                          "mutability": "mutable",
                          "name": "k",
                          "nameLocation": "6888:1:42",
                          "nodeType": "VariableDeclaration",
                          "scope": 10153,
                          "src": "6881:8:42",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 9993,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6881:6:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 10008,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 10007,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 10004,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10000,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 9997,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 9995,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9961,
                                        "src": "6894:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "<<",
                                      "rightExpression": {
                                        "hexValue": "3936",
                                        "id": 9996,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6899:2:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_96_by_1",
                                          "typeString": "int_const 96"
                                        },
                                        "value": "96"
                                      },
                                      "src": "6894:7:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 9998,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "6893:9:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "/",
                                "rightExpression": {
                                  "hexValue": "3534393136373737343637373037343733333531313431343731313238",
                                  "id": 9999,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6905:29:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_54916777467707473351141471128_by_1",
                                    "typeString": "int_const 54916777467707473351141471128"
                                  },
                                  "value": "54916777467707473351141471128"
                                },
                                "src": "6893:41:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_39614081257132168796771975168_by_1",
                                  "typeString": "int_const 39614081257132168796771975168"
                                },
                                "id": 10003,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "32",
                                  "id": 10001,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6937:1:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_2_by_1",
                                    "typeString": "int_const 2"
                                  },
                                  "value": "2"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "3935",
                                  "id": 10002,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6942:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_95_by_1",
                                    "typeString": "int_const 95"
                                  },
                                  "value": "95"
                                },
                                "src": "6937:7:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_39614081257132168796771975168_by_1",
                                  "typeString": "int_const 39614081257132168796771975168"
                                }
                              },
                              "src": "6893:51:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 10005,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6892:53:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">>",
                        "rightExpression": {
                          "hexValue": "3936",
                          "id": 10006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6965:2:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_96_by_1",
                            "typeString": "int_const 96"
                          },
                          "value": "96"
                        },
                        "src": "6892:75:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "6881:86:42"
                    },
                    {
                      "expression": {
                        "id": 10015,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10009,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9961,
                          "src": "6981:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10014,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 10010,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9961,
                            "src": "6985:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 10013,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 10011,
                              "name": "k",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9994,
                              "src": "6989:1:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "hexValue": "3534393136373737343637373037343733333531313431343731313238",
                              "id": 10012,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6993:29:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_54916777467707473351141471128_by_1",
                                "typeString": "int_const 54916777467707473351141471128"
                              },
                              "value": "54916777467707473351141471128"
                            },
                            "src": "6989:33:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6985:37:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6981:41:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10016,
                      "nodeType": "ExpressionStatement",
                      "src": "6981:41:42"
                    },
                    {
                      "assignments": [
                        10018
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 10018,
                          "mutability": "mutable",
                          "name": "y",
                          "nameLocation": "7230:1:42",
                          "nodeType": "VariableDeclaration",
                          "scope": 10153,
                          "src": "7223:8:42",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 10017,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7223:6:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 10022,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 10021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10019,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9961,
                          "src": "7234:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31333436333836363136353435373936343738393230393530373733333238",
                          "id": 10020,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7238:31:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1346386616545796478920950773328_by_1",
                            "typeString": "int_const 1346386616545796478920950773328"
                          },
                          "value": "1346386616545796478920950773328"
                        },
                        "src": "7234:35:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7223:46:42"
                    },
                    {
                      "expression": {
                        "id": 10033,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10023,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10018,
                          "src": "7283:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10032,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10029,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10026,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10024,
                                        "name": "y",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10018,
                                        "src": "7289:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10025,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9961,
                                        "src": "7293:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7289:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10027,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7288:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10028,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7299:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7288:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10030,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7287:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3537313535343231323237353532333531303832323234333039373538343432",
                            "id": 10031,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7305:32:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_57155421227552351082224309758442_by_1",
                              "typeString": "int_const 57155421227552351082224309758442"
                            },
                            "value": "57155421227552351082224309758442"
                          },
                          "src": "7287:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7283:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10034,
                      "nodeType": "ExpressionStatement",
                      "src": "7283:54:42"
                    },
                    {
                      "assignments": [
                        10036
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 10036,
                          "mutability": "mutable",
                          "name": "p",
                          "nameLocation": "7358:1:42",
                          "nodeType": "VariableDeclaration",
                          "scope": 10153,
                          "src": "7351:8:42",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 10035,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7351:6:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 10042,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 10041,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10039,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 10037,
                            "name": "y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10018,
                            "src": "7362:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 10038,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9961,
                            "src": "7366:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7362:5:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "3934323031353439313934353530343932323534333536303432353034383132",
                          "id": 10040,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7370:32:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_94201549194550492254356042504812_by_1",
                            "typeString": "int_const 94201549194550492254356042504812"
                          },
                          "value": "94201549194550492254356042504812"
                        },
                        "src": "7362:40:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7351:51:42"
                    },
                    {
                      "expression": {
                        "id": 10053,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10043,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10036,
                          "src": "7416:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10052,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10049,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10046,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10044,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10036,
                                        "src": "7422:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10045,
                                        "name": "y",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10018,
                                        "src": "7426:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7422:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10047,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7421:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10048,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7432:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7421:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10050,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7420:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3238373139303231363434303239373236313533393536393434363830343132323430",
                            "id": 10051,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7438:35:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_28719021644029726153956944680412240_by_1",
                              "typeString": "int_const 2871...(27 digits omitted)...2240"
                            },
                            "value": "28719021644029726153956944680412240"
                          },
                          "src": "7420:53:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7416:57:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10054,
                      "nodeType": "ExpressionStatement",
                      "src": "7416:57:42"
                    },
                    {
                      "expression": {
                        "id": 10064,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10055,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10036,
                          "src": "7487:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10063,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 10058,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 10056,
                              "name": "p",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10036,
                              "src": "7491:1:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 10057,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9961,
                              "src": "7495:1:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "7491:5:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                                  "typeString": "int_const 3474...(55 digits omitted)...0736"
                                },
                                "id": 10061,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "34333835323732353231343534383437393034363539303736393835363933323736",
                                  "id": 10059,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7500:34:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_4385272521454847904659076985693276_by_1",
                                    "typeString": "int_const 4385...(26 digits omitted)...3276"
                                  },
                                  "value": "4385272521454847904659076985693276"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10060,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7538:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7500:40:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                                  "typeString": "int_const 3474...(55 digits omitted)...0736"
                                }
                              }
                            ],
                            "id": 10062,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7499:42:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                              "typeString": "int_const 3474...(55 digits omitted)...0736"
                            }
                          },
                          "src": "7491:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7487:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10065,
                      "nodeType": "ExpressionStatement",
                      "src": "7487:54:42"
                    },
                    {
                      "assignments": [
                        10067
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 10067,
                          "mutability": "mutable",
                          "name": "q",
                          "nameLocation": "7660:1:42",
                          "nodeType": "VariableDeclaration",
                          "scope": 10153,
                          "src": "7653:8:42",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 10066,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7653:6:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 10071,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 10070,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10068,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9961,
                          "src": "7664:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "32383535393839333934393037323233323633393336343834303539393030",
                          "id": 10069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7668:31:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2855989394907223263936484059900_by_1",
                            "typeString": "int_const 2855989394907223263936484059900"
                          },
                          "value": "2855989394907223263936484059900"
                        },
                        "src": "7664:35:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7653:46:42"
                    },
                    {
                      "expression": {
                        "id": 10082,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10072,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10067,
                          "src": "7713:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10081,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10078,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10075,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10073,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10067,
                                        "src": "7719:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10074,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9961,
                                        "src": "7723:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7719:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10076,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7718:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10077,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7729:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7718:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10079,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7717:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3530303230363033363532353335373833303139393631383331383831393435",
                            "id": 10080,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7735:32:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_50020603652535783019961831881945_by_1",
                              "typeString": "int_const 50020603652535783019961831881945"
                            },
                            "value": "50020603652535783019961831881945"
                          },
                          "src": "7717:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7713:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10083,
                      "nodeType": "ExpressionStatement",
                      "src": "7713:54:42"
                    },
                    {
                      "expression": {
                        "id": 10094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10084,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10067,
                          "src": "7781:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10093,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10090,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10087,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10085,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10067,
                                        "src": "7787:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10086,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9961,
                                        "src": "7791:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7787:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10088,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7786:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10089,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7797:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7786:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10091,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7785:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "353333383435303333353833343236373033323833363333343333373235333830",
                            "id": 10092,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7803:33:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_533845033583426703283633433725380_by_1",
                              "typeString": "int_const 5338...(25 digits omitted)...5380"
                            },
                            "value": "533845033583426703283633433725380"
                          },
                          "src": "7785:51:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7781:55:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10095,
                      "nodeType": "ExpressionStatement",
                      "src": "7781:55:42"
                    },
                    {
                      "expression": {
                        "id": 10106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10096,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10067,
                          "src": "7850:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10102,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10099,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10097,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10067,
                                        "src": "7856:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10098,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9961,
                                        "src": "7860:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7856:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10100,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7855:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10101,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7866:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7855:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10103,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7854:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "33363034383537323536393330363935343237303733363531393138303931343239",
                            "id": 10104,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7872:34:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_3604857256930695427073651918091429_by_1",
                              "typeString": "int_const 3604...(26 digits omitted)...1429"
                            },
                            "value": "3604857256930695427073651918091429"
                          },
                          "src": "7854:52:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7850:56:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10107,
                      "nodeType": "ExpressionStatement",
                      "src": "7850:56:42"
                    },
                    {
                      "expression": {
                        "id": 10118,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10108,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10067,
                          "src": "7920:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10114,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10111,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10109,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10067,
                                        "src": "7926:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10110,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9961,
                                        "src": "7930:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7926:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10112,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7925:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10113,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7936:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7925:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10115,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7924:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3134343233363038353637333530343633313830383837333732393632383037353733",
                            "id": 10116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7942:35:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_14423608567350463180887372962807573_by_1",
                              "typeString": "int_const 1442...(27 digits omitted)...7573"
                            },
                            "value": "14423608567350463180887372962807573"
                          },
                          "src": "7924:53:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7920:57:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10119,
                      "nodeType": "ExpressionStatement",
                      "src": "7920:57:42"
                    },
                    {
                      "expression": {
                        "id": 10130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10120,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10067,
                          "src": "7991:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10129,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10126,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10123,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10121,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10067,
                                        "src": "7997:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10122,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9961,
                                        "src": "8001:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7997:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10124,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7996:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10125,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "8007:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7996:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10127,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7995:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3236343439313838343938333535353838333339393334383033373233393736303233",
                            "id": 10128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8013:35:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_26449188498355588339934803723976023_by_1",
                              "typeString": "int_const 2644...(27 digits omitted)...6023"
                            },
                            "value": "26449188498355588339934803723976023"
                          },
                          "src": "7995:53:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7991:57:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10131,
                      "nodeType": "ExpressionStatement",
                      "src": "7991:57:42"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "8119:318:42",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "8408:15:42",
                            "value": {
                              "arguments": [
                                {
                                  "name": "p",
                                  "nodeType": "YulIdentifier",
                                  "src": "8418:1:42"
                                },
                                {
                                  "name": "q",
                                  "nodeType": "YulIdentifier",
                                  "src": "8421:1:42"
                                }
                              ],
                              "functionName": {
                                "name": "sdiv",
                                "nodeType": "YulIdentifier",
                                "src": "8413:4:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8413:10:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "8408:1:42"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 10036,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "8418:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10067,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "8421:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 9964,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "8408:1:42",
                          "valueSize": 1
                        }
                      ],
                      "id": 10132,
                      "nodeType": "InlineAssembly",
                      "src": "8110:327:42"
                    },
                    {
                      "expression": {
                        "id": 10151,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10133,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9964,
                          "src": "8888:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 10149,
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
                                    "id": 10141,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "arguments": [
                                        {
                                          "id": 10138,
                                          "name": "r",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 9964,
                                          "src": "8925:1:42",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        ],
                                        "id": 10137,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "8917:7:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint256_$",
                                          "typeString": "type(uint256)"
                                        },
                                        "typeName": {
                                          "id": 10136,
                                          "name": "uint256",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "8917:7:42",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 10139,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "8917:10:42",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "*",
                                    "rightExpression": {
                                      "hexValue": "33383232383333303734393633323336343533303432373338323538393032313538303033313535343136363135363637",
                                      "id": 10140,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8950:49:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_3822833074963236453042738258902158003155416615667_by_1",
                                        "typeString": "int_const 3822...(41 digits omitted)...5667"
                                      },
                                      "value": "3822833074963236453042738258902158003155416615667"
                                    },
                                    "src": "8917:82:42",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 10142,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "8916:84:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">>",
                              "rightExpression": {
                                "arguments": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    "id": 10147,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "313935",
                                      "id": 10145,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "9032:3:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_195_by_1",
                                        "typeString": "int_const 195"
                                      },
                                      "value": "195"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "id": 10146,
                                      "name": "k",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9994,
                                      "src": "9038:1:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "src": "9032:7:42",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "id": 10144,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9024:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 10143,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9024:7:42",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 10148,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9024:16:42",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "8916:124:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 10135,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8892:6:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 10134,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "8892:6:42",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10150,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8892:162:42",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "8888:166:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10152,
                      "nodeType": "ExpressionStatement",
                      "src": "8888:166:42"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 9959,
              "nodeType": "StructuredDocumentation",
              "src": "5474:245:42",
              "text": "@dev Computes e^x in 1e18 fixed point.\n @dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SignedWadMath.sol)\n @param x Fixed point number in 1e18 format.\n @return r The result of e^x."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exp",
            "nameLocation": "5733:3:42",
            "parameters": {
              "id": 9962,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9961,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "5744:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10155,
                  "src": "5737:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9960,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5737:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5736:10:42"
            },
            "returnParameters": {
              "id": 9965,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9964,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "5777:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10155,
                  "src": "5770:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9963,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5770:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5769:10:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10177,
            "nodeType": "FunctionDefinition",
            "src": "9363:160:42",
            "nodes": [],
            "body": {
              "id": 10176,
              "nodeType": "Block",
              "src": "9416:107:42",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 10165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 10163,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10158,
                      "src": "9430:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 10164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9435:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9430:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10171,
                  "nodeType": "IfStatement",
                  "src": "9426:67:42",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 10166,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3759,
                          "src": "9445:11:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 10168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9457:34:42",
                        "memberName": "FixedPointMath_NegativeOrZeroInput",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3737,
                        "src": "9445:46:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 10169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9445:48:42",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 10170,
                    "nodeType": "RevertStatement",
                    "src": "9438:55:42"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 10173,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10158,
                        "src": "9514:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 10172,
                      "name": "_ln",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10397,
                      "src": "9510:3:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 10174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9510:6:42",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 10162,
                  "id": 10175,
                  "nodeType": "Return",
                  "src": "9503:13:42"
                }
              ]
            },
            "documentation": {
              "id": 10156,
              "nodeType": "StructuredDocumentation",
              "src": "9077:281:42",
              "text": "@dev Computes ln(x) in 1e18 fixed point.\n @dev Reverts if x is negative\n @dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SignedWadMath.sol)\n @param x Fixed point number in 1e18 format.\n @return Result of ln(x)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ln",
            "nameLocation": "9372:2:42",
            "parameters": {
              "id": 10159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10158,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9382:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10177,
                  "src": "9375:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10157,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9375:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9374:10:42"
            },
            "returnParameters": {
              "id": 10162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10161,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10177,
                  "src": "9408:6:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10160,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9408:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9407:8:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10397,
            "nodeType": "FunctionDefinition",
            "src": "9583:3592:42",
            "nodes": [],
            "body": {
              "id": 10396,
              "nodeType": "Block",
              "src": "9638:3537:42",
              "nodes": [],
              "statements": [
                {
                  "id": 10395,
                  "nodeType": "UncheckedBlock",
                  "src": "9648:3521:42",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 10186,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10184,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10179,
                          "src": "9676:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 10185,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9681:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9676:6:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 10192,
                      "nodeType": "IfStatement",
                      "src": "9672:60:42",
                      "trueBody": {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 10187,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "9691:11:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 10189,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9703:27:42",
                            "memberName": "FixedPointMath_InvalidInput",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3735,
                            "src": "9691:39:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 10190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9691:41:42",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 10191,
                        "nodeType": "RevertStatement",
                        "src": "9684:48:42"
                      }
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "10082:489:42",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "10100:54:42",
                            "value": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10109:1:42",
                                  "type": "",
                                  "value": "7"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10115:34:42",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffff"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "10151:1:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "10112:2:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10112:41:42"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "10105:3:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10105:49:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10100:1:42"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10171:53:42",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10179:1:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10186:1:42",
                                      "type": "",
                                      "value": "6"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10192:18:42",
                                          "type": "",
                                          "value": "0xffffffffffffffff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10216:1:42"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10219:1:42"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10212:3:42"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10212:9:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10189:2:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10189:33:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10182:3:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10182:41:42"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10176:2:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10176:48:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10171:1:42"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10241:45:42",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10249:1:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10256:1:42",
                                      "type": "",
                                      "value": "5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10262:10:42",
                                          "type": "",
                                          "value": "0xffffffff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10278:1:42"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10281:1:42"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10274:3:42"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10274:9:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10259:2:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10259:25:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10252:3:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10252:33:42"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10246:2:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10246:40:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10241:1:42"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10303:41:42",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10311:1:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10318:1:42",
                                      "type": "",
                                      "value": "4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10324:6:42",
                                          "type": "",
                                          "value": "0xffff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10336:1:42"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10339:1:42"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10332:3:42"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10332:9:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10321:2:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10321:21:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10314:3:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10314:29:42"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10308:2:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10308:36:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10303:1:42"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10361:39:42",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10369:1:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10376:1:42",
                                      "type": "",
                                      "value": "3"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10382:4:42",
                                          "type": "",
                                          "value": "0xff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10392:1:42"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10395:1:42"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10388:3:42"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10388:9:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10379:2:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10379:19:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10372:3:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10372:27:42"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10366:2:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10366:34:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10361:1:42"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10417:38:42",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10425:1:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10432:1:42",
                                      "type": "",
                                      "value": "2"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10438:3:42",
                                          "type": "",
                                          "value": "0xf"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10447:1:42"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10450:1:42"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10443:3:42"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10443:9:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10435:2:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10435:18:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10428:3:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10428:26:42"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10422:2:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10422:33:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10417:1:42"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10472:38:42",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10480:1:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10487:1:42",
                                      "type": "",
                                      "value": "1"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10493:3:42",
                                          "type": "",
                                          "value": "0x3"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10502:1:42"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10505:1:42"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10498:3:42"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10498:9:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10490:2:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10490:18:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10483:3:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10483:26:42"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10477:2:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10477:33:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10472:1:42"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10527:30:42",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10535:1:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10541:3:42",
                                      "type": "",
                                      "value": "0x1"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "r",
                                          "nodeType": "YulIdentifier",
                                          "src": "10550:1:42"
                                        },
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "10553:1:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shr",
                                        "nodeType": "YulIdentifier",
                                        "src": "10546:3:42"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10546:9:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "10538:2:42"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10538:18:42"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10532:2:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10532:25:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10527:1:42"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10100:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10171:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10179:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10216:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10241:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10249:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10278:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10303:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10311:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10336:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10361:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10369:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10392:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10417:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10425:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10447:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10472:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10480:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10502:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10527:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10535:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10550:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10179,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10151:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10179,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10219:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10179,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10281:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10179,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10339:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10179,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10395:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10179,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10450:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10179,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10505:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10179,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10553:1:42",
                          "valueSize": 1
                        }
                      ],
                      "id": 10193,
                      "nodeType": "InlineAssembly",
                      "src": "10073:498:42"
                    },
                    {
                      "assignments": [
                        10195
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 10195,
                          "mutability": "mutable",
                          "name": "k",
                          "nameLocation": "10690:1:42",
                          "nodeType": "VariableDeclaration",
                          "scope": 10395,
                          "src": "10683:8:42",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 10194,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10683:6:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 10199,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 10198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10196,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10182,
                          "src": "10694:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "3936",
                          "id": 10197,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10698:2:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_96_by_1",
                            "typeString": "int_const 96"
                          },
                          "value": "96"
                        },
                        "src": "10694:6:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "10683:17:42"
                    },
                    {
                      "expression": {
                        "id": 10207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10200,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10179,
                          "src": "10714:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "<<=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 10205,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "313539",
                                "id": 10203,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10728:3:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_159_by_1",
                                  "typeString": "int_const 159"
                                },
                                "value": "159"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 10204,
                                "name": "k",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10195,
                                "src": "10734:1:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "src": "10728:7:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 10202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10720:7:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 10201,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10720:7:42",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10720:16:42",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10714:22:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10208,
                      "nodeType": "ExpressionStatement",
                      "src": "10714:22:42"
                    },
                    {
                      "expression": {
                        "id": 10219,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10209,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10179,
                          "src": "10750:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 10217,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "id": 10214,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10179,
                                    "src": "10769:1:42",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "id": 10213,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "10761:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 10212,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "10761:7:42",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 10215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10761:10:42",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">>",
                              "rightExpression": {
                                "hexValue": "313539",
                                "id": 10216,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10775:3:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_159_by_1",
                                  "typeString": "int_const 159"
                                },
                                "value": "159"
                              },
                              "src": "10761:17:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 10211,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10754:6:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 10210,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10754:6:42",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10218,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10754:25:42",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "10750:29:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10220,
                      "nodeType": "ExpressionStatement",
                      "src": "10750:29:42"
                    },
                    {
                      "assignments": [
                        10222
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 10222,
                          "mutability": "mutable",
                          "name": "p",
                          "nameLocation": "10943:1:42",
                          "nodeType": "VariableDeclaration",
                          "scope": 10395,
                          "src": "10936:8:42",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 10221,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10936:6:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 10226,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 10225,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10223,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10179,
                          "src": "10947:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "33323733323835343539363338353233383438363332323534303636323936",
                          "id": 10224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10951:31:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3273285459638523848632254066296_by_1",
                            "typeString": "int_const 3273285459638523848632254066296"
                          },
                          "value": "3273285459638523848632254066296"
                        },
                        "src": "10947:35:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "10936:46:42"
                    },
                    {
                      "expression": {
                        "id": 10237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10227,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10222,
                          "src": "10996:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10233,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10230,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10228,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10222,
                                        "src": "11002:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10229,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11006:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11002:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10231,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11001:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10232,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11012:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11001:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10234,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11000:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3234383238313537303831383333313633383932363538303839343435353234",
                            "id": 10235,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11018:32:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_24828157081833163892658089445524_by_1",
                              "typeString": "int_const 24828157081833163892658089445524"
                            },
                            "value": "24828157081833163892658089445524"
                          },
                          "src": "11000:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "10996:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10238,
                      "nodeType": "ExpressionStatement",
                      "src": "10996:54:42"
                    },
                    {
                      "expression": {
                        "id": 10249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10239,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10222,
                          "src": "11064:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10248,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10245,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10242,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10240,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10222,
                                        "src": "11070:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10241,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11074:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11070:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10243,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11069:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10244,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11080:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11069:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10246,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11068:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3433343536343835373235373339303337393538373430333735373433333933",
                            "id": 10247,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11086:32:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43456485725739037958740375743393_by_1",
                              "typeString": "int_const 43456485725739037958740375743393"
                            },
                            "value": "43456485725739037958740375743393"
                          },
                          "src": "11068:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11064:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10250,
                      "nodeType": "ExpressionStatement",
                      "src": "11064:54:42"
                    },
                    {
                      "expression": {
                        "id": 10261,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10251,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10222,
                          "src": "11132:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10260,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10257,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10254,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10252,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10222,
                                        "src": "11138:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10253,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11142:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11138:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10255,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11137:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10256,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11148:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11137:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10258,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11136:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3131313131353039313039343430393637303532303233383535353236393637",
                            "id": 10259,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11154:32:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_11111509109440967052023855526967_by_1",
                              "typeString": "int_const 11111509109440967052023855526967"
                            },
                            "value": "11111509109440967052023855526967"
                          },
                          "src": "11136:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11132:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10262,
                      "nodeType": "ExpressionStatement",
                      "src": "11132:54:42"
                    },
                    {
                      "expression": {
                        "id": 10273,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10263,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10222,
                          "src": "11200:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10272,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10269,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10266,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10264,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10222,
                                        "src": "11206:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10265,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11210:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11206:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10267,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11205:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10268,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11216:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11205:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10270,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11204:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3435303233373039363637323534303633373633333336353334353135383537",
                            "id": 10271,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11222:32:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_45023709667254063763336534515857_by_1",
                              "typeString": "int_const 45023709667254063763336534515857"
                            },
                            "value": "45023709667254063763336534515857"
                          },
                          "src": "11204:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11200:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10274,
                      "nodeType": "ExpressionStatement",
                      "src": "11200:54:42"
                    },
                    {
                      "expression": {
                        "id": 10285,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10275,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10222,
                          "src": "11268:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10284,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10281,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10278,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10276,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10222,
                                        "src": "11274:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10277,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11278:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11274:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10279,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11273:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10280,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11284:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11273:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10282,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11272:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3134373036373733343137333738363038373836373034363336313834353236",
                            "id": 10283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11290:32:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_14706773417378608786704636184526_by_1",
                              "typeString": "int_const 14706773417378608786704636184526"
                            },
                            "value": "14706773417378608786704636184526"
                          },
                          "src": "11272:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11268:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10286,
                      "nodeType": "ExpressionStatement",
                      "src": "11268:54:42"
                    },
                    {
                      "expression": {
                        "id": 10296,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10287,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10222,
                          "src": "11336:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 10290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 10288,
                              "name": "p",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10222,
                              "src": "11340:1:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 10289,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10179,
                              "src": "11344:1:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11340:5:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                                  "typeString": "int_const 6299...(51 digits omitted)...9328"
                                },
                                "id": 10293,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "373935313634323335363531333530343236323538323439373837343938",
                                  "id": 10291,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11349:30:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_795164235651350426258249787498_by_1",
                                    "typeString": "int_const 795164235651350426258249787498"
                                  },
                                  "value": "795164235651350426258249787498"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10292,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11383:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11349:36:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                                  "typeString": "int_const 6299...(51 digits omitted)...9328"
                                }
                              }
                            ],
                            "id": 10294,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11348:38:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                              "typeString": "int_const 6299...(51 digits omitted)...9328"
                            }
                          },
                          "src": "11340:46:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11336:50:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10297,
                      "nodeType": "ExpressionStatement",
                      "src": "11336:50:42"
                    },
                    {
                      "assignments": [
                        10299
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 10299,
                          "mutability": "mutable",
                          "name": "q",
                          "nameLocation": "11546:1:42",
                          "nodeType": "VariableDeclaration",
                          "scope": 10395,
                          "src": "11539:8:42",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 10298,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11539:6:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 10303,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 10302,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10300,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10179,
                          "src": "11550:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "35353733303335323333343430363733343636333030343531383133393336",
                          "id": 10301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11554:31:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_5573035233440673466300451813936_by_1",
                            "typeString": "int_const 5573035233440673466300451813936"
                          },
                          "value": "5573035233440673466300451813936"
                        },
                        "src": "11550:35:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "11539:46:42"
                    },
                    {
                      "expression": {
                        "id": 10314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10304,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10299,
                          "src": "11599:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10313,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10310,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10307,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10305,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10299,
                                        "src": "11605:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10306,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11609:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11605:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10308,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11604:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10309,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11615:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11604:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10311,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11603:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3731363934383734373939333137383833373634303930353631343534393538",
                            "id": 10312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11621:32:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_71694874799317883764090561454958_by_1",
                              "typeString": "int_const 71694874799317883764090561454958"
                            },
                            "value": "71694874799317883764090561454958"
                          },
                          "src": "11603:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11599:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10315,
                      "nodeType": "ExpressionStatement",
                      "src": "11599:54:42"
                    },
                    {
                      "expression": {
                        "id": 10326,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10316,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10299,
                          "src": "11667:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10325,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10322,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10319,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10317,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10299,
                                        "src": "11673:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10318,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11677:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11673:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10320,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11672:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10321,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11683:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11672:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10323,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11671:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "323833343437303336313732393234353735373237313936343531333036393536",
                            "id": 10324,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11689:33:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_283447036172924575727196451306956_by_1",
                              "typeString": "int_const 2834...(25 digits omitted)...6956"
                            },
                            "value": "283447036172924575727196451306956"
                          },
                          "src": "11671:51:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11667:55:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10327,
                      "nodeType": "ExpressionStatement",
                      "src": "11667:55:42"
                    },
                    {
                      "expression": {
                        "id": 10338,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10328,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10299,
                          "src": "11736:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10337,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10334,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10331,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10329,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10299,
                                        "src": "11742:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10330,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11746:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11742:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10332,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11741:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10333,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11752:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11741:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10335,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11740:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "343031363836363930333934303237363633363531363234323038373639353533",
                            "id": 10336,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11758:33:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_401686690394027663651624208769553_by_1",
                              "typeString": "int_const 4016...(25 digits omitted)...9553"
                            },
                            "value": "401686690394027663651624208769553"
                          },
                          "src": "11740:51:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11736:55:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10339,
                      "nodeType": "ExpressionStatement",
                      "src": "11736:55:42"
                    },
                    {
                      "expression": {
                        "id": 10350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10340,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10299,
                          "src": "11805:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10349,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10346,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10343,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10341,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10299,
                                        "src": "11811:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10342,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11815:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11811:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10344,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11810:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10345,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11821:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11810:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10347,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11809:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "323034303438343537353930333932303132333632343835303631383136363232",
                            "id": 10348,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11827:33:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_204048457590392012362485061816622_by_1",
                              "typeString": "int_const 2040...(25 digits omitted)...6622"
                            },
                            "value": "204048457590392012362485061816622"
                          },
                          "src": "11809:51:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11805:55:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10351,
                      "nodeType": "ExpressionStatement",
                      "src": "11805:55:42"
                    },
                    {
                      "expression": {
                        "id": 10362,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10352,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10299,
                          "src": "11874:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10361,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10358,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10355,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10353,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10299,
                                        "src": "11880:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10354,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11884:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11880:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10356,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11879:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10357,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11890:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11879:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10359,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11878:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3331383533383939363938353031353731343032363533333539343237313338",
                            "id": 10360,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11896:32:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31853899698501571402653359427138_by_1",
                              "typeString": "int_const 31853899698501571402653359427138"
                            },
                            "value": "31853899698501571402653359427138"
                          },
                          "src": "11878:50:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11874:54:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10363,
                      "nodeType": "ExpressionStatement",
                      "src": "11874:54:42"
                    },
                    {
                      "expression": {
                        "id": 10374,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10364,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10299,
                          "src": "11942:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10373,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 10370,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 10367,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 10365,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10299,
                                        "src": "11948:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 10366,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10179,
                                        "src": "11952:1:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11948:5:42",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 10368,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11947:7:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 10369,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11958:2:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11947:13:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 10371,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11946:15:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "393039343239393731323434333837333030323737333736353538333735",
                            "id": 10372,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11964:30:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_909429971244387300277376558375_by_1",
                              "typeString": "int_const 909429971244387300277376558375"
                            },
                            "value": "909429971244387300277376558375"
                          },
                          "src": "11946:48:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11942:52:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10375,
                      "nodeType": "ExpressionStatement",
                      "src": "11942:52:42"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "12064:295:42",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "12330:15:42",
                            "value": {
                              "arguments": [
                                {
                                  "name": "p",
                                  "nodeType": "YulIdentifier",
                                  "src": "12340:1:42"
                                },
                                {
                                  "name": "q",
                                  "nodeType": "YulIdentifier",
                                  "src": "12343:1:42"
                                }
                              ],
                              "functionName": {
                                "name": "sdiv",
                                "nodeType": "YulIdentifier",
                                "src": "12335:4:42"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12335:10:42"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "12330:1:42"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 10222,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "12340:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10299,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "12343:1:42",
                          "valueSize": 1
                        },
                        {
                          "declaration": 10182,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "12330:1:42",
                          "valueSize": 1
                        }
                      ],
                      "id": 10376,
                      "nodeType": "InlineAssembly",
                      "src": "12055:304:42"
                    },
                    {
                      "expression": {
                        "id": 10379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10377,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10182,
                          "src": "12720:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "hexValue": "31363737323032313130393936373138353838333432383230393637303637343433393633353136313636",
                          "id": 10378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12725:43:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1677202110996718588342820967067443963516166_by_1",
                            "typeString": "int_const 1677...(35 digits omitted)...6166"
                          },
                          "value": "1677202110996718588342820967067443963516166"
                        },
                        "src": "12720:48:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10380,
                      "nodeType": "ExpressionStatement",
                      "src": "12720:48:42"
                    },
                    {
                      "expression": {
                        "id": 10385,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10381,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10182,
                          "src": "12827:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 10384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3136353937353737353532363835363134323231343837323835393538313933393437343639313933383230353539323139383738313737393038303933343939323038333731",
                            "id": 10382,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12848:71:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16597577552685614221487285958193947469193820559219878177908093499208371_by_1",
                              "typeString": "int_const 1659...(63 digits omitted)...8371"
                            },
                            "value": "16597577552685614221487285958193947469193820559219878177908093499208371"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 10383,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10195,
                            "src": "12938:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "12848:91:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "12827:112:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10386,
                      "nodeType": "ExpressionStatement",
                      "src": "12827:112:42"
                    },
                    {
                      "expression": {
                        "id": 10389,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10387,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10182,
                          "src": "13007:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "hexValue": "363030393230313739383239373331383631373336373032373739333231363231343539353935343732323538303439303734313031353637333737383833303230303138333038",
                          "id": 10388,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13012:72:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_600920179829731861736702779321621459595472258049074101567377883020018308_by_1",
                            "typeString": "int_const 6009...(64 digits omitted)...8308"
                          },
                          "value": "600920179829731861736702779321621459595472258049074101567377883020018308"
                        },
                        "src": "13007:77:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10390,
                      "nodeType": "ExpressionStatement",
                      "src": "13007:77:42"
                    },
                    {
                      "expression": {
                        "id": 10393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 10391,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10182,
                          "src": "13149:1:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": ">>=",
                        "rightHandSide": {
                          "hexValue": "313734",
                          "id": 10392,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13155:3:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_174_by_1",
                            "typeString": "int_const 174"
                          },
                          "value": "174"
                        },
                        "src": "13149:9:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 10394,
                      "nodeType": "ExpressionStatement",
                      "src": "13149:9:42"
                    }
                  ]
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ln",
            "nameLocation": "9592:3:42",
            "parameters": {
              "id": 10180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10179,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9603:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10397,
                  "src": "9596:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10178,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9596:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9595:10:42"
            },
            "returnParameters": {
              "id": 10183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10182,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "9635:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10397,
                  "src": "9628:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10181,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9628:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9627:10:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 10460,
            "nodeType": "FunctionDefinition",
            "src": "13533:678:42",
            "nodes": [],
            "body": {
              "id": 10459,
              "nodeType": "Block",
              "src": "13744:467:42",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 10413,
                    "name": "_isAdding",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 10408,
                    "src": "13758:9:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 10457,
                    "nodeType": "Block",
                    "src": "13962:243:42",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10435,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 10433,
                            "name": "_totalWeight",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10402,
                            "src": "13980:12:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 10434,
                            "name": "_deltaWeight",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10406,
                            "src": "13996:12:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13980:28:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 10438,
                        "nodeType": "IfStatement",
                        "src": "13976:42:42",
                        "trueBody": {
                          "expression": {
                            "hexValue": "30",
                            "id": 10436,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14017:1:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "functionReturnParameters": 10412,
                          "id": 10437,
                          "nodeType": "Return",
                          "src": "14010:8:42"
                        }
                      },
                      {
                        "expression": {
                          "id": 10455,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10439,
                            "name": "average",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10411,
                            "src": "14032:7:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 10453,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 10451,
                                  "name": "_totalWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10402,
                                  "src": "14149:12:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 10452,
                                  "name": "_deltaWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10406,
                                  "src": "14164:12:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "14149:27:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 10448,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "arguments": [
                                        {
                                          "id": 10442,
                                          "name": "_average",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10400,
                                          "src": "14064:8:42",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "id": 10440,
                                          "name": "_totalWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10402,
                                          "src": "14043:12:42",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 10441,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "14056:7:42",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 9831,
                                        "src": "14043:20:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 10443,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "14043:30:42",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "arguments": [
                                        {
                                          "id": 10446,
                                          "name": "_delta",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10404,
                                          "src": "14113:6:42",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "id": 10444,
                                          "name": "_deltaWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10406,
                                          "src": "14092:12:42",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 10445,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "14105:7:42",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 9831,
                                        "src": "14092:20:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 10447,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "14092:28:42",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "14043:77:42",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 10449,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "14042:79:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10450,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "14122:5:42",
                              "memberName": "divUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9899,
                              "src": "14042:85:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10454,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14042:152:42",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14032:162:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10456,
                        "nodeType": "ExpressionStatement",
                        "src": "14032:162:42"
                      }
                    ]
                  },
                  "id": 10458,
                  "nodeType": "IfStatement",
                  "src": "13754:451:42",
                  "trueBody": {
                    "id": 10432,
                    "nodeType": "Block",
                    "src": "13769:187:42",
                    "statements": [
                      {
                        "expression": {
                          "id": 10430,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10414,
                            "name": "average",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10411,
                            "src": "13783:7:42",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 10428,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 10426,
                                  "name": "_totalWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10402,
                                  "src": "13900:12:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "id": 10427,
                                  "name": "_deltaWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10406,
                                  "src": "13915:12:42",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "13900:27:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 10423,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "arguments": [
                                        {
                                          "id": 10417,
                                          "name": "_average",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10400,
                                          "src": "13815:8:42",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "id": 10415,
                                          "name": "_totalWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10402,
                                          "src": "13794:12:42",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 10416,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13807:7:42",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 9831,
                                        "src": "13794:20:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 10418,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "13794:30:42",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "+",
                                    "rightExpression": {
                                      "arguments": [
                                        {
                                          "id": 10421,
                                          "name": "_delta",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10404,
                                          "src": "13864:6:42",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "id": 10419,
                                          "name": "_deltaWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10406,
                                          "src": "13843:12:42",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 10420,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13856:7:42",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 9831,
                                        "src": "13843:20:42",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 10422,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "13843:28:42",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "13794:77:42",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 10424,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "13793:79:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10425,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13873:5:42",
                              "memberName": "divUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9899,
                              "src": "13793:85:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10429,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13793:152:42",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13783:162:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10431,
                        "nodeType": "ExpressionStatement",
                        "src": "13783:162:42"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 10398,
              "nodeType": "StructuredDocumentation",
              "src": "13181:347:42",
              "text": "@dev Updates a weighted average by adding or removing a weighted delta.\n @param _totalWeight The total weight before the update.\n @param _deltaWeight The weight of the new value.\n @param _average The weighted average before the update.\n @param _delta The new value.\n @return average The new weighted average."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateWeightedAverage",
            "nameLocation": "13542:21:42",
            "parameters": {
              "id": 10409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10400,
                  "mutability": "mutable",
                  "name": "_average",
                  "nameLocation": "13581:8:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10460,
                  "src": "13573:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10399,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13573:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10402,
                  "mutability": "mutable",
                  "name": "_totalWeight",
                  "nameLocation": "13607:12:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10460,
                  "src": "13599:20:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10401,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13599:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10404,
                  "mutability": "mutable",
                  "name": "_delta",
                  "nameLocation": "13637:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10460,
                  "src": "13629:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10403,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13629:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10406,
                  "mutability": "mutable",
                  "name": "_deltaWeight",
                  "nameLocation": "13661:12:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10460,
                  "src": "13653:20:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10405,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13653:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10408,
                  "mutability": "mutable",
                  "name": "_isAdding",
                  "nameLocation": "13688:9:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10460,
                  "src": "13683:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10407,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "13683:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13563:140:42"
            },
            "returnParameters": {
              "id": 10412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10411,
                  "mutability": "mutable",
                  "name": "average",
                  "nameLocation": "13735:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10460,
                  "src": "13727:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10410,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13727:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13726:17:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10478,
            "nodeType": "FunctionDefinition",
            "src": "14384:104:42",
            "nodes": [],
            "body": {
              "id": 10477,
              "nodeType": "Block",
              "src": "14451:37:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 10472,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 10470,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10463,
                        "src": "14468:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 10471,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10465,
                        "src": "14472:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14468:5:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 10474,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10463,
                      "src": "14480:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "14468:13:42",
                    "trueExpression": {
                      "id": 10473,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10465,
                      "src": "14476:1:42",
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
                  "functionReturnParameters": 10469,
                  "id": 10476,
                  "nodeType": "Return",
                  "src": "14461:20:42"
                }
              ]
            },
            "documentation": {
              "id": 10461,
              "nodeType": "StructuredDocumentation",
              "src": "14217:162:42",
              "text": "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "14393:3:42",
            "parameters": {
              "id": 10466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10463,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "14405:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10478,
                  "src": "14397:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10462,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14397:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10465,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "14416:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10478,
                  "src": "14408:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10464,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14408:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14396:22:42"
            },
            "returnParameters": {
              "id": 10469,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10468,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10478,
                  "src": "14442:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10467,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14442:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14441:9:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10496,
            "nodeType": "FunctionDefinition",
            "src": "14661:104:42",
            "nodes": [],
            "body": {
              "id": 10495,
              "nodeType": "Block",
              "src": "14728:37:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 10490,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 10488,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10481,
                        "src": "14745:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 10489,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10483,
                        "src": "14749:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14745:5:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 10492,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10483,
                      "src": "14757:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "14745:13:42",
                    "trueExpression": {
                      "id": 10491,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10481,
                      "src": "14753:1:42",
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
                  "functionReturnParameters": 10487,
                  "id": 10494,
                  "nodeType": "Return",
                  "src": "14738:20:42"
                }
              ]
            },
            "documentation": {
              "id": 10479,
              "nodeType": "StructuredDocumentation",
              "src": "14494:162:42",
              "text": "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "14670:3:42",
            "parameters": {
              "id": 10484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10481,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "14682:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10496,
                  "src": "14674:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10480,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14674:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10483,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "14693:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10496,
                  "src": "14685:9:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10482,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14685:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14673:22:42"
            },
            "returnParameters": {
              "id": 10487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10486,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10496,
                  "src": "14719:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10485,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14719:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14718:9:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10514,
            "nodeType": "FunctionDefinition",
            "src": "14938:101:42",
            "nodes": [],
            "body": {
              "id": 10513,
              "nodeType": "Block",
              "src": "15002:37:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 10508,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 10506,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10499,
                        "src": "15019:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 10507,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10501,
                        "src": "15023:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "15019:5:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 10510,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10499,
                      "src": "15031:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 10511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "15019:13:42",
                    "trueExpression": {
                      "id": 10509,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10501,
                      "src": "15027:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 10505,
                  "id": 10512,
                  "nodeType": "Return",
                  "src": "15012:20:42"
                }
              ]
            },
            "documentation": {
              "id": 10497,
              "nodeType": "StructuredDocumentation",
              "src": "14771:162:42",
              "text": "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "14947:3:42",
            "parameters": {
              "id": 10502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10499,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "14958:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10514,
                  "src": "14951:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10498,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14951:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10501,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "14968:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10514,
                  "src": "14961:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10500,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14961:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14950:20:42"
            },
            "returnParameters": {
              "id": 10505,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10504,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10514,
                  "src": "14994:6:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10503,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14994:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14993:8:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10532,
            "nodeType": "FunctionDefinition",
            "src": "15212:101:42",
            "nodes": [],
            "body": {
              "id": 10531,
              "nodeType": "Block",
              "src": "15276:37:42",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 10526,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 10524,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10517,
                        "src": "15293:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 10525,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10519,
                        "src": "15297:1:42",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "15293:5:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 10528,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10519,
                      "src": "15305:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 10529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "15293:13:42",
                    "trueExpression": {
                      "id": 10527,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10517,
                      "src": "15301:1:42",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 10523,
                  "id": 10530,
                  "nodeType": "Return",
                  "src": "15286:20:42"
                }
              ]
            },
            "documentation": {
              "id": 10515,
              "nodeType": "StructuredDocumentation",
              "src": "15045:162:42",
              "text": "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "15221:3:42",
            "parameters": {
              "id": 10520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10517,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "15232:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10532,
                  "src": "15225:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10516,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15225:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10519,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "15242:1:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 10532,
                  "src": "15235:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10518,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15235:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15224:20:42"
            },
            "returnParameters": {
              "id": 10523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10522,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10532,
                  "src": "15268:6:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10521,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15268:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15267:8:42"
            },
            "scope": 10533,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "FixedPointMath",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 9789,
          "nodeType": "StructuredDocumentation",
          "src": "157:307:42",
          "text": "@author DELV\n @title FixedPointMath\n @notice A fixed-point math library.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          10533
        ],
        "name": "FixedPointMath",
        "nameLocation": "472:14:42",
        "scope": 10534,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 42
} as const;
