export const SafeCast = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212204c3b4f01f4c782e362ac498a6d5c17851920852d62f32202c352e34cedf441f164736f6c63430008140033",
        "sourceMap": "343:1864:77:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;343:1864:77;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212204c3b4f01f4c782e362ac498a6d5c17851920852d62f32202c352e34cedf441f164736f6c63430008140033",
        "sourceMap": "343:1864:77:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe unsigned integer casting library that reverts on overflow.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/SafeCast.sol\":\"SafeCast\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
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
                "contracts/src/libraries/SafeCast.sol": "SafeCast"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "id": 17576,
        "exportedSymbols": {
            "IHyperdrive": [
                7616
            ],
            "SafeCast": [
                17575
            ]
        },
        "nodeType": "SourceUnit",
        "src": "40:2168:77",
        "nodes": [
            {
                "id": 17398,
                "nodeType": "PragmaDirective",
                "src": "40:23:77",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 17400,
                "nodeType": "ImportDirective",
                "src": "65:60:77",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 17576,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 17399,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "74:11:77",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 17575,
                "nodeType": "ContractDefinition",
                "src": "343:1864:77",
                "nodes": [
                    {
                        "id": 17431,
                        "nodeType": "FunctionDefinition",
                        "src": "527:190:77",
                        "nodes": [],
                        "body": {
                            "id": 17430,
                            "nodeType": "Block",
                            "src": "591:126:77",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 17415,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "605:15:77",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 17413,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 17409,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17404,
                                                        "src": "607:1:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_rational_5192296858534827628530496329220096_by_1",
                                                            "typeString": "int_const 5192...(26 digits omitted)...0096"
                                                        },
                                                        "id": 17412,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "hexValue": "31",
                                                            "id": 17410,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "611:1:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                "typeString": "int_const 1"
                                                            },
                                                            "value": "1"
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<<",
                                                        "rightExpression": {
                                                            "hexValue": "313132",
                                                            "id": 17411,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "616:3:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_112_by_1",
                                                                "typeString": "int_const 112"
                                                            },
                                                            "value": "112"
                                                        },
                                                        "src": "611:8:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_5192296858534827628530496329220096_by_1",
                                                            "typeString": "int_const 5192...(26 digits omitted)...0096"
                                                        }
                                                    },
                                                    "src": "607:12:77",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 17414,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "606:14:77",
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
                                    "id": 17422,
                                    "nodeType": "IfStatement",
                                    "src": "601:86:77",
                                    "trueBody": {
                                        "id": 17421,
                                        "nodeType": "Block",
                                        "src": "622:65:77",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 17416,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "643:11:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 17418,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "655:19:77",
                                                        "memberName": "UnsafeCastToUint112",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7573,
                                                        "src": "643:31:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 17419,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "643:33:77",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 17420,
                                                "nodeType": "RevertStatement",
                                                "src": "636:40:77"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 17428,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17423,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17407,
                                            "src": "696:1:77",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint112",
                                                "typeString": "uint112"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 17426,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17404,
                                                    "src": "708:1:77",
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
                                                "id": 17425,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "700:7:77",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint112_$",
                                                    "typeString": "type(uint112)"
                                                },
                                                "typeName": {
                                                    "id": 17424,
                                                    "name": "uint112",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "700:7:77",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 17427,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "700:10:77",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint112",
                                                "typeString": "uint112"
                                            }
                                        },
                                        "src": "696:14:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint112",
                                            "typeString": "uint112"
                                        }
                                    },
                                    "id": 17429,
                                    "nodeType": "ExpressionStatement",
                                    "src": "696:14:77"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 17402,
                            "nodeType": "StructuredDocumentation",
                            "src": "366:156:77",
                            "text": "@notice This function safely casts a uint256 to a uint112.\n @param x The uint256 to cast to uint112.\n @return y The uint112 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toUint112",
                        "nameLocation": "536:9:77",
                        "parameters": {
                            "id": 17405,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17404,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "554:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17431,
                                    "src": "546:9:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 17403,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "546:7:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "545:11:77"
                        },
                        "returnParameters": {
                            "id": 17408,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17407,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "588:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17431,
                                    "src": "580:9:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint112",
                                        "typeString": "uint112"
                                    },
                                    "typeName": {
                                        "id": 17406,
                                        "name": "uint112",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "580:7:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint112",
                                            "typeString": "uint112"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "579:11:77"
                        },
                        "scope": 17575,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 17461,
                        "nodeType": "FunctionDefinition",
                        "src": "884:190:77",
                        "nodes": [],
                        "body": {
                            "id": 17460,
                            "nodeType": "Block",
                            "src": "948:126:77",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 17445,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "962:15:77",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 17443,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 17439,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17434,
                                                        "src": "964:1:77",
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
                                                        "id": 17442,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "hexValue": "31",
                                                            "id": 17440,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "968:1:77",
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
                                                            "id": 17441,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "973:3:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_128_by_1",
                                                                "typeString": "int_const 128"
                                                            },
                                                            "value": "128"
                                                        },
                                                        "src": "968:8:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                                                            "typeString": "int_const 3402...(31 digits omitted)...1456"
                                                        }
                                                    },
                                                    "src": "964:12:77",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 17444,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "963:14:77",
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
                                    "id": 17452,
                                    "nodeType": "IfStatement",
                                    "src": "958:86:77",
                                    "trueBody": {
                                        "id": 17451,
                                        "nodeType": "Block",
                                        "src": "979:65:77",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 17446,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "1000:11:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 17448,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1012:19:77",
                                                        "memberName": "UnsafeCastToUint128",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7576,
                                                        "src": "1000:31:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 17449,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1000:33:77",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 17450,
                                                "nodeType": "RevertStatement",
                                                "src": "993:40:77"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 17458,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17453,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17437,
                                            "src": "1053:1:77",
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
                                                    "id": 17456,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17434,
                                                    "src": "1065:1:77",
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
                                                "id": 17455,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1057:7:77",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint128_$",
                                                    "typeString": "type(uint128)"
                                                },
                                                "typeName": {
                                                    "id": 17454,
                                                    "name": "uint128",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1057:7:77",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 17457,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1057:10:77",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "1053:14:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 17459,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1053:14:77"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 17432,
                            "nodeType": "StructuredDocumentation",
                            "src": "723:156:77",
                            "text": "@notice This function safely casts a uint256 to a uint128.\n @param x The uint256 to cast to uint128.\n @return y The uint128 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toUint128",
                        "nameLocation": "893:9:77",
                        "parameters": {
                            "id": 17435,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17434,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "911:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17461,
                                    "src": "903:9:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 17433,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "903:7:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "902:11:77"
                        },
                        "returnParameters": {
                            "id": 17438,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17437,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "945:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17461,
                                    "src": "937:9:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 17436,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "937:7:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "936:11:77"
                        },
                        "scope": 17575,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 17499,
                        "nodeType": "FunctionDefinition",
                        "src": "1240:212:77",
                        "nodes": [],
                        "body": {
                            "id": 17498,
                            "nodeType": "Block",
                            "src": "1302:150:77",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 17480,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1316:33:77",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 17478,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 17469,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17464,
                                                        "src": "1318:1:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<=",
                                                    "rightExpression": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 17474,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "1336:6:77",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_int128_$",
                                                                                "typeString": "type(int128)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 17473,
                                                                                "name": "int128",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "1336:6:77",
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
                                                                        "id": 17472,
                                                                        "name": "type",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -27,
                                                                        "src": "1331:4:77",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                            "typeString": "function () pure"
                                                                        }
                                                                    },
                                                                    "id": 17475,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "1331:12:77",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_meta_type_t_int128",
                                                                        "typeString": "type(int128)"
                                                                    }
                                                                },
                                                                "id": 17476,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "1344:3:77",
                                                                "memberName": "max",
                                                                "nodeType": "MemberAccess",
                                                                "src": "1331:16:77",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int128",
                                                                    "typeString": "int128"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_int128",
                                                                    "typeString": "int128"
                                                                }
                                                            ],
                                                            "id": 17471,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "1323:7:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint128_$",
                                                                "typeString": "type(uint128)"
                                                            },
                                                            "typeName": {
                                                                "id": 17470,
                                                                "name": "uint128",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "1323:7:77",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 17477,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1323:25:77",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "1318:30:77",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 17479,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1317:32:77",
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
                                    "id": 17487,
                                    "nodeType": "IfStatement",
                                    "src": "1312:103:77",
                                    "trueBody": {
                                        "id": 17486,
                                        "nodeType": "Block",
                                        "src": "1351:64:77",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 17481,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "1372:11:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 17483,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1384:18:77",
                                                        "memberName": "UnsafeCastToInt128",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7579,
                                                        "src": "1372:30:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 17484,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1372:32:77",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 17485,
                                                "nodeType": "RevertStatement",
                                                "src": "1365:39:77"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 17496,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17488,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17467,
                                            "src": "1424:1:77",
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
                                                    "arguments": [
                                                        {
                                                            "id": 17493,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17464,
                                                            "src": "1442:1:77",
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
                                                        "id": 17492,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1435:6:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_int256_$",
                                                            "typeString": "type(int256)"
                                                        },
                                                        "typeName": {
                                                            "id": 17491,
                                                            "name": "int256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1435:6:77",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 17494,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1435:9:77",
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
                                                "id": 17490,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1428:6:77",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int128_$",
                                                    "typeString": "type(int128)"
                                                },
                                                "typeName": {
                                                    "id": 17489,
                                                    "name": "int128",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1428:6:77",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 17495,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1428:17:77",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "1424:21:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 17497,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1424:21:77"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 17462,
                            "nodeType": "StructuredDocumentation",
                            "src": "1080:155:77",
                            "text": "@notice This function safely casts an uint256 to an int128.\n @param x The uint256 to cast to int128.\n @return y The int128 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt128",
                        "nameLocation": "1249:8:77",
                        "parameters": {
                            "id": 17465,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17464,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1266:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17499,
                                    "src": "1258:9:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 17463,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1258:7:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1257:11:77"
                        },
                        "returnParameters": {
                            "id": 17468,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17467,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1299:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17499,
                                    "src": "1292:8:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int128",
                                        "typeString": "int128"
                                    },
                                    "typeName": {
                                        "id": 17466,
                                        "name": "int128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1292:6:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1291:10:77"
                        },
                        "scope": 17575,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 17539,
                        "nodeType": "FunctionDefinition",
                        "src": "1616:219:77",
                        "nodes": [],
                        "body": {
                            "id": 17538,
                            "nodeType": "Block",
                            "src": "1677:158:77",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 17523,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1691:49:77",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 17521,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        },
                                                        "id": 17513,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 17507,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17502,
                                                            "src": "1693:1:77",
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
                                                                        "id": 17510,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "1703:6:77",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_int128_$",
                                                                            "typeString": "type(int128)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 17509,
                                                                            "name": "int128",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "1703:6:77",
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
                                                                    "id": 17508,
                                                                    "name": "type",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -27,
                                                                    "src": "1698:4:77",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 17511,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1698:12:77",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_meta_type_t_int128",
                                                                    "typeString": "type(int128)"
                                                                }
                                                            },
                                                            "id": 17512,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1711:3:77",
                                                            "memberName": "min",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1698:16:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int128",
                                                                "typeString": "int128"
                                                            }
                                                        },
                                                        "src": "1693:21:77",
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
                                                        "id": 17520,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 17514,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17502,
                                                            "src": "1718:1:77",
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
                                                                        "id": 17517,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "1728:6:77",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_int128_$",
                                                                            "typeString": "type(int128)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 17516,
                                                                            "name": "int128",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "1728:6:77",
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
                                                                    "id": 17515,
                                                                    "name": "type",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -27,
                                                                    "src": "1723:4:77",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 17518,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1723:12:77",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_meta_type_t_int128",
                                                                    "typeString": "type(int128)"
                                                                }
                                                            },
                                                            "id": 17519,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1736:3:77",
                                                            "memberName": "max",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1723:16:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int128",
                                                                "typeString": "int128"
                                                            }
                                                        },
                                                        "src": "1718:21:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "1693:46:77",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 17522,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1692:48:77",
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
                                    "id": 17530,
                                    "nodeType": "IfStatement",
                                    "src": "1687:119:77",
                                    "trueBody": {
                                        "id": 17529,
                                        "nodeType": "Block",
                                        "src": "1742:64:77",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 17524,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "1763:11:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 17526,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1775:18:77",
                                                        "memberName": "UnsafeCastToInt128",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7579,
                                                        "src": "1763:30:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 17527,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1763:32:77",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 17528,
                                                "nodeType": "RevertStatement",
                                                "src": "1756:39:77"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 17536,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17531,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17505,
                                            "src": "1815:1:77",
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
                                                    "id": 17534,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17502,
                                                    "src": "1826:1:77",
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
                                                "id": 17533,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1819:6:77",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int128_$",
                                                    "typeString": "type(int128)"
                                                },
                                                "typeName": {
                                                    "id": 17532,
                                                    "name": "int128",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1819:6:77",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 17535,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1819:9:77",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "1815:13:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 17537,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1815:13:77"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 17500,
                            "nodeType": "StructuredDocumentation",
                            "src": "1458:153:77",
                            "text": "@notice This function safely casts an int256 to an int128.\n @param x The int256 to cast to int128.\n @return y The int128 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt128",
                        "nameLocation": "1625:8:77",
                        "parameters": {
                            "id": 17503,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17502,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1641:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17539,
                                    "src": "1634:8:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 17501,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1634:6:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1633:10:77"
                        },
                        "returnParameters": {
                            "id": 17506,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17505,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1674:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17539,
                                    "src": "1667:8:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int128",
                                        "typeString": "int128"
                                    },
                                    "typeName": {
                                        "id": 17504,
                                        "name": "int128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1667:6:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1666:10:77"
                        },
                        "scope": 17575,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 17574,
                        "nodeType": "FunctionDefinition",
                        "src": "2001:204:77",
                        "nodes": [],
                        "body": {
                            "id": 17573,
                            "nodeType": "Block",
                            "src": "2063:142:77",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 17558,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "2077:33:77",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 17556,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 17547,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17542,
                                                        "src": "2079:1:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<=",
                                                    "rightExpression": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 17552,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "2097:6:77",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_int256_$",
                                                                                "typeString": "type(int256)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 17551,
                                                                                "name": "int256",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "2097:6:77",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_type$_t_int256_$",
                                                                                "typeString": "type(int256)"
                                                                            }
                                                                        ],
                                                                        "id": 17550,
                                                                        "name": "type",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -27,
                                                                        "src": "2092:4:77",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                            "typeString": "function () pure"
                                                                        }
                                                                    },
                                                                    "id": 17553,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "2092:12:77",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_meta_type_t_int256",
                                                                        "typeString": "type(int256)"
                                                                    }
                                                                },
                                                                "id": 17554,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "2105:3:77",
                                                                "memberName": "max",
                                                                "nodeType": "MemberAccess",
                                                                "src": "2092:16:77",
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
                                                            "id": 17549,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2084:7:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                                "typeString": "type(uint256)"
                                                            },
                                                            "typeName": {
                                                                "id": 17548,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2084:7:77",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 17555,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2084:25:77",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2079:30:77",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 17557,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "2078:32:77",
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
                                    "id": 17565,
                                    "nodeType": "IfStatement",
                                    "src": "2073:103:77",
                                    "trueBody": {
                                        "id": 17564,
                                        "nodeType": "Block",
                                        "src": "2112:64:77",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 17559,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "2133:11:77",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 17561,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2145:18:77",
                                                        "memberName": "UnsafeCastToInt256",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7582,
                                                        "src": "2133:30:77",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 17562,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2133:32:77",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 17563,
                                                "nodeType": "RevertStatement",
                                                "src": "2126:39:77"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 17571,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17566,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17545,
                                            "src": "2185:1:77",
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
                                                    "id": 17569,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17542,
                                                    "src": "2196:1:77",
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
                                                "id": 17568,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2189:6:77",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int256_$",
                                                    "typeString": "type(int256)"
                                                },
                                                "typeName": {
                                                    "id": 17567,
                                                    "name": "int256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2189:6:77",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 17570,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2189:9:77",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "2185:13:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 17572,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2185:13:77"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 17540,
                            "nodeType": "StructuredDocumentation",
                            "src": "1841:155:77",
                            "text": "@notice This function safely casts an uint256 to an int256.\n @param x The uint256 to cast to int256.\n @return y The int256 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt256",
                        "nameLocation": "2010:8:77",
                        "parameters": {
                            "id": 17543,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17542,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2027:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17574,
                                    "src": "2019:9:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 17541,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2019:7:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2018:11:77"
                        },
                        "returnParameters": {
                            "id": 17546,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17545,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "2060:1:77",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17574,
                                    "src": "2053:8:77",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 17544,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2053:6:77",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2052:10:77"
                        },
                        "scope": 17575,
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
                    "id": 17401,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:216:77",
                    "text": "@notice Safe unsigned integer casting library that reverts on overflow.\n @author Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    17575
                ],
                "name": "SafeCast",
                "nameLocation": "351:8:77",
                "scope": 17576,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 77
};
