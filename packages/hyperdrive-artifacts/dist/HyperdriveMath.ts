export const HyperdriveMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122074c94b87339f21c678e31bb2b6b6b5d631ab1984102579878c2923e0199cb32664736f6c63430008130033",
    "sourceMap": "599:22613:52:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;599:22613:52;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122074c94b87339f21c678e31bb2b6b6b5d631ab1984102579878c2923e0199cb32664736f6c63430008130033",
    "sourceMap": "599:22613:52:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Math for the Hyperdrive pricing model.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/HyperdriveMath.sol\":\"HyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336\",\"dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247\",\"dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka\"]}},\"version\":1}",
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
        "contracts/src/libraries/HyperdriveMath.sol": "HyperdriveMath"
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
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639",
        "urls": [
          "bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d",
          "dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817",
        "urls": [
          "bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336",
          "dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4"
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
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263",
        "urls": [
          "bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247",
          "dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
    "id": 11699,
    "exportedSymbols": {
      "FixedPointMath": [
        11134
      ],
      "HyperdriveMath": [
        11698
      ],
      "IHyperdrive": [
        4675
      ],
      "ONE": [
        10389
      ],
      "SafeCast": [
        14352
      ],
      "YieldSpaceMath": [
        15104
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:23173:52",
    "nodes": [
      {
        "id": 11136,
        "nodeType": "PragmaDirective",
        "src": "40:23:52",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 11138,
        "nodeType": "ImportDirective",
        "src": "65:60:52",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 11699,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 11137,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "74:11:52",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 11141,
        "nodeType": "ImportDirective",
        "src": "126:59:52",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 11699,
        "sourceUnit": 11135,
        "symbolAliases": [
          {
            "foreign": {
              "id": 11139,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11134,
              "src": "135:14:52",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 11140,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10389,
              "src": "151:3:52",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 11143,
        "nodeType": "ImportDirective",
        "src": "186:42:52",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "./SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 11699,
        "sourceUnit": 14353,
        "symbolAliases": [
          {
            "foreign": {
              "id": 11142,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14352,
              "src": "195:8:52",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 11145,
        "nodeType": "ImportDirective",
        "src": "229:54:52",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/YieldSpaceMath.sol",
        "file": "./YieldSpaceMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 11699,
        "sourceUnit": 15105,
        "symbolAliases": [
          {
            "foreign": {
              "id": 11144,
              "name": "YieldSpaceMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 15104,
              "src": "238:14:52",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 11698,
        "nodeType": "ContractDefinition",
        "src": "599:22613:52",
        "nodes": [
          {
            "id": 11149,
            "nodeType": "UsingForDirective",
            "src": "628:33:52",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 11147,
              "name": "FixedPointMath",
              "nameLocations": [
                "634:14:52"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "634:14:52"
            },
            "typeName": {
              "id": 11148,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "653:7:52",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 11152,
            "nodeType": "UsingForDirective",
            "src": "666:32:52",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 11150,
              "name": "FixedPointMath",
              "nameLocations": [
                "672:14:52"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "672:14:52"
            },
            "typeName": {
              "id": 11151,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "691:6:52",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 11155,
            "nodeType": "UsingForDirective",
            "src": "703:27:52",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 11153,
              "name": "SafeCast",
              "nameLocations": [
                "709:8:52"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14352,
              "src": "709:8:52"
            },
            "typeName": {
              "id": 11154,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "722:7:52",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 11181,
            "nodeType": "FunctionDefinition",
            "src": "1246:449:52",
            "nodes": [],
            "body": {
              "id": 11180,
              "nodeType": "Block",
              "src": "1460:235:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 11178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11169,
                      "name": "spotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11167,
                      "src": "1563:9:52",
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
                          "id": 11176,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11164,
                          "src": "1675:12:52",
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
                          "arguments": [
                            {
                              "id": 11172,
                              "name": "_effectiveShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11158,
                              "src": "1618:23:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 11173,
                              "name": "_bondReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11160,
                              "src": "1643:13:52",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 11170,
                              "name": "_initialSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11162,
                              "src": "1575:18:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11171,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1607:10:52",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10414,
                            "src": "1575:42:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 11174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1575:82:52",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1671:3:52",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10559,
                        "src": "1575:99:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 11177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1575:113:52",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1563:125:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11179,
                  "nodeType": "ExpressionStatement",
                  "src": "1563:125:52"
                }
              ]
            },
            "documentation": {
              "id": 11156,
              "nodeType": "StructuredDocumentation",
              "src": "736:505:52",
              "text": "@dev Calculates the spot price of bonds in terms of base.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialSharePrice The initial share price.\n @param _timeStretch The time stretch parameter.\n @return spotPrice The spot price of bonds in terms of base."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotPrice",
            "nameLocation": "1255:18:52",
            "parameters": {
              "id": 11165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11158,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "1291:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11181,
                  "src": "1283:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11157,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11160,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "1332:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11181,
                  "src": "1324:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11162,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "1363:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11181,
                  "src": "1355:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11161,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1355:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11164,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "1399:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11181,
                  "src": "1391:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11163,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1391:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1273:144:52"
            },
            "returnParameters": {
              "id": 11168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11167,
                  "mutability": "mutable",
                  "name": "spotPrice",
                  "nameLocation": "1449:9:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11181,
                  "src": "1441:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11166,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1441:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1440:19:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11219,
            "nodeType": "FunctionDefinition",
            "src": "2254:774:52",
            "nodes": [],
            "body": {
              "id": 11218,
              "nodeType": "Block",
              "src": "2495:533:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    11198
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11198,
                      "mutability": "mutable",
                      "name": "spotPrice",
                      "nameLocation": "2726:9:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 11218,
                      "src": "2718:17:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11197,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2718:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11205,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 11200,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11184,
                        "src": "2770:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11201,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11186,
                        "src": "2807:13:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11202,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11188,
                        "src": "2834:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11203,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11192,
                        "src": "2866:12:52",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                      "id": 11199,
                      "name": "calculateSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11181,
                      "src": "2738:18:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 11204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2738:150:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2718:170:52"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 11213,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11190,
                            "src": "2979:17:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "333635",
                            "id": 11214,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2998:8:52",
                            "subdenomination": "days",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31536000_by_1",
                              "typeString": "int_const 31536000"
                            },
                            "value": "365"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_31536000_by_1",
                              "typeString": "int_const 31536000"
                            }
                          ],
                          "expression": {
                            "id": 11211,
                            "name": "spotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11198,
                            "src": "2960:9:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2970:8:52",
                          "memberName": "mulDivUp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10464,
                          "src": "2960:18:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 11215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2960:47:52",
                        "tryCall": false,
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
                            "id": 11208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 11206,
                              "name": "ONE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10389,
                              "src": "2918:3:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 11207,
                              "name": "spotPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11198,
                              "src": "2924:9:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2918:15:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 11209,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2917:17:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 11210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2935:7:52",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10450,
                      "src": "2917:25:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 11216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2917:104:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11196,
                  "id": 11217,
                  "nodeType": "Return",
                  "src": "2898:123:52"
                }
              ]
            },
            "documentation": {
              "id": 11182,
              "nodeType": "StructuredDocumentation",
              "src": "1701:548:52",
              "text": "@dev Calculates the spot APR of the pool.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialSharePrice The pool's initial share price.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return apr The pool's spot APR."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotAPR",
            "nameLocation": "2263:16:52",
            "parameters": {
              "id": 11193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11184,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "2297:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11219,
                  "src": "2289:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11183,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2289:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11186,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "2338:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11219,
                  "src": "2330:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11185,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2330:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11188,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "2369:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11219,
                  "src": "2361:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11187,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2361:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11190,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "2405:17:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11219,
                  "src": "2397:25:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11189,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2397:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11192,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "2440:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11219,
                  "src": "2432:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11191,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2432:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2279:179:52"
            },
            "returnParameters": {
              "id": 11196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11195,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "2490:3:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11219,
                  "src": "2482:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11194,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2482:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2481:13:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11250,
            "nodeType": "FunctionDefinition",
            "src": "3613:340:52",
            "nodes": [],
            "body": {
              "id": 11249,
              "nodeType": "Block",
              "src": "3757:196:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    11230
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11230,
                      "mutability": "mutable",
                      "name": "effectiveShareReserves",
                      "nameLocation": "3774:22:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 11249,
                      "src": "3767:29:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 11229,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3767:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11237,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 11236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 11233,
                          "name": "_shareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11222,
                          "src": "3806:14:52",
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
                        "id": 11232,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3799:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 11231,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3799:6:52",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3799:22:52",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 11235,
                      "name": "_shareAdjustment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11224,
                      "src": "3836:16:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "3799:53:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3767:85:52"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 11241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11239,
                          "name": "effectiveShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11230,
                          "src": "3870:22:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 11240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3896:1:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3870:27:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 11238,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3862:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3862:36:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11243,
                  "nodeType": "ExpressionStatement",
                  "src": "3862:36:52"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 11246,
                        "name": "effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11230,
                        "src": "3923:22:52",
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
                      "id": 11245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3915:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 11244,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3915:7:52",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 11247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3915:31:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11228,
                  "id": 11248,
                  "nodeType": "Return",
                  "src": "3908:38:52"
                }
              ]
            },
            "documentation": {
              "id": 11220,
              "nodeType": "StructuredDocumentation",
              "src": "3034:574:52",
              "text": "@dev Calculates the effective share reserves. The effective share\n      reserves are the share reserves minus the share adjustment or\n      z - zeta. We use the effective share reserves as the z-parameter\n      to the YieldSpace pricing model. The share adjustment is used to\n      hold the pricing mechanism invariant under the flat component of\n      flat+curve trades.\n @param _shareReserves The pool's share reserves.\n @param _shareAdjustment The pool's share adjustment.\n @return The effective share reserves."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateEffectiveShareReserves",
            "nameLocation": "3622:31:52",
            "parameters": {
              "id": 11225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11222,
                  "mutability": "mutable",
                  "name": "_shareReserves",
                  "nameLocation": "3671:14:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11250,
                  "src": "3663:22:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11221,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3663:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11224,
                  "mutability": "mutable",
                  "name": "_shareAdjustment",
                  "nameLocation": "3702:16:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11250,
                  "src": "3695:23:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 11223,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3695:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3653:71:52"
            },
            "returnParameters": {
              "id": 11228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11227,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11250,
                  "src": "3748:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11226,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3748:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3747:9:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11294,
            "nodeType": "FunctionDefinition",
            "src": "4948:611:52",
            "nodes": [],
            "body": {
              "id": 11293,
              "nodeType": "Block",
              "src": "5201:358:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    11267
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11267,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "5284:1:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 11293,
                      "src": "5276:9:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11266,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5276:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11272,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "333635",
                        "id": 11270,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5314:8:52",
                        "subdenomination": "days",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        },
                        "value": "365"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        }
                      ],
                      "expression": {
                        "id": 11268,
                        "name": "_positionDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11259,
                        "src": "5288:17:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 11269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5306:7:52",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10450,
                      "src": "5288:25:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 11271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5288:35:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5276:47:52"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 11288,
                                "name": "_timeStretch",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11261,
                                "src": "5524:12:52",
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
                                "id": 11286,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10389,
                                "src": "5514:3:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 11287,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5518:5:52",
                              "memberName": "divUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10500,
                              "src": "5514:9:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11289,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5514:23:52",
                            "tryCall": false,
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
                                "id": 11283,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 11278,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10389,
                                  "src": "5487:3:52",
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
                                      "id": 11281,
                                      "name": "t",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11267,
                                      "src": "5506:1:52",
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
                                      "id": 11279,
                                      "name": "_apr",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11257,
                                      "src": "5493:4:52",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 11280,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "5498:7:52",
                                    "memberName": "mulDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 10432,
                                    "src": "5493:12:52",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 11282,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5493:15:52",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "5487:21:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 11284,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "5486:23:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5510:3:52",
                          "memberName": "pow",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10559,
                          "src": "5486:27:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 11290,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5486:52:52",
                        "tryCall": false,
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
                        "arguments": [
                          {
                            "id": 11275,
                            "name": "_effectiveShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11253,
                            "src": "5436:23:52",
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
                            "id": 11273,
                            "name": "_initialSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11255,
                            "src": "5409:18:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5428:7:52",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10432,
                          "src": "5409:26:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 11276,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5409:51:52",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 11277,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5461:7:52",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10432,
                      "src": "5409:59:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 11291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5409:143:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11265,
                  "id": 11292,
                  "nodeType": "Return",
                  "src": "5390:162:52"
                }
              ]
            },
            "documentation": {
              "id": 11251,
              "nodeType": "StructuredDocumentation",
              "src": "3959:984:52",
              "text": "@dev Calculates the initial bond reserves assuming that the initial LP\n      receives LP shares amounting to c * z + y. Throughout the rest of\n      the codebase, the bond reserves used include the LP share\n      adjustment specified in YieldSpace. The bond reserves returned by\n      this function are unadjusted which makes it easier to calculate the\n      initial LP shares.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _initialSharePrice The pool's initial share price.\n @param _apr The pool's APR.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return bondReserves The bond reserves (without adjustment) that make\n         the pool have a specified APR."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateInitialBondReserves",
            "nameLocation": "4957:28:52",
            "parameters": {
              "id": 11262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11253,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "5003:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11294,
                  "src": "4995:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11252,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4995:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11255,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "5044:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11294,
                  "src": "5036:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11254,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5036:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11257,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "5080:4:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11294,
                  "src": "5072:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11256,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5072:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11259,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "5102:17:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11294,
                  "src": "5094:25:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11258,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5094:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11261,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "5137:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11294,
                  "src": "5129:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11260,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5129:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4985:170:52"
            },
            "returnParameters": {
              "id": 11265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11264,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "5187:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11294,
                  "src": "5179:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11263,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5179:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5178:22:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11345,
            "nodeType": "FunctionDefinition",
            "src": "6922:1148:52",
            "nodes": [],
            "body": {
              "id": 11344,
              "nodeType": "Block",
              "src": "7187:883:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    11313
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11313,
                      "mutability": "mutable",
                      "name": "bondFactor",
                      "nameLocation": "7493:10:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 11344,
                      "src": "7485:18:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11312,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7485:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11322,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 11320,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11305,
                        "src": "7598:11:52",
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
                        "arguments": [
                          {
                            "id": 11316,
                            "name": "_closeSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11303,
                            "src": "7542:16:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 11317,
                            "name": "_openSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11301,
                            "src": "7560:15:52",
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 11314,
                            "name": "_bondAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11297,
                            "src": "7506:11:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11315,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7531:10:52",
                          "memberName": "mulDivDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10414,
                          "src": "7506:35:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 11318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7506:70:52",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 11319,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7590:7:52",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10450,
                      "src": "7506:91:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 11321,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7506:104:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7485:125:52"
                },
                {
                  "expression": {
                    "id": 11329,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11323,
                      "name": "bondFactor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11313,
                      "src": "7817:10:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 11326,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11307,
                          "src": "7854:8:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 11327,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11305,
                          "src": "7864:11:52",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 11324,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11297,
                          "src": "7831:11:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11325,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7843:10:52",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10414,
                        "src": "7831:22:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 11328,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7831:45:52",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7817:59:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11330,
                  "nodeType": "ExpressionStatement",
                  "src": "7817:59:52"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11331,
                      "name": "bondFactor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11313,
                      "src": "7891:10:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 11332,
                      "name": "_shareAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11299,
                      "src": "7904:12:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7891:25:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11341,
                  "nodeType": "IfStatement",
                  "src": "7887:147:52",
                  "trueBody": {
                    "id": 11340,
                    "nodeType": "Block",
                    "src": "7918:116:52",
                    "statements": [
                      {
                        "expression": {
                          "id": 11338,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11334,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11310,
                            "src": "7982:13:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 11337,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 11335,
                              "name": "bondFactor",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11313,
                              "src": "7998:10:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 11336,
                              "name": "_shareAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11299,
                              "src": "8011:12:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7998:25:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7982:41:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11339,
                        "nodeType": "ExpressionStatement",
                        "src": "7982:41:52"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 11342,
                    "name": "shareProceeds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11310,
                    "src": "8050:13:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11311,
                  "id": 11343,
                  "nodeType": "Return",
                  "src": "8043:20:52"
                }
              ]
            },
            "documentation": {
              "id": 11295,
              "nodeType": "StructuredDocumentation",
              "src": "5565:1352:52",
              "text": "@dev Calculates the proceeds in shares of closing a short position. This\n      takes into account the trading profits, the interest that was\n      earned by the short, the flat fee the short pays, and the amount of\n      margin that was released by closing the short. The math for the\n      short's proceeds in base is given by:\n      proceeds = (1 + flat_fee) * dy - c * dz + (c1 - c0) * (dy / c0)\n               = (1 + flat_fee) * dy - c * dz + (c1 / c0) * dy - dy\n               = (c1 / c0 + flat_fee) * dy - c * dz\n      We convert the proceeds to shares by dividing by the current share\n      price. In the event that the interest is negative and outweighs the\n      trading profits and margin released, the short's proceeds are\n      marked to zero.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _shareAmount The amount of shares that it costs to close the\n                     short.\n @param _openSharePrice The share price at the short's open.\n @param _closeSharePrice The share price at the short's close.\n @param _sharePrice The current share price.\n @param _flatFee The flat fee currently within the pool\n @return shareProceeds The short proceeds in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateShortProceeds",
            "nameLocation": "6931:22:52",
            "parameters": {
              "id": 11308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11297,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "6971:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11345,
                  "src": "6963:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11296,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6963:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11299,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "7000:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11345,
                  "src": "6992:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6992:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11301,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "7030:15:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11345,
                  "src": "7022:23:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11300,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7022:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11303,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "7063:16:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11345,
                  "src": "7055:24:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11302,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7055:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11305,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "7097:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11345,
                  "src": "7089:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11304,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7089:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11307,
                  "mutability": "mutable",
                  "name": "_flatFee",
                  "nameLocation": "7126:8:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11345,
                  "src": "7118:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11306,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7118:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6953:187:52"
            },
            "returnParameters": {
              "id": 11311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11310,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "7172:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11345,
                  "src": "7164:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11309,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7164:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7163:23:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11381,
            "nodeType": "FunctionDefinition",
            "src": "8719:404:52",
            "nodes": [],
            "body": {
              "id": 11380,
              "nodeType": "Block",
              "src": "8885:238:52",
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
                        "id": 11377,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11362,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10389,
                          "src": "8956:3:52",
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
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 11375,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 11373,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10389,
                                "src": "9066:3:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 11374,
                                "name": "_flatFee",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11352,
                                "src": "9072:8:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "9066:14:52",
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
                              "arguments": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 11370,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "arguments": [
                                      {
                                        "id": 11367,
                                        "name": "_startingSpotPrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 11348,
                                        "src": "9008:18:52",
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
                                        "id": 11365,
                                        "name": "ONE",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10389,
                                        "src": "8998:3:52",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 11366,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "9002:5:52",
                                      "memberName": "divUp",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 10500,
                                      "src": "8998:9:52",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 11368,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "8998:29:52",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "id": 11369,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10389,
                                    "src": "9030:3:52",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "8998:35:52",
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
                                  "id": 11363,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11350,
                                  "src": "8982:9:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 11364,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "8992:5:52",
                                "memberName": "mulUp",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 10482,
                                "src": "8982:15:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 11371,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8982:52:52",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11372,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9035:5:52",
                            "memberName": "mulUp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10482,
                            "src": "8982:58:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 11376,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8982:120:52",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8956:146:52",
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
                            "id": 11359,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 11357,
                              "name": "ONE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10389,
                              "src": "8915:3:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 11358,
                              "name": "_flatFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11352,
                              "src": "8921:8:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "8915:14:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 11360,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "8914:16:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 11361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8931:7:52",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10450,
                      "src": "8914:24:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 11378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8914:202:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11356,
                  "id": 11379,
                  "nodeType": "Return",
                  "src": "8895:221:52"
                }
              ]
            },
            "documentation": {
              "id": 11346,
              "nodeType": "StructuredDocumentation",
              "src": "8076:638:52",
              "text": "@dev Since traders pay a curve fee when they open longs on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = (1 - phi_f) / (1 + phi_c * (1 / p_0 - 1) * (1 - phi_f))\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @param _flatFee The flat fee.\n @return The maximum spot price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLongMaxSpotPrice",
            "nameLocation": "8728:29:52",
            "parameters": {
              "id": 11353,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11348,
                  "mutability": "mutable",
                  "name": "_startingSpotPrice",
                  "nameLocation": "8775:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "8767:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11347,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8767:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11350,
                  "mutability": "mutable",
                  "name": "_curveFee",
                  "nameLocation": "8811:9:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "8803:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11349,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8803:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11352,
                  "mutability": "mutable",
                  "name": "_flatFee",
                  "nameLocation": "8838:8:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "8830:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11351,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8830:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8757:95:52"
            },
            "returnParameters": {
              "id": 11356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11355,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "8876:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11354,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8876:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8875:9:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11401,
            "nodeType": "FunctionDefinition",
            "src": "9702:213:52",
            "nodes": [],
            "body": {
              "id": 11400,
              "nodeType": "Block",
              "src": "9844:71:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11391,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10389,
                      "src": "9861:3:52",
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
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11394,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10389,
                            "src": "9883:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 11395,
                            "name": "_startingSpotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11384,
                            "src": "9889:18:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9883:24:52",
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
                          "id": 11392,
                          "name": "_curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11386,
                          "src": "9867:9:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9877:5:52",
                        "memberName": "mulUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10482,
                        "src": "9867:15:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 11397,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9867:41:52",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9861:47:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11390,
                  "id": 11399,
                  "nodeType": "Return",
                  "src": "9854:54:52"
                }
              ]
            },
            "documentation": {
              "id": 11382,
              "nodeType": "StructuredDocumentation",
              "src": "9129:568:52",
              "text": "@dev Since traders pay a curve fee when they close shorts on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = 1 - phi_c * (1 - p_0)\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @return The maximum spot price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseShortMaxSpotPrice",
            "nameLocation": "9711:31:52",
            "parameters": {
              "id": 11387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11384,
                  "mutability": "mutable",
                  "name": "_startingSpotPrice",
                  "nameLocation": "9760:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11401,
                  "src": "9752:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11383,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9752:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11386,
                  "mutability": "mutable",
                  "name": "_curveFee",
                  "nameLocation": "9796:9:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11401,
                  "src": "9788:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11385,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9788:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9742:69:52"
            },
            "returnParameters": {
              "id": 11390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11389,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11401,
                  "src": "9835:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9835:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9834:9:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11432,
            "nodeType": "FunctionDefinition",
            "src": "10600:872:52",
            "nodes": [],
            "body": {
              "id": 11431,
              "nodeType": "Block",
              "src": "10862:610:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 11421,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11404,
                        "src": "11057:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11422,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11406,
                        "src": "11098:13:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11423,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11408,
                        "src": "11129:12:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11426,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11424,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10389,
                          "src": "11368:3:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 11425,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11410,
                          "src": "11374:12:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "11368:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11427,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11412,
                        "src": "11404:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11428,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11414,
                        "src": "11433:18:52",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 11419,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15104,
                        "src": "10990:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$15104_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 11420,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11005:34:52",
                      "memberName": "calculateBondsOutGivenSharesInDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14450,
                      "src": "10990:49:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 11429,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10990:475:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11418,
                  "id": 11430,
                  "nodeType": "Return",
                  "src": "10971:494:52"
                }
              ]
            },
            "documentation": {
              "id": 11402,
              "nodeType": "StructuredDocumentation",
              "src": "9921:674:52",
              "text": "@dev Calculates the number of bonds a user will receive when opening a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _shareAmount The amount of shares the user is depositing.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The initial share price.\n @return bondReservesDelta The bonds paid by the reserves in the trade."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "10609:17:52",
            "parameters": {
              "id": 11415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11404,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "10644:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11432,
                  "src": "10636:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11403,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10636:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11406,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "10685:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11432,
                  "src": "10677:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11405,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10677:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11408,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "10716:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11432,
                  "src": "10708:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11407,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10708:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11410,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "10746:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11432,
                  "src": "10738:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11409,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10738:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11412,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "10776:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11432,
                  "src": "10768:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11411,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10768:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11414,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "10805:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11432,
                  "src": "10797:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11413,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10797:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10626:203:52"
            },
            "returnParameters": {
              "id": 11418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11417,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11432,
                  "src": "10853:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11416,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10853:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10852:9:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11497,
            "nodeType": "FunctionDefinition",
            "src": "12416:1866:52",
            "nodes": [],
            "body": {
              "id": 11496,
              "nodeType": "Block",
              "src": "12855:1427:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 11464,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11456,
                      "name": "shareProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11454,
                      "src": "13313:13:52",
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
                          "id": 11461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11459,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10389,
                            "src": "13363:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 11460,
                            "name": "_normalizedTimeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11441,
                            "src": "13369:24:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13363:30:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 11462,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11445,
                          "src": "13407:11:52",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 11457,
                          "name": "_amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11439,
                          "src": "13329:9:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11458,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13339:10:52",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10414,
                        "src": "13329:20:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 11463,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13329:99:52",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "13313:115:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11465,
                  "nodeType": "ExpressionStatement",
                  "src": "13313:115:52"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11468,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11466,
                      "name": "_normalizedTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11441,
                      "src": "13442:24:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 11467,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "13469:1:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "13442:28:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11495,
                  "nodeType": "IfStatement",
                  "src": "13438:838:52",
                  "trueBody": {
                    "id": 11494,
                    "nodeType": "Block",
                    "src": "13472:804:52",
                    "statements": [
                      {
                        "expression": {
                          "id": 11474,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11469,
                            "name": "bondCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11452,
                            "src": "13541:14:52",
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
                                "id": 11472,
                                "name": "_normalizedTimeRemaining",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11441,
                                "src": "13576:24:52",
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
                                "id": 11470,
                                "name": "_amountIn",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11439,
                                "src": "13558:9:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 11471,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13568:7:52",
                              "memberName": "mulDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10432,
                              "src": "13558:17:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11473,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13558:43:52",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13541:60:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11475,
                        "nodeType": "ExpressionStatement",
                        "src": "13541:60:52"
                      },
                      {
                        "expression": {
                          "id": 11488,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11476,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11450,
                            "src": "13724:15:52",
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
                                "id": 11479,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11435,
                                "src": "13809:23:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11480,
                                "name": "_bondReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11437,
                                "src": "13850:13:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11481,
                                "name": "bondCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11452,
                                "src": "13881:14:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 11484,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 11482,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10389,
                                  "src": "14122:3:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 11483,
                                  "name": "_timeStretch",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11443,
                                  "src": "14128:12:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "14122:18:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11485,
                                "name": "_sharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11445,
                                "src": "14158:11:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11486,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11447,
                                "src": "14187:18:52",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 11477,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 15104,
                                "src": "13742:14:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$15104_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 11478,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13757:34:52",
                              "memberName": "calculateSharesOutGivenBondsInDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14668,
                              "src": "13742:49:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11487,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13742:477:52",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13724:495:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11489,
                        "nodeType": "ExpressionStatement",
                        "src": "13724:495:52"
                      },
                      {
                        "expression": {
                          "id": 11492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11490,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11454,
                            "src": "14233:13:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 11491,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11450,
                            "src": "14250:15:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14233:32:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11493,
                        "nodeType": "ExpressionStatement",
                        "src": "14233:32:52"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 11433,
              "nodeType": "StructuredDocumentation",
              "src": "11478:933:52",
              "text": "@dev Calculates the amount of shares a user will receive when closing a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _amountIn The amount of bonds the user is closing.\n @param _normalizedTimeRemaining The normalized time remaining of the\n        position.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The share price when the pool was deployed.\n @return shareCurveDelta The shares paid by the reserves in the trade.\n @return bondCurveDelta The bonds paid to the reserves in the trade.\n @return shareProceeds The shares that the user will receive."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseLong",
            "nameLocation": "12425:18:52",
            "parameters": {
              "id": 11448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11435,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "12461:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12453:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11434,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12453:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11437,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "12502:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12494:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11436,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12494:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11439,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "12533:9:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12525:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11438,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12525:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11441,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "12560:24:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12552:32:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11440,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12552:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11443,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "12602:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12594:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12594:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11445,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "12632:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12624:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11444,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12624:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11447,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "12661:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12653:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11446,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12653:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12443:242:52"
            },
            "returnParameters": {
              "id": 11455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11450,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "12754:15:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12746:23:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11449,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12746:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11452,
                  "mutability": "mutable",
                  "name": "bondCurveDelta",
                  "nameLocation": "12791:14:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12783:22:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11451,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12783:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11454,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "12827:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11497,
                  "src": "12819:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11453,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12819:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12732:118:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11528,
            "nodeType": "FunctionDefinition",
            "src": "14954:846:52",
            "nodes": [],
            "body": {
              "id": 11527,
              "nodeType": "Block",
              "src": "15214:586:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 11517,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11500,
                        "src": "15388:23:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11518,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11502,
                        "src": "15429:13:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11519,
                        "name": "_amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11504,
                        "src": "15460:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11522,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11520,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10389,
                          "src": "15696:3:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 11521,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11506,
                          "src": "15702:12:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "15696:18:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11523,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11508,
                        "src": "15732:11:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11524,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11510,
                        "src": "15761:18:52",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 11515,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15104,
                        "src": "15321:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$15104_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 11516,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15336:34:52",
                      "memberName": "calculateSharesOutGivenBondsInDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14668,
                      "src": "15321:49:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 11525,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15321:472:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11514,
                  "id": 11526,
                  "nodeType": "Return",
                  "src": "15302:491:52"
                }
              ]
            },
            "documentation": {
              "id": 11498,
              "nodeType": "StructuredDocumentation",
              "src": "14288:661:52",
              "text": "@dev Calculates the amount of shares that will be received given a\n      specified amount of bonds.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountIn The amount of bonds the user is providing.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The initial share price.\n @return The shares paid by the reserves in the trade."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenShort",
            "nameLocation": "14963:18:52",
            "parameters": {
              "id": 11511,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11500,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "14999:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11528,
                  "src": "14991:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11499,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14991:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11502,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "15040:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11528,
                  "src": "15032:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11501,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15032:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11504,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "15071:9:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11528,
                  "src": "15063:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11503,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15063:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11506,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "15098:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11528,
                  "src": "15090:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15090:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11508,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "15128:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11528,
                  "src": "15120:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15120:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11510,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "15157:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11528,
                  "src": "15149:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11509,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15149:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14981:200:52"
            },
            "returnParameters": {
              "id": 11514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11513,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11528,
                  "src": "15205:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11512,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15205:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15204:9:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11593,
            "nodeType": "FunctionDefinition",
            "src": "16736:1908:52",
            "nodes": [],
            "body": {
              "id": 11592,
              "nodeType": "Block",
              "src": "17176:1468:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 11560,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11552,
                      "name": "sharePayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11550,
                      "src": "17740:12:52",
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
                          "id": 11557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11555,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10389,
                            "src": "17790:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 11556,
                            "name": "_normalizedTimeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11537,
                            "src": "17796:24:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "17790:30:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 11558,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11541,
                          "src": "17834:11:52",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 11553,
                          "name": "_amountOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11535,
                          "src": "17755:10:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11554,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17766:10:52",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10414,
                        "src": "17755:21:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 11559,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17755:100:52",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17740:115:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11561,
                  "nodeType": "ExpressionStatement",
                  "src": "17740:115:52"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11562,
                      "name": "_normalizedTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11537,
                      "src": "17869:24:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 11563,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "17896:1:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "17869:28:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11591,
                  "nodeType": "IfStatement",
                  "src": "17865:773:52",
                  "trueBody": {
                    "id": 11590,
                    "nodeType": "Block",
                    "src": "17899:739:52",
                    "statements": [
                      {
                        "expression": {
                          "id": 11570,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11565,
                            "name": "bondCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11548,
                            "src": "17913:14:52",
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
                                "id": 11568,
                                "name": "_normalizedTimeRemaining",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11537,
                                "src": "17949:24:52",
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
                                "id": 11566,
                                "name": "_amountOut",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11535,
                                "src": "17930:10:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 11567,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "17941:7:52",
                              "memberName": "mulDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10432,
                              "src": "17930:18:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11569,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "17930:44:52",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "17913:61:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11571,
                        "nodeType": "ExpressionStatement",
                        "src": "17913:61:52"
                      },
                      {
                        "expression": {
                          "id": 11584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11572,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11546,
                            "src": "18089:15:52",
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
                                "id": 11575,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11531,
                                "src": "18172:23:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11576,
                                "name": "_bondReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11533,
                                "src": "18213:13:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11577,
                                "name": "bondCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11548,
                                "src": "18244:14:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 11580,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 11578,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10389,
                                  "src": "18485:3:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 11579,
                                  "name": "_timeStretch",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11539,
                                  "src": "18491:12:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "18485:18:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11581,
                                "name": "_sharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11541,
                                "src": "18521:11:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11582,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11543,
                                "src": "18550:18:52",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 11573,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 15104,
                                "src": "18107:14:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$15104_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 11574,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "18122:32:52",
                              "memberName": "calculateSharesInGivenBondsOutUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14537,
                              "src": "18107:47:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11583,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "18107:475:52",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "18089:493:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11585,
                        "nodeType": "ExpressionStatement",
                        "src": "18089:493:52"
                      },
                      {
                        "expression": {
                          "id": 11588,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11586,
                            "name": "sharePayment",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11550,
                            "src": "18596:12:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 11587,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11546,
                            "src": "18612:15:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "18596:31:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11589,
                        "nodeType": "ExpressionStatement",
                        "src": "18596:31:52"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 11529,
              "nodeType": "StructuredDocumentation",
              "src": "15806:925:52",
              "text": "@dev Calculates the amount of base that a user will receive when closing\n      a short position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountOut The amount of the asset that is received.\n @param _normalizedTimeRemaining The amount of time remaining until\n        maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The initial share price.\n @return shareCurveDelta The shares paid to the reserves in the trade.\n @return bondCurveDelta The bonds paid by the reserves in the trade.\n @return sharePayment The shares that the user must pay."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseShort",
            "nameLocation": "16745:19:52",
            "parameters": {
              "id": 11544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11531,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "16782:23:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "16774:31:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11530,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16774:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11533,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "16823:13:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "16815:21:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11532,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16815:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11535,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "16854:10:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "16846:18:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11534,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16846:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11537,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "16882:24:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "16874:32:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11536,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16874:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11539,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "16924:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "16916:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16916:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11541,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "16954:11:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "16946:19:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11540,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16946:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11543,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "16983:18:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "16975:26:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11542,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16975:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16764:243:52"
            },
            "returnParameters": {
              "id": 11551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11546,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "17076:15:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "17068:23:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11545,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17068:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11548,
                  "mutability": "mutable",
                  "name": "bondCurveDelta",
                  "nameLocation": "17113:14:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "17105:22:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11547,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17105:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11550,
                  "mutability": "mutable",
                  "name": "sharePayment",
                  "nameLocation": "17149:12:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11593,
                  "src": "17141:20:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17141:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17054:117:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11697,
            "nodeType": "FunctionDefinition",
            "src": "20493:2717:52",
            "nodes": [],
            "body": {
              "id": 11696,
              "nodeType": "Block",
              "src": "20837:2373:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    11622
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11622,
                      "mutability": "mutable",
                      "name": "shareAdjustmentDelta",
                      "nameLocation": "21769:20:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 11696,
                      "src": "21762:27:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 11621,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "21762:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11623,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "21762:27:52"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11624,
                      "name": "_closeSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11606,
                      "src": "21803:16:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 11625,
                      "name": "_openSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11604,
                      "src": "21822:15:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "21803:34:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 11687,
                    "nodeType": "Block",
                    "src": "22884:134:52",
                    "statements": [
                      {
                        "expression": {
                          "id": 11685,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11675,
                            "name": "shareAdjustmentDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11622,
                            "src": "22898:20:52",
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
                            "id": 11684,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 11678,
                                  "name": "_shareReservesDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11598,
                                  "src": "22944:19:52",
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
                                "id": 11677,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "22937:6:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 11676,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "22937:6:52",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 11679,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "22937:27:52",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 11682,
                                  "name": "_shareCurveDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11600,
                                  "src": "22990:16:52",
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
                                "id": 11681,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "22983:6:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 11680,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "22983:6:52",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 11683,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "22983:24:52",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "22937:70:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "22898:109:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 11686,
                        "nodeType": "ExpressionStatement",
                        "src": "22898:109:52"
                      }
                    ]
                  },
                  "id": 11688,
                  "nodeType": "IfStatement",
                  "src": "21799:1219:52",
                  "trueBody": {
                    "id": 11674,
                    "nodeType": "Block",
                    "src": "21839:1039:52",
                    "statements": [
                      {
                        "condition": {
                          "id": 11627,
                          "name": "_isLong",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11608,
                          "src": "22038:7:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 11637,
                        "nodeType": "IfStatement",
                        "src": "22034:181:52",
                        "trueBody": {
                          "id": 11636,
                          "nodeType": "Block",
                          "src": "22047:168:52",
                          "statements": [
                            {
                              "expression": {
                                "id": 11634,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 11628,
                                  "name": "_shareProceeds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11596,
                                  "src": "22065:14:52",
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
                                      "id": 11631,
                                      "name": "_closeSharePrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11606,
                                      "src": "22129:16:52",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "id": 11632,
                                      "name": "_openSharePrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11604,
                                      "src": "22167:15:52",
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
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "id": 11629,
                                      "name": "_shareProceeds",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11596,
                                      "src": "22082:14:52",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 11630,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "22097:10:52",
                                    "memberName": "mulDivDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 10414,
                                    "src": "22082:25:52",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 11633,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "22082:118:52",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "22065:135:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 11635,
                              "nodeType": "ExpressionStatement",
                              "src": "22065:135:52"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 11644,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11638,
                            "name": "_shareReservesDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11598,
                            "src": "22268:19:52",
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
                                "id": 11641,
                                "name": "_closeSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11606,
                                "src": "22338:16:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11642,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11604,
                                "src": "22372:15:52",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 11639,
                                "name": "_shareReservesDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11598,
                                "src": "22290:19:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 11640,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "22310:10:52",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10414,
                              "src": "22290:30:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11643,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "22290:111:52",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "22268:133:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11645,
                        "nodeType": "ExpressionStatement",
                        "src": "22268:133:52"
                      },
                      {
                        "expression": {
                          "id": 11656,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11646,
                            "name": "shareAdjustmentDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11622,
                            "src": "22470:20:52",
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
                            "id": 11655,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 11649,
                                  "name": "_shareReservesDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11598,
                                  "src": "22516:19:52",
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
                                "id": 11648,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "22509:6:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 11647,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "22509:6:52",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 11650,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "22509:27:52",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 11653,
                                  "name": "_shareCurveDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11600,
                                  "src": "22562:16:52",
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
                                "id": 11652,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "22555:6:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 11651,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "22555:6:52",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 11654,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "22555:24:52",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "22509:70:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "22470:109:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 11657,
                        "nodeType": "ExpressionStatement",
                        "src": "22470:109:52"
                      },
                      {
                        "expression": {
                          "id": 11664,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11658,
                            "name": "_shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11600,
                            "src": "22593:16:52",
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
                                "id": 11661,
                                "name": "_closeSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11606,
                                "src": "22657:16:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11662,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11604,
                                "src": "22691:15:52",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 11659,
                                "name": "_shareCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11600,
                                "src": "22612:16:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 11660,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "22629:10:52",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10414,
                              "src": "22612:27:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "22612:108:52",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "22593:127:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11665,
                        "nodeType": "ExpressionStatement",
                        "src": "22593:127:52"
                      },
                      {
                        "expression": {
                          "id": 11672,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11666,
                            "name": "_totalGovernanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11602,
                            "src": "22734:19:52",
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
                                "id": 11669,
                                "name": "_closeSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11606,
                                "src": "22804:16:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 11670,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11604,
                                "src": "22838:15:52",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 11667,
                                "name": "_totalGovernanceFee",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11602,
                                "src": "22756:19:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 11668,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "22776:10:52",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10414,
                              "src": "22756:30:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11671,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "22756:111:52",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "22734:133:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11673,
                        "nodeType": "ExpressionStatement",
                        "src": "22734:133:52"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 11689,
                        "name": "_shareProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11596,
                        "src": "23049:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11690,
                        "name": "_shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11598,
                        "src": "23077:19:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11691,
                        "name": "_shareCurveDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11600,
                        "src": "23110:16:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11692,
                        "name": "shareAdjustmentDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11622,
                        "src": "23140:20:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 11693,
                        "name": "_totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11602,
                        "src": "23174:19:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 11694,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "23035:168:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                    }
                  },
                  "functionReturnParameters": 11620,
                  "id": 11695,
                  "nodeType": "Return",
                  "src": "23028:175:52"
                }
              ]
            },
            "documentation": {
              "id": 11594,
              "nodeType": "StructuredDocumentation",
              "src": "18650:1838:52",
              "text": "@dev If negative interest accrued over the term, we scale the share\n      proceeds by the negative interest amount. Shorts should be\n      responsible for negative interest, but negative interest can exceed\n      the margin that shorts provide. This leaves us with no choice but\n      to attribute the negative interest to longs. Along with scaling the\n      share proceeds, we also scale the fee amounts.\n      In order for our AMM invariant to be maintained, the effective\n      share reserves need to be adjusted by the same amount as the share\n      reserves delta calculated with YieldSpace including fees. We reduce\n      the share reserves by `min(c_1 / c_0, 1) * shareReservesDelta` and\n      the share adjustment by the `shareAdjustmentDelta`. We can solve\n      these equations simultaneously to find the share adjustment delta\n      as:\n      shareAdjustmentDelta = min(c_1 / c_0, 1) * sharePayment -\n                             shareReservesDelta\n @param _shareProceeds The proceeds in shares from the trade.\n @param _shareReservesDelta The change in share reserves from the trade.\n @param _shareCurveDelta The curve portion of the change in share reserves.\n @param _totalGovernanceFee The total governance fee.\n @param _openSharePrice The share price at the beginning of the term.\n @param _closeSharePrice The share price at the end of the term.\n @param _isLong A flag indicating whether or not the trade is a long.\n @return The adjusted share proceeds.\n @return The adjusted share reserves delta.\n @return The adjusted share close proceeds.\n @return The share adjustment delta.\n @return The adjusted total governance fee."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateNegativeInterestOnClose",
            "nameLocation": "20502:32:52",
            "parameters": {
              "id": 11609,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11596,
                  "mutability": "mutable",
                  "name": "_shareProceeds",
                  "nameLocation": "20552:14:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20544:22:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20544:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11598,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "20584:19:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20576:27:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11597,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20576:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11600,
                  "mutability": "mutable",
                  "name": "_shareCurveDelta",
                  "nameLocation": "20621:16:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20613:24:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11599,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20613:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11602,
                  "mutability": "mutable",
                  "name": "_totalGovernanceFee",
                  "nameLocation": "20655:19:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20647:27:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11601,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20647:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11604,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "20692:15:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20684:23:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11603,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20684:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11606,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "20725:16:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20717:24:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11605,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20717:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11608,
                  "mutability": "mutable",
                  "name": "_isLong",
                  "nameLocation": "20756:7:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20751:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11607,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "20751:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20534:235:52"
            },
            "returnParameters": {
              "id": 11620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11611,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20793:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11610,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20793:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11613,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20802:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11612,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20802:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11615,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20811:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11614,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20811:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11617,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20820:6:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 11616,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20820:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11619,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11697,
                  "src": "20828:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11618,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20828:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20792:44:52"
            },
            "scope": 11698,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "HyperdriveMath",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 11146,
          "nodeType": "StructuredDocumentation",
          "src": "285:314:52",
          "text": "@author DELV\n @title Hyperdrive\n @notice Math for the Hyperdrive pricing model.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          11698
        ],
        "name": "HyperdriveMath",
        "nameLocation": "607:14:52",
        "scope": 11699,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 52
} as const;
