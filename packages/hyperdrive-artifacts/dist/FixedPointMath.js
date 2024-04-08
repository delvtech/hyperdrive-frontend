export const FixedPointMath = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b1e4f18c3294acd698b6f7ab2d86fbd53024962eee32d32f7f4ed14001955c9664736f6c63430008140033",
        "sourceMap": "507:15643:122:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;507:15643:122;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b1e4f18c3294acd698b6f7ab2d86fbd53024962eee32d32f7f4ed14001955c9664736f6c63430008140033",
        "sourceMap": "507:15643:122:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"FixedPointMath\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"A fixed-point math library.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/FixedPointMath.sol\":\"FixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]}},\"version\":1}",
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
                "contracts/src/libraries/FixedPointMath.sol": "FixedPointMath"
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
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
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
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "id": 18823,
        "exportedSymbols": {
            "FixedPointMath": [
                18822
            ],
            "IHyperdrive": [
                10351
            ],
            "ONE": [
                18039
            ],
            "SafeCast": [
                21815
            ]
        },
        "nodeType": "SourceUnit",
        "src": "40:16111:122",
        "nodes": [
            {
                "id": 18032,
                "nodeType": "PragmaDirective",
                "src": "40:23:122",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 18034,
                "nodeType": "ImportDirective",
                "src": "65:60:122",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 18823,
                "sourceUnit": 10352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 18033,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10351,
                            "src": "74:11:122",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 18036,
                "nodeType": "ImportDirective",
                "src": "126:42:122",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/SafeCast.sol",
                "file": "./SafeCast.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 18823,
                "sourceUnit": 21816,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 18035,
                            "name": "SafeCast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21815,
                            "src": "135:8:122",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 18039,
                "nodeType": "VariableDeclaration",
                "src": "170:27:122",
                "nodes": [],
                "constant": true,
                "mutability": "constant",
                "name": "ONE",
                "nameLocation": "187:3:122",
                "scope": 18823,
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                },
                "typeName": {
                    "id": 18037,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "170:7:122",
                    "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                    }
                },
                "value": {
                    "hexValue": "31653138",
                    "id": 18038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "193:4:122",
                    "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                        "typeString": "int_const 1000000000000000000"
                    },
                    "value": "1e18"
                },
                "visibility": "internal"
            },
            {
                "id": 18822,
                "nodeType": "ContractDefinition",
                "src": "507:15643:122",
                "nodes": [
                    {
                        "id": 18043,
                        "nodeType": "UsingForDirective",
                        "src": "536:33:122",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 18041,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "542:14:122"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "542:14:122"
                        },
                        "typeName": {
                            "id": 18042,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "561:7:122",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 18046,
                        "nodeType": "UsingForDirective",
                        "src": "574:27:122",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 18044,
                            "name": "SafeCast",
                            "nameLocations": [
                                "580:8:122"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 21815,
                            "src": "580:8:122"
                        },
                        "typeName": {
                            "id": 18045,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "593:7:122",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 18053,
                        "nodeType": "VariableDeclaration",
                        "src": "607:52:122",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "MAX_UINT256",
                        "nameLocation": "633:11:122",
                        "scope": 18822,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18047,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "607:7:122",
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
                            "id": 18052,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                                "commonType": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                },
                                "id": 18050,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                    "hexValue": "32",
                                    "id": 18048,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "647:1:122",
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
                                    "id": 18049,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "652:3:122",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_rational_256_by_1",
                                        "typeString": "int_const 256"
                                    },
                                    "value": "256"
                                },
                                "src": "647:8:122",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                                    "typeString": "int_const 1157...(70 digits omitted)...9936"
                                }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                                "hexValue": "31",
                                "id": 18051,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "658:1:122",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                },
                                "value": "1"
                            },
                            "src": "647:12:122",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                                "typeString": "int_const 1157...(70 digits omitted)...9935"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18067,
                        "nodeType": "FunctionDefinition",
                        "src": "898:556:122",
                        "nodes": [],
                        "body": {
                            "id": 18066,
                            "nodeType": "Block",
                            "src": "1025:429:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "1087:361:122",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "1300:44:122",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1325:1:122",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "1328:1:122",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1318:6:122"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "1318:12:122"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "1318:12:122"
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
                                                                    "src": "1229:11:122"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "1253:1:122"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "1259:1:122"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1266:11:122"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "1279:1:122"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "1262:3:122"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "1262:19:122"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "1256:2:122"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "1256:26:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "1249:3:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "1249:34:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1242:6:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "1242:42:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1225:3:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1225:60:122"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1201:6:122"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1201:98:122"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "1198:146:122"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "1406:32:122",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "x",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1419:1:122"
                                                                },
                                                                {
                                                                    "name": "y",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1422:1:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1415:3:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1415:9:122"
                                                        },
                                                        {
                                                            "name": "denominator",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1426:11:122"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "div",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1411:3:122"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1411:27:122"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1406:1:122"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 18053,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1266:11:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18060,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1229:11:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18060,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1426:11:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18056,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1259:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18056,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1419:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18058,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1253:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18058,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1279:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18058,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1422:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18063,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1406:1:122",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 18065,
                                    "nodeType": "InlineAssembly",
                                    "src": "1078:370:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18054,
                            "nodeType": "StructuredDocumentation",
                            "src": "666:227:122",
                            "text": "@param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded down."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivDown",
                        "nameLocation": "907:10:122",
                        "parameters": {
                            "id": 18061,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18056,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "935:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18067,
                                    "src": "927:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18055,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "927:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18058,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "954:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18067,
                                    "src": "946:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18057,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "946:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18060,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "973:11:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18067,
                                    "src": "965:19:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18059,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "965:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "917:73:122"
                        },
                        "returnParameters": {
                            "id": 18064,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18063,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "1022:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18067,
                                    "src": "1014:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18062,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1014:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1013:11:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18085,
                        "nodeType": "FunctionDefinition",
                        "src": "1610:118:122",
                        "nodes": [],
                        "body": {
                            "id": 18084,
                            "nodeType": "Block",
                            "src": "1681:47:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 18078,
                                                        "name": "a",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18070,
                                                        "src": "1710:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 18079,
                                                        "name": "b",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18072,
                                                        "src": "1713:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 18080,
                                                        "name": "ONE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18039,
                                                        "src": "1716:3:122",
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
                                                        }
                                                    ],
                                                    "id": 18077,
                                                    "name": "mulDivDown",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18067,
                                                    "src": "1699:10:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 18081,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1699:21:122",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 18082,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1698:23:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 18076,
                                    "id": 18083,
                                    "nodeType": "Return",
                                    "src": "1691:30:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18068,
                            "nodeType": "StructuredDocumentation",
                            "src": "1460:145:122",
                            "text": "@param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a * b rounded down."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDown",
                        "nameLocation": "1619:7:122",
                        "parameters": {
                            "id": 18073,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18070,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "1635:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18085,
                                    "src": "1627:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18069,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1627:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18072,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "1646:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18085,
                                    "src": "1638:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18071,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1638:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1626:22:122"
                        },
                        "returnParameters": {
                            "id": 18076,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18075,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18085,
                                    "src": "1672:7:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18074,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1672:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1671:9:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18103,
                        "nodeType": "FunctionDefinition",
                        "src": "1884:164:122",
                        "nodes": [],
                        "body": {
                            "id": 18102,
                            "nodeType": "Block",
                            "src": "1955:93:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 18096,
                                                        "name": "a",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18088,
                                                        "src": "1984:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 18097,
                                                        "name": "ONE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18039,
                                                        "src": "1987:3:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 18098,
                                                        "name": "b",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18090,
                                                        "src": "1992:1:122",
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
                                                        }
                                                    ],
                                                    "id": 18095,
                                                    "name": "mulDivDown",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18067,
                                                    "src": "1973:10:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 18099,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1973:21:122",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 18100,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "1972:23:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 18094,
                                    "id": 18101,
                                    "nodeType": "Return",
                                    "src": "1965:30:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18086,
                            "nodeType": "StructuredDocumentation",
                            "src": "1734:145:122",
                            "text": "@param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a / b rounded down."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divDown",
                        "nameLocation": "1893:7:122",
                        "parameters": {
                            "id": 18091,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18088,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "1909:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18103,
                                    "src": "1901:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18087,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1901:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18090,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "1920:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18103,
                                    "src": "1912:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18089,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1912:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1900:22:122"
                        },
                        "returnParameters": {
                            "id": 18094,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18093,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18103,
                                    "src": "1946:7:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18092,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1946:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1945:9:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18117,
                        "nodeType": "FunctionDefinition",
                        "src": "2284:748:122",
                        "nodes": [],
                        "body": {
                            "id": 18116,
                            "nodeType": "Block",
                            "src": "2409:623:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "2471:555:122",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "2684:44:122",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2709:1:122",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "2712:1:122",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2702:6:122"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2702:12:122"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "2702:12:122"
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
                                                                    "src": "2613:11:122"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2637:1:122"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "2643:1:122"
                                                                                        },
                                                                                        {
                                                                                            "arguments": [
                                                                                                {
                                                                                                    "name": "MAX_UINT256",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2650:11:122"
                                                                                                },
                                                                                                {
                                                                                                    "name": "y",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "2663:1:122"
                                                                                                }
                                                                                            ],
                                                                                            "functionName": {
                                                                                                "name": "div",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "2646:3:122"
                                                                                            },
                                                                                            "nodeType": "YulFunctionCall",
                                                                                            "src": "2646:19:122"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "gt",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "2640:2:122"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "2640:26:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2633:3:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2633:34:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "iszero",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2626:6:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2626:42:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2609:3:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2609:60:122"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2585:6:122"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2585:98:122"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "2582:146:122"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2897:119:122",
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
                                                                                    "src": "2934:1:122"
                                                                                },
                                                                                {
                                                                                    "name": "y",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "2937:1:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "mul",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "2930:3:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "2930:9:122"
                                                                        },
                                                                        {
                                                                            "name": "denominator",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2941:11:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mod",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2926:3:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2926:27:122"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2955:1:122",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2923:2:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2923:34:122"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2983:1:122"
                                                                        },
                                                                        {
                                                                            "name": "y",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2986:1:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "mul",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2979:3:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2979:9:122"
                                                                },
                                                                {
                                                                    "name": "denominator",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2990:11:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "div",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2975:3:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2975:27:122"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2902:3:122"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2902:114:122"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "z",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2897:1:122"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "documentation": "@solidity memory-safe-assembly",
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 18053,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2650:11:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18110,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2613:11:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18110,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2941:11:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18110,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2990:11:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18106,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2643:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18106,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2934:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18106,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2983:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18108,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2637:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18108,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2663:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18108,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2937:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18108,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2986:1:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18113,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "2897:1:122",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 18115,
                                    "nodeType": "InlineAssembly",
                                    "src": "2462:564:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18104,
                            "nodeType": "StructuredDocumentation",
                            "src": "2054:225:122",
                            "text": "@param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded up."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulDivUp",
                        "nameLocation": "2293:8:122",
                        "parameters": {
                            "id": 18111,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18106,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2319:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18117,
                                    "src": "2311:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18105,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2311:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18108,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "2338:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18117,
                                    "src": "2330:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18107,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2330:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18110,
                                    "mutability": "mutable",
                                    "name": "denominator",
                                    "nameLocation": "2357:11:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18117,
                                    "src": "2349:19:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18109,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2349:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2301:73:122"
                        },
                        "returnParameters": {
                            "id": 18114,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18113,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "2406:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18117,
                                    "src": "2398:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18112,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2398:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2397:11:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18135,
                        "nodeType": "FunctionDefinition",
                        "src": "3190:114:122",
                        "nodes": [],
                        "body": {
                            "id": 18134,
                            "nodeType": "Block",
                            "src": "3259:45:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 18128,
                                                        "name": "a",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18120,
                                                        "src": "3286:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 18129,
                                                        "name": "b",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18122,
                                                        "src": "3289:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 18130,
                                                        "name": "ONE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18039,
                                                        "src": "3292:3:122",
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
                                                        }
                                                    ],
                                                    "id": 18127,
                                                    "name": "mulDivUp",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18117,
                                                    "src": "3277:8:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 18131,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3277:19:122",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 18132,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "3276:21:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 18126,
                                    "id": 18133,
                                    "nodeType": "Return",
                                    "src": "3269:28:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18118,
                            "nodeType": "StructuredDocumentation",
                            "src": "3038:147:122",
                            "text": "@param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a * b rounded up."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mulUp",
                        "nameLocation": "3199:5:122",
                        "parameters": {
                            "id": 18123,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18120,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "3213:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18135,
                                    "src": "3205:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18119,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3205:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18122,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "3224:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18135,
                                    "src": "3216:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18121,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3216:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3204:22:122"
                        },
                        "returnParameters": {
                            "id": 18126,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18125,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18135,
                                    "src": "3250:7:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18124,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3250:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3249:9:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18153,
                        "nodeType": "FunctionDefinition",
                        "src": "3462:114:122",
                        "nodes": [],
                        "body": {
                            "id": 18152,
                            "nodeType": "Block",
                            "src": "3531:45:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 18146,
                                                        "name": "a",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18138,
                                                        "src": "3558:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 18147,
                                                        "name": "ONE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18039,
                                                        "src": "3561:3:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 18148,
                                                        "name": "b",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18140,
                                                        "src": "3566:1:122",
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
                                                        }
                                                    ],
                                                    "id": 18145,
                                                    "name": "mulDivUp",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18117,
                                                    "src": "3549:8:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 18149,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3549:19:122",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 18150,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "3548:21:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 18144,
                                    "id": 18151,
                                    "nodeType": "Return",
                                    "src": "3541:28:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18136,
                            "nodeType": "StructuredDocumentation",
                            "src": "3310:147:122",
                            "text": "@param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a / b rounded up."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "divUp",
                        "nameLocation": "3471:5:122",
                        "parameters": {
                            "id": 18141,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18138,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "3485:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18153,
                                    "src": "3477:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18137,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3477:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18140,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "3496:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18153,
                                    "src": "3488:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18139,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3488:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3476:22:122"
                        },
                        "returnParameters": {
                            "id": 18144,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18143,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18153,
                                    "src": "3522:7:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18142,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3522:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3521:9:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18210,
                        "nodeType": "FunctionDefinition",
                        "src": "3811:844:122",
                        "nodes": [],
                        "body": {
                            "id": 18209,
                            "nodeType": "Block",
                            "src": "3878:777:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 18165,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 18163,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18158,
                                            "src": "3935:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 18164,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3940:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "3935:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 18169,
                                    "nodeType": "IfStatement",
                                    "src": "3931:47:122",
                                    "trueBody": {
                                        "id": 18168,
                                        "nodeType": "Block",
                                        "src": "3943:35:122",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 18166,
                                                    "name": "ONE",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18039,
                                                    "src": "3964:3:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 18162,
                                                "id": 18167,
                                                "nodeType": "Return",
                                                "src": "3957:10:122"
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
                                        "id": 18172,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 18170,
                                            "name": "x",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18156,
                                            "src": "4031:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 18171,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4036:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4031:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 18176,
                                    "nodeType": "IfStatement",
                                    "src": "4027:45:122",
                                    "trueBody": {
                                        "id": 18175,
                                        "nodeType": "Block",
                                        "src": "4039:33:122",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "30",
                                                    "id": 18173,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4060:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "functionReturnParameters": 18162,
                                                "id": 18174,
                                                "nodeType": "Return",
                                                "src": "4053:8:122"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        18178
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 18178,
                                            "mutability": "mutable",
                                            "name": "y_int256",
                                            "nameLocation": "4217:8:122",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 18209,
                                            "src": "4210:15:122",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 18177,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4210:6:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 18182,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "id": 18179,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18158,
                                                "src": "4228:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 18180,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4230:8:122",
                                            "memberName": "toInt256",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21814,
                                            "src": "4228:10:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256) pure returns (int256)"
                                            }
                                        },
                                        "id": 18181,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4228:12:122",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4210:30:122"
                                },
                                {
                                    "assignments": [
                                        18184
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 18184,
                                            "mutability": "mutable",
                                            "name": "lnx",
                                            "nameLocation": "4409:3:122",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 18209,
                                            "src": "4402:10:122",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 18183,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4402:6:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 18190,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "expression": {
                                                        "id": 18186,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18156,
                                                        "src": "4418:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 18187,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4420:8:122",
                                                    "memberName": "toInt256",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 21814,
                                                    "src": "4418:10:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256) pure returns (int256)"
                                                    }
                                                },
                                                "id": 18188,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4418:12:122",
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
                                            "id": 18185,
                                            "name": "ln",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18629,
                                            "src": "4415:2:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                                "typeString": "function (int256) pure returns (int256)"
                                            }
                                        },
                                        "id": 18189,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4415:16:122",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4402:29:122"
                                },
                                {
                                    "assignments": [
                                        18192
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 18192,
                                            "mutability": "mutable",
                                            "name": "ylnx",
                                            "nameLocation": "4448:4:122",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 18209,
                                            "src": "4441:11:122",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 18191,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4441:6:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 18193,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4441:11:122"
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "4487:50:122",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "4501:26:122",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "y_int256",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4513:8:122"
                                                        },
                                                        {
                                                            "name": "lnx",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4523:3:122"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mul",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4509:3:122"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4509:18:122"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "ylnx",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4501:4:122"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 18184,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4523:3:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18178,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4513:8:122",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 18192,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4501:4:122",
                                            "valueSize": 1
                                        }
                                    ],
                                    "flags": [
                                        "memory-safe"
                                    ],
                                    "id": 18194,
                                    "nodeType": "InlineAssembly",
                                    "src": "4462:75:122"
                                },
                                {
                                    "expression": {
                                        "id": 18200,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18195,
                                            "name": "ylnx",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18192,
                                            "src": "4546:4:122",
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
                                                    "id": 18198,
                                                    "name": "ONE",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18039,
                                                    "src": "4561:3:122",
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
                                                "id": 18197,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "4554:6:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int256_$",
                                                    "typeString": "type(int256)"
                                                },
                                                "typeName": {
                                                    "id": 18196,
                                                    "name": "int256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "4554:6:122",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 18199,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4554:11:122",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "4546:19:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 18201,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4546:19:122"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 18205,
                                                        "name": "ylnx",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18192,
                                                        "src": "4642:4:122",
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
                                                    "id": 18204,
                                                    "name": "exp",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18407,
                                                    "src": "4638:3:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                                        "typeString": "function (int256) pure returns (int256)"
                                                    }
                                                },
                                                "id": 18206,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4638:9:122",
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
                                            "id": 18203,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "4630:7:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                                "id": 18202,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4630:7:122",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 18207,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4630:18:122",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 18162,
                                    "id": 18208,
                                    "nodeType": "Return",
                                    "src": "4623:25:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18154,
                            "nodeType": "StructuredDocumentation",
                            "src": "3582:224:122",
                            "text": "@dev Exponentiation (x^y) with unsigned 18 decimal fixed point base and exponent.\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @return The result of x^y."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pow",
                        "nameLocation": "3820:3:122",
                        "parameters": {
                            "id": 18159,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18156,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "3832:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18210,
                                    "src": "3824:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18155,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3824:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18158,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "3843:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18210,
                                    "src": "3835:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18157,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3835:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3823:22:122"
                        },
                        "returnParameters": {
                            "id": 18162,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18161,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18210,
                                    "src": "3869:7:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18160,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3869:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3868:9:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18407,
                        "nodeType": "FunctionDefinition",
                        "src": "4907:3302:122",
                        "nodes": [],
                        "body": {
                            "id": 18406,
                            "nodeType": "Block",
                            "src": "4963:3246:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "id": 18405,
                                    "nodeType": "UncheckedBlock",
                                    "src": "4973:3230:122",
                                    "statements": [
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18221,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 18218,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18213,
                                                    "src": "5130:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 18220,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "-",
                                                    "prefix": true,
                                                    "src": "5135:21:122",
                                                    "subExpression": {
                                                        "hexValue": "3432313339363738383534343532373637353531",
                                                        "id": 18219,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "5136:20:122",
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
                                                "src": "5130:26:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 18224,
                                            "nodeType": "IfStatement",
                                            "src": "5126:40:122",
                                            "trueBody": {
                                                "expression": {
                                                    "hexValue": "30",
                                                    "id": 18222,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5165:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "functionReturnParameters": 18217,
                                                "id": 18223,
                                                "nodeType": "Return",
                                                "src": "5158:8:122"
                                            }
                                        },
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18227,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 18225,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18213,
                                                    "src": "5360:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "hexValue": "313335333035393939333638383933323331353839",
                                                    "id": 18226,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5365:21:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_135305999368893231589_by_1",
                                                        "typeString": "int_const 135305999368893231589"
                                                    },
                                                    "value": "135305999368893231589"
                                                },
                                                "src": "5360:26:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 18233,
                                            "nodeType": "IfStatement",
                                            "src": "5356:87:122",
                                            "trueBody": {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 18228,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "5411:11:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 18230,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5423:18:122",
                                                        "memberName": "ExpInvalidExponent",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10219,
                                                        "src": "5411:30:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 18231,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5411:32:122",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 18232,
                                                "nodeType": "RevertStatement",
                                                "src": "5404:39:122"
                                            }
                                        },
                                        {
                                            "expression": {
                                                "id": 18243,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18234,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18213,
                                                    "src": "5700:1:122",
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
                                                    "id": 18242,
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
                                                                "id": 18237,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 18235,
                                                                    "name": "x",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 18213,
                                                                    "src": "5705:1:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "<<",
                                                                "rightExpression": {
                                                                    "hexValue": "3738",
                                                                    "id": 18236,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "5710:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_78_by_1",
                                                                        "typeString": "int_const 78"
                                                                    },
                                                                    "value": "78"
                                                                },
                                                                "src": "5705:7:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18238,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "5704:9:122",
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
                                                        "id": 18241,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "hexValue": "35",
                                                            "id": 18239,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5716:1:122",
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
                                                            "id": 18240,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5721:2:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_18_by_1",
                                                                "typeString": "int_const 18"
                                                            },
                                                            "value": "18"
                                                        },
                                                        "src": "5716:7:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_3814697265625_by_1",
                                                            "typeString": "int_const 3814697265625"
                                                        }
                                                    },
                                                    "src": "5704:19:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "5700:23:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18244,
                                            "nodeType": "ExpressionStatement",
                                            "src": "5700:23:122"
                                        },
                                        {
                                            "assignments": [
                                                18246
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 18246,
                                                    "mutability": "mutable",
                                                    "name": "k",
                                                    "nameLocation": "6059:1:122",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 18405,
                                                    "src": "6052:8:122",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    "typeName": {
                                                        "id": 18245,
                                                        "name": "int256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6052:6:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 18260,
                                            "initialValue": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18259,
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
                                                            "id": 18256,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                },
                                                                "id": 18252,
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
                                                                            "id": 18249,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18247,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18213,
                                                                                "src": "6065:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "<<",
                                                                            "rightExpression": {
                                                                                "hexValue": "3936",
                                                                                "id": 18248,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "6070:2:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_96_by_1",
                                                                                    "typeString": "int_const 96"
                                                                                },
                                                                                "value": "96"
                                                                            },
                                                                            "src": "6065:7:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18250,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "6064:9:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "/",
                                                                "rightExpression": {
                                                                    "hexValue": "3534393136373737343637373037343733333531313431343731313238",
                                                                    "id": 18251,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "6076:29:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_54916777467707473351141471128_by_1",
                                                                        "typeString": "int_const 54916777467707473351141471128"
                                                                    },
                                                                    "value": "54916777467707473351141471128"
                                                                },
                                                                "src": "6064:41:122",
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
                                                                "id": 18255,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "hexValue": "32",
                                                                    "id": 18253,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "6108:1:122",
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
                                                                    "id": 18254,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "6113:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_95_by_1",
                                                                        "typeString": "int_const 95"
                                                                    },
                                                                    "value": "95"
                                                                },
                                                                "src": "6108:7:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_39614081257132168796771975168_by_1",
                                                                    "typeString": "int_const 39614081257132168796771975168"
                                                                }
                                                            },
                                                            "src": "6064:51:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 18257,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "6063:53:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">>",
                                                "rightExpression": {
                                                    "hexValue": "3936",
                                                    "id": 18258,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "6136:2:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_96_by_1",
                                                        "typeString": "int_const 96"
                                                    },
                                                    "value": "96"
                                                },
                                                "src": "6063:75:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "6052:86:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18267,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18261,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18213,
                                                    "src": "6152:1:122",
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
                                                    "id": 18266,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 18262,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18213,
                                                        "src": "6156:1:122",
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
                                                        "id": 18265,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 18263,
                                                            "name": "k",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18246,
                                                            "src": "6160:1:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "*",
                                                        "rightExpression": {
                                                            "hexValue": "3534393136373737343637373037343733333531313431343731313238",
                                                            "id": 18264,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6164:29:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_54916777467707473351141471128_by_1",
                                                                "typeString": "int_const 54916777467707473351141471128"
                                                            },
                                                            "value": "54916777467707473351141471128"
                                                        },
                                                        "src": "6160:33:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "src": "6156:37:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "6152:41:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18268,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6152:41:122"
                                        },
                                        {
                                            "assignments": [
                                                18270
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 18270,
                                                    "mutability": "mutable",
                                                    "name": "y",
                                                    "nameLocation": "6401:1:122",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 18405,
                                                    "src": "6394:8:122",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    "typeName": {
                                                        "id": 18269,
                                                        "name": "int256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6394:6:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 18274,
                                            "initialValue": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18273,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 18271,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18213,
                                                    "src": "6405:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "hexValue": "31333436333836363136353435373936343738393230393530373733333238",
                                                    "id": 18272,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "6409:31:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1346386616545796478920950773328_by_1",
                                                        "typeString": "int_const 1346386616545796478920950773328"
                                                    },
                                                    "value": "1346386616545796478920950773328"
                                                },
                                                "src": "6405:35:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "6394:46:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18285,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18275,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18270,
                                                    "src": "6454:1:122",
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
                                                    "id": 18284,
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
                                                                "id": 18281,
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
                                                                            "id": 18278,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18276,
                                                                                "name": "y",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18270,
                                                                                "src": "6460:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18277,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18213,
                                                                                "src": "6464:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "6460:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18279,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "6459:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18280,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "6470:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "6459:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18282,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "6458:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "3537313535343231323237353532333531303832323234333039373538343432",
                                                        "id": 18283,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6476:32:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_57155421227552351082224309758442_by_1",
                                                            "typeString": "int_const 57155421227552351082224309758442"
                                                        },
                                                        "value": "57155421227552351082224309758442"
                                                    },
                                                    "src": "6458:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "6454:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18286,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6454:54:122"
                                        },
                                        {
                                            "assignments": [
                                                18288
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 18288,
                                                    "mutability": "mutable",
                                                    "name": "p",
                                                    "nameLocation": "6529:1:122",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 18405,
                                                    "src": "6522:8:122",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    "typeName": {
                                                        "id": 18287,
                                                        "name": "int256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6522:6:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 18294,
                                            "initialValue": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18293,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    "id": 18291,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 18289,
                                                        "name": "y",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18270,
                                                        "src": "6533:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 18290,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18213,
                                                        "src": "6537:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "src": "6533:5:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "3934323031353439313934353530343932323534333536303432353034383132",
                                                    "id": 18292,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "6541:32:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_94201549194550492254356042504812_by_1",
                                                        "typeString": "int_const 94201549194550492254356042504812"
                                                    },
                                                    "value": "94201549194550492254356042504812"
                                                },
                                                "src": "6533:40:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "6522:51:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18305,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18295,
                                                    "name": "p",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18288,
                                                    "src": "6587:1:122",
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
                                                    "id": 18304,
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
                                                                "id": 18301,
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
                                                                            "id": 18298,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18296,
                                                                                "name": "p",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18288,
                                                                                "src": "6593:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18297,
                                                                                "name": "y",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18270,
                                                                                "src": "6597:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "6593:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18299,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "6592:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18300,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "6603:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "6592:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18302,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "6591:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "3238373139303231363434303239373236313533393536393434363830343132323430",
                                                        "id": 18303,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6609:35:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_28719021644029726153956944680412240_by_1",
                                                            "typeString": "int_const 2871...(27 digits omitted)...2240"
                                                        },
                                                        "value": "28719021644029726153956944680412240"
                                                    },
                                                    "src": "6591:53:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "6587:57:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18306,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6587:57:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18316,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18307,
                                                    "name": "p",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18288,
                                                    "src": "6658:1:122",
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
                                                    "id": 18315,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        },
                                                        "id": 18310,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 18308,
                                                            "name": "p",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18288,
                                                            "src": "6662:1:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "*",
                                                        "rightExpression": {
                                                            "id": 18309,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18213,
                                                            "src": "6666:1:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        "src": "6662:5:122",
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
                                                                "id": 18313,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "hexValue": "34333835323732353231343534383437393034363539303736393835363933323736",
                                                                    "id": 18311,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "6671:34:122",
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
                                                                    "id": 18312,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "6709:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "6671:40:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                                                                    "typeString": "int_const 3474...(55 digits omitted)...0736"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18314,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "6670:42:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                                                            "typeString": "int_const 3474...(55 digits omitted)...0736"
                                                        }
                                                    },
                                                    "src": "6662:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "6658:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18317,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6658:54:122"
                                        },
                                        {
                                            "assignments": [
                                                18319
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 18319,
                                                    "mutability": "mutable",
                                                    "name": "q",
                                                    "nameLocation": "6831:1:122",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 18405,
                                                    "src": "6824:8:122",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    "typeName": {
                                                        "id": 18318,
                                                        "name": "int256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6824:6:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 18323,
                                            "initialValue": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18322,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 18320,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18213,
                                                    "src": "6835:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "32383535393839333934393037323233323633393336343834303539393030",
                                                    "id": 18321,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "6839:31:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_2855989394907223263936484059900_by_1",
                                                        "typeString": "int_const 2855989394907223263936484059900"
                                                    },
                                                    "value": "2855989394907223263936484059900"
                                                },
                                                "src": "6835:35:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "6824:46:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18334,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18324,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18319,
                                                    "src": "6884:1:122",
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
                                                    "id": 18333,
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
                                                                "id": 18330,
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
                                                                            "id": 18327,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18325,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18319,
                                                                                "src": "6890:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18326,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18213,
                                                                                "src": "6894:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "6890:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18328,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "6889:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18329,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "6900:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "6889:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18331,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "6888:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "3530303230363033363532353335373833303139393631383331383831393435",
                                                        "id": 18332,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6906:32:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_50020603652535783019961831881945_by_1",
                                                            "typeString": "int_const 50020603652535783019961831881945"
                                                        },
                                                        "value": "50020603652535783019961831881945"
                                                    },
                                                    "src": "6888:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "6884:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18335,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6884:54:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18346,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18336,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18319,
                                                    "src": "6952:1:122",
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
                                                    "id": 18345,
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
                                                                "id": 18342,
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
                                                                            "id": 18339,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18337,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18319,
                                                                                "src": "6958:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18338,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18213,
                                                                                "src": "6962:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "6958:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18340,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "6957:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18341,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "6968:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "6957:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18343,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "6956:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "hexValue": "353333383435303333353833343236373033323833363333343333373235333830",
                                                        "id": 18344,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6974:33:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_533845033583426703283633433725380_by_1",
                                                            "typeString": "int_const 5338...(25 digits omitted)...5380"
                                                        },
                                                        "value": "533845033583426703283633433725380"
                                                    },
                                                    "src": "6956:51:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "6952:55:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18347,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6952:55:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18358,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18348,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18319,
                                                    "src": "7021:1:122",
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
                                                    "id": 18357,
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
                                                                "id": 18354,
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
                                                                            "id": 18351,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18349,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18319,
                                                                                "src": "7027:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18350,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18213,
                                                                                "src": "7031:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "7027:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18352,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "7026:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18353,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "7037:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "7026:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18355,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "7025:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "33363034383537323536393330363935343237303733363531393138303931343239",
                                                        "id": 18356,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "7043:34:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_3604857256930695427073651918091429_by_1",
                                                            "typeString": "int_const 3604...(26 digits omitted)...1429"
                                                        },
                                                        "value": "3604857256930695427073651918091429"
                                                    },
                                                    "src": "7025:52:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "7021:56:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18359,
                                            "nodeType": "ExpressionStatement",
                                            "src": "7021:56:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18370,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18360,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18319,
                                                    "src": "7091:1:122",
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
                                                    "id": 18369,
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
                                                                "id": 18366,
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
                                                                            "id": 18363,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18361,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18319,
                                                                                "src": "7097:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18362,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18213,
                                                                                "src": "7101:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "7097:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18364,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "7096:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18365,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "7107:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "7096:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18367,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "7095:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "hexValue": "3134343233363038353637333530343633313830383837333732393632383037353733",
                                                        "id": 18368,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "7113:35:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_14423608567350463180887372962807573_by_1",
                                                            "typeString": "int_const 1442...(27 digits omitted)...7573"
                                                        },
                                                        "value": "14423608567350463180887372962807573"
                                                    },
                                                    "src": "7095:53:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "7091:57:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18371,
                                            "nodeType": "ExpressionStatement",
                                            "src": "7091:57:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18382,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18372,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18319,
                                                    "src": "7162:1:122",
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
                                                    "id": 18381,
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
                                                                "id": 18378,
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
                                                                            "id": 18375,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18373,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18319,
                                                                                "src": "7168:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18374,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18213,
                                                                                "src": "7172:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "7168:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18376,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "7167:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18377,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "7178:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "7167:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18379,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "7166:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "3236343439313838343938333535353838333339393334383033373233393736303233",
                                                        "id": 18380,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "7184:35:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_26449188498355588339934803723976023_by_1",
                                                            "typeString": "int_const 2644...(27 digits omitted)...6023"
                                                        },
                                                        "value": "26449188498355588339934803723976023"
                                                    },
                                                    "src": "7166:53:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "7162:57:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18383,
                                            "nodeType": "ExpressionStatement",
                                            "src": "7162:57:122"
                                        },
                                        {
                                            "AST": {
                                                "nodeType": "YulBlock",
                                                "src": "7290:318:122",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "7579:15:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "p",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7589:1:122"
                                                                },
                                                                {
                                                                    "name": "q",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7592:1:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sdiv",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7584:4:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "7584:10:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7579:1:122"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "documentation": "@solidity memory-safe-assembly",
                                            "evmVersion": "paris",
                                            "externalReferences": [
                                                {
                                                    "declaration": 18288,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "7589:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18319,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "7592:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18216,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "7579:1:122",
                                                    "valueSize": 1
                                                }
                                            ],
                                            "id": 18384,
                                            "nodeType": "InlineAssembly",
                                            "src": "7281:327:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18403,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18385,
                                                    "name": "r",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18216,
                                                    "src": "8059:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "components": [
                                                                {
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "id": 18399,
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
                                                                                "id": 18391,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "leftExpression": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "id": 18388,
                                                                                            "name": "r",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 18216,
                                                                                            "src": "8073:1:122",
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
                                                                                        "id": 18387,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                                        "src": "8065:7:122",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                                                            "typeString": "type(uint256)"
                                                                                        },
                                                                                        "typeName": {
                                                                                            "id": 18386,
                                                                                            "name": "uint256",
                                                                                            "nodeType": "ElementaryTypeName",
                                                                                            "src": "8065:7:122",
                                                                                            "typeDescriptions": {}
                                                                                        }
                                                                                    },
                                                                                    "id": 18389,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "kind": "typeConversion",
                                                                                    "lValueRequested": false,
                                                                                    "nameLocations": [],
                                                                                    "names": [],
                                                                                    "nodeType": "FunctionCall",
                                                                                    "src": "8065:10:122",
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
                                                                                    "id": 18390,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "kind": "number",
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "Literal",
                                                                                    "src": "8094:49:122",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_rational_3822833074963236453042738258902158003155416615667_by_1",
                                                                                        "typeString": "int_const 3822...(41 digits omitted)...5667"
                                                                                    },
                                                                                    "value": "3822833074963236453042738258902158003155416615667"
                                                                                },
                                                                                "src": "8065:78:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "id": 18392,
                                                                        "isConstant": false,
                                                                        "isInlineArray": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "TupleExpression",
                                                                        "src": "8064:80:122",
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
                                                                                "id": 18397,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "leftExpression": {
                                                                                    "hexValue": "313935",
                                                                                    "id": 18395,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "kind": "number",
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "Literal",
                                                                                    "src": "8172:3:122",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_rational_195_by_1",
                                                                                        "typeString": "int_const 195"
                                                                                    },
                                                                                    "value": "195"
                                                                                },
                                                                                "nodeType": "BinaryOperation",
                                                                                "operator": "-",
                                                                                "rightExpression": {
                                                                                    "id": 18396,
                                                                                    "name": "k",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 18246,
                                                                                    "src": "8178:1:122",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_int256",
                                                                                        "typeString": "int256"
                                                                                    }
                                                                                },
                                                                                "src": "8172:7:122",
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
                                                                            "id": 18394,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "8164:7:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                                                "typeString": "type(uint256)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 18393,
                                                                                "name": "uint256",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "8164:7:122",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 18398,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "8164:16:122",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "src": "8064:116:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "id": 18400,
                                                            "isConstant": false,
                                                            "isInlineArray": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "TupleExpression",
                                                            "src": "8063:118:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 18401,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8182:8:122",
                                                        "memberName": "toInt256",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 21814,
                                                        "src": "8063:127:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256) pure returns (int256)"
                                                        }
                                                    },
                                                    "id": 18402,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8063:129:122",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "8059:133:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18404,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8059:133:122"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18211,
                            "nodeType": "StructuredDocumentation",
                            "src": "4661:241:122",
                            "text": "@dev Computes e^x in 1e18 fixed point.\n @dev Credit to Remco (https://github.com/recmo/experiment-solexp/blob/main/src/FixedPointMathLib.sol)\n @param x Fixed point number in 1e18 format.\n @return r The result of e^x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "exp",
                        "nameLocation": "4916:3:122",
                        "parameters": {
                            "id": 18214,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18213,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "4927:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18407,
                                    "src": "4920:8:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18212,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4920:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4919:10:122"
                        },
                        "returnParameters": {
                            "id": 18217,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18216,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "4960:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18407,
                                    "src": "4953:8:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18215,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4953:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4952:10:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18629,
                        "nodeType": "FunctionDefinition",
                        "src": "8508:3846:122",
                        "nodes": [],
                        "body": {
                            "id": 18628,
                            "nodeType": "Block",
                            "src": "8563:3791:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "id": 18627,
                                    "nodeType": "UncheckedBlock",
                                    "src": "8573:3775:122",
                                    "statements": [
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18417,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 18415,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18410,
                                                    "src": "8601:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 18416,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "8606:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "8601:6:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 18424,
                                            "nodeType": "IfStatement",
                                            "src": "8597:80:122",
                                            "trueBody": {
                                                "id": 18423,
                                                "nodeType": "Block",
                                                "src": "8609:68:122",
                                                "statements": [
                                                    {
                                                        "errorCall": {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "expression": {
                                                                    "id": 18418,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 10351,
                                                                    "src": "8634:11:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 18420,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "8646:14:122",
                                                                "memberName": "LnInvalidInput",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10258,
                                                                "src": "8634:26:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 18421,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "8634:28:122",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_tuple$__$",
                                                                "typeString": "tuple()"
                                                            }
                                                        },
                                                        "id": 18422,
                                                        "nodeType": "RevertStatement",
                                                        "src": "8627:35:122"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "AST": {
                                                "nodeType": "YulBlock",
                                                "src": "9256:489:122",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "9274:54:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "9283:1:122",
                                                                    "type": "",
                                                                    "value": "7"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "9289:34:122",
                                                                            "type": "",
                                                                            "value": "0xffffffffffffffffffffffffffffffff"
                                                                        },
                                                                        {
                                                                            "name": "x",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "9325:1:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "lt",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9286:2:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9286:41:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "shl",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9279:3:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9279:49:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9274:1:122"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "9345:53:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "r",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9353:1:122"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "9360:1:122",
                                                                            "type": "",
                                                                            "value": "6"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "9366:18:122",
                                                                                    "type": "",
                                                                                    "value": "0xffffffffffffffff"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "r",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9390:1:122"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9393:1:122"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "9386:3:122"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "9386:9:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "lt",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "9363:2:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "9363:33:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "shl",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9356:3:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9356:41:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "or",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9350:2:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9350:48:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9345:1:122"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "9415:45:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "r",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9423:1:122"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "9430:1:122",
                                                                            "type": "",
                                                                            "value": "5"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "9436:10:122",
                                                                                    "type": "",
                                                                                    "value": "0xffffffff"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "r",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9452:1:122"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9455:1:122"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "9448:3:122"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "9448:9:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "lt",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "9433:2:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "9433:25:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "shl",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9426:3:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9426:33:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "or",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9420:2:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9420:40:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9415:1:122"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "9477:41:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "r",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9485:1:122"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "9492:1:122",
                                                                            "type": "",
                                                                            "value": "4"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "9498:6:122",
                                                                                    "type": "",
                                                                                    "value": "0xffff"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "r",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9510:1:122"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9513:1:122"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "9506:3:122"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "9506:9:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "lt",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "9495:2:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "9495:21:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "shl",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9488:3:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9488:29:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "or",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9482:2:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9482:36:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9477:1:122"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "9535:39:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "r",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9543:1:122"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "9550:1:122",
                                                                            "type": "",
                                                                            "value": "3"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "9556:4:122",
                                                                                    "type": "",
                                                                                    "value": "0xff"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "r",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9566:1:122"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9569:1:122"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "9562:3:122"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "9562:9:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "lt",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "9553:2:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "9553:19:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "shl",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9546:3:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9546:27:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "or",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9540:2:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9540:34:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9535:1:122"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "9591:38:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "r",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9599:1:122"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "9606:1:122",
                                                                            "type": "",
                                                                            "value": "2"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "9612:3:122",
                                                                                    "type": "",
                                                                                    "value": "0xf"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "r",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9621:1:122"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9624:1:122"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "9617:3:122"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "9617:9:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "lt",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "9609:2:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "9609:18:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "shl",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9602:3:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9602:26:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "or",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9596:2:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9596:33:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9591:1:122"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "9646:38:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "r",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9654:1:122"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "9661:1:122",
                                                                            "type": "",
                                                                            "value": "1"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "9667:3:122",
                                                                                    "type": "",
                                                                                    "value": "0x3"
                                                                                },
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "r",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9676:1:122"
                                                                                        },
                                                                                        {
                                                                                            "name": "x",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "9679:1:122"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "shr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "9672:3:122"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "9672:9:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "lt",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "9664:2:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "9664:18:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "shl",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9657:3:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9657:26:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "or",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9651:2:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9651:33:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9646:1:122"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "9701:30:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "r",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "9709:1:122"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "9715:3:122",
                                                                            "type": "",
                                                                            "value": "0x1"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "r",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "9724:1:122"
                                                                                },
                                                                                {
                                                                                    "name": "x",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "9727:1:122"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "shr",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "9720:3:122"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "9720:9:122"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "lt",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "9712:2:122"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "9712:18:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "or",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9706:2:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9706:25:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9701:1:122"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "documentation": "@solidity memory-safe-assembly",
                                            "evmVersion": "paris",
                                            "externalReferences": [
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9274:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9345:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9353:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9390:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9415:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9423:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9452:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9477:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9485:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9510:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9535:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9543:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9566:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9591:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9599:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9621:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9646:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9654:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9676:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9701:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9709:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9724:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18410,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9325:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18410,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9393:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18410,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9455:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18410,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9513:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18410,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9569:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18410,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9624:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18410,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9679:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18410,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "9727:1:122",
                                                    "valueSize": 1
                                                }
                                            ],
                                            "id": 18425,
                                            "nodeType": "InlineAssembly",
                                            "src": "9247:498:122"
                                        },
                                        {
                                            "assignments": [
                                                18427
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 18427,
                                                    "mutability": "mutable",
                                                    "name": "k",
                                                    "nameLocation": "9864:1:122",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 18627,
                                                    "src": "9857:8:122",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    "typeName": {
                                                        "id": 18426,
                                                        "name": "int256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "9857:6:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 18431,
                                            "initialValue": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18430,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 18428,
                                                    "name": "r",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18413,
                                                    "src": "9868:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "3936",
                                                    "id": 18429,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "9872:2:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_96_by_1",
                                                        "typeString": "int_const 96"
                                                    },
                                                    "value": "96"
                                                },
                                                "src": "9868:6:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "9857:17:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18439,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18432,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18410,
                                                    "src": "9888:1:122",
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
                                                            "id": 18437,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "hexValue": "313539",
                                                                "id": 18435,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "9902:3:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_159_by_1",
                                                                    "typeString": "int_const 159"
                                                                },
                                                                "value": "159"
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "id": 18436,
                                                                "name": "k",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18427,
                                                                "src": "9908:1:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "src": "9902:7:122",
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
                                                        "id": 18434,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "9894:7:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 18433,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "9894:7:122",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 18438,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9894:16:122",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "9888:22:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18440,
                                            "nodeType": "ExpressionStatement",
                                            "src": "9888:22:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18451,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18441,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18410,
                                                    "src": "9924:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "components": [
                                                                {
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "id": 18447,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "leftExpression": {
                                                                        "arguments": [
                                                                            {
                                                                                "id": 18444,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "9937:1:122",
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
                                                                            "id": 18443,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "9929:7:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                                                "typeString": "type(uint256)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 18442,
                                                                                "name": "uint256",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "9929:7:122",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 18445,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "9929:10:122",
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
                                                                        "id": 18446,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "9943:3:122",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_159_by_1",
                                                                            "typeString": "int_const 159"
                                                                        },
                                                                        "value": "159"
                                                                    },
                                                                    "src": "9929:17:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "id": 18448,
                                                            "isConstant": false,
                                                            "isInlineArray": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "TupleExpression",
                                                            "src": "9928:19:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 18449,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9948:8:122",
                                                        "memberName": "toInt256",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 21814,
                                                        "src": "9928:28:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256) pure returns (int256)"
                                                        }
                                                    },
                                                    "id": 18450,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9928:30:122",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "9924:34:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18452,
                                            "nodeType": "ExpressionStatement",
                                            "src": "9924:34:122"
                                        },
                                        {
                                            "assignments": [
                                                18454
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 18454,
                                                    "mutability": "mutable",
                                                    "name": "p",
                                                    "nameLocation": "10122:1:122",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 18627,
                                                    "src": "10115:8:122",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    "typeName": {
                                                        "id": 18453,
                                                        "name": "int256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "10115:6:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 18458,
                                            "initialValue": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18457,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 18455,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18410,
                                                    "src": "10126:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "hexValue": "33323733323835343539363338353233383438363332323534303636323936",
                                                    "id": 18456,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "10130:31:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_3273285459638523848632254066296_by_1",
                                                        "typeString": "int_const 3273285459638523848632254066296"
                                                    },
                                                    "value": "3273285459638523848632254066296"
                                                },
                                                "src": "10126:35:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "10115:46:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18469,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18459,
                                                    "name": "p",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18454,
                                                    "src": "10175:1:122",
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
                                                    "id": 18468,
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
                                                                "id": 18465,
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
                                                                            "id": 18462,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18460,
                                                                                "name": "p",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18454,
                                                                                "src": "10181:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18461,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "10185:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "10181:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18463,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "10180:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18464,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10191:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10180:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18466,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10179:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "3234383238313537303831383333313633383932363538303839343435353234",
                                                        "id": 18467,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10197:32:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_24828157081833163892658089445524_by_1",
                                                            "typeString": "int_const 24828157081833163892658089445524"
                                                        },
                                                        "value": "24828157081833163892658089445524"
                                                    },
                                                    "src": "10179:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10175:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18470,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10175:54:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18481,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18471,
                                                    "name": "p",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18454,
                                                    "src": "10243:1:122",
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
                                                    "id": 18480,
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
                                                                "id": 18477,
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
                                                                            "id": 18474,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18472,
                                                                                "name": "p",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18454,
                                                                                "src": "10249:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18473,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "10253:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "10249:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18475,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "10248:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18476,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10259:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10248:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18478,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10247:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "3433343536343835373235373339303337393538373430333735373433333933",
                                                        "id": 18479,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10265:32:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_43456485725739037958740375743393_by_1",
                                                            "typeString": "int_const 43456485725739037958740375743393"
                                                        },
                                                        "value": "43456485725739037958740375743393"
                                                    },
                                                    "src": "10247:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10243:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18482,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10243:54:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18493,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18483,
                                                    "name": "p",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18454,
                                                    "src": "10311:1:122",
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
                                                    "id": 18492,
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
                                                                "id": 18489,
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
                                                                            "id": 18486,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18484,
                                                                                "name": "p",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18454,
                                                                                "src": "10317:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18485,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "10321:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "10317:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18487,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "10316:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18488,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10327:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10316:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18490,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10315:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "hexValue": "3131313131353039313039343430393637303532303233383535353236393637",
                                                        "id": 18491,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10333:32:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_11111509109440967052023855526967_by_1",
                                                            "typeString": "int_const 11111509109440967052023855526967"
                                                        },
                                                        "value": "11111509109440967052023855526967"
                                                    },
                                                    "src": "10315:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10311:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18494,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10311:54:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18505,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18495,
                                                    "name": "p",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18454,
                                                    "src": "10379:1:122",
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
                                                    "id": 18504,
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
                                                                "id": 18501,
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
                                                                            "id": 18498,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18496,
                                                                                "name": "p",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18454,
                                                                                "src": "10385:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18497,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "10389:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "10385:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18499,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "10384:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18500,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10395:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10384:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18502,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10383:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "hexValue": "3435303233373039363637323534303633373633333336353334353135383537",
                                                        "id": 18503,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10401:32:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_45023709667254063763336534515857_by_1",
                                                            "typeString": "int_const 45023709667254063763336534515857"
                                                        },
                                                        "value": "45023709667254063763336534515857"
                                                    },
                                                    "src": "10383:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10379:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18506,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10379:54:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18517,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18507,
                                                    "name": "p",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18454,
                                                    "src": "10447:1:122",
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
                                                    "id": 18516,
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
                                                                "id": 18513,
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
                                                                            "id": 18510,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18508,
                                                                                "name": "p",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18454,
                                                                                "src": "10453:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18509,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "10457:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "10453:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18511,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "10452:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18512,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10463:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10452:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18514,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10451:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "hexValue": "3134373036373733343137333738363038373836373034363336313834353236",
                                                        "id": 18515,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10469:32:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_14706773417378608786704636184526_by_1",
                                                            "typeString": "int_const 14706773417378608786704636184526"
                                                        },
                                                        "value": "14706773417378608786704636184526"
                                                    },
                                                    "src": "10451:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10447:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18518,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10447:54:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18528,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18519,
                                                    "name": "p",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18454,
                                                    "src": "10515:1:122",
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
                                                    "id": 18527,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        },
                                                        "id": 18522,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 18520,
                                                            "name": "p",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18454,
                                                            "src": "10519:1:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "*",
                                                        "rightExpression": {
                                                            "id": 18521,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18410,
                                                            "src": "10523:1:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        "src": "10519:5:122",
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
                                                                "id": 18525,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "hexValue": "373935313634323335363531333530343236323538323439373837343938",
                                                                    "id": 18523,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10528:30:122",
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
                                                                    "id": 18524,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10562:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10528:36:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                                                                    "typeString": "int_const 6299...(51 digits omitted)...9328"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18526,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10527:38:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                                                            "typeString": "int_const 6299...(51 digits omitted)...9328"
                                                        }
                                                    },
                                                    "src": "10519:46:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10515:50:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18529,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10515:50:122"
                                        },
                                        {
                                            "assignments": [
                                                18531
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 18531,
                                                    "mutability": "mutable",
                                                    "name": "q",
                                                    "nameLocation": "10725:1:122",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 18627,
                                                    "src": "10718:8:122",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    "typeName": {
                                                        "id": 18530,
                                                        "name": "int256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "10718:6:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 18535,
                                            "initialValue": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 18534,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 18532,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18410,
                                                    "src": "10729:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "hexValue": "35353733303335323333343430363733343636333030343531383133393336",
                                                    "id": 18533,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "10733:31:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_5573035233440673466300451813936_by_1",
                                                        "typeString": "int_const 5573035233440673466300451813936"
                                                    },
                                                    "value": "5573035233440673466300451813936"
                                                },
                                                "src": "10729:35:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "10718:46:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18546,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18536,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18531,
                                                    "src": "10778:1:122",
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
                                                    "id": 18545,
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
                                                                "id": 18542,
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
                                                                            "id": 18539,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18537,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18531,
                                                                                "src": "10784:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18538,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "10788:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "10784:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18540,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "10783:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18541,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10794:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10783:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18543,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10782:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "3731363934383734373939333137383833373634303930353631343534393538",
                                                        "id": 18544,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10800:32:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_71694874799317883764090561454958_by_1",
                                                            "typeString": "int_const 71694874799317883764090561454958"
                                                        },
                                                        "value": "71694874799317883764090561454958"
                                                    },
                                                    "src": "10782:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10778:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18547,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10778:54:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18558,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18548,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18531,
                                                    "src": "10846:1:122",
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
                                                    "id": 18557,
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
                                                                "id": 18554,
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
                                                                            "id": 18551,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18549,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18531,
                                                                                "src": "10852:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18550,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "10856:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "10852:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18552,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "10851:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18553,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10862:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10851:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18555,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10850:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "323833343437303336313732393234353735373237313936343531333036393536",
                                                        "id": 18556,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10868:33:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_283447036172924575727196451306956_by_1",
                                                            "typeString": "int_const 2834...(25 digits omitted)...6956"
                                                        },
                                                        "value": "283447036172924575727196451306956"
                                                    },
                                                    "src": "10850:51:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10846:55:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18559,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10846:55:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18570,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18560,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18531,
                                                    "src": "10915:1:122",
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
                                                    "id": 18569,
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
                                                                "id": 18566,
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
                                                                            "id": 18563,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18561,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18531,
                                                                                "src": "10921:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18562,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "10925:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "10921:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18564,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "10920:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18565,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "10931:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10920:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18567,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10919:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "343031363836363930333934303237363633363531363234323038373639353533",
                                                        "id": 18568,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10937:33:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_401686690394027663651624208769553_by_1",
                                                            "typeString": "int_const 4016...(25 digits omitted)...9553"
                                                        },
                                                        "value": "401686690394027663651624208769553"
                                                    },
                                                    "src": "10919:51:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10915:55:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18571,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10915:55:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18582,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18572,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18531,
                                                    "src": "10984:1:122",
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
                                                    "id": 18581,
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
                                                                "id": 18578,
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
                                                                            "id": 18575,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18573,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18531,
                                                                                "src": "10990:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18574,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "10994:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "10990:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18576,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "10989:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18577,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "11000:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "10989:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18579,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "10988:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "323034303438343537353930333932303132333632343835303631383136363232",
                                                        "id": 18580,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "11006:33:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_204048457590392012362485061816622_by_1",
                                                            "typeString": "int_const 2040...(25 digits omitted)...6622"
                                                        },
                                                        "value": "204048457590392012362485061816622"
                                                    },
                                                    "src": "10988:51:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "10984:55:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18583,
                                            "nodeType": "ExpressionStatement",
                                            "src": "10984:55:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18594,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18584,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18531,
                                                    "src": "11053:1:122",
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
                                                    "id": 18593,
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
                                                                "id": 18590,
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
                                                                            "id": 18587,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18585,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18531,
                                                                                "src": "11059:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18586,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "11063:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "11059:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18588,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "11058:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18589,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "11069:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "11058:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18591,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "11057:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "3331383533383939363938353031353731343032363533333539343237313338",
                                                        "id": 18592,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "11075:32:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_31853899698501571402653359427138_by_1",
                                                            "typeString": "int_const 31853899698501571402653359427138"
                                                        },
                                                        "value": "31853899698501571402653359427138"
                                                    },
                                                    "src": "11057:50:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "11053:54:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18595,
                                            "nodeType": "ExpressionStatement",
                                            "src": "11053:54:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18606,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18596,
                                                    "name": "q",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18531,
                                                    "src": "11121:1:122",
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
                                                    "id": 18605,
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
                                                                "id": 18602,
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
                                                                            "id": 18599,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 18597,
                                                                                "name": "q",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18531,
                                                                                "src": "11127:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 18598,
                                                                                "name": "x",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 18410,
                                                                                "src": "11131:1:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            },
                                                                            "src": "11127:5:122",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 18600,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "11126:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": ">>",
                                                                "rightExpression": {
                                                                    "hexValue": "3936",
                                                                    "id": 18601,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "11137:2:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_96_by_1",
                                                                        "typeString": "int_const 96"
                                                                    },
                                                                    "value": "96"
                                                                },
                                                                "src": "11126:13:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            }
                                                        ],
                                                        "id": 18603,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "TupleExpression",
                                                        "src": "11125:15:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "393039343239393731323434333837333030323737333736353538333735",
                                                        "id": 18604,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "11143:30:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_909429971244387300277376558375_by_1",
                                                            "typeString": "int_const 909429971244387300277376558375"
                                                        },
                                                        "value": "909429971244387300277376558375"
                                                    },
                                                    "src": "11125:48:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "11121:52:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18607,
                                            "nodeType": "ExpressionStatement",
                                            "src": "11121:52:122"
                                        },
                                        {
                                            "AST": {
                                                "nodeType": "YulBlock",
                                                "src": "11243:295:122",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "11509:15:122",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "p",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "11519:1:122"
                                                                },
                                                                {
                                                                    "name": "q",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "11522:1:122"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sdiv",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "11514:4:122"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "11514:10:122"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "r",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "11509:1:122"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "documentation": "@solidity memory-safe-assembly",
                                            "evmVersion": "paris",
                                            "externalReferences": [
                                                {
                                                    "declaration": 18454,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "11519:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18531,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "11522:1:122",
                                                    "valueSize": 1
                                                },
                                                {
                                                    "declaration": 18413,
                                                    "isOffset": false,
                                                    "isSlot": false,
                                                    "src": "11509:1:122",
                                                    "valueSize": 1
                                                }
                                            ],
                                            "id": 18608,
                                            "nodeType": "InlineAssembly",
                                            "src": "11234:304:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18611,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18609,
                                                    "name": "r",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18413,
                                                    "src": "11899:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "*=",
                                                "rightHandSide": {
                                                    "hexValue": "31363737323032313130393936373138353838333432383230393637303637343433393633353136313636",
                                                    "id": 18610,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "11904:43:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1677202110996718588342820967067443963516166_by_1",
                                                        "typeString": "int_const 1677...(35 digits omitted)...6166"
                                                    },
                                                    "value": "1677202110996718588342820967067443963516166"
                                                },
                                                "src": "11899:48:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18612,
                                            "nodeType": "ExpressionStatement",
                                            "src": "11899:48:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18617,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18613,
                                                    "name": "r",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18413,
                                                    "src": "12006:1:122",
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
                                                    "id": 18616,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "hexValue": "3136353937353737353532363835363134323231343837323835393538313933393437343639313933383230353539323139383738313737393038303933343939323038333731",
                                                        "id": 18614,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "12027:71:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_16597577552685614221487285958193947469193820559219878177908093499208371_by_1",
                                                            "typeString": "int_const 1659...(63 digits omitted)...8371"
                                                        },
                                                        "value": "16597577552685614221487285958193947469193820559219878177908093499208371"
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "*",
                                                    "rightExpression": {
                                                        "id": 18615,
                                                        "name": "k",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18427,
                                                        "src": "12117:1:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "src": "12027:91:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "12006:112:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18618,
                                            "nodeType": "ExpressionStatement",
                                            "src": "12006:112:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18621,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18619,
                                                    "name": "r",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18413,
                                                    "src": "12186:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "+=",
                                                "rightHandSide": {
                                                    "hexValue": "363030393230313739383239373331383631373336373032373739333231363231343539353935343732323538303439303734313031353637333737383833303230303138333038",
                                                    "id": 18620,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "12191:72:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_600920179829731861736702779321621459595472258049074101567377883020018308_by_1",
                                                        "typeString": "int_const 6009...(64 digits omitted)...8308"
                                                    },
                                                    "value": "600920179829731861736702779321621459595472258049074101567377883020018308"
                                                },
                                                "src": "12186:77:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18622,
                                            "nodeType": "ExpressionStatement",
                                            "src": "12186:77:122"
                                        },
                                        {
                                            "expression": {
                                                "id": 18625,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 18623,
                                                    "name": "r",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18413,
                                                    "src": "12328:1:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": ">>=",
                                                "rightHandSide": {
                                                    "hexValue": "313734",
                                                    "id": 18624,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "12334:3:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_174_by_1",
                                                        "typeString": "int_const 174"
                                                    },
                                                    "value": "174"
                                                },
                                                "src": "12328:9:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 18626,
                                            "nodeType": "ExpressionStatement",
                                            "src": "12328:9:122"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18408,
                            "nodeType": "StructuredDocumentation",
                            "src": "8215:288:122",
                            "text": "@dev Computes ln(x) in 1e18 fixed point.\n @dev Credit to Remco (https://github.com/recmo/experiment-solexp/blob/main/src/FixedPointMathLib.sol)\n @dev Reverts if x is negative or zero.\n @param x Fixed point number in 1e18 format.\n @return r Result of ln(x)."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "ln",
                        "nameLocation": "8517:2:122",
                        "parameters": {
                            "id": 18411,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18410,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "8527:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18629,
                                    "src": "8520:8:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18409,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8520:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8519:10:122"
                        },
                        "returnParameters": {
                            "id": 18414,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18413,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "8560:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18629,
                                    "src": "8553:8:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18412,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8553:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8552:10:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18732,
                        "nodeType": "FunctionDefinition",
                        "src": "12712:2102:122",
                        "nodes": [],
                        "body": {
                            "id": 18731,
                            "nodeType": "Block",
                            "src": "12923:1891:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 18647,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 18645,
                                            "name": "_deltaWeight",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18638,
                                            "src": "13006:12:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 18646,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "13022:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "13006:17:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 18651,
                                    "nodeType": "IfStatement",
                                    "src": "13002:63:122",
                                    "trueBody": {
                                        "id": 18650,
                                        "nodeType": "Block",
                                        "src": "13025:40:122",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 18648,
                                                    "name": "_average",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18632,
                                                    "src": "13046:8:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 18644,
                                                "id": 18649,
                                                "nodeType": "Return",
                                                "src": "13039:15:122"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 18652,
                                        "name": "_isAdding",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 18640,
                                        "src": "13323:9:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 18729,
                                        "nodeType": "Block",
                                        "src": "14470:338:122",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 18706,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 18704,
                                                        "name": "_totalWeight",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18634,
                                                        "src": "14488:12:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "id": 18705,
                                                        "name": "_deltaWeight",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18638,
                                                        "src": "14504:12:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "14488:28:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 18710,
                                                "nodeType": "IfStatement",
                                                "src": "14484:75:122",
                                                "trueBody": {
                                                    "id": 18709,
                                                    "nodeType": "Block",
                                                    "src": "14518:41:122",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "hexValue": "30",
                                                                "id": 18707,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "14543:1:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                    "typeString": "int_const 0"
                                                                },
                                                                "value": "0"
                                                            },
                                                            "functionReturnParameters": 18644,
                                                            "id": 18708,
                                                            "nodeType": "Return",
                                                            "src": "14536:8:122"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 18727,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 18711,
                                                        "name": "average",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18643,
                                                        "src": "14635:7:122",
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
                                                                "id": 18725,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 18723,
                                                                    "name": "_totalWeight",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 18634,
                                                                    "src": "14752:12:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "-",
                                                                "rightExpression": {
                                                                    "id": 18724,
                                                                    "name": "_deltaWeight",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 18638,
                                                                    "src": "14767:12:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "14752:27:122",
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
                                                                        "id": 18720,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "arguments": [
                                                                                {
                                                                                    "id": 18714,
                                                                                    "name": "_average",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 18632,
                                                                                    "src": "14667:8:122",
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
                                                                                    "id": 18712,
                                                                                    "name": "_totalWeight",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 18634,
                                                                                    "src": "14646:12:122",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_uint256",
                                                                                        "typeString": "uint256"
                                                                                    }
                                                                                },
                                                                                "id": 18713,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "14659:7:122",
                                                                                "memberName": "mulDown",
                                                                                "nodeType": "MemberAccess",
                                                                                "referencedDeclaration": 18085,
                                                                                "src": "14646:20:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                                }
                                                                            },
                                                                            "id": 18715,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "functionCall",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "14646:30:122",
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
                                                                                    "id": 18718,
                                                                                    "name": "_delta",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 18636,
                                                                                    "src": "14714:6:122",
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
                                                                                    "id": 18716,
                                                                                    "name": "_deltaWeight",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 18638,
                                                                                    "src": "14695:12:122",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_uint256",
                                                                                        "typeString": "uint256"
                                                                                    }
                                                                                },
                                                                                "id": 18717,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "14708:5:122",
                                                                                "memberName": "mulUp",
                                                                                "nodeType": "MemberAccess",
                                                                                "referencedDeclaration": 18135,
                                                                                "src": "14695:18:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                                }
                                                                            },
                                                                            "id": 18719,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "functionCall",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "14695:26:122",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "src": "14646:75:122",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "id": 18721,
                                                                "isConstant": false,
                                                                "isInlineArray": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "TupleExpression",
                                                                "src": "14645:77:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 18722,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "14723:7:122",
                                                            "memberName": "divDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18103,
                                                            "src": "14645:85:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 18726,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "14645:152:122",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "14635:162:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 18728,
                                                "nodeType": "ExpressionStatement",
                                                "src": "14635:162:122"
                                            }
                                        ]
                                    },
                                    "id": 18730,
                                    "nodeType": "IfStatement",
                                    "src": "13319:1489:122",
                                    "trueBody": {
                                        "id": 18703,
                                        "nodeType": "Block",
                                        "src": "13334:871:122",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 18669,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 18653,
                                                        "name": "average",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18643,
                                                        "src": "13410:7:122",
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
                                                                "id": 18667,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 18665,
                                                                    "name": "_totalWeight",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 18634,
                                                                    "src": "13529:12:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "+",
                                                                "rightExpression": {
                                                                    "id": 18666,
                                                                    "name": "_deltaWeight",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 18638,
                                                                    "src": "13544:12:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "13529:27:122",
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
                                                                        "id": 18662,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "arguments": [
                                                                                {
                                                                                    "id": 18656,
                                                                                    "name": "_average",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 18632,
                                                                                    "src": "13442:8:122",
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
                                                                                    "id": 18654,
                                                                                    "name": "_totalWeight",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 18634,
                                                                                    "src": "13421:12:122",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_uint256",
                                                                                        "typeString": "uint256"
                                                                                    }
                                                                                },
                                                                                "id": 18655,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "13434:7:122",
                                                                                "memberName": "mulDown",
                                                                                "nodeType": "MemberAccess",
                                                                                "referencedDeclaration": 18085,
                                                                                "src": "13421:20:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                                }
                                                                            },
                                                                            "id": 18657,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "functionCall",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "13421:30:122",
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
                                                                                    "id": 18660,
                                                                                    "name": "_delta",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 18636,
                                                                                    "src": "13491:6:122",
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
                                                                                    "id": 18658,
                                                                                    "name": "_deltaWeight",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 18638,
                                                                                    "src": "13470:12:122",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_uint256",
                                                                                        "typeString": "uint256"
                                                                                    }
                                                                                },
                                                                                "id": 18659,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "13483:7:122",
                                                                                "memberName": "mulDown",
                                                                                "nodeType": "MemberAccess",
                                                                                "referencedDeclaration": 18085,
                                                                                "src": "13470:20:122",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                                }
                                                                            },
                                                                            "id": 18661,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "functionCall",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "13470:28:122",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "src": "13421:77:122",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "id": 18663,
                                                                "isConstant": false,
                                                                "isInlineArray": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "TupleExpression",
                                                                "src": "13420:79:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 18664,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "13500:7:122",
                                                            "memberName": "divDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18103,
                                                            "src": "13420:87:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 18668,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "13420:154:122",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "13410:164:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 18670,
                                                "nodeType": "ExpressionStatement",
                                                "src": "13410:164:122"
                                            },
                                            {
                                                "assignments": [
                                                    18672
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 18672,
                                                        "mutability": "mutable",
                                                        "name": "minAverage",
                                                        "nameLocation": "13929:10:122",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 18703,
                                                        "src": "13921:18:122",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 18671,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "13921:7:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 18677,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 18675,
                                                            "name": "_average",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18632,
                                                            "src": "13953:8:122",
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
                                                            "id": 18673,
                                                            "name": "_delta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18636,
                                                            "src": "13942:6:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 18674,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13949:3:122",
                                                        "memberName": "min",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18750,
                                                        "src": "13942:10:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 18676,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13942:20:122",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "13921:41:122"
                                            },
                                            {
                                                "assignments": [
                                                    18679
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 18679,
                                                        "mutability": "mutable",
                                                        "name": "maxAverage",
                                                        "nameLocation": "13984:10:122",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 18703,
                                                        "src": "13976:18:122",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 18678,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "13976:7:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 18684,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 18682,
                                                            "name": "_average",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18632,
                                                            "src": "14008:8:122",
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
                                                            "id": 18680,
                                                            "name": "_delta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18636,
                                                            "src": "13997:6:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 18681,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "14004:3:122",
                                                        "memberName": "max",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18768,
                                                        "src": "13997:10:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 18683,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13997:20:122",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "13976:41:122"
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 18687,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 18685,
                                                        "name": "average",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18643,
                                                        "src": "14035:7:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "id": 18686,
                                                        "name": "minAverage",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18672,
                                                        "src": "14045:10:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "14035:20:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "condition": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 18695,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 18693,
                                                            "name": "average",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18643,
                                                            "src": "14120:7:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">",
                                                        "rightExpression": {
                                                            "id": 18694,
                                                            "name": "maxAverage",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18679,
                                                            "src": "14130:10:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "14120:20:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "id": 18701,
                                                    "nodeType": "IfStatement",
                                                    "src": "14116:79:122",
                                                    "trueBody": {
                                                        "id": 18700,
                                                        "nodeType": "Block",
                                                        "src": "14142:53:122",
                                                        "statements": [
                                                            {
                                                                "expression": {
                                                                    "id": 18698,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "leftHandSide": {
                                                                        "id": 18696,
                                                                        "name": "average",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18643,
                                                                        "src": "14160:7:122",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "nodeType": "Assignment",
                                                                    "operator": "=",
                                                                    "rightHandSide": {
                                                                        "id": 18697,
                                                                        "name": "maxAverage",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18679,
                                                                        "src": "14170:10:122",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "src": "14160:20:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "id": 18699,
                                                                "nodeType": "ExpressionStatement",
                                                                "src": "14160:20:122"
                                                            }
                                                        ]
                                                    }
                                                },
                                                "id": 18702,
                                                "nodeType": "IfStatement",
                                                "src": "14031:164:122",
                                                "trueBody": {
                                                    "id": 18692,
                                                    "nodeType": "Block",
                                                    "src": "14057:53:122",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 18690,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 18688,
                                                                    "name": "average",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 18643,
                                                                    "src": "14075:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "id": 18689,
                                                                    "name": "minAverage",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 18672,
                                                                    "src": "14085:10:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "14075:20:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 18691,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "14075:20:122"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18630,
                            "nodeType": "StructuredDocumentation",
                            "src": "12360:347:122",
                            "text": "@dev Updates a weighted average by adding or removing a weighted delta.\n @param _totalWeight The total weight before the update.\n @param _deltaWeight The weight of the new value.\n @param _average The weighted average before the update.\n @param _delta The new value.\n @return average The new weighted average."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateWeightedAverage",
                        "nameLocation": "12721:21:122",
                        "parameters": {
                            "id": 18641,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18632,
                                    "mutability": "mutable",
                                    "name": "_average",
                                    "nameLocation": "12760:8:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18732,
                                    "src": "12752:16:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18631,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12752:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18634,
                                    "mutability": "mutable",
                                    "name": "_totalWeight",
                                    "nameLocation": "12786:12:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18732,
                                    "src": "12778:20:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18633,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12778:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18636,
                                    "mutability": "mutable",
                                    "name": "_delta",
                                    "nameLocation": "12816:6:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18732,
                                    "src": "12808:14:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18635,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12808:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18638,
                                    "mutability": "mutable",
                                    "name": "_deltaWeight",
                                    "nameLocation": "12840:12:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18732,
                                    "src": "12832:20:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18637,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12832:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18640,
                                    "mutability": "mutable",
                                    "name": "_isAdding",
                                    "nameLocation": "12867:9:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18732,
                                    "src": "12862:14:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 18639,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12862:4:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12742:140:122"
                        },
                        "returnParameters": {
                            "id": 18644,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18643,
                                    "mutability": "mutable",
                                    "name": "average",
                                    "nameLocation": "12914:7:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18732,
                                    "src": "12906:15:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18642,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12906:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12905:17:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18750,
                        "nodeType": "FunctionDefinition",
                        "src": "14987:104:122",
                        "nodes": [],
                        "body": {
                            "id": 18749,
                            "nodeType": "Block",
                            "src": "15054:37:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 18744,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 18742,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18735,
                                                "src": "15071:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 18743,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18737,
                                                "src": "15075:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "15071:5:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "id": 18746,
                                            "name": "a",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18735,
                                            "src": "15083:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 18747,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "15071:13:122",
                                        "trueExpression": {
                                            "id": 18745,
                                            "name": "b",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18737,
                                            "src": "15079:1:122",
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
                                    "functionReturnParameters": 18741,
                                    "id": 18748,
                                    "nodeType": "Return",
                                    "src": "15064:20:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18733,
                            "nodeType": "StructuredDocumentation",
                            "src": "14820:162:122",
                            "text": "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "min",
                        "nameLocation": "14996:3:122",
                        "parameters": {
                            "id": 18738,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18735,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "15008:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18750,
                                    "src": "15000:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18734,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15000:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18737,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "15019:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18750,
                                    "src": "15011:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18736,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15011:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14999:22:122"
                        },
                        "returnParameters": {
                            "id": 18741,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18740,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18750,
                                    "src": "15045:7:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18739,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15045:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15044:9:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18768,
                        "nodeType": "FunctionDefinition",
                        "src": "15264:104:122",
                        "nodes": [],
                        "body": {
                            "id": 18767,
                            "nodeType": "Block",
                            "src": "15331:37:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 18762,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 18760,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18753,
                                                "src": "15348:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 18761,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18755,
                                                "src": "15352:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "15348:5:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "id": 18764,
                                            "name": "b",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18755,
                                            "src": "15360:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 18765,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "15348:13:122",
                                        "trueExpression": {
                                            "id": 18763,
                                            "name": "a",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18753,
                                            "src": "15356:1:122",
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
                                    "functionReturnParameters": 18759,
                                    "id": 18766,
                                    "nodeType": "Return",
                                    "src": "15341:20:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18751,
                            "nodeType": "StructuredDocumentation",
                            "src": "15097:162:122",
                            "text": "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "max",
                        "nameLocation": "15273:3:122",
                        "parameters": {
                            "id": 18756,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18753,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "15285:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18768,
                                    "src": "15277:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18752,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15277:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18755,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "15296:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18768,
                                    "src": "15288:9:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18754,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15288:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15276:22:122"
                        },
                        "returnParameters": {
                            "id": 18759,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18758,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18768,
                                    "src": "15322:7:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18757,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15322:7:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15321:9:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18786,
                        "nodeType": "FunctionDefinition",
                        "src": "15541:101:122",
                        "nodes": [],
                        "body": {
                            "id": 18785,
                            "nodeType": "Block",
                            "src": "15605:37:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 18780,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 18778,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18771,
                                                "src": "15622:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 18779,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18773,
                                                "src": "15626:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "src": "15622:5:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "id": 18782,
                                            "name": "a",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18771,
                                            "src": "15634:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "id": 18783,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "15622:13:122",
                                        "trueExpression": {
                                            "id": 18781,
                                            "name": "b",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18773,
                                            "src": "15630:1:122",
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
                                    "functionReturnParameters": 18777,
                                    "id": 18784,
                                    "nodeType": "Return",
                                    "src": "15615:20:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18769,
                            "nodeType": "StructuredDocumentation",
                            "src": "15374:162:122",
                            "text": "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "min",
                        "nameLocation": "15550:3:122",
                        "parameters": {
                            "id": 18774,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18771,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "15561:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18786,
                                    "src": "15554:8:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18770,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15554:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18773,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "15571:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18786,
                                    "src": "15564:8:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18772,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15564:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15553:20:122"
                        },
                        "returnParameters": {
                            "id": 18777,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18776,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18786,
                                    "src": "15597:6:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18775,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15597:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15596:8:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18804,
                        "nodeType": "FunctionDefinition",
                        "src": "15815:101:122",
                        "nodes": [],
                        "body": {
                            "id": 18803,
                            "nodeType": "Block",
                            "src": "15879:37:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 18798,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 18796,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18789,
                                                "src": "15896:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 18797,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18791,
                                                "src": "15900:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "src": "15896:5:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "id": 18800,
                                            "name": "b",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18791,
                                            "src": "15908:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "id": 18801,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "15896:13:122",
                                        "trueExpression": {
                                            "id": 18799,
                                            "name": "a",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18789,
                                            "src": "15904:1:122",
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
                                    "functionReturnParameters": 18795,
                                    "id": 18802,
                                    "nodeType": "Return",
                                    "src": "15889:20:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18787,
                            "nodeType": "StructuredDocumentation",
                            "src": "15648:162:122",
                            "text": "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "max",
                        "nameLocation": "15824:3:122",
                        "parameters": {
                            "id": 18792,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18789,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "15835:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18804,
                                    "src": "15828:8:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18788,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15828:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 18791,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "15845:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18804,
                                    "src": "15838:8:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18790,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15838:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15827:20:122"
                        },
                        "returnParameters": {
                            "id": 18795,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18794,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18804,
                                    "src": "15871:6:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18793,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15871:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15870:8:122"
                        },
                        "scope": 18822,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 18821,
                        "nodeType": "FunctionDefinition",
                        "src": "16056:92:122",
                        "nodes": [],
                        "body": {
                            "id": 18820,
                            "nodeType": "Block",
                            "src": "16110:38:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 18814,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 18812,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18807,
                                                "src": "16127:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 18813,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "16131:1:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "16127:5:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "id": 18817,
                                            "name": "a",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18807,
                                            "src": "16140:1:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "id": 18818,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "16127:14:122",
                                        "trueExpression": {
                                            "id": 18816,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "-",
                                            "prefix": true,
                                            "src": "16135:2:122",
                                            "subExpression": {
                                                "id": 18815,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18807,
                                                "src": "16136:1:122",
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
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 18811,
                                    "id": 18819,
                                    "nodeType": "Return",
                                    "src": "16120:21:122"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18805,
                            "nodeType": "StructuredDocumentation",
                            "src": "15922:129:122",
                            "text": "@dev Calculates the absolute value of an int256.\n @param a The value.\n @return The absolute value of the input."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "abs",
                        "nameLocation": "16065:3:122",
                        "parameters": {
                            "id": 18808,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18807,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "16076:1:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18821,
                                    "src": "16069:8:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18806,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16069:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16068:10:122"
                        },
                        "returnParameters": {
                            "id": 18811,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18810,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18821,
                                    "src": "16102:6:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 18809,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16102:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16101:8:122"
                        },
                        "scope": 18822,
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
                    "id": 18040,
                    "nodeType": "StructuredDocumentation",
                    "src": "200:307:122",
                    "text": "@author DELV\n @title FixedPointMath\n @notice A fixed-point math library.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    18822
                ],
                "name": "FixedPointMath",
                "nameLocation": "515:14:122",
                "scope": 18823,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 122
};
