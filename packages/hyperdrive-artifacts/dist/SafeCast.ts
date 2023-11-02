export const SafeCast = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203e42000d4c5d5fbbbdcb2e1ed77de8b8628a3e76363b01e3170d91341ff74da364736f6c63430008130033",
    "sourceMap": "456:759:34:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;456:759:34;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203e42000d4c5d5fbbbdcb2e1ed77de8b8628a3e76363b01e3170d91341ff74da364736f6c63430008130033",
    "sourceMap": "456:759:34:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Inspired by Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeCastLib.sol)Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe unsigned integer casting library that reverts on overflow.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/SafeCast.sol\":\"SafeCast\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
        "contracts/src/libraries/SafeCast.sol": "SafeCast"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        "urls": [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"
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
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
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
    "absolutePath": "contracts/src/libraries/SafeCast.sol",
    "id": 10849,
    "exportedSymbols": {
      "IHyperdrive": [
        7103
      ],
      "SafeCast": [
        10848
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:1176:34",
    "nodes": [
      {
        "id": 10774,
        "nodeType": "PragmaDirective",
        "src": "40:23:34",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 10776,
        "nodeType": "ImportDirective",
        "src": "65:60:34",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 10849,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 10775,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "74:11:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 10848,
        "nodeType": "ContractDefinition",
        "src": "456:759:34",
        "nodes": [
          {
            "id": 10807,
            "nodeType": "FunctionDefinition",
            "src": "640:190:34",
            "nodes": [],
            "body": {
              "id": 10806,
              "nodeType": "Block",
              "src": "704:126:34",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 10791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "718:15:34",
                    "subExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10789,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 10785,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10780,
                            "src": "720:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                              "typeString": "int_const 3402...(31 digits omitted)...1456"
                            },
                            "id": 10788,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                              "hexValue": "31",
                              "id": 10786,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "724:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<<",
                            "rightExpression": {
                              "hexValue": "313238",
                              "id": 10787,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "729:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_128_by_1",
                                "typeString": "int_const 128"
                              },
                              "value": "128"
                            },
                            "src": "724:8:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                              "typeString": "int_const 3402...(31 digits omitted)...1456"
                            }
                          },
                          "src": "720:12:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 10790,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "719:14:34",
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
                  "id": 10798,
                  "nodeType": "IfStatement",
                  "src": "714:86:34",
                  "trueBody": {
                    "id": 10797,
                    "nodeType": "Block",
                    "src": "735:65:34",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 10792,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "756:11:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 10794,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "768:19:34",
                            "memberName": "UnsafeCastToUint128",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7100,
                            "src": "756:31:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 10795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "756:33:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 10796,
                        "nodeType": "RevertStatement",
                        "src": "749:40:34"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 10804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10799,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10783,
                      "src": "809:1:34",
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
                          "id": 10802,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10780,
                          "src": "821:1:34",
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
                        "id": 10801,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "813:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint128_$",
                          "typeString": "type(uint128)"
                        },
                        "typeName": {
                          "id": 10800,
                          "name": "uint128",
                          "nodeType": "ElementaryTypeName",
                          "src": "813:7:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 10803,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "813:10:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "809:14:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 10805,
                  "nodeType": "ExpressionStatement",
                  "src": "809:14:34"
                }
              ]
            },
            "documentation": {
              "id": 10778,
              "nodeType": "StructuredDocumentation",
              "src": "479:156:34",
              "text": "@notice This function safely casts a uint256 to a uint128.\n @param x The uint256 to cast to uint128.\n @return y The uint128 casted from x."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toUint128",
            "nameLocation": "649:9:34",
            "parameters": {
              "id": 10781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10780,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "667:1:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10807,
                  "src": "659:9:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10779,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "659:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "658:11:34"
            },
            "returnParameters": {
              "id": 10784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10783,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "701:1:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10807,
                  "src": "693:9:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 10782,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "692:11:34"
            },
            "scope": 10848,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 10847,
            "nodeType": "FunctionDefinition",
            "src": "994:219:34",
            "nodes": [],
            "body": {
              "id": 10846,
              "nodeType": "Block",
              "src": "1055:158:34",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 10831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1069:49:34",
                    "subExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 10829,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 10821,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 10815,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10810,
                              "src": "1071:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 10818,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "1081:6:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int128_$",
                                      "typeString": "type(int128)"
                                    },
                                    "typeName": {
                                      "id": 10817,
                                      "name": "int128",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1081:6:34",
                                      "typeDescriptions": {}
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_type$_t_int128_$",
                                      "typeString": "type(int128)"
                                    }
                                  ],
                                  "id": 10816,
                                  "name": "type",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -27,
                                  "src": "1076:4:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 10819,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1076:12:34",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_meta_type_t_int128",
                                  "typeString": "type(int128)"
                                }
                              },
                              "id": 10820,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "1089:3:34",
                              "memberName": "min",
                              "nodeType": "MemberAccess",
                              "src": "1076:16:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            "src": "1071:21:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 10828,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 10822,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10810,
                              "src": "1096:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 10825,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "1106:6:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int128_$",
                                      "typeString": "type(int128)"
                                    },
                                    "typeName": {
                                      "id": 10824,
                                      "name": "int128",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1106:6:34",
                                      "typeDescriptions": {}
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_type$_t_int128_$",
                                      "typeString": "type(int128)"
                                    }
                                  ],
                                  "id": 10823,
                                  "name": "type",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -27,
                                  "src": "1101:4:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 10826,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1101:12:34",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_meta_type_t_int128",
                                  "typeString": "type(int128)"
                                }
                              },
                              "id": 10827,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "1114:3:34",
                              "memberName": "max",
                              "nodeType": "MemberAccess",
                              "src": "1101:16:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            "src": "1096:21:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1071:46:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 10830,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1070:48:34",
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
                  "id": 10838,
                  "nodeType": "IfStatement",
                  "src": "1065:119:34",
                  "trueBody": {
                    "id": 10837,
                    "nodeType": "Block",
                    "src": "1120:64:34",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 10832,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "1141:11:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 10834,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1153:18:34",
                            "memberName": "UnsafeCastToInt128",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7102,
                            "src": "1141:30:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 10835,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1141:32:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 10836,
                        "nodeType": "RevertStatement",
                        "src": "1134:39:34"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 10844,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10839,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10813,
                      "src": "1193:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 10842,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10810,
                          "src": "1204:1:34",
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
                        "id": 10841,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1197:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int128_$",
                          "typeString": "type(int128)"
                        },
                        "typeName": {
                          "id": 10840,
                          "name": "int128",
                          "nodeType": "ElementaryTypeName",
                          "src": "1197:6:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 10843,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1197:9:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "src": "1193:13:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "id": 10845,
                  "nodeType": "ExpressionStatement",
                  "src": "1193:13:34"
                }
              ]
            },
            "documentation": {
              "id": 10808,
              "nodeType": "StructuredDocumentation",
              "src": "836:153:34",
              "text": "@notice This function safely casts an int256 to an int128.\n @param x The int256 to cast to int128.\n @return y The int128 casted from x."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toInt128",
            "nameLocation": "1003:8:34",
            "parameters": {
              "id": 10811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10810,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1019:1:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10847,
                  "src": "1012:8:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 10809,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1012:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1011:10:34"
            },
            "returnParameters": {
              "id": 10814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10813,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1052:1:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10847,
                  "src": "1045:8:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int128",
                    "typeString": "int128"
                  },
                  "typeName": {
                    "id": 10812,
                    "name": "int128",
                    "nodeType": "ElementaryTypeName",
                    "src": "1045:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1044:10:34"
            },
            "scope": 10848,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SafeCast",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 10777,
          "nodeType": "StructuredDocumentation",
          "src": "127:329:34",
          "text": "@notice Safe unsigned integer casting library that reverts on overflow.\n @author Inspired by Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeCastLib.sol)\n @author Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          10848
        ],
        "name": "SafeCast",
        "nameLocation": "464:8:34",
        "scope": 10849,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 34
} as const;
