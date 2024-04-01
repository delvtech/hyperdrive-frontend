export const SafeCast = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a9a782705f7ca224d6d0439cccecbf16f793d84b634cda823dccf9475af6a0eb64736f6c63430008140033",
        "sourceMap": "343:1864:125:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;343:1864:125;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a9a782705f7ca224d6d0439cccecbf16f793d84b634cda823dccf9475af6a0eb64736f6c63430008140033",
        "sourceMap": "343:1864:125:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe unsigned integer casting library that reverts on overflow.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/SafeCast.sol\":\"SafeCast\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]}},\"version\":1}",
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
                "keccak256": "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71",
                "urls": [
                    "bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf",
                    "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"
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
        "id": 21937,
        "exportedSymbols": {
            "IHyperdrive": [
                10676
            ],
            "SafeCast": [
                21936
            ]
        },
        "nodeType": "SourceUnit",
        "src": "40:2168:125",
        "nodes": [
            {
                "id": 21759,
                "nodeType": "PragmaDirective",
                "src": "40:23:125",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 21761,
                "nodeType": "ImportDirective",
                "src": "65:60:125",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 21937,
                "sourceUnit": 10677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 21760,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10676,
                            "src": "74:11:125",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 21936,
                "nodeType": "ContractDefinition",
                "src": "343:1864:125",
                "nodes": [
                    {
                        "id": 21792,
                        "nodeType": "FunctionDefinition",
                        "src": "527:190:125",
                        "nodes": [],
                        "body": {
                            "id": 21791,
                            "nodeType": "Block",
                            "src": "591:126:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 21776,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "605:15:125",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 21774,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 21770,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21765,
                                                        "src": "607:1:125",
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
                                                        "id": 21773,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "hexValue": "31",
                                                            "id": 21771,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "611:1:125",
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
                                                            "id": 21772,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "616:3:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_112_by_1",
                                                                "typeString": "int_const 112"
                                                            },
                                                            "value": "112"
                                                        },
                                                        "src": "611:8:125",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_5192296858534827628530496329220096_by_1",
                                                            "typeString": "int_const 5192...(26 digits omitted)...0096"
                                                        }
                                                    },
                                                    "src": "607:12:125",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 21775,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "606:14:125",
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
                                    "id": 21783,
                                    "nodeType": "IfStatement",
                                    "src": "601:86:125",
                                    "trueBody": {
                                        "id": 21782,
                                        "nodeType": "Block",
                                        "src": "622:65:125",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 21777,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "643:11:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 21779,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "655:19:125",
                                                        "memberName": "UnsafeCastToUint112",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10630,
                                                        "src": "643:31:125",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 21780,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "643:33:125",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 21781,
                                                "nodeType": "RevertStatement",
                                                "src": "636:40:125"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 21789,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21784,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21768,
                                            "src": "696:1:125",
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
                                                    "id": 21787,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21765,
                                                    "src": "708:1:125",
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
                                                "id": 21786,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "700:7:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint112_$",
                                                    "typeString": "type(uint112)"
                                                },
                                                "typeName": {
                                                    "id": 21785,
                                                    "name": "uint112",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "700:7:125",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 21788,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "700:10:125",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint112",
                                                "typeString": "uint112"
                                            }
                                        },
                                        "src": "696:14:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint112",
                                            "typeString": "uint112"
                                        }
                                    },
                                    "id": 21790,
                                    "nodeType": "ExpressionStatement",
                                    "src": "696:14:125"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 21763,
                            "nodeType": "StructuredDocumentation",
                            "src": "366:156:125",
                            "text": "@notice This function safely casts a uint256 to a uint112.\n @param x The uint256 to cast to uint112.\n @return y The uint112 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toUint112",
                        "nameLocation": "536:9:125",
                        "parameters": {
                            "id": 21766,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21765,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "554:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21792,
                                    "src": "546:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21764,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "546:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "545:11:125"
                        },
                        "returnParameters": {
                            "id": 21769,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21768,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "588:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21792,
                                    "src": "580:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint112",
                                        "typeString": "uint112"
                                    },
                                    "typeName": {
                                        "id": 21767,
                                        "name": "uint112",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "580:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint112",
                                            "typeString": "uint112"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "579:11:125"
                        },
                        "scope": 21936,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 21822,
                        "nodeType": "FunctionDefinition",
                        "src": "884:190:125",
                        "nodes": [],
                        "body": {
                            "id": 21821,
                            "nodeType": "Block",
                            "src": "948:126:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 21806,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "962:15:125",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 21804,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 21800,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21795,
                                                        "src": "964:1:125",
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
                                                        "id": 21803,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "hexValue": "31",
                                                            "id": 21801,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "968:1:125",
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
                                                            "id": 21802,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "973:3:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_128_by_1",
                                                                "typeString": "int_const 128"
                                                            },
                                                            "value": "128"
                                                        },
                                                        "src": "968:8:125",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                                                            "typeString": "int_const 3402...(31 digits omitted)...1456"
                                                        }
                                                    },
                                                    "src": "964:12:125",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 21805,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "963:14:125",
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
                                    "id": 21813,
                                    "nodeType": "IfStatement",
                                    "src": "958:86:125",
                                    "trueBody": {
                                        "id": 21812,
                                        "nodeType": "Block",
                                        "src": "979:65:125",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 21807,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "1000:11:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 21809,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1012:19:125",
                                                        "memberName": "UnsafeCastToUint128",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10633,
                                                        "src": "1000:31:125",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 21810,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1000:33:125",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 21811,
                                                "nodeType": "RevertStatement",
                                                "src": "993:40:125"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 21819,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21814,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21798,
                                            "src": "1053:1:125",
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
                                                    "id": 21817,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21795,
                                                    "src": "1065:1:125",
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
                                                "id": 21816,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1057:7:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint128_$",
                                                    "typeString": "type(uint128)"
                                                },
                                                "typeName": {
                                                    "id": 21815,
                                                    "name": "uint128",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1057:7:125",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 21818,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1057:10:125",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "1053:14:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 21820,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1053:14:125"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 21793,
                            "nodeType": "StructuredDocumentation",
                            "src": "723:156:125",
                            "text": "@notice This function safely casts a uint256 to a uint128.\n @param x The uint256 to cast to uint128.\n @return y The uint128 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toUint128",
                        "nameLocation": "893:9:125",
                        "parameters": {
                            "id": 21796,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21795,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "911:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21822,
                                    "src": "903:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21794,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "903:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "902:11:125"
                        },
                        "returnParameters": {
                            "id": 21799,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21798,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "945:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21822,
                                    "src": "937:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 21797,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "937:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "936:11:125"
                        },
                        "scope": 21936,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 21860,
                        "nodeType": "FunctionDefinition",
                        "src": "1240:212:125",
                        "nodes": [],
                        "body": {
                            "id": 21859,
                            "nodeType": "Block",
                            "src": "1302:150:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 21841,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1316:33:125",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 21839,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 21830,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21825,
                                                        "src": "1318:1:125",
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
                                                                            "id": 21835,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "1336:6:125",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_int128_$",
                                                                                "typeString": "type(int128)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 21834,
                                                                                "name": "int128",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "1336:6:125",
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
                                                                        "id": 21833,
                                                                        "name": "type",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -27,
                                                                        "src": "1331:4:125",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                            "typeString": "function () pure"
                                                                        }
                                                                    },
                                                                    "id": 21836,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "1331:12:125",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_meta_type_t_int128",
                                                                        "typeString": "type(int128)"
                                                                    }
                                                                },
                                                                "id": 21837,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "1344:3:125",
                                                                "memberName": "max",
                                                                "nodeType": "MemberAccess",
                                                                "src": "1331:16:125",
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
                                                            "id": 21832,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "1323:7:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint128_$",
                                                                "typeString": "type(uint128)"
                                                            },
                                                            "typeName": {
                                                                "id": 21831,
                                                                "name": "uint128",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "1323:7:125",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 21838,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1323:25:125",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "1318:30:125",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 21840,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1317:32:125",
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
                                    "id": 21848,
                                    "nodeType": "IfStatement",
                                    "src": "1312:103:125",
                                    "trueBody": {
                                        "id": 21847,
                                        "nodeType": "Block",
                                        "src": "1351:64:125",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 21842,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "1372:11:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 21844,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1384:18:125",
                                                        "memberName": "UnsafeCastToInt128",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10636,
                                                        "src": "1372:30:125",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 21845,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1372:32:125",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 21846,
                                                "nodeType": "RevertStatement",
                                                "src": "1365:39:125"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 21857,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21849,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21828,
                                            "src": "1424:1:125",
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
                                                            "id": 21854,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 21825,
                                                            "src": "1442:1:125",
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
                                                        "id": 21853,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1435:6:125",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_int256_$",
                                                            "typeString": "type(int256)"
                                                        },
                                                        "typeName": {
                                                            "id": 21852,
                                                            "name": "int256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1435:6:125",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 21855,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1435:9:125",
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
                                                "id": 21851,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1428:6:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int128_$",
                                                    "typeString": "type(int128)"
                                                },
                                                "typeName": {
                                                    "id": 21850,
                                                    "name": "int128",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1428:6:125",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 21856,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1428:17:125",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "1424:21:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 21858,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1424:21:125"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 21823,
                            "nodeType": "StructuredDocumentation",
                            "src": "1080:155:125",
                            "text": "@notice This function safely casts an uint256 to an int128.\n @param x The uint256 to cast to int128.\n @return y The int128 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt128",
                        "nameLocation": "1249:8:125",
                        "parameters": {
                            "id": 21826,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21825,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1266:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21860,
                                    "src": "1258:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21824,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1258:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1257:11:125"
                        },
                        "returnParameters": {
                            "id": 21829,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21828,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1299:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21860,
                                    "src": "1292:8:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int128",
                                        "typeString": "int128"
                                    },
                                    "typeName": {
                                        "id": 21827,
                                        "name": "int128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1292:6:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1291:10:125"
                        },
                        "scope": 21936,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 21900,
                        "nodeType": "FunctionDefinition",
                        "src": "1616:219:125",
                        "nodes": [],
                        "body": {
                            "id": 21899,
                            "nodeType": "Block",
                            "src": "1677:158:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 21884,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "1691:49:125",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 21882,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        },
                                                        "id": 21874,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 21868,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 21863,
                                                            "src": "1693:1:125",
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
                                                                        "id": 21871,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "1703:6:125",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_int128_$",
                                                                            "typeString": "type(int128)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 21870,
                                                                            "name": "int128",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "1703:6:125",
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
                                                                    "id": 21869,
                                                                    "name": "type",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -27,
                                                                    "src": "1698:4:125",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 21872,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1698:12:125",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_meta_type_t_int128",
                                                                    "typeString": "type(int128)"
                                                                }
                                                            },
                                                            "id": 21873,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1711:3:125",
                                                            "memberName": "min",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1698:16:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int128",
                                                                "typeString": "int128"
                                                            }
                                                        },
                                                        "src": "1693:21:125",
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
                                                        "id": 21881,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 21875,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 21863,
                                                            "src": "1718:1:125",
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
                                                                        "id": 21878,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "1728:6:125",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_int128_$",
                                                                            "typeString": "type(int128)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 21877,
                                                                            "name": "int128",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "1728:6:125",
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
                                                                    "id": 21876,
                                                                    "name": "type",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -27,
                                                                    "src": "1723:4:125",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 21879,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1723:12:125",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_meta_type_t_int128",
                                                                    "typeString": "type(int128)"
                                                                }
                                                            },
                                                            "id": 21880,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1736:3:125",
                                                            "memberName": "max",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1723:16:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int128",
                                                                "typeString": "int128"
                                                            }
                                                        },
                                                        "src": "1718:21:125",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "1693:46:125",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 21883,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1692:48:125",
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
                                    "id": 21891,
                                    "nodeType": "IfStatement",
                                    "src": "1687:119:125",
                                    "trueBody": {
                                        "id": 21890,
                                        "nodeType": "Block",
                                        "src": "1742:64:125",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 21885,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "1763:11:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 21887,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1775:18:125",
                                                        "memberName": "UnsafeCastToInt128",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10636,
                                                        "src": "1763:30:125",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 21888,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1763:32:125",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 21889,
                                                "nodeType": "RevertStatement",
                                                "src": "1756:39:125"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 21897,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21892,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21866,
                                            "src": "1815:1:125",
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
                                                    "id": 21895,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21863,
                                                    "src": "1826:1:125",
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
                                                "id": 21894,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1819:6:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int128_$",
                                                    "typeString": "type(int128)"
                                                },
                                                "typeName": {
                                                    "id": 21893,
                                                    "name": "int128",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1819:6:125",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 21896,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1819:9:125",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "1815:13:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 21898,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1815:13:125"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 21861,
                            "nodeType": "StructuredDocumentation",
                            "src": "1458:153:125",
                            "text": "@notice This function safely casts an int256 to an int128.\n @param x The int256 to cast to int128.\n @return y The int128 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt128",
                        "nameLocation": "1625:8:125",
                        "parameters": {
                            "id": 21864,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21863,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1641:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21900,
                                    "src": "1634:8:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 21862,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1634:6:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1633:10:125"
                        },
                        "returnParameters": {
                            "id": 21867,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21866,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "1674:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21900,
                                    "src": "1667:8:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int128",
                                        "typeString": "int128"
                                    },
                                    "typeName": {
                                        "id": 21865,
                                        "name": "int128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1667:6:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1666:10:125"
                        },
                        "scope": 21936,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 21935,
                        "nodeType": "FunctionDefinition",
                        "src": "2001:204:125",
                        "nodes": [],
                        "body": {
                            "id": 21934,
                            "nodeType": "Block",
                            "src": "2063:142:125",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 21919,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "2077:33:125",
                                        "subExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 21917,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 21908,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 21903,
                                                        "src": "2079:1:125",
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
                                                                            "id": 21913,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "2097:6:125",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_int256_$",
                                                                                "typeString": "type(int256)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 21912,
                                                                                "name": "int256",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "2097:6:125",
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
                                                                        "id": 21911,
                                                                        "name": "type",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -27,
                                                                        "src": "2092:4:125",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                            "typeString": "function () pure"
                                                                        }
                                                                    },
                                                                    "id": 21914,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "functionCall",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "2092:12:125",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_meta_type_t_int256",
                                                                        "typeString": "type(int256)"
                                                                    }
                                                                },
                                                                "id": 21915,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "2105:3:125",
                                                                "memberName": "max",
                                                                "nodeType": "MemberAccess",
                                                                "src": "2092:16:125",
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
                                                            "id": 21910,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2084:7:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                                "typeString": "type(uint256)"
                                                            },
                                                            "typeName": {
                                                                "id": 21909,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2084:7:125",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 21916,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2084:25:125",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2079:30:125",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 21918,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "2078:32:125",
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
                                    "id": 21926,
                                    "nodeType": "IfStatement",
                                    "src": "2073:103:125",
                                    "trueBody": {
                                        "id": 21925,
                                        "nodeType": "Block",
                                        "src": "2112:64:125",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 21920,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "2133:11:125",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 21922,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2145:18:125",
                                                        "memberName": "UnsafeCastToInt256",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10639,
                                                        "src": "2133:30:125",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 21923,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2133:32:125",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 21924,
                                                "nodeType": "RevertStatement",
                                                "src": "2126:39:125"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 21932,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 21927,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21906,
                                            "src": "2185:1:125",
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
                                                    "id": 21930,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21903,
                                                    "src": "2196:1:125",
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
                                                "id": 21929,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2189:6:125",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_int256_$",
                                                    "typeString": "type(int256)"
                                                },
                                                "typeName": {
                                                    "id": 21928,
                                                    "name": "int256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2189:6:125",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 21931,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2189:9:125",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "2185:13:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 21933,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2185:13:125"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 21901,
                            "nodeType": "StructuredDocumentation",
                            "src": "1841:155:125",
                            "text": "@notice This function safely casts an uint256 to an int256.\n @param x The uint256 to cast to int256.\n @return y The int256 casted from x."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt256",
                        "nameLocation": "2010:8:125",
                        "parameters": {
                            "id": 21904,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21903,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2027:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21935,
                                    "src": "2019:9:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 21902,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2019:7:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2018:11:125"
                        },
                        "returnParameters": {
                            "id": 21907,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 21906,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "2060:1:125",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21935,
                                    "src": "2053:8:125",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 21905,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2053:6:125",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2052:10:125"
                        },
                        "scope": 21936,
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
                    "id": 21762,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:216:125",
                    "text": "@notice Safe unsigned integer casting library that reverts on overflow.\n @author Inspired by OpenZeppelin (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeCast.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    21936
                ],
                "name": "SafeCast",
                "nameLocation": "351:8:125",
                "scope": 21937,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 125
};
