export const SafeCast = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122057bad2968544e75a44bb4a0bc81d75cf6f7326ae80ea0ca9aecb5d8981316cab64736f6c63430008140033",
        "sourceMap": "343:1864:127:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;343:1864:127;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122057bad2968544e75a44bb4a0bc81d75cf6f7326ae80ea0ca9aecb5d8981316cab64736f6c63430008140033",
        "sourceMap": "343:1864:127:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe unsigned integer casting library that reverts on overflow.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/SafeCast.sol\":\"SafeCast\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]}},\"version\":1}",
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
                "keccak256": "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952",
                "urls": [
                    "bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf",
                    "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
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
        "id": 22266,
        "exportedSymbols": {
            "IHyperdrive": [
                11028
            ],
            "SafeCast": [
                22265
            ]
        },
        "nodeType": "SourceUnit",
        "src": "40:2168:127",
        "nodes": [
            {
                "id": 22088,
                "nodeType": "PragmaDirective",
                "src": "40:23:127",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 22090,
                "nodeType": "ImportDirective",
                "src": "65:60:127",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 22266,
                "sourceUnit": 11029,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22089,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11028,
                            "src": "74:11:127",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22265,
                "nodeType": "ContractDefinition",
                "src": "343:1864:127",
                "nodes": [
                    {
                        "id": 22121,
                        "nodeType": "FunctionDefinition",
                        "src": "527:190:127",
                        "nodes": [],
                        "body": {
                            "id": 22120,
                            "nodeType": "Block",
                            "src": "591:126:127",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 22105,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "605:15:127",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 22103,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 22099,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22094,
                                                        "src": "607:1:127",
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
                                                        "id": 22102,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "hexValue": "31",
                                                            "id": 22100,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "611:1:127",
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
                                                            "id": 22101,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "616:3:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_112_by_1",
                                                                "typeString": "int_const 112"
                                                            },
                                                            "value": "112"
                                                        },
                                                        "src": "611:8:127",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_5192296858534827628530496329220096_by_1",
                                                            "typeString": "int_const 5192...(26 digits omitted)...0096"
                                                        }
                                                    },
                                                    "src": "607:12:127",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 22104,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "606:14:127",
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
                                    "id": 22112,
                                    "nodeType": "IfStatement",
                                    "src": "601:86:127",
                                    "trueBody": {
                                        "id": 22111,
                                        "nodeType": "Block",
                                        "src": "622:65:127",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 22106,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "643:11:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 22108,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "655:19:127",
                                                        "memberName": "UnsafeCastToUint112",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10982,
                                                        "src": "643:31:127",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 22109,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "643:33:127",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22110,
                                                "nodeType": "RevertStatement",
                                                "src": "636:40:127"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22118,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22113,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22097,
                                            "src": "696:1:127",
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
                                                    "id": 22116,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22094,
                                                    "src": "708:1:127",
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
                                                "id": 22115,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "700:7:127",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint112_$",
                                                    "typeString": "type(uint112)"
                                                },
                                                "typeName": {
                                                    "id": 22114,
                                                    "name": "uint112",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "700:7:127",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 22117,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "700:10:127",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint112",
                                                "typeString": "uint112"
                                            }
                                        },
                                        "src": "696:14:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint112",
                                            "typeString": "uint112"
                                        }
                                    },
                                    "id": 22119,
                                    "nodeType": "ExpressionStatement",
                                    "src": "696:14:127"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22092,
                            "nodeType": "StructuredDocumentation",
                            "src": "366:156:127",
                            "text": "@notice This function safely casts a uint256 to a uint112.\n @param x The uint256 to cast to uint112.\n @return y The uint112 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toUint112",
                        "nameLocation": "536:9:127",
                        "parameters": {
                            "id": 22095,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22094,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "554:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22121,
                                    "src": "546:9:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22093,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "546:7:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "545:11:127"
                        },
                        "returnParameters": {
                            "id": 22098,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22097,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "588:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22121,
                                    "src": "580:9:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint112",
                                        "typeString": "uint112"
                                    },
                                    "typeName": {
                                        "id": 22096,
                                        "name": "uint112",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "580:7:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint112",
                                            "typeString": "uint112"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "579:11:127"
                        },
                        "scope": 22265,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22151,
                        "nodeType": "FunctionDefinition",
                        "src": "884:190:127",
                        "nodes": [],
                        "body": {
                            "id": 22150,
                            "nodeType": "Block",
                            "src": "948:126:127",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 22135,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "962:15:127",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 22133,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 22129,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22124,
                                                        "src": "964:1:127",
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
                                                        "id": 22132,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "hexValue": "31",
                                                            "id": 22130,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "968:1:127",
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
                                                            "id": 22131,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "973:3:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_128_by_1",
                                                                "typeString": "int_const 128"
                                                            },
                                                            "value": "128"
                                                        },
                                                        "src": "968:8:127",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                                                            "typeString": "int_const 3402...(31 digits omitted)...1456"
                                                        }
                                                    },
                                                    "src": "964:12:127",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 22134,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "963:14:127",
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
                                    "id": 22142,
                                    "nodeType": "IfStatement",
                                    "src": "958:86:127",
                                    "trueBody": {
                                        "id": 22141,
                                        "nodeType": "Block",
                                        "src": "979:65:127",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 22136,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "1000:11:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 22138,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1012:19:127",
                                                        "memberName": "UnsafeCastToUint128",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10985,
                                                        "src": "1000:31:127",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 22139,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1000:33:127",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22140,
                                                "nodeType": "RevertStatement",
                                                "src": "993:40:127"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22148,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22143,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22127,
                                            "src": "1053:1:127",
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
                                                    "id": 22146,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22124,
                                                    "src": "1065:1:127",
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
                                                "id": 22145,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1057:7:127",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint128_$",
                                                    "typeString": "type(uint128)"
                                                },
                                                "typeName": {
                                                    "id": 22144,
                                                    "name": "uint128",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1057:7:127",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 22147,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1057:10:127",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "1053:14:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 22149,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1053:14:127"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22122,
                            "nodeType": "StructuredDocumentation",
                            "src": "723:156:127",
                            "text": "@notice This function safely casts a uint256 to a uint128.\n @param x The uint256 to cast to uint128.\n @return y The uint128 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toUint128",
                        "nameLocation": "893:9:127",
                        "parameters": {
                            "id": 22125,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22124,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "911:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22151,
                                    "src": "903:9:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22123,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "903:7:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "902:11:127"
                        },
                        "returnParameters": {
                            "id": 22128,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22127,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "945:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22151,
                                    "src": "937:9:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 22126,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "937:7:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "936:11:127"
                        },
                        "scope": 22265,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22189,
                        "nodeType": "FunctionDefinition",
                        "src": "1240:212:127",
                        "nodes": [],
                        "body": {
                            "id": 22188,
                            "nodeType": "Block",
                            "src": "1302:150:127",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 22170,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1316:33:127",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 22168,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 22159,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22154,
                                                        "src": "1318:1:127",
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
                                                                            "id": 22164,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "1336:6:127",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_int128_$",
                                                                                "typeString": "type(int128)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 22163,
                                                                                "name": "int128",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "1336:6:127",
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
                                                                        "id": 22162,
                                                                        "name": "type",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -27,
                                                                        "src": "1331:4:127",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                            "typeString": "function () pure"
                                                                        }
                                                                    },
                                                                    "id": 22165,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "1331:12:127",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_meta_type_t_int128",
                                                                        "typeString": "type(int128)"
                                                                    }
                                                                },
                                                                "id": 22166,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "1344:3:127",
                                                                "memberName": "max",
                                                                "nodeType": "MemberAccess",
                                                                "src": "1331:16:127",
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
                                                            "id": 22161,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "1323:7:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint128_$",
                                                                "typeString": "type(uint128)"
                                                            },
                                                            "typeName": {
                                                                "id": 22160,
                                                                "name": "uint128",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "1323:7:127",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 22167,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1323:25:127",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "1318:30:127",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 22169,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1317:32:127",
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
                                    "id": 22177,
                                    "nodeType": "IfStatement",
                                    "src": "1312:103:127",
                                    "trueBody": {
                                        "id": 22176,
                                        "nodeType": "Block",
                                        "src": "1351:64:127",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 22171,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "1372:11:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 22173,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1384:18:127",
                                                        "memberName": "UnsafeCastToInt128",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10988,
                                                        "src": "1372:30:127",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 22174,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1372:32:127",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22175,
                                                "nodeType": "RevertStatement",
                                                "src": "1365:39:127"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22186,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22178,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22157,
                                            "src": "1424:1:127",
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
                                                            "id": 22183,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22154,
                                                            "src": "1442:1:127",
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
                                                        "id": 22182,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1435:6:127",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_int256_$",
                                                            "typeString": "type(int256)"
                                                        },
                                                        "typeName": {
                                                            "id": 22181,
                                                            "name": "int256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1435:6:127",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 22184,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1435:9:127",
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
                                                "id": 22180,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1428:6:127",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int128_$",
                                                    "typeString": "type(int128)"
                                                },
                                                "typeName": {
                                                    "id": 22179,
                                                    "name": "int128",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1428:6:127",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 22185,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1428:17:127",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "1424:21:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 22187,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1424:21:127"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22152,
                            "nodeType": "StructuredDocumentation",
                            "src": "1080:155:127",
                            "text": "@notice This function safely casts an uint256 to an int128.\n @param x The uint256 to cast to int128.\n @return y The int128 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt128",
                        "nameLocation": "1249:8:127",
                        "parameters": {
                            "id": 22155,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22154,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1266:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22189,
                                    "src": "1258:9:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22153,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1258:7:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1257:11:127"
                        },
                        "returnParameters": {
                            "id": 22158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22157,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1299:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22189,
                                    "src": "1292:8:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int128",
                                        "typeString": "int128"
                                    },
                                    "typeName": {
                                        "id": 22156,
                                        "name": "int128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1292:6:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1291:10:127"
                        },
                        "scope": 22265,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22229,
                        "nodeType": "FunctionDefinition",
                        "src": "1616:219:127",
                        "nodes": [],
                        "body": {
                            "id": 22228,
                            "nodeType": "Block",
                            "src": "1677:158:127",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 22213,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1691:49:127",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 22211,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        },
                                                        "id": 22203,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 22197,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22192,
                                                            "src": "1693:1:127",
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
                                                                        "id": 22200,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "1703:6:127",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_int128_$",
                                                                            "typeString": "type(int128)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 22199,
                                                                            "name": "int128",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "1703:6:127",
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
                                                                    "id": 22198,
                                                                    "name": "type",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -27,
                                                                    "src": "1698:4:127",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 22201,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1698:12:127",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_meta_type_t_int128",
                                                                    "typeString": "type(int128)"
                                                                }
                                                            },
                                                            "id": 22202,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1711:3:127",
                                                            "memberName": "min",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1698:16:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int128",
                                                                "typeString": "int128"
                                                            }
                                                        },
                                                        "src": "1693:21:127",
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
                                                        "id": 22210,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 22204,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22192,
                                                            "src": "1718:1:127",
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
                                                                        "id": 22207,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "1728:6:127",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_int128_$",
                                                                            "typeString": "type(int128)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 22206,
                                                                            "name": "int128",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "1728:6:127",
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
                                                                    "id": 22205,
                                                                    "name": "type",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -27,
                                                                    "src": "1723:4:127",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 22208,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1723:12:127",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_meta_type_t_int128",
                                                                    "typeString": "type(int128)"
                                                                }
                                                            },
                                                            "id": 22209,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1736:3:127",
                                                            "memberName": "max",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1723:16:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int128",
                                                                "typeString": "int128"
                                                            }
                                                        },
                                                        "src": "1718:21:127",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "1693:46:127",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 22212,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1692:48:127",
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
                                    "id": 22220,
                                    "nodeType": "IfStatement",
                                    "src": "1687:119:127",
                                    "trueBody": {
                                        "id": 22219,
                                        "nodeType": "Block",
                                        "src": "1742:64:127",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 22214,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "1763:11:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 22216,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1775:18:127",
                                                        "memberName": "UnsafeCastToInt128",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10988,
                                                        "src": "1763:30:127",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 22217,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1763:32:127",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22218,
                                                "nodeType": "RevertStatement",
                                                "src": "1756:39:127"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22226,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22221,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22195,
                                            "src": "1815:1:127",
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
                                                    "id": 22224,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22192,
                                                    "src": "1826:1:127",
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
                                                "id": 22223,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1819:6:127",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int128_$",
                                                    "typeString": "type(int128)"
                                                },
                                                "typeName": {
                                                    "id": 22222,
                                                    "name": "int128",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1819:6:127",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 22225,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1819:9:127",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "1815:13:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 22227,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1815:13:127"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22190,
                            "nodeType": "StructuredDocumentation",
                            "src": "1458:153:127",
                            "text": "@notice This function safely casts an int256 to an int128.\n @param x The int256 to cast to int128.\n @return y The int128 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt128",
                        "nameLocation": "1625:8:127",
                        "parameters": {
                            "id": 22193,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22192,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1641:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22229,
                                    "src": "1634:8:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 22191,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1634:6:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1633:10:127"
                        },
                        "returnParameters": {
                            "id": 22196,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22195,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1674:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22229,
                                    "src": "1667:8:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int128",
                                        "typeString": "int128"
                                    },
                                    "typeName": {
                                        "id": 22194,
                                        "name": "int128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1667:6:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1666:10:127"
                        },
                        "scope": 22265,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22264,
                        "nodeType": "FunctionDefinition",
                        "src": "2001:204:127",
                        "nodes": [],
                        "body": {
                            "id": 22263,
                            "nodeType": "Block",
                            "src": "2063:142:127",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 22248,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "2077:33:127",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 22246,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 22237,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22232,
                                                        "src": "2079:1:127",
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
                                                                            "id": 22242,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "2097:6:127",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_int256_$",
                                                                                "typeString": "type(int256)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 22241,
                                                                                "name": "int256",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "2097:6:127",
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
                                                                        "id": 22240,
                                                                        "name": "type",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -27,
                                                                        "src": "2092:4:127",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                            "typeString": "function () pure"
                                                                        }
                                                                    },
                                                                    "id": 22243,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "2092:12:127",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_meta_type_t_int256",
                                                                        "typeString": "type(int256)"
                                                                    }
                                                                },
                                                                "id": 22244,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "2105:3:127",
                                                                "memberName": "max",
                                                                "nodeType": "MemberAccess",
                                                                "src": "2092:16:127",
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
                                                            "id": 22239,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2084:7:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                                "typeString": "type(uint256)"
                                                            },
                                                            "typeName": {
                                                                "id": 22238,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2084:7:127",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 22245,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2084:25:127",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2079:30:127",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 22247,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "2078:32:127",
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
                                    "id": 22255,
                                    "nodeType": "IfStatement",
                                    "src": "2073:103:127",
                                    "trueBody": {
                                        "id": 22254,
                                        "nodeType": "Block",
                                        "src": "2112:64:127",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 22249,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "2133:11:127",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 22251,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2145:18:127",
                                                        "memberName": "UnsafeCastToInt256",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10991,
                                                        "src": "2133:30:127",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 22252,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2133:32:127",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22253,
                                                "nodeType": "RevertStatement",
                                                "src": "2126:39:127"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22261,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22256,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22235,
                                            "src": "2185:1:127",
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
                                                    "id": 22259,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22232,
                                                    "src": "2196:1:127",
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
                                                "id": 22258,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2189:6:127",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int256_$",
                                                    "typeString": "type(int256)"
                                                },
                                                "typeName": {
                                                    "id": 22257,
                                                    "name": "int256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2189:6:127",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 22260,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2189:9:127",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "2185:13:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 22262,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2185:13:127"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22230,
                            "nodeType": "StructuredDocumentation",
                            "src": "1841:155:127",
                            "text": "@notice This function safely casts an uint256 to an int256.\n @param x The uint256 to cast to int256.\n @return y The int256 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt256",
                        "nameLocation": "2010:8:127",
                        "parameters": {
                            "id": 22233,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22232,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2027:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22264,
                                    "src": "2019:9:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22231,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2019:7:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2018:11:127"
                        },
                        "returnParameters": {
                            "id": 22236,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22235,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "2060:1:127",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22264,
                                    "src": "2053:8:127",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 22234,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2053:6:127",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2052:10:127"
                        },
                        "scope": 22265,
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
                    "id": 22091,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:216:127",
                    "text": "@notice Safe unsigned integer casting library that reverts on overflow.\n @author Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    22265
                ],
                "name": "SafeCast",
                "nameLocation": "351:8:127",
                "scope": 22266,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 127
};
