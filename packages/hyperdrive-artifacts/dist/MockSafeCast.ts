export const MockSafeCast = 
{
  "abi": [
    {
      "inputs": [],
      "name": "UnsafeCastToUint128",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "toUint128",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "y",
          "type": "uint128"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b5060e78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063809fdd3314602d575b600080fd5b603c60383660046099565b6061565b6040516fffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6000606a826070565b92915050565b6000600160801b8210609557604051630f0af95160e11b815260040160405180910390fd5b5090565b60006020828403121560aa57600080fd5b503591905056fea26469706673582212206c684c9bca7075cd6596cf666e47c6955c6cbf44133a5b07ee4c3d3e1e7e7dd764736f6c63430008130033",
    "sourceMap": "106:136:71:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c8063809fdd3314602d575b600080fd5b603c60383660046099565b6061565b6040516fffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6000606a826070565b92915050565b6000600160801b8210609557604051630f0af95160e11b815260040160405180910390fd5b5090565b60006020828403121560aa57600080fd5b503591905056fea26469706673582212206c684c9bca7075cd6596cf666e47c6955c6cbf44133a5b07ee4c3d3e1e7e7dd764736f6c63430008130033",
    "sourceMap": "106:136:71:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;134:106;;;;;;:::i;:::-;;:::i;:::-;;;375:34:161;363:47;;;345:66;;333:2;318:18;134:106:71;;;;;;;;187:9;212:21;231:1;212:18;:21::i;:::-;208:25;134:106;-1:-1:-1;;134:106:71:o;640:190:54:-;693:9;-1:-1:-1;;;720:1:54;:12;714:86;;756:33;;-1:-1:-1;;;756:33:54;;;;;;;;;;;714:86;-1:-1:-1;821:1:54;640:190::o;14:180:161:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:161;;14:180;-1:-1:-1;14:180:161:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "toUint128(uint256)": "809fdd33"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toUint128\",\"outputs\":[{\"internalType\":\"uint128\",\"name\":\"y\",\"type\":\"uint128\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"UnsafeCastToUint128()\":[{\"notice\":\"################ ### SafeCast ### ################\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockSafeCast.sol\":\"MockSafeCast\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/test/MockSafeCast.sol\":{\"keccak256\":\"0x903bdd450676823155f3e633ce5a62f09d7727048840ca126207bf03ac8edac1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://786983195b672efd947907485a8f9a6cf49bbd4d49edb48dede9974cafd180ef\",\"dweb:/ipfs/Qmf8cQgBxfPMPcicRa69H82XjvHtJHMo6TPtTqNNF6yS26\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToUint128"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toUint128",
          "outputs": [
            {
              "internalType": "uint128",
              "name": "y",
              "type": "uint128"
            }
          ]
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
        "contracts/test/MockSafeCast.sol": "MockSafeCast"
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
        "keccak256": "0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787",
        "urls": [
          "bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8",
          "dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw"
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
        "keccak256": "0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b",
        "urls": [
          "bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17",
          "dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc"
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
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockSafeCast.sol": {
        "keccak256": "0x903bdd450676823155f3e633ce5a62f09d7727048840ca126207bf03ac8edac1",
        "urls": [
          "bzz-raw://786983195b672efd947907485a8f9a6cf49bbd4d49edb48dede9974cafd180ef",
          "dweb:/ipfs/Qmf8cQgBxfPMPcicRa69H82XjvHtJHMo6TPtTqNNF6yS26"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockSafeCast.sol",
    "id": 19047,
    "exportedSymbols": {
      "IHyperdrive": [
        4675
      ],
      "MockSafeCast": [
        19046
      ],
      "SafeCast": [
        14352
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:204:71",
    "nodes": [
      {
        "id": 19029,
        "nodeType": "PragmaDirective",
        "src": "39:24:71",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".18"
        ]
      },
      {
        "id": 19030,
        "nodeType": "ImportDirective",
        "src": "65:39:71",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "../src/libraries/SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 19047,
        "sourceUnit": 14353,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 19046,
        "nodeType": "ContractDefinition",
        "src": "106:136:71",
        "nodes": [
          {
            "id": 19045,
            "nodeType": "FunctionDefinition",
            "src": "134:106:71",
            "nodes": [],
            "body": {
              "id": 19044,
              "nodeType": "Block",
              "src": "198:42:71",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 19042,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 19037,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19035,
                      "src": "208:1:71",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 19040,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19032,
                          "src": "231:1:71",
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
                          "id": 19038,
                          "name": "SafeCast",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14352,
                          "src": "212:8:71",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_SafeCast_$14352_$",
                            "typeString": "type(library SafeCast)"
                          }
                        },
                        "id": 19039,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "221:9:71",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 14311,
                        "src": "212:18:71",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 19041,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "212:21:71",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "208:25:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 19043,
                  "nodeType": "ExpressionStatement",
                  "src": "208:25:71"
                }
              ]
            },
            "functionSelector": "809fdd33",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint128",
            "nameLocation": "143:9:71",
            "parameters": {
              "id": 19033,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19032,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "161:1:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 19045,
                  "src": "153:9:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19031,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "152:11:71"
            },
            "returnParameters": {
              "id": 19036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19035,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "195:1:71",
                  "nodeType": "VariableDeclaration",
                  "scope": 19045,
                  "src": "187:9:71",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 19034,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:71",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "186:11:71"
            },
            "scope": 19046,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "MockSafeCast",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          19046
        ],
        "name": "MockSafeCast",
        "nameLocation": "115:12:71",
        "scope": 19047,
        "usedErrors": [
          4661
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 71
} as const;
