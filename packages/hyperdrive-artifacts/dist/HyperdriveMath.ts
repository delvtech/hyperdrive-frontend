export const HyperdriveMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a36a2e42544f4d3cde05dccad38785a326b34351f8010e76423b6875601681b064736f6c63430008130033",
    "sourceMap": "599:28551:43:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;599:28551:43;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a36a2e42544f4d3cde05dccad38785a326b34351f8010e76423b6875601681b064736f6c63430008130033",
    "sourceMap": "599:28551:43:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Math for the Hyperdrive pricing model.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/HyperdriveMath.sol\":\"HyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]}},\"version\":1}",
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
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3",
        "urls": [
          "bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62",
          "dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx"
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
        "keccak256": "0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db",
        "urls": [
          "bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a",
          "dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
    "id": 11353,
    "exportedSymbols": {
      "FixedPointMath": [
        10533
      ],
      "HyperdriveMath": [
        11352
      ],
      "IHyperdrive": [
        3759
      ],
      "ONE": [
        9788
      ],
      "SafeCast": [
        11428
      ],
      "YieldSpaceMath": [
        12066
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:29111:43",
    "nodes": [
      {
        "id": 10535,
        "nodeType": "PragmaDirective",
        "src": "40:23:43",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 10537,
        "nodeType": "ImportDirective",
        "src": "65:60:43",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 11353,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 10536,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "74:11:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 10540,
        "nodeType": "ImportDirective",
        "src": "126:59:43",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 11353,
        "sourceUnit": 10534,
        "symbolAliases": [
          {
            "foreign": {
              "id": 10538,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10533,
              "src": "135:14:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 10539,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9788,
              "src": "151:3:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 10542,
        "nodeType": "ImportDirective",
        "src": "186:54:43",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/YieldSpaceMath.sol",
        "file": "./YieldSpaceMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 11353,
        "sourceUnit": 12067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 10541,
              "name": "YieldSpaceMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 12066,
              "src": "195:14:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 10544,
        "nodeType": "ImportDirective",
        "src": "241:42:43",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "./SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 11353,
        "sourceUnit": 11429,
        "symbolAliases": [
          {
            "foreign": {
              "id": 10543,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11428,
              "src": "250:8:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 11352,
        "nodeType": "ContractDefinition",
        "src": "599:28551:43",
        "nodes": [
          {
            "id": 10548,
            "nodeType": "UsingForDirective",
            "src": "628:33:43",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 10546,
              "name": "FixedPointMath",
              "nameLocations": [
                "634:14:43"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "634:14:43"
            },
            "typeName": {
              "id": 10547,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "653:7:43",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 10551,
            "nodeType": "UsingForDirective",
            "src": "666:32:43",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 10549,
              "name": "FixedPointMath",
              "nameLocations": [
                "672:14:43"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "672:14:43"
            },
            "typeName": {
              "id": 10550,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "691:6:43",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 10554,
            "nodeType": "UsingForDirective",
            "src": "703:27:43",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 10552,
              "name": "SafeCast",
              "nameLocations": [
                "709:8:43"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11428,
              "src": "709:8:43"
            },
            "typeName": {
              "id": 10553,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "722:7:43",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 10580,
            "nodeType": "FunctionDefinition",
            "src": "1246:449:43",
            "nodes": [],
            "body": {
              "id": 10579,
              "nodeType": "Block",
              "src": "1460:235:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 10577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10568,
                      "name": "spotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10566,
                      "src": "1563:9:43",
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
                          "id": 10575,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10563,
                          "src": "1675:12:43",
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
                              "id": 10571,
                              "name": "_effectiveShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10557,
                              "src": "1618:23:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 10572,
                              "name": "_bondReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10559,
                              "src": "1643:13:43",
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
                              "id": 10569,
                              "name": "_initialSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10561,
                              "src": "1575:18:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10570,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1607:10:43",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9813,
                            "src": "1575:42:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10573,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1575:82:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10574,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1671:3:43",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9958,
                        "src": "1575:99:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10576,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1575:113:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1563:125:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10578,
                  "nodeType": "ExpressionStatement",
                  "src": "1563:125:43"
                }
              ]
            },
            "documentation": {
              "id": 10555,
              "nodeType": "StructuredDocumentation",
              "src": "736:505:43",
              "text": "@dev Calculates the spot price of bonds in terms of base.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialSharePrice The initial share price.\n @param _timeStretch The time stretch parameter.\n @return spotPrice The spot price of bonds in terms of base."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotPrice",
            "nameLocation": "1255:18:43",
            "parameters": {
              "id": 10564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10557,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "1291:23:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1283:31:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10556,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10559,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "1332:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1324:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10558,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10561,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "1363:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1355:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10560,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1355:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10563,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "1399:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1391:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1391:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1273:144:43"
            },
            "returnParameters": {
              "id": 10567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10566,
                  "mutability": "mutable",
                  "name": "spotPrice",
                  "nameLocation": "1449:9:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1441:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10565,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1441:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1440:19:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10618,
            "nodeType": "FunctionDefinition",
            "src": "2254:774:43",
            "nodes": [],
            "body": {
              "id": 10617,
              "nodeType": "Block",
              "src": "2495:533:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    10597
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10597,
                      "mutability": "mutable",
                      "name": "spotPrice",
                      "nameLocation": "2726:9:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 10617,
                      "src": "2718:17:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10596,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2718:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10604,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 10599,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10583,
                        "src": "2770:23:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10600,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10585,
                        "src": "2807:13:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10601,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10587,
                        "src": "2834:18:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10602,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10591,
                        "src": "2866:12:43",
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
                      "id": 10598,
                      "name": "calculateSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10580,
                      "src": "2738:18:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10603,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2738:150:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2718:170:43"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 10612,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10589,
                            "src": "2979:17:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "333635",
                            "id": 10613,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2998:8:43",
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
                            "id": 10610,
                            "name": "spotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10597,
                            "src": "2960:9:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 10611,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2970:8:43",
                          "memberName": "mulDivUp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9863,
                          "src": "2960:18:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 10614,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2960:47:43",
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
                            "id": 10607,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 10605,
                              "name": "ONE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9788,
                              "src": "2918:3:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 10606,
                              "name": "spotPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10597,
                              "src": "2924:9:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2918:15:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 10608,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2917:17:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10609,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2935:7:43",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9849,
                      "src": "2917:25:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10615,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2917:104:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10595,
                  "id": 10616,
                  "nodeType": "Return",
                  "src": "2898:123:43"
                }
              ]
            },
            "documentation": {
              "id": 10581,
              "nodeType": "StructuredDocumentation",
              "src": "1701:548:43",
              "text": "@dev Calculates the spot APR of the pool.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialSharePrice The pool's initial share price.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return apr The pool's spot APR."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotAPR",
            "nameLocation": "2263:16:43",
            "parameters": {
              "id": 10592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10583,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "2297:23:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10618,
                  "src": "2289:31:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10582,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2289:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10585,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "2338:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10618,
                  "src": "2330:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10584,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2330:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10587,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "2369:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10618,
                  "src": "2361:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10586,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2361:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10589,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "2405:17:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10618,
                  "src": "2397:25:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10588,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2397:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10591,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "2440:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10618,
                  "src": "2432:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10590,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2432:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2279:179:43"
            },
            "returnParameters": {
              "id": 10595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10594,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "2490:3:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10618,
                  "src": "2482:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10593,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2482:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2481:13:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10662,
            "nodeType": "FunctionDefinition",
            "src": "4023:611:43",
            "nodes": [],
            "body": {
              "id": 10661,
              "nodeType": "Block",
              "src": "4276:358:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    10635
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10635,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "4359:1:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 10661,
                      "src": "4351:9:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10634,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4351:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10640,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "333635",
                        "id": 10638,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4389:8:43",
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
                        "id": 10636,
                        "name": "_positionDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10627,
                        "src": "4363:17:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10637,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4381:7:43",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9849,
                      "src": "4363:25:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10639,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4363:35:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4351:47:43"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 10656,
                                "name": "_timeStretch",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10629,
                                "src": "4599:12:43",
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
                                "id": 10654,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9788,
                                "src": "4589:3:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10655,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4593:5:43",
                              "memberName": "divUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9899,
                              "src": "4589:9:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10657,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4589:23:43",
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
                                "id": 10651,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 10646,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9788,
                                  "src": "4562:3:43",
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
                                      "id": 10649,
                                      "name": "t",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10635,
                                      "src": "4581:1:43",
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
                                      "id": 10647,
                                      "name": "_apr",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10625,
                                      "src": "4568:4:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 10648,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "4573:7:43",
                                    "memberName": "mulDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 9831,
                                    "src": "4568:12:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 10650,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4568:15:43",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "4562:21:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 10652,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "4561:23:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 10653,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4585:3:43",
                          "memberName": "pow",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9958,
                          "src": "4561:27:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 10658,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4561:52:43",
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
                            "id": 10643,
                            "name": "_effectiveShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10621,
                            "src": "4511:23:43",
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
                            "id": 10641,
                            "name": "_initialSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10623,
                            "src": "4484:18:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 10642,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4503:7:43",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9831,
                          "src": "4484:26:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 10644,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4484:51:43",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10645,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4536:7:43",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9831,
                      "src": "4484:59:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10659,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4484:143:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10633,
                  "id": 10660,
                  "nodeType": "Return",
                  "src": "4465:162:43"
                }
              ]
            },
            "documentation": {
              "id": 10619,
              "nodeType": "StructuredDocumentation",
              "src": "3034:984:43",
              "text": "@dev Calculates the initial bond reserves assuming that the initial LP\n      receives LP shares amounting to c * z + y. Throughout the rest of\n      the codebase, the bond reserves used include the LP share\n      adjustment specified in YieldSpace. The bond reserves returned by\n      this function are unadjusted which makes it easier to calculate the\n      initial LP shares.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _initialSharePrice The pool's initial share price.\n @param _apr The pool's APR.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return bondReserves The bond reserves (without adjustment) that make\n         the pool have a specified APR."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateInitialBondReserves",
            "nameLocation": "4032:28:43",
            "parameters": {
              "id": 10630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10621,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "4078:23:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10662,
                  "src": "4070:31:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10620,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4070:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10623,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "4119:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10662,
                  "src": "4111:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10622,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4111:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10625,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "4155:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10662,
                  "src": "4147:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10624,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4147:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10627,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "4177:17:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10662,
                  "src": "4169:25:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10626,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4169:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10629,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "4212:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10662,
                  "src": "4204:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10628,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4204:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4060:170:43"
            },
            "returnParameters": {
              "id": 10633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10632,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "4262:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10662,
                  "src": "4254:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10631,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4254:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4253:22:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10688,
            "nodeType": "FunctionDefinition",
            "src": "5221:277:43",
            "nodes": [],
            "body": {
              "id": 10687,
              "nodeType": "Block",
              "src": "5361:137:43",
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
                        "id": 10684,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10674,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9788,
                          "src": "5419:3:43",
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
                              "id": 10682,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "id": 10679,
                                    "name": "_startingSpotPrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10665,
                                    "src": "5451:18:43",
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
                                    "id": 10677,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9788,
                                    "src": "5441:3:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 10678,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5445:5:43",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9899,
                                  "src": "5441:9:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 10680,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5441:29:43",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 10681,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9788,
                                "src": "5473:3:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "5441:35:43",
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
                              "id": 10675,
                              "name": "_curveFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10667,
                              "src": "5425:9:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10676,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5435:5:43",
                            "memberName": "mulUp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9881,
                            "src": "5425:15:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10683,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5425:52:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5419:58:43",
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
                        "id": 10672,
                        "name": "ONE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9788,
                        "src": "5390:3:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10673,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5394:7:43",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9849,
                      "src": "5390:11:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5390:101:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10671,
                  "id": 10686,
                  "nodeType": "Return",
                  "src": "5371:120:43"
                }
              ]
            },
            "documentation": {
              "id": 10663,
              "nodeType": "StructuredDocumentation",
              "src": "4640:576:43",
              "text": "@dev Since traders pay a curve fee when they open longs on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = 1 / (1 + phi_c * (1 / p_0 - 1))\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @return The maximum spot price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLongMaxSpotPrice",
            "nameLocation": "5230:29:43",
            "parameters": {
              "id": 10668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10665,
                  "mutability": "mutable",
                  "name": "_startingSpotPrice",
                  "nameLocation": "5277:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10688,
                  "src": "5269:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10664,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5269:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10667,
                  "mutability": "mutable",
                  "name": "_curveFee",
                  "nameLocation": "5313:9:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10688,
                  "src": "5305:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10666,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5305:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5259:69:43"
            },
            "returnParameters": {
              "id": 10671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10670,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10688,
                  "src": "5352:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10669,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5352:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5351:9:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10708,
            "nodeType": "FunctionDefinition",
            "src": "6077:213:43",
            "nodes": [],
            "body": {
              "id": 10707,
              "nodeType": "Block",
              "src": "6219:71:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 10698,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9788,
                      "src": "6236:3:43",
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
                          "id": 10703,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 10701,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9788,
                            "src": "6258:3:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 10702,
                            "name": "_startingSpotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10691,
                            "src": "6264:18:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6258:24:43",
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
                          "id": 10699,
                          "name": "_curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10693,
                          "src": "6242:9:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10700,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6252:5:43",
                        "memberName": "mulUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9881,
                        "src": "6242:15:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10704,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6242:41:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6236:47:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10697,
                  "id": 10706,
                  "nodeType": "Return",
                  "src": "6229:54:43"
                }
              ]
            },
            "documentation": {
              "id": 10689,
              "nodeType": "StructuredDocumentation",
              "src": "5504:568:43",
              "text": "@dev Since traders pay a curve fee when they close shorts on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = 1 - phi_c * (1 - p_0)\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @return The maximum spot price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseShortMaxSpotPrice",
            "nameLocation": "6086:31:43",
            "parameters": {
              "id": 10694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10691,
                  "mutability": "mutable",
                  "name": "_startingSpotPrice",
                  "nameLocation": "6135:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10708,
                  "src": "6127:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6127:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10693,
                  "mutability": "mutable",
                  "name": "_curveFee",
                  "nameLocation": "6171:9:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10708,
                  "src": "6163:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10692,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6163:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6117:69:43"
            },
            "returnParameters": {
              "id": 10697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10696,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10708,
                  "src": "6210:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10695,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6210:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6209:9:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10739,
            "nodeType": "FunctionDefinition",
            "src": "6975:872:43",
            "nodes": [],
            "body": {
              "id": 10738,
              "nodeType": "Block",
              "src": "7237:610:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 10728,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10711,
                        "src": "7432:23:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10729,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10713,
                        "src": "7473:13:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10730,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10715,
                        "src": "7504:12:43",
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
                        "id": 10733,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10731,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9788,
                          "src": "7743:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 10732,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10717,
                          "src": "7749:12:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7743:18:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10734,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10719,
                        "src": "7779:11:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10735,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10721,
                        "src": "7808:18:43",
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
                        "id": 10726,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12066,
                        "src": "7365:14:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$12066_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 10727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7380:34:43",
                      "memberName": "calculateBondsOutGivenSharesInDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11526,
                      "src": "7365:49:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10736,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7365:475:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10725,
                  "id": 10737,
                  "nodeType": "Return",
                  "src": "7346:494:43"
                }
              ]
            },
            "documentation": {
              "id": 10709,
              "nodeType": "StructuredDocumentation",
              "src": "6296:674:43",
              "text": "@dev Calculates the number of bonds a user will receive when opening a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _shareAmount The amount of shares the user is depositing.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The initial share price.\n @return bondReservesDelta The bonds paid by the reserves in the trade."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "6984:17:43",
            "parameters": {
              "id": 10722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10711,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "7019:23:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10739,
                  "src": "7011:31:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7011:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10713,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "7060:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10739,
                  "src": "7052:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7052:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10715,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "7091:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10739,
                  "src": "7083:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10714,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7083:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10717,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "7121:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10739,
                  "src": "7113:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10716,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7113:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10719,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "7151:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10739,
                  "src": "7143:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10718,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7143:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10721,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "7180:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10739,
                  "src": "7172:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7172:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7001:203:43"
            },
            "returnParameters": {
              "id": 10725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10724,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10739,
                  "src": "7228:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10723,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7228:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7227:9:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10804,
            "nodeType": "FunctionDefinition",
            "src": "8791:1862:43",
            "nodes": [],
            "body": {
              "id": 10803,
              "nodeType": "Block",
              "src": "9230:1423:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 10771,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10763,
                      "name": "shareProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10761,
                      "src": "9684:13:43",
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
                          "id": 10768,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 10766,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9788,
                            "src": "9734:3:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 10767,
                            "name": "_normalizedTimeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10748,
                            "src": "9740:24:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9734:30:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 10769,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10752,
                          "src": "9778:11:43",
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
                          "id": 10764,
                          "name": "_amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10746,
                          "src": "9700:9:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10765,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9710:10:43",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9813,
                        "src": "9700:20:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10770,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9700:99:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9684:115:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10772,
                  "nodeType": "ExpressionStatement",
                  "src": "9684:115:43"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 10773,
                      "name": "_normalizedTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10748,
                      "src": "9813:24:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 10774,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9840:1:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9813:28:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10802,
                  "nodeType": "IfStatement",
                  "src": "9809:838:43",
                  "trueBody": {
                    "id": 10801,
                    "nodeType": "Block",
                    "src": "9843:804:43",
                    "statements": [
                      {
                        "expression": {
                          "id": 10781,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10776,
                            "name": "bondCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10759,
                            "src": "9912:14:43",
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
                                "id": 10779,
                                "name": "_normalizedTimeRemaining",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10748,
                                "src": "9947:24:43",
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
                                "id": 10777,
                                "name": "_amountIn",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10746,
                                "src": "9929:9:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10778,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9939:7:43",
                              "memberName": "mulDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9831,
                              "src": "9929:17:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10780,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9929:43:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9912:60:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10782,
                        "nodeType": "ExpressionStatement",
                        "src": "9912:60:43"
                      },
                      {
                        "expression": {
                          "id": 10795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10783,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10757,
                            "src": "10095:15:43",
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
                                "id": 10786,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10742,
                                "src": "10180:23:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10787,
                                "name": "_bondReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10744,
                                "src": "10221:13:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10788,
                                "name": "bondCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10759,
                                "src": "10252:14:43",
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
                                "id": 10791,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 10789,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9788,
                                  "src": "10493:3:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 10790,
                                  "name": "_timeStretch",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10750,
                                  "src": "10499:12:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "10493:18:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10792,
                                "name": "_sharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10752,
                                "src": "10529:11:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10793,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10754,
                                "src": "10558:18:43",
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
                                "id": 10784,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12066,
                                "src": "10113:14:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$12066_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 10785,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10128:34:43",
                              "memberName": "calculateSharesOutGivenBondsInDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11744,
                              "src": "10113:49:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10794,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10113:477:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10095:495:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10796,
                        "nodeType": "ExpressionStatement",
                        "src": "10095:495:43"
                      },
                      {
                        "expression": {
                          "id": 10799,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10797,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10761,
                            "src": "10604:13:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 10798,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10757,
                            "src": "10621:15:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10604:32:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10800,
                        "nodeType": "ExpressionStatement",
                        "src": "10604:32:43"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 10740,
              "nodeType": "StructuredDocumentation",
              "src": "7853:933:43",
              "text": "@dev Calculates the amount of shares a user will receive when closing a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _amountIn The amount of bonds the user is closing.\n @param _normalizedTimeRemaining The normalized time remaining of the\n        position.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The share price when the pool was deployed.\n @return shareCurveDelta The shares paid by the reserves in the trade.\n @return bondCurveDelta The bonds paid to the reserves in the trade.\n @return shareProceeds The shares that the user will receive."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseLong",
            "nameLocation": "8800:18:43",
            "parameters": {
              "id": 10755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10742,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "8836:23:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "8828:31:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8828:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10744,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "8877:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "8869:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8869:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10746,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "8908:9:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "8900:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10745,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8900:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10748,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "8935:24:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "8927:32:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10747,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8927:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10750,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "8977:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "8969:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10749,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8969:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10752,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "9007:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "8999:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10751,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8999:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10754,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "9036:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "9028:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10753,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9028:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8818:242:43"
            },
            "returnParameters": {
              "id": 10762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10757,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "9129:15:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "9121:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10756,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9121:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10759,
                  "mutability": "mutable",
                  "name": "bondCurveDelta",
                  "nameLocation": "9166:14:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "9158:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9158:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10761,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "9202:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10804,
                  "src": "9194:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9194:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9107:118:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10835,
            "nodeType": "FunctionDefinition",
            "src": "11325:846:43",
            "nodes": [],
            "body": {
              "id": 10834,
              "nodeType": "Block",
              "src": "11585:586:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 10824,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10807,
                        "src": "11759:23:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10825,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10809,
                        "src": "11800:13:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10826,
                        "name": "_amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10811,
                        "src": "11831:9:43",
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
                        "id": 10829,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10827,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9788,
                          "src": "12067:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 10828,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10813,
                          "src": "12073:12:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "12067:18:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10830,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10815,
                        "src": "12103:11:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10831,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10817,
                        "src": "12132:18:43",
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
                        "id": 10822,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12066,
                        "src": "11692:14:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$12066_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 10823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11707:34:43",
                      "memberName": "calculateSharesOutGivenBondsInDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11744,
                      "src": "11692:49:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11692:472:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10821,
                  "id": 10833,
                  "nodeType": "Return",
                  "src": "11673:491:43"
                }
              ]
            },
            "documentation": {
              "id": 10805,
              "nodeType": "StructuredDocumentation",
              "src": "10659:661:43",
              "text": "@dev Calculates the amount of shares that will be received given a\n      specified amount of bonds.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountIn The amount of bonds the user is providing.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The initial share price.\n @return The shares paid by the reserves in the trade."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenShort",
            "nameLocation": "11334:18:43",
            "parameters": {
              "id": 10818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10807,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "11370:23:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10835,
                  "src": "11362:31:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10806,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11362:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10809,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "11411:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10835,
                  "src": "11403:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11403:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10811,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "11442:9:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10835,
                  "src": "11434:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10810,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11434:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10813,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "11469:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10835,
                  "src": "11461:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10812,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11461:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10815,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "11499:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10835,
                  "src": "11491:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11491:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10817,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "11528:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10835,
                  "src": "11520:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10816,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11520:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11352:200:43"
            },
            "returnParameters": {
              "id": 10821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10820,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10835,
                  "src": "11576:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10819,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11576:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11575:9:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10900,
            "nodeType": "FunctionDefinition",
            "src": "13107:1882:43",
            "nodes": [],
            "body": {
              "id": 10899,
              "nodeType": "Block",
              "src": "13547:1442:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 10867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10859,
                      "name": "sharePayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10857,
                      "src": "14100:12:43",
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
                          "id": 10864,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 10862,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9788,
                            "src": "14150:3:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 10863,
                            "name": "_normalizedTimeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10844,
                            "src": "14156:24:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14150:30:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 10865,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10848,
                          "src": "14194:11:43",
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
                          "id": 10860,
                          "name": "_amountOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10842,
                          "src": "14115:10:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14126:10:43",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9813,
                        "src": "14115:21:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10866,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14115:100:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14100:115:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10868,
                  "nodeType": "ExpressionStatement",
                  "src": "14100:115:43"
                },
                {
                  "expression": {
                    "id": 10874,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10869,
                      "name": "bondCurveDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10855,
                      "src": "14225:14:43",
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
                          "id": 10872,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10844,
                          "src": "14261:24:43",
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
                          "id": 10870,
                          "name": "_amountOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10842,
                          "src": "14242:10:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14253:7:43",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9831,
                        "src": "14242:18:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10873,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14242:44:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14225:61:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10875,
                  "nodeType": "ExpressionStatement",
                  "src": "14225:61:43"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 10876,
                      "name": "bondCurveDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10855,
                      "src": "14300:14:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 10877,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "14317:1:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "14300:18:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10898,
                  "nodeType": "IfStatement",
                  "src": "14296:687:43",
                  "trueBody": {
                    "id": 10897,
                    "nodeType": "Block",
                    "src": "14320:663:43",
                    "statements": [
                      {
                        "expression": {
                          "id": 10891,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10879,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10853,
                            "src": "14434:15:43",
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
                                "id": 10882,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10838,
                                "src": "14517:23:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10883,
                                "name": "_bondReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10840,
                                "src": "14558:13:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10884,
                                "name": "bondCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10855,
                                "src": "14589:14:43",
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
                                "id": 10887,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 10885,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9788,
                                  "src": "14830:3:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 10886,
                                  "name": "_timeStretch",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10846,
                                  "src": "14836:12:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "14830:18:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10888,
                                "name": "_sharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10848,
                                "src": "14866:11:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10889,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10850,
                                "src": "14895:18:43",
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
                                "id": 10880,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12066,
                                "src": "14452:14:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$12066_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 10881,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "14467:32:43",
                              "memberName": "calculateSharesInGivenBondsOutUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11613,
                              "src": "14452:47:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10890,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14452:475:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14434:493:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10892,
                        "nodeType": "ExpressionStatement",
                        "src": "14434:493:43"
                      },
                      {
                        "expression": {
                          "id": 10895,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10893,
                            "name": "sharePayment",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10857,
                            "src": "14941:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 10894,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10853,
                            "src": "14957:15:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14941:31:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10896,
                        "nodeType": "ExpressionStatement",
                        "src": "14941:31:43"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 10836,
              "nodeType": "StructuredDocumentation",
              "src": "12177:925:43",
              "text": "@dev Calculates the amount of base that a user will receive when closing\n      a short position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountOut The amount of the asset that is received.\n @param _normalizedTimeRemaining The amount of time remaining until\n        maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The initial share price.\n @return shareCurveDelta The shares paid to the reserves in the trade.\n @return bondCurveDelta The bonds paid by the reserves in the trade.\n @return sharePayment The shares that the user must pay."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseShort",
            "nameLocation": "13116:19:43",
            "parameters": {
              "id": 10851,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10838,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "13153:23:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13145:31:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10837,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13145:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10840,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "13194:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13186:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13186:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10842,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "13225:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13217:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10841,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13217:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10844,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "13253:24:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13245:32:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13245:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10846,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "13295:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13287:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13287:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10848,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "13325:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13317:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10847,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13317:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10850,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "13354:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13346:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10849,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13346:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13135:243:43"
            },
            "returnParameters": {
              "id": 10858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10853,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "13447:15:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13439:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10852,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13439:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10855,
                  "mutability": "mutable",
                  "name": "bondCurveDelta",
                  "nameLocation": "13484:14:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13476:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10854,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13476:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10857,
                  "mutability": "mutable",
                  "name": "sharePayment",
                  "nameLocation": "13520:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 10900,
                  "src": "13512:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10856,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13512:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13425:117:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11004,
            "nodeType": "FunctionDefinition",
            "src": "16838:2717:43",
            "nodes": [],
            "body": {
              "id": 11003,
              "nodeType": "Block",
              "src": "17182:2373:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    10929
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10929,
                      "mutability": "mutable",
                      "name": "shareAdjustmentDelta",
                      "nameLocation": "18114:20:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 11003,
                      "src": "18107:27:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 10928,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18107:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10930,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18107:27:43"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 10931,
                      "name": "_closeSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10913,
                      "src": "18148:16:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 10932,
                      "name": "_openSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10911,
                      "src": "18167:15:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "18148:34:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 10994,
                    "nodeType": "Block",
                    "src": "19229:134:43",
                    "statements": [
                      {
                        "expression": {
                          "id": 10992,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10982,
                            "name": "shareAdjustmentDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10929,
                            "src": "19243:20:43",
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
                            "id": 10991,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 10985,
                                  "name": "_shareReservesDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10905,
                                  "src": "19289:19:43",
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
                                "id": 10984,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "19282:6:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 10983,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "19282:6:43",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 10986,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "19282:27:43",
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
                                  "id": 10989,
                                  "name": "_shareCurveDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10907,
                                  "src": "19335:16:43",
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
                                "id": 10988,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "19328:6:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 10987,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "19328:6:43",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 10990,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "19328:24:43",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "19282:70:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "19243:109:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 10993,
                        "nodeType": "ExpressionStatement",
                        "src": "19243:109:43"
                      }
                    ]
                  },
                  "id": 10995,
                  "nodeType": "IfStatement",
                  "src": "18144:1219:43",
                  "trueBody": {
                    "id": 10981,
                    "nodeType": "Block",
                    "src": "18184:1039:43",
                    "statements": [
                      {
                        "condition": {
                          "id": 10934,
                          "name": "_isLong",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10915,
                          "src": "18383:7:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 10944,
                        "nodeType": "IfStatement",
                        "src": "18379:181:43",
                        "trueBody": {
                          "id": 10943,
                          "nodeType": "Block",
                          "src": "18392:168:43",
                          "statements": [
                            {
                              "expression": {
                                "id": 10941,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 10935,
                                  "name": "_shareProceeds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10903,
                                  "src": "18410:14:43",
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
                                      "id": 10938,
                                      "name": "_closeSharePrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10913,
                                      "src": "18474:16:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "id": 10939,
                                      "name": "_openSharePrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10911,
                                      "src": "18512:15:43",
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
                                      "id": 10936,
                                      "name": "_shareProceeds",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10903,
                                      "src": "18427:14:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 10937,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "18442:10:43",
                                    "memberName": "mulDivDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 9813,
                                    "src": "18427:25:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 10940,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "18427:118:43",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "18410:135:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10942,
                              "nodeType": "ExpressionStatement",
                              "src": "18410:135:43"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 10951,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10945,
                            "name": "_shareReservesDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10905,
                            "src": "18613:19:43",
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
                                "id": 10948,
                                "name": "_closeSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10913,
                                "src": "18683:16:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10949,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10911,
                                "src": "18717:15:43",
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
                                "id": 10946,
                                "name": "_shareReservesDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10905,
                                "src": "18635:19:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10947,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "18655:10:43",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9813,
                              "src": "18635:30:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10950,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "18635:111:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "18613:133:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10952,
                        "nodeType": "ExpressionStatement",
                        "src": "18613:133:43"
                      },
                      {
                        "expression": {
                          "id": 10963,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10953,
                            "name": "shareAdjustmentDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10929,
                            "src": "18815:20:43",
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
                            "id": 10962,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 10956,
                                  "name": "_shareReservesDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10905,
                                  "src": "18861:19:43",
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
                                "id": 10955,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "18854:6:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 10954,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "18854:6:43",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 10957,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "18854:27:43",
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
                                  "id": 10960,
                                  "name": "_shareCurveDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10907,
                                  "src": "18907:16:43",
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
                                "id": 10959,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "18900:6:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 10958,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "18900:6:43",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 10961,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "18900:24:43",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18854:70:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "18815:109:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 10964,
                        "nodeType": "ExpressionStatement",
                        "src": "18815:109:43"
                      },
                      {
                        "expression": {
                          "id": 10971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10965,
                            "name": "_shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10907,
                            "src": "18938:16:43",
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
                                "id": 10968,
                                "name": "_closeSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10913,
                                "src": "19002:16:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10969,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10911,
                                "src": "19036:15:43",
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
                                "id": 10966,
                                "name": "_shareCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10907,
                                "src": "18957:16:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10967,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "18974:10:43",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9813,
                              "src": "18957:27:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10970,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "18957:108:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "18938:127:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10972,
                        "nodeType": "ExpressionStatement",
                        "src": "18938:127:43"
                      },
                      {
                        "expression": {
                          "id": 10979,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 10973,
                            "name": "_totalGovernanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10909,
                            "src": "19079:19:43",
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
                                "id": 10976,
                                "name": "_closeSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10913,
                                "src": "19149:16:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 10977,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10911,
                                "src": "19183:15:43",
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
                                "id": 10974,
                                "name": "_totalGovernanceFee",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10909,
                                "src": "19101:19:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10975,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "19121:10:43",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9813,
                              "src": "19101:30:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10978,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "19101:111:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "19079:133:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10980,
                        "nodeType": "ExpressionStatement",
                        "src": "19079:133:43"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 10996,
                        "name": "_shareProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10903,
                        "src": "19394:14:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10997,
                        "name": "_shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10905,
                        "src": "19422:19:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10998,
                        "name": "_shareCurveDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10907,
                        "src": "19455:16:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10999,
                        "name": "shareAdjustmentDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10929,
                        "src": "19485:20:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 11000,
                        "name": "_totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10909,
                        "src": "19519:19:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 11001,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "19380:168:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                    }
                  },
                  "functionReturnParameters": 10927,
                  "id": 11002,
                  "nodeType": "Return",
                  "src": "19373:175:43"
                }
              ]
            },
            "documentation": {
              "id": 10901,
              "nodeType": "StructuredDocumentation",
              "src": "14995:1838:43",
              "text": "@dev If negative interest accrued over the term, we scale the share\n      proceeds by the negative interest amount. Shorts should be\n      responsible for negative interest, but negative interest can exceed\n      the margin that shorts provide. This leaves us with no choice but\n      to attribute the negative interest to longs. Along with scaling the\n      share proceeds, we also scale the fee amounts.\n      In order for our AMM invariant to be maintained, the effective\n      share reserves need to be adjusted by the same amount as the share\n      reserves delta calculated with YieldSpace including fees. We reduce\n      the share reserves by `min(c_1 / c_0, 1) * shareReservesDelta` and\n      the share adjustment by the `shareAdjustmentDelta`. We can solve\n      these equations simultaneously to find the share adjustment delta\n      as:\n      shareAdjustmentDelta = min(c_1 / c_0, 1) * sharePayment -\n                             shareReservesDelta\n @param _shareProceeds The proceeds in shares from the trade.\n @param _shareReservesDelta The change in share reserves from the trade.\n @param _shareCurveDelta The curve portion of the change in share reserves.\n @param _totalGovernanceFee The total governance fee.\n @param _openSharePrice The share price at the beginning of the term.\n @param _closeSharePrice The share price at the end of the term.\n @param _isLong A flag indicating whether or not the trade is a long.\n @return The adjusted share proceeds.\n @return The adjusted share reserves delta.\n @return The adjusted share close proceeds.\n @return The share adjustment delta.\n @return The adjusted total governance fee."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateNegativeInterestOnClose",
            "nameLocation": "16847:32:43",
            "parameters": {
              "id": 10916,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10903,
                  "mutability": "mutable",
                  "name": "_shareProceeds",
                  "nameLocation": "16897:14:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "16889:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10902,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16889:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10905,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "16929:19:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "16921:27:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10904,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16921:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10907,
                  "mutability": "mutable",
                  "name": "_shareCurveDelta",
                  "nameLocation": "16966:16:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "16958:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16958:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10909,
                  "mutability": "mutable",
                  "name": "_totalGovernanceFee",
                  "nameLocation": "17000:19:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "16992:27:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10908,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16992:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10911,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "17037:15:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "17029:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10910,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17029:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10913,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "17070:16:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "17062:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10912,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17062:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10915,
                  "mutability": "mutable",
                  "name": "_isLong",
                  "nameLocation": "17101:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "17096:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10914,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17096:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16879:235:43"
            },
            "returnParameters": {
              "id": 10927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10918,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "17138:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10917,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17138:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10920,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "17147:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10919,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17147:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10922,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "17156:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10921,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17156:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10924,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "17165:6:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10923,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17165:6:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10926,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11004,
                  "src": "17173:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10925,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17173:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17137:44:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11027,
            "nodeType": "StructDefinition",
            "src": "19561:410:43",
            "nodes": [],
            "canonicalName": "HyperdriveMath.PresentValueParams",
            "members": [
              {
                "constant": false,
                "id": 11006,
                "mutability": "mutable",
                "name": "shareReserves",
                "nameLocation": "19605:13:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19597:21:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11005,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19597:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11008,
                "mutability": "mutable",
                "name": "shareAdjustment",
                "nameLocation": "19635:15:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19628:22:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 11007,
                  "name": "int256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19628:6:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11010,
                "mutability": "mutable",
                "name": "bondReserves",
                "nameLocation": "19668:12:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19660:20:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11009,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19660:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11012,
                "mutability": "mutable",
                "name": "sharePrice",
                "nameLocation": "19698:10:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19690:18:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11011,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19690:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11014,
                "mutability": "mutable",
                "name": "initialSharePrice",
                "nameLocation": "19726:17:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19718:25:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11013,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19718:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11016,
                "mutability": "mutable",
                "name": "minimumShareReserves",
                "nameLocation": "19761:20:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19753:28:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11015,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19753:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11018,
                "mutability": "mutable",
                "name": "timeStretch",
                "nameLocation": "19799:11:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19791:19:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11017,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19791:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11020,
                "mutability": "mutable",
                "name": "longsOutstanding",
                "nameLocation": "19828:16:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19820:24:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11019,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19820:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11022,
                "mutability": "mutable",
                "name": "longAverageTimeRemaining",
                "nameLocation": "19862:24:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19854:32:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11021,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19854:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11024,
                "mutability": "mutable",
                "name": "shortsOutstanding",
                "nameLocation": "19904:17:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19896:25:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11023,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19896:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11026,
                "mutability": "mutable",
                "name": "shortAverageTimeRemaining",
                "nameLocation": "19939:25:43",
                "nodeType": "VariableDeclaration",
                "scope": 11027,
                "src": "19931:33:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11025,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19931:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "PresentValueParams",
            "nameLocation": "19568:18:43",
            "scope": 11352,
            "visibility": "public"
          },
          {
            "id": 11269,
            "nodeType": "FunctionDefinition",
            "src": "20164:5466:43",
            "nodes": [],
            "body": {
              "id": 11268,
              "nodeType": "Block",
              "src": "20276:5354:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    11037
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11037,
                      "mutability": "mutable",
                      "name": "netCurveTrade",
                      "nameLocation": "20424:13:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 11268,
                      "src": "20417:20:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 11036,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20417:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11057,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 11056,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 11043,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "20493:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11044,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "20501:24:43",
                              "memberName": "longAverageTimeRemaining",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11022,
                              "src": "20493:32:43",
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
                              "expression": {
                                "id": 11040,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "20460:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11041,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "20468:16:43",
                              "memberName": "longsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11020,
                              "src": "20460:24:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11042,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "20485:7:43",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9831,
                            "src": "20460:32:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 11045,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20460:66:43",
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
                        "id": 11039,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "20440:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 11038,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "20440:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11046,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20440:96:43",
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
                          "arguments": [
                            {
                              "expression": {
                                "id": 11052,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "20630:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11053,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "20638:25:43",
                              "memberName": "shortAverageTimeRemaining",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11026,
                              "src": "20630:33:43",
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
                              "expression": {
                                "id": 11049,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "20575:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11050,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "20583:17:43",
                              "memberName": "shortsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11024,
                              "src": "20575:25:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11051,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "20601:7:43",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9831,
                            "src": "20575:33:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 11054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20575:106:43",
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
                        "id": 11048,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "20551:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 11047,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "20551:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11055,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20551:144:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20440:255:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20417:278:43"
                },
                {
                  "assignments": [
                    11059
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11059,
                      "mutability": "mutable",
                      "name": "effectiveShareReserves",
                      "nameLocation": "20713:22:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 11268,
                      "src": "20705:30:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11058,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20705:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11066,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 11061,
                          "name": "_params",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11031,
                          "src": "20783:7:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                          }
                        },
                        "id": 11062,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20791:13:43",
                        "memberName": "shareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11006,
                        "src": "20783:21:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 11063,
                          "name": "_params",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11031,
                          "src": "20818:7:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                          }
                        },
                        "id": 11064,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20826:15:43",
                        "memberName": "shareAdjustment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11008,
                        "src": "20818:23:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 11060,
                      "name": "calculateEffectiveShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11351,
                      "src": "20738:31:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 11065,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "20738:113:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20705:146:43"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 11069,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11067,
                      "name": "netCurveTrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11037,
                      "src": "20865:13:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 11068,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "20881:1:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "20865:17:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 11127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 11125,
                        "name": "netCurveTrade",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11037,
                        "src": "22586:13:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 11126,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "22602:1:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "22586:17:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 11197,
                    "nodeType": "IfStatement",
                    "src": "22582:1950:43",
                    "trueBody": {
                      "id": 11196,
                      "nodeType": "Block",
                      "src": "22605:1927:43",
                      "statements": [
                        {
                          "expression": {
                            "id": 11131,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 11128,
                              "name": "netCurveTrade",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11037,
                              "src": "23391:13:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 11130,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "-",
                              "prefix": true,
                              "src": "23407:14:43",
                              "subExpression": {
                                "id": 11129,
                                "name": "netCurveTrade",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11037,
                                "src": "23408:13:43",
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
                            "src": "23391:30:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "id": 11132,
                          "nodeType": "ExpressionStatement",
                          "src": "23391:30:43"
                        },
                        {
                          "assignments": [
                            11134
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 11134,
                              "mutability": "mutable",
                              "name": "maxCurveTrade",
                              "nameLocation": "23490:13:43",
                              "nodeType": "VariableDeclaration",
                              "scope": 11196,
                              "src": "23482:21:43",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 11133,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "23482:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "visibility": "internal"
                            }
                          ],
                          "id": 11149,
                          "initialValue": {
                            "arguments": [
                              {
                                "id": 11137,
                                "name": "effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11059,
                                "src": "23554:22:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 11138,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11031,
                                  "src": "23594:7:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 11139,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "23602:12:43",
                                "memberName": "bondReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11010,
                                "src": "23594:20:43",
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
                                "id": 11143,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 11140,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9788,
                                  "src": "23632:3:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "expression": {
                                    "id": 11141,
                                    "name": "_params",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 11031,
                                    "src": "23638:7:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                      "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                    }
                                  },
                                  "id": 11142,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "23646:11:43",
                                  "memberName": "timeStretch",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 11018,
                                  "src": "23638:19:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "23632:25:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 11144,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11031,
                                  "src": "23675:7:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 11145,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "23683:10:43",
                                "memberName": "sharePrice",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11012,
                                "src": "23675:18:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 11146,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11031,
                                  "src": "23711:7:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 11147,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "23719:17:43",
                                "memberName": "initialSharePrice",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11014,
                                "src": "23711:25:43",
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
                                }
                              ],
                              "expression": {
                                "id": 11135,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12066,
                                "src": "23506:14:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$12066_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 11136,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "23521:15:43",
                              "memberName": "calculateMaxBuy",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11922,
                              "src": "23506:30:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11148,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "23506:244:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "23482:268:43"
                        },
                        {
                          "expression": {
                            "id": 11158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 11150,
                              "name": "maxCurveTrade",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11134,
                              "src": "23764:13:43",
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
                                  "arguments": [
                                    {
                                      "id": 11155,
                                      "name": "netCurveTrade",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11037,
                                      "src": "23806:13:43",
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
                                    "id": 11154,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "23798:7:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 11153,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "23798:7:43",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 11156,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "23798:22:43",
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
                                  "id": 11151,
                                  "name": "maxCurveTrade",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11134,
                                  "src": "23780:13:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 11152,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "23794:3:43",
                                "memberName": "min",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 10478,
                                "src": "23780:17:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 11157,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "23780:41:43",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "23764:57:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11159,
                          "nodeType": "ExpressionStatement",
                          "src": "23764:57:43"
                        },
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 11162,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 11160,
                              "name": "maxCurveTrade",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11134,
                              "src": "23886:13:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 11161,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "23902:1:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "23886:17:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 11184,
                          "nodeType": "IfStatement",
                          "src": "23882:563:43",
                          "trueBody": {
                            "id": 11183,
                            "nodeType": "Block",
                            "src": "23905:540:43",
                            "statements": [
                              {
                                "expression": {
                                  "id": 11181,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "expression": {
                                      "id": 11163,
                                      "name": "_params",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11031,
                                      "src": "24036:7:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                        "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                      }
                                    },
                                    "id": 11165,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberLocation": "24044:13:43",
                                    "memberName": "shareReserves",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 11006,
                                    "src": "24036:21:43",
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
                                        "id": 11168,
                                        "name": "effectiveShareReserves",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 11059,
                                        "src": "24155:22:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "expression": {
                                          "id": 11169,
                                          "name": "_params",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 11031,
                                          "src": "24203:7:43",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                          }
                                        },
                                        "id": 11170,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "24211:12:43",
                                        "memberName": "bondReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 11010,
                                        "src": "24203:20:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "id": 11171,
                                        "name": "maxCurveTrade",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 11134,
                                        "src": "24249:13:43",
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
                                        "id": 11175,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "id": 11172,
                                          "name": "ONE",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 9788,
                                          "src": "24288:3:43",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "expression": {
                                            "id": 11173,
                                            "name": "_params",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11031,
                                            "src": "24294:7:43",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                              "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                            }
                                          },
                                          "id": 11174,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "24302:11:43",
                                          "memberName": "timeStretch",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 11018,
                                          "src": "24294:19:43",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "24288:25:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "expression": {
                                          "id": 11176,
                                          "name": "_params",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 11031,
                                          "src": "24339:7:43",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                          }
                                        },
                                        "id": 11177,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "24347:10:43",
                                        "memberName": "sharePrice",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 11012,
                                        "src": "24339:18:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "expression": {
                                          "id": 11178,
                                          "name": "_params",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 11031,
                                          "src": "24383:7:43",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                          }
                                        },
                                        "id": 11179,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "24391:17:43",
                                        "memberName": "initialSharePrice",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 11014,
                                        "src": "24383:25:43",
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
                                        "id": 11166,
                                        "name": "YieldSpaceMath",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 12066,
                                        "src": "24061:14:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$12066_$",
                                          "typeString": "type(library YieldSpaceMath)"
                                        }
                                      },
                                      "id": 11167,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "24097:32:43",
                                      "memberName": "calculateSharesInGivenBondsOutUp",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 11613,
                                      "src": "24061:68:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 11180,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "24061:369:43",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "24036:394:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 11182,
                                "nodeType": "ExpressionStatement",
                                "src": "24036:394:43"
                              }
                            ]
                          }
                        },
                        {
                          "expression": {
                            "id": 11194,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "expression": {
                                "id": 11185,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "24458:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11187,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "memberLocation": "24466:13:43",
                              "memberName": "shareReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11006,
                              "src": "24458:21:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "+=",
                            "rightHandSide": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 11193,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "id": 11190,
                                    "name": "netCurveTrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 11037,
                                    "src": "24491:13:43",
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
                                  "id": 11189,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "24483:7:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 11188,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "24483:7:43",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 11191,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "24483:22:43",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 11192,
                                "name": "maxCurveTrade",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11134,
                                "src": "24508:13:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "24483:38:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "24458:63:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11195,
                          "nodeType": "ExpressionStatement",
                          "src": "24458:63:43"
                        }
                      ]
                    }
                  },
                  "id": 11198,
                  "nodeType": "IfStatement",
                  "src": "20861:3671:43",
                  "trueBody": {
                    "id": 11124,
                    "nodeType": "Block",
                    "src": "20884:1692:43",
                    "statements": [
                      {
                        "assignments": [
                          11071
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11071,
                            "mutability": "mutable",
                            "name": "maxCurveTrade",
                            "nameLocation": "21558:13:43",
                            "nodeType": "VariableDeclaration",
                            "scope": 11124,
                            "src": "21550:21:43",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 11070,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "21550:7:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11088,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 11074,
                              "name": "effectiveShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11059,
                              "src": "21623:22:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 11075,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "21663:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11076,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21671:12:43",
                              "memberName": "bondReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11010,
                              "src": "21663:20:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 11077,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "21701:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11078,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21709:20:43",
                              "memberName": "minimumShareReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11016,
                              "src": "21701:28:43",
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
                              "id": 11082,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 11079,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9788,
                                "src": "21747:3:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "expression": {
                                  "id": 11080,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11031,
                                  "src": "21753:7:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 11081,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "21761:11:43",
                                "memberName": "timeStretch",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11018,
                                "src": "21753:19:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "21747:25:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 11083,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "21790:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11084,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21798:10:43",
                              "memberName": "sharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11012,
                              "src": "21790:18:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 11085,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "21826:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11086,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21834:17:43",
                              "memberName": "initialSharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11014,
                              "src": "21826:25:43",
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
                              "id": 11072,
                              "name": "YieldSpaceMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12066,
                              "src": "21574:14:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$12066_$",
                                "typeString": "type(library YieldSpaceMath)"
                              }
                            },
                            "id": 11073,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "21589:16:43",
                            "memberName": "calculateMaxSell",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 11997,
                            "src": "21574:31:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 11087,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "21574:291:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "21550:315:43"
                      },
                      {
                        "expression": {
                          "id": 11097,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11089,
                            "name": "maxCurveTrade",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11071,
                            "src": "21879:13:43",
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
                                "arguments": [
                                  {
                                    "id": 11094,
                                    "name": "netCurveTrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 11037,
                                    "src": "21921:13:43",
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
                                  "id": 11093,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "21913:7:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 11092,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "21913:7:43",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 11095,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "21913:22:43",
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
                                "id": 11090,
                                "name": "maxCurveTrade",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11071,
                                "src": "21895:13:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 11091,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21909:3:43",
                              "memberName": "min",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10478,
                              "src": "21895:17:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 11096,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "21895:41:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "21879:57:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11098,
                        "nodeType": "ExpressionStatement",
                        "src": "21879:57:43"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11101,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11099,
                            "name": "maxCurveTrade",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11071,
                            "src": "22005:13:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 11100,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "22021:1:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "22005:17:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 11123,
                        "nodeType": "IfStatement",
                        "src": "22001:565:43",
                        "trueBody": {
                          "id": 11122,
                          "nodeType": "Block",
                          "src": "22024:542:43",
                          "statements": [
                            {
                              "expression": {
                                "id": 11120,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "expression": {
                                    "id": 11102,
                                    "name": "_params",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 11031,
                                    "src": "22155:7:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                      "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                    }
                                  },
                                  "id": 11104,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberLocation": "22163:13:43",
                                  "memberName": "shareReserves",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 11006,
                                  "src": "22155:21:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "-=",
                                "rightHandSide": {
                                  "arguments": [
                                    {
                                      "id": 11107,
                                      "name": "effectiveShareReserves",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11059,
                                      "src": "22276:22:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "expression": {
                                        "id": 11108,
                                        "name": "_params",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 11031,
                                        "src": "22324:7:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                        }
                                      },
                                      "id": 11109,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "22332:12:43",
                                      "memberName": "bondReserves",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 11010,
                                      "src": "22324:20:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "id": 11110,
                                      "name": "maxCurveTrade",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 11071,
                                      "src": "22370:13:43",
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
                                      "id": 11114,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 11111,
                                        "name": "ONE",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9788,
                                        "src": "22409:3:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "expression": {
                                          "id": 11112,
                                          "name": "_params",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 11031,
                                          "src": "22415:7:43",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                          }
                                        },
                                        "id": 11113,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "22423:11:43",
                                        "memberName": "timeStretch",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 11018,
                                        "src": "22415:19:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "22409:25:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "expression": {
                                        "id": 11115,
                                        "name": "_params",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 11031,
                                        "src": "22460:7:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                        }
                                      },
                                      "id": 11116,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "22468:10:43",
                                      "memberName": "sharePrice",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 11012,
                                      "src": "22460:18:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "expression": {
                                        "id": 11117,
                                        "name": "_params",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 11031,
                                        "src": "22504:7:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                        }
                                      },
                                      "id": 11118,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "22512:17:43",
                                      "memberName": "initialSharePrice",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 11014,
                                      "src": "22504:25:43",
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
                                      "id": 11105,
                                      "name": "YieldSpaceMath",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 12066,
                                      "src": "22180:14:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$12066_$",
                                        "typeString": "type(library YieldSpaceMath)"
                                      }
                                    },
                                    "id": 11106,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "22216:34:43",
                                    "memberName": "calculateSharesOutGivenBondsInDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 11744,
                                    "src": "22180:70:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                      "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 11119,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "22180:371:43",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "22155:396:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 11121,
                              "nodeType": "ExpressionStatement",
                              "src": "22155:396:43"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    11200
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11200,
                      "mutability": "mutable",
                      "name": "netFlatTrade",
                      "nameLocation": "24672:12:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 11268,
                      "src": "24665:19:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 11199,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "24665:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11228,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 11227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 11209,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 11206,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9788,
                                "src": "24761:3:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "expression": {
                                  "id": 11207,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11031,
                                  "src": "24767:7:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 11208,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "24775:25:43",
                                "memberName": "shortAverageTimeRemaining",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11026,
                                "src": "24767:33:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "24761:39:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 11210,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "24818:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11211,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "24826:10:43",
                              "memberName": "sharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11012,
                              "src": "24818:18:43",
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
                              "expression": {
                                "id": 11203,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "24707:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11204,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "24715:17:43",
                              "memberName": "shortsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11024,
                              "src": "24707:25:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11205,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "24733:10:43",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9813,
                            "src": "24707:36:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 11212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "24707:143:43",
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
                        "id": 11202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "24687:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 11201,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "24687:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11213,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24687:173:43",
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
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 11222,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 11219,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9788,
                                "src": "24956:3:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "expression": {
                                  "id": 11220,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11031,
                                  "src": "24962:7:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 11221,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "24970:24:43",
                                "memberName": "longAverageTimeRemaining",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11022,
                                "src": "24962:32:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "24956:38:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 11223,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "25016:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11224,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "25024:10:43",
                              "memberName": "sharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11012,
                              "src": "25016:18:43",
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
                              "expression": {
                                "id": 11216,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11031,
                                "src": "24899:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 11217,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "24907:16:43",
                              "memberName": "longsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11020,
                              "src": "24899:24:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11218,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "24924:10:43",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9813,
                            "src": "24899:35:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 11225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "24899:153:43",
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
                        "id": 11215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "24875:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 11214,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "24875:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11226,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24875:191:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "24687:379:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "24665:401:43"
                },
                {
                  "assignments": [
                    11230
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11230,
                      "mutability": "mutable",
                      "name": "updatedShareReserves",
                      "nameLocation": "25083:20:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 11268,
                      "src": "25076:27:43",
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
                        "src": "25076:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11238,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 11237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 11233,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11031,
                            "src": "25113:7:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                              "typeString": "struct HyperdriveMath.PresentValueParams memory"
                            }
                          },
                          "id": 11234,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "25121:13:43",
                          "memberName": "shareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 11006,
                          "src": "25113:21:43",
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
                        "src": "25106:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 11231,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "25106:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11235,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25106:29:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 11236,
                      "name": "netFlatTrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11200,
                      "src": "25150:12:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "25106:56:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "25076:86:43"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 11245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11239,
                      "name": "updatedShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11230,
                      "src": "25176:20:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 11242,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11031,
                            "src": "25206:7:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                              "typeString": "struct HyperdriveMath.PresentValueParams memory"
                            }
                          },
                          "id": 11243,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "25214:20:43",
                          "memberName": "minimumShareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 11016,
                          "src": "25206:28:43",
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
                        "id": 11241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "25199:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 11240,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "25199:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11244,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25199:36:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "25176:59:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11252,
                  "nodeType": "IfStatement",
                  "src": "25172:131:43",
                  "trueBody": {
                    "id": 11251,
                    "nodeType": "Block",
                    "src": "25237:66:43",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 11246,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "25258:11:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 11248,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "25270:20:43",
                            "memberName": "NegativePresentValue",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3643,
                            "src": "25258:32:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 11249,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "25258:34:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 11250,
                        "nodeType": "RevertStatement",
                        "src": "25251:41:43"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 11260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 11253,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11031,
                        "src": "25312:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                        }
                      },
                      "id": 11255,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "25320:13:43",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11006,
                      "src": "25312:21:43",
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
                          "id": 11258,
                          "name": "updatedShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11230,
                          "src": "25344:20:43",
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
                        "id": 11257,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "25336:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 11256,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "25336:7:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25336:29:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "25312:53:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11261,
                  "nodeType": "ExpressionStatement",
                  "src": "25312:53:43"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11266,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 11262,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11031,
                        "src": "25571:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                        }
                      },
                      "id": 11263,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "25579:13:43",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11006,
                      "src": "25571:21:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "id": 11264,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11031,
                        "src": "25595:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                        }
                      },
                      "id": 11265,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "25603:20:43",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11016,
                      "src": "25595:28:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "25571:52:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11035,
                  "id": 11267,
                  "nodeType": "Return",
                  "src": "25564:59:43"
                }
              ]
            },
            "documentation": {
              "id": 11028,
              "nodeType": "StructuredDocumentation",
              "src": "19977:182:43",
              "text": "@dev Calculates the present value LPs capital in the pool.\n @param _params The parameters for the present value calculation.\n @return The present value of the pool."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculatePresentValue",
            "nameLocation": "20173:21:43",
            "parameters": {
              "id": 11032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11031,
                  "mutability": "mutable",
                  "name": "_params",
                  "nameLocation": "20230:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11269,
                  "src": "20204:33:43",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                    "typeString": "struct HyperdriveMath.PresentValueParams"
                  },
                  "typeName": {
                    "id": 11030,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 11029,
                      "name": "PresentValueParams",
                      "nameLocations": [
                        "20204:18:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 11027,
                      "src": "20204:18:43"
                    },
                    "referencedDeclaration": 11027,
                    "src": "20204:18:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$11027_storage_ptr",
                      "typeString": "struct HyperdriveMath.PresentValueParams"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20194:49:43"
            },
            "returnParameters": {
              "id": 11035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11034,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11269,
                  "src": "20267:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11033,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20267:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20266:9:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11320,
            "nodeType": "FunctionDefinition",
            "src": "26993:1230:43",
            "nodes": [],
            "body": {
              "id": 11319,
              "nodeType": "Block",
              "src": "27258:965:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    11288
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11288,
                      "mutability": "mutable",
                      "name": "bondFactor",
                      "nameLocation": "27564:10:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 11319,
                      "src": "27556:18:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11287,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "27556:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11297,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 11291,
                        "name": "_closeSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11278,
                        "src": "27613:16:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 11294,
                            "name": "_sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11280,
                            "src": "27741:11:43",
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
                            "id": 11292,
                            "name": "_openSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11276,
                            "src": "27719:15:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11293,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "27735:5:43",
                          "memberName": "mulUp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9881,
                          "src": "27719:21:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 11295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "27719:34:43",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 11289,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11272,
                        "src": "27577:11:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 11290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "27589:10:43",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9813,
                      "src": "27577:22:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 11296,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "27577:186:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "27556:207:43"
                },
                {
                  "expression": {
                    "id": 11304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11298,
                      "name": "bondFactor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11288,
                      "src": "27970:10:43",
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
                          "id": 11301,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11282,
                          "src": "28007:8:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 11302,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11280,
                          "src": "28017:11:43",
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
                          "id": 11299,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11272,
                          "src": "27984:11:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "27996:10:43",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9813,
                        "src": "27984:22:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 11303,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "27984:45:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "27970:59:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11305,
                  "nodeType": "ExpressionStatement",
                  "src": "27970:59:43"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11306,
                      "name": "bondFactor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11288,
                      "src": "28044:10:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 11307,
                      "name": "_shareAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11274,
                      "src": "28057:12:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "28044:25:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11316,
                  "nodeType": "IfStatement",
                  "src": "28040:147:43",
                  "trueBody": {
                    "id": 11315,
                    "nodeType": "Block",
                    "src": "28071:116:43",
                    "statements": [
                      {
                        "expression": {
                          "id": 11313,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11309,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11285,
                            "src": "28135:13:43",
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
                            "id": 11312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 11310,
                              "name": "bondFactor",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11288,
                              "src": "28151:10:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 11311,
                              "name": "_shareAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11274,
                              "src": "28164:12:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "28151:25:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "28135:41:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11314,
                        "nodeType": "ExpressionStatement",
                        "src": "28135:41:43"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 11317,
                    "name": "shareProceeds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11285,
                    "src": "28203:13:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11286,
                  "id": 11318,
                  "nodeType": "Return",
                  "src": "28196:20:43"
                }
              ]
            },
            "documentation": {
              "id": 11270,
              "nodeType": "StructuredDocumentation",
              "src": "25636:1352:43",
              "text": "@dev Calculates the proceeds in shares of closing a short position. This\n      takes into account the trading profits, the interest that was\n      earned by the short, the flat fee the short pays, and the amount of\n      margin that was released by closing the short. The math for the\n      short's proceeds in base is given by:\n      proceeds = (1 + flat_fee) * dy - c * dz + (c1 - c0) * (dy / c0)\n               = (1 + flat_fee) * dy - c * dz + (c1 / c0) * dy - dy\n               = (c1 / c0 + flat_fee) * dy - c * dz\n      We convert the proceeds to shares by dividing by the current share\n      price. In the event that the interest is negative and outweighs the\n      trading profits and margin released, the short's proceeds are\n      marked to zero.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _shareAmount The amount of shares that it costs to close the\n                     short.\n @param _openSharePrice The share price at the short's open.\n @param _closeSharePrice The share price at the short's close.\n @param _sharePrice The current share price.\n @param _flatFee The flat fee currently within the pool\n @return shareProceeds The short proceeds in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateShortProceeds",
            "nameLocation": "27002:22:43",
            "parameters": {
              "id": 11283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11272,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "27042:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11320,
                  "src": "27034:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11271,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27034:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11274,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "27071:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11320,
                  "src": "27063:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11273,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27063:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11276,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "27101:15:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11320,
                  "src": "27093:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11275,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27093:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11278,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "27134:16:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11320,
                  "src": "27126:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11277,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27126:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11280,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "27168:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11320,
                  "src": "27160:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11279,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27160:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11282,
                  "mutability": "mutable",
                  "name": "_flatFee",
                  "nameLocation": "27197:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11320,
                  "src": "27189:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11281,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27189:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27024:187:43"
            },
            "returnParameters": {
              "id": 11286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11285,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "27243:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11320,
                  "src": "27235:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11284,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27235:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27234:23:43"
            },
            "scope": 11352,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 11351,
            "nodeType": "FunctionDefinition",
            "src": "28808:340:43",
            "nodes": [],
            "body": {
              "id": 11350,
              "nodeType": "Block",
              "src": "28952:196:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    11331
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11331,
                      "mutability": "mutable",
                      "name": "effectiveShareReserves",
                      "nameLocation": "28969:22:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 11350,
                      "src": "28962:29:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 11330,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "28962:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11338,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 11337,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 11334,
                          "name": "_shareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11323,
                          "src": "29001:14:43",
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
                        "id": 11333,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "28994:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 11332,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "28994:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11335,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "28994:22:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 11336,
                      "name": "_shareAdjustment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11325,
                      "src": "29031:16:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "28994:53:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "28962:85:43"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 11342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11340,
                          "name": "effectiveShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11331,
                          "src": "29065:22:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 11341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "29091:1:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "29065:27:43",
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
                      "id": 11339,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "29057:7:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "29057:36:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11344,
                  "nodeType": "ExpressionStatement",
                  "src": "29057:36:43"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 11347,
                        "name": "effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11331,
                        "src": "29118:22:43",
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
                      "id": 11346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "29110:7:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 11345,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "29110:7:43",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 11348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "29110:31:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11329,
                  "id": 11349,
                  "nodeType": "Return",
                  "src": "29103:38:43"
                }
              ]
            },
            "documentation": {
              "id": 11321,
              "nodeType": "StructuredDocumentation",
              "src": "28229:574:43",
              "text": "@dev Calculates the effective share reserves. The effective share\n      reserves are the share reserves minus the share adjustment or\n      z - zeta. We use the effective share reserves as the z-parameter\n      to the YieldSpace pricing model. The share adjustment is used to\n      hold the pricing mechanism invariant under the flat component of\n      flat+curve trades.\n @param _shareReserves The pool's share reserves.\n @param _shareAdjustment The pool's share adjustment.\n @return The effective share reserves."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateEffectiveShareReserves",
            "nameLocation": "28817:31:43",
            "parameters": {
              "id": 11326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11323,
                  "mutability": "mutable",
                  "name": "_shareReserves",
                  "nameLocation": "28866:14:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11351,
                  "src": "28858:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11322,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28858:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11325,
                  "mutability": "mutable",
                  "name": "_shareAdjustment",
                  "nameLocation": "28897:16:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 11351,
                  "src": "28890:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 11324,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28890:6:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28848:71:43"
            },
            "returnParameters": {
              "id": 11329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11328,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11351,
                  "src": "28943:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11327,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28943:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28942:9:43"
            },
            "scope": 11352,
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
          "id": 10545,
          "nodeType": "StructuredDocumentation",
          "src": "285:314:43",
          "text": "@author DELV\n @title Hyperdrive\n @notice Math for the Hyperdrive pricing model.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          11352
        ],
        "name": "HyperdriveMath",
        "nameLocation": "607:14:43",
        "scope": 11353,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 43
} as const;
