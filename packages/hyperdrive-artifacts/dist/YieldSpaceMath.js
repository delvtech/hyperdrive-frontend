export const YieldSpaceMath = {
    "abi": [],
    "bytecode": {
        "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122012f84b500b3d5ce19eada04132ce16a6f2ca99ff6701a6c65db74780a7c5256e64736f6c63430008140033",
        "sourceMap": "1466:19803:128:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1466:19803:128;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122012f84b500b3d5ce19eada04132ce16a6f2ca99ff6701a6c65db74780a7c5256e64736f6c63430008140033",
        "sourceMap": "1466:19803:128:-:0;;;;;;;;",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"It is advised for developers to attain the pre-requisite knowledge      of how this implementation works on the mathematical level. This      excerpt attempts to document this pre-requisite knowledge explaining      the underpinning mathematical concepts in an understandable manner and      relating it directly to the code implementation.      This implementation is based on a paper called \\\"YieldSpace with Yield      Bearing Vaults\\\" or more casually \\\"Modified YieldSpace\\\". It can be      found at the following link.      https://hackmd.io/lRZ4mgdrRgOpxZQXqKYlFw?view      That paper builds on the original YieldSpace paper, \\\"YieldSpace:      An Automated Liquidity Provider for Fixed Yield Tokens\\\". It can be      found at the following link:      https://yieldprotocol.com/YieldSpace.pdf\",\"kind\":\"dev\",\"methods\":{},\"title\":\"YieldSpaceMath\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Math for the YieldSpace pricing model.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/YieldSpaceMath.sol\":\"YieldSpaceMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]}},\"version\":1}",
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
                "contracts/src/libraries/YieldSpaceMath.sol": "YieldSpaceMath"
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
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab",
                "urls": [
                    "bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002",
                    "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"
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
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/libraries/YieldSpaceMath.sol",
        "id": 23245,
        "exportedSymbols": {
            "Errors": [
                18619
            ],
            "FixedPointMath": [
                19394
            ],
            "HyperdriveMath": [
                20142
            ],
            "IHyperdrive": [
                11028
            ],
            "ONE": [
                18628
            ],
            "YieldSpaceMath": [
                23244
            ]
        },
        "nodeType": "SourceUnit",
        "src": "40:21230:128",
        "nodes": [
            {
                "id": 22267,
                "nodeType": "PragmaDirective",
                "src": "40:23:128",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 22269,
                "nodeType": "ImportDirective",
                "src": "65:60:128",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23245,
                "sourceUnit": 11029,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22268,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11028,
                            "src": "74:11:128",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22271,
                "nodeType": "ImportDirective",
                "src": "126:38:128",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/Errors.sol",
                "file": "./Errors.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23245,
                "sourceUnit": 18620,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22270,
                            "name": "Errors",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18619,
                            "src": "135:6:128",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22274,
                "nodeType": "ImportDirective",
                "src": "165:59:128",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "./FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23245,
                "sourceUnit": 19395,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22272,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19394,
                            "src": "174:14:128",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 22273,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18628,
                            "src": "190:3:128",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 22276,
                "nodeType": "ImportDirective",
                "src": "225:54:128",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "./HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 23245,
                "sourceUnit": 20143,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 22275,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20142,
                            "src": "234:14:128",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 23244,
                "nodeType": "ContractDefinition",
                "src": "1466:19803:128",
                "nodes": [
                    {
                        "id": 22280,
                        "nodeType": "UsingForDirective",
                        "src": "1495:33:128",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 22278,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1501:14:128"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19394,
                            "src": "1501:14:128"
                        },
                        "typeName": {
                            "id": 22279,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1520:7:128",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 22396,
                        "nodeType": "FunctionDefinition",
                        "src": "2068:1726:128",
                        "nodes": [],
                        "body": {
                            "id": 22395,
                            "nodeType": "Block",
                            "src": "2267:1527:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22299
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22299,
                                            "mutability": "mutable",
                                            "name": "k",
                                            "nameLocation": "2423:1:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22395,
                                            "src": "2415:9:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22298,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2415:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22307,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 22301,
                                                "name": "ze",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22283,
                                                "src": "2431:2:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22302,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22285,
                                                "src": "2435:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22303,
                                                "name": "t",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22289,
                                                "src": "2438:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22304,
                                                "name": "c",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22291,
                                                "src": "2441:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22305,
                                                "name": "mu",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22293,
                                                "src": "2444:2:128",
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
                                            "id": 22300,
                                            "name": "kUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23209,
                                            "src": "2427:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 22306,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2427:20:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2415:32:128"
                                },
                                {
                                    "expression": {
                                        "id": 22318,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22308,
                                            "name": "ze",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22283,
                                            "src": "2580:2:128",
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
                                                    "id": 22316,
                                                    "name": "t",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22289,
                                                    "src": "2609:1:128",
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
                                                            "id": 22313,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 22311,
                                                                "name": "ze",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22283,
                                                                "src": "2596:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "+",
                                                            "rightExpression": {
                                                                "id": 22312,
                                                                "name": "dz",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22287,
                                                                "src": "2601:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "2596:7:128",
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
                                                            "id": 22309,
                                                            "name": "mu",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22293,
                                                            "src": "2585:2:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 22310,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2588:7:128",
                                                        "memberName": "mulDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18674,
                                                        "src": "2585:10:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 22314,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2585:19:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22315,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2605:3:128",
                                                "memberName": "pow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18799,
                                                "src": "2585:23:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22317,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2585:26:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2580:31:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22319,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2580:31:128"
                                },
                                {
                                    "expression": {
                                        "id": 22326,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22320,
                                            "name": "ze",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22283,
                                            "src": "2669:2:128",
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
                                                    "id": 22323,
                                                    "name": "ze",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22283,
                                                    "src": "2687:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22324,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22293,
                                                    "src": "2691:2:128",
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
                                                    "id": 22321,
                                                    "name": "c",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22291,
                                                    "src": "2674:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22322,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2676:10:128",
                                                "memberName": "mulDivDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18656,
                                                "src": "2674:12:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22325,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2674:20:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2669:25:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22327,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2669:25:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22330,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22328,
                                            "name": "k",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22299,
                                            "src": "2764:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22329,
                                            "name": "ze",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22283,
                                            "src": "2768:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2764:6:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22340,
                                    "nodeType": "IfStatement",
                                    "src": "2760:166:128",
                                    "trueBody": {
                                        "id": 22339,
                                        "nodeType": "Block",
                                        "src": "2772:154:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 22334,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11028,
                                                                    "src": "2842:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 22335,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "2854:27:128",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10881,
                                                                "src": "2842:39:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10881_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 22336,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "2882:19:128",
                                                            "memberName": "ArithmeticUnderflow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10877,
                                                            "src": "2842:59:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 22331,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18619,
                                                            "src": "2786:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18619_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 22333,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2793:31:128",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18618,
                                                        "src": "2786:38:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10881_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 22337,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2786:129:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22338,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2786:129:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        22342
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22342,
                                            "mutability": "mutable",
                                            "name": "_y",
                                            "nameLocation": "3094:2:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22395,
                                            "src": "3086:10:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22341,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3086:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22343,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3086:10:128"
                                },
                                {
                                    "id": 22350,
                                    "nodeType": "UncheckedBlock",
                                    "src": "3106:46:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 22348,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 22344,
                                                    "name": "_y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22342,
                                                    "src": "3130:2:128",
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
                                                    "id": 22347,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 22345,
                                                        "name": "k",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22299,
                                                        "src": "3135:1:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 22346,
                                                        "name": "ze",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22283,
                                                        "src": "3139:2:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3135:6:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3130:11:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 22349,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3130:11:128"
                                        }
                                    ]
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22353,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22351,
                                            "name": "_y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22342,
                                            "src": "3165:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">=",
                                        "rightExpression": {
                                            "id": 22352,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18628,
                                            "src": "3171:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3165:9:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 22375,
                                        "nodeType": "Block",
                                        "src": "3300:122:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22373,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22365,
                                                        "name": "_y",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22342,
                                                        "src": "3384:2:128",
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
                                                                        "id": 22370,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22289,
                                                                        "src": "3408:1:128",
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
                                                                        "id": 22368,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "3396:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22369,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "3400:7:128",
                                                                    "memberName": "divDown",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18692,
                                                                    "src": "3396:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22371,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "3396:14:128",
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
                                                                "id": 22366,
                                                                "name": "_y",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22342,
                                                                "src": "3389:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22367,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "3392:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "3389:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22372,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3389:22:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3384:27:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22374,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3384:27:128"
                                            }
                                        ]
                                    },
                                    "id": 22376,
                                    "nodeType": "IfStatement",
                                    "src": "3161:261:128",
                                    "trueBody": {
                                        "id": 22364,
                                        "nodeType": "Block",
                                        "src": "3176:118:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22362,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22354,
                                                        "name": "_y",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22342,
                                                        "src": "3258:2:128",
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
                                                                        "id": 22359,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22289,
                                                                        "src": "3280:1:128",
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
                                                                        "id": 22357,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "3270:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22358,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "3274:5:128",
                                                                    "memberName": "divUp",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18742,
                                                                    "src": "3270:9:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22360,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "3270:12:128",
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
                                                                "id": 22355,
                                                                "name": "_y",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22342,
                                                                "src": "3263:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22356,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "3266:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "3263:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22361,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3263:20:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3258:25:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22363,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3258:25:128"
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
                                        "id": 22379,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22377,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22285,
                                            "src": "3491:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22378,
                                            "name": "_y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22342,
                                            "src": "3495:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3491:6:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22389,
                                    "nodeType": "IfStatement",
                                    "src": "3487:166:128",
                                    "trueBody": {
                                        "id": 22388,
                                        "nodeType": "Block",
                                        "src": "3499:154:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 22383,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11028,
                                                                    "src": "3569:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 22384,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "3581:27:128",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10881,
                                                                "src": "3569:39:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10881_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 22385,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "3609:19:128",
                                                            "memberName": "ArithmeticUnderflow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10877,
                                                            "src": "3569:59:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 22380,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18619,
                                                            "src": "3513:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18619_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 22382,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3520:31:128",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18618,
                                                        "src": "3513:38:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10881_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 22386,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3513:129:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22387,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3513:129:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 22394,
                                    "nodeType": "UncheckedBlock",
                                    "src": "3740:48:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 22392,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 22390,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22285,
                                                    "src": "3771:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 22391,
                                                    "name": "_y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22342,
                                                    "src": "3775:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3771:6:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "functionReturnParameters": 22297,
                                            "id": 22393,
                                            "nodeType": "Return",
                                            "src": "3764:13:128"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22281,
                            "nodeType": "StructuredDocumentation",
                            "src": "1534:529:128",
                            "text": "@dev Calculates the amount of bonds a user will receive from the pool by\n      providing a specified amount of shares. We underestimate the amount\n      of bonds out.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dz The amount of shares paid to the pool.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The amount of bonds the trader receives."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateBondsOutGivenSharesInDown",
                        "nameLocation": "2077:34:128",
                        "parameters": {
                            "id": 22294,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22283,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "2129:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22396,
                                    "src": "2121:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22282,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2121:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22285,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "2149:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22396,
                                    "src": "2141:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22284,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2141:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22287,
                                    "mutability": "mutable",
                                    "name": "dz",
                                    "nameLocation": "2168:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22396,
                                    "src": "2160:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22286,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2160:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22289,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "2188:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22396,
                                    "src": "2180:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22288,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2180:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22291,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "2207:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22396,
                                    "src": "2199:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22290,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2199:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22293,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "2226:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22396,
                                    "src": "2218:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22292,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2218:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2111:123:128"
                        },
                        "returnParameters": {
                            "id": 22297,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22296,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22396,
                                    "src": "2258:7:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22295,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2258:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2257:9:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22443,
                        "nodeType": "FunctionDefinition",
                        "src": "4331:579:128",
                        "nodes": [],
                        "body": {
                            "id": 22442,
                            "nodeType": "Block",
                            "src": "4535:375:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22415
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22415,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "4550:7:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22442,
                                            "src": "4545:12:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 22414,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4545:4:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22416,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4545:12:128"
                                },
                                {
                                    "expression": {
                                        "id": 22428,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 22417,
                                                    "name": "result",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22412,
                                                    "src": "4568:6:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22418,
                                                    "name": "success",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22415,
                                                    "src": "4576:7:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 22419,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "4567:17:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                "typeString": "tuple(uint256,bool)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 22421,
                                                    "name": "ze",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22399,
                                                    "src": "4637:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22422,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22401,
                                                    "src": "4653:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22423,
                                                    "name": "dy",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22403,
                                                    "src": "4668:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22424,
                                                    "name": "t",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22405,
                                                    "src": "4684:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22425,
                                                    "name": "c",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22407,
                                                    "src": "4699:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22426,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22409,
                                                    "src": "4714:2:128",
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
                                                "id": 22420,
                                                "name": "calculateSharesInGivenBondsOutUpSafe",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22571,
                                                "src": "4587:36:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_bool_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,bool)"
                                                }
                                            },
                                            "id": 22427,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4587:139:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                "typeString": "tuple(uint256,bool)"
                                            }
                                        },
                                        "src": "4567:159:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 22429,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4567:159:128"
                                },
                                {
                                    "condition": {
                                        "id": 22431,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "4740:8:128",
                                        "subExpression": {
                                            "id": 22430,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22415,
                                            "src": "4741:7:128",
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
                                    "id": 22441,
                                    "nodeType": "IfStatement",
                                    "src": "4736:168:128",
                                    "trueBody": {
                                        "id": 22440,
                                        "nodeType": "Block",
                                        "src": "4750:154:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 22435,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11028,
                                                                    "src": "4820:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 22436,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "4832:27:128",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10881,
                                                                "src": "4820:39:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10881_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 22437,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4860:19:128",
                                                            "memberName": "ArithmeticUnderflow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10877,
                                                            "src": "4820:59:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 22432,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18619,
                                                            "src": "4764:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18619_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 22434,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4771:31:128",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18618,
                                                        "src": "4764:38:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10881_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 22438,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4764:129:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22439,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4764:129:128"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22397,
                            "nodeType": "StructuredDocumentation",
                            "src": "3800:526:128",
                            "text": "@dev Calculates the amount of shares a user must provide the pool to\n      receive a specified amount of bonds. We overestimate the amount of\n      shares in.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dy The amount of bonds paid to the trader.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return result The amount of shares the trader pays."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateSharesInGivenBondsOutUp",
                        "nameLocation": "4340:32:128",
                        "parameters": {
                            "id": 22410,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22399,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "4390:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22443,
                                    "src": "4382:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22398,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4382:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22401,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "4410:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22443,
                                    "src": "4402:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22400,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4402:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22403,
                                    "mutability": "mutable",
                                    "name": "dy",
                                    "nameLocation": "4429:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22443,
                                    "src": "4421:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22402,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4421:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22405,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "4449:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22443,
                                    "src": "4441:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22404,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4441:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22407,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "4468:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22443,
                                    "src": "4460:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22406,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4460:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22409,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "4487:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22443,
                                    "src": "4479:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22408,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4479:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4372:123:128"
                        },
                        "returnParameters": {
                            "id": 22413,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22412,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "4527:6:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22443,
                                    "src": "4519:14:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22411,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4519:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4518:16:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22571,
                        "nodeType": "FunctionDefinition",
                        "src": "5576:1765:128",
                        "nodes": [],
                        "body": {
                            "id": 22570,
                            "nodeType": "Block",
                            "src": "5783:1558:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22464
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22464,
                                            "mutability": "mutable",
                                            "name": "k",
                                            "nameLocation": "5939:1:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22570,
                                            "src": "5931:9:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22463,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5931:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22472,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 22466,
                                                "name": "ze",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22446,
                                                "src": "5947:2:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22467,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22448,
                                                "src": "5951:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22468,
                                                "name": "t",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22452,
                                                "src": "5954:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22469,
                                                "name": "c",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22454,
                                                "src": "5957:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22470,
                                                "name": "mu",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22456,
                                                "src": "5960:2:128",
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
                                            "id": 22465,
                                            "name": "kUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23209,
                                            "src": "5943:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 22471,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5943:20:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5931:32:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22475,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22473,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22448,
                                            "src": "6082:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22474,
                                            "name": "dy",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22450,
                                            "src": "6086:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6082:6:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22481,
                                    "nodeType": "IfStatement",
                                    "src": "6078:54:128",
                                    "trueBody": {
                                        "id": 22480,
                                        "nodeType": "Block",
                                        "src": "6090:42:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 22476,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6112:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 22477,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6115:5:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 22478,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "6111:10:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 22462,
                                                "id": 22479,
                                                "nodeType": "Return",
                                                "src": "6104:17:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 22486,
                                    "nodeType": "UncheckedBlock",
                                    "src": "6170:42:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 22484,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 22482,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22448,
                                                    "src": "6194:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "-=",
                                                "rightHandSide": {
                                                    "id": 22483,
                                                    "name": "dy",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22450,
                                                    "src": "6199:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6194:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 22485,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6194:7:128"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 22492,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22487,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22448,
                                            "src": "6221:1:128",
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
                                                    "id": 22490,
                                                    "name": "t",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22452,
                                                    "src": "6231:1:128",
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
                                                    "id": 22488,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22448,
                                                    "src": "6225:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22489,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6227:3:128",
                                                "memberName": "pow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18799,
                                                "src": "6225:5:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22491,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6225:8:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6221:12:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22493,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6221:12:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22496,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22494,
                                            "name": "k",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22464,
                                            "src": "6351:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22495,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22448,
                                            "src": "6355:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6351:5:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22502,
                                    "nodeType": "IfStatement",
                                    "src": "6347:53:128",
                                    "trueBody": {
                                        "id": 22501,
                                        "nodeType": "Block",
                                        "src": "6358:42:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 22497,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6380:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 22498,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6383:5:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 22499,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "6379:10:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 22462,
                                                "id": 22500,
                                                "nodeType": "Return",
                                                "src": "6372:17:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        22504
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22504,
                                            "mutability": "mutable",
                                            "name": "_z",
                                            "nameLocation": "6563:2:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22570,
                                            "src": "6555:10:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22503,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6555:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22505,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6555:10:128"
                                },
                                {
                                    "id": 22512,
                                    "nodeType": "UncheckedBlock",
                                    "src": "6575:45:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 22510,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 22506,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22504,
                                                    "src": "6599:2:128",
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
                                                    "id": 22509,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 22507,
                                                        "name": "k",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22464,
                                                        "src": "6604:1:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 22508,
                                                        "name": "y",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22448,
                                                        "src": "6608:1:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "6604:5:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6599:10:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 22511,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6599:10:128"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 22519,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22513,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22504,
                                            "src": "6629:2:128",
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
                                                    "id": 22516,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22456,
                                                    "src": "6646:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22517,
                                                    "name": "c",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22454,
                                                    "src": "6650:1:128",
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
                                                    "id": 22514,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22504,
                                                    "src": "6634:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22515,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6637:8:128",
                                                "memberName": "mulDivUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18706,
                                                "src": "6634:11:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22518,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6634:18:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6629:23:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22520,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6629:23:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22523,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22521,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22504,
                                            "src": "6666:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">=",
                                        "rightExpression": {
                                            "id": 22522,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18628,
                                            "src": "6672:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6666:9:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 22545,
                                        "nodeType": "Block",
                                        "src": "6801:122:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22543,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22535,
                                                        "name": "_z",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22504,
                                                        "src": "6885:2:128",
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
                                                                        "id": 22540,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22452,
                                                                        "src": "6909:1:128",
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
                                                                        "id": 22538,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "6897:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22539,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6901:7:128",
                                                                    "memberName": "divDown",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18692,
                                                                    "src": "6897:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22541,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6897:14:128",
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
                                                                "id": 22536,
                                                                "name": "_z",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22504,
                                                                "src": "6890:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22537,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "6893:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "6890:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22542,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6890:22:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "6885:27:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22544,
                                                "nodeType": "ExpressionStatement",
                                                "src": "6885:27:128"
                                            }
                                        ]
                                    },
                                    "id": 22546,
                                    "nodeType": "IfStatement",
                                    "src": "6662:261:128",
                                    "trueBody": {
                                        "id": 22534,
                                        "nodeType": "Block",
                                        "src": "6677:118:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22532,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22524,
                                                        "name": "_z",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22504,
                                                        "src": "6759:2:128",
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
                                                                        "id": 22529,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22452,
                                                                        "src": "6781:1:128",
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
                                                                        "id": 22527,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "6771:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22528,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6775:5:128",
                                                                    "memberName": "divUp",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18742,
                                                                    "src": "6771:9:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22530,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6771:12:128",
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
                                                                "id": 22525,
                                                                "name": "_z",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22504,
                                                                "src": "6764:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22526,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "6767:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "6764:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22531,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6764:20:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "6759:25:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22533,
                                                "nodeType": "ExpressionStatement",
                                                "src": "6759:25:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22552,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22547,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22504,
                                            "src": "7000:2:128",
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
                                                    "id": 22550,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22456,
                                                    "src": "7014:2:128",
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
                                                    "id": 22548,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22504,
                                                    "src": "7005:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22549,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7008:5:128",
                                                "memberName": "divUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18742,
                                                "src": "7005:8:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22551,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7005:12:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7000:17:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22553,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7000:17:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22556,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22554,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22504,
                                            "src": "7137:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22555,
                                            "name": "ze",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22446,
                                            "src": "7142:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7137:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22562,
                                    "nodeType": "IfStatement",
                                    "src": "7133:55:128",
                                    "trueBody": {
                                        "id": 22561,
                                        "nodeType": "Block",
                                        "src": "7146:42:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 22557,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "7168:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 22558,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "7171:5:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 22559,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "7167:10:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 22462,
                                                "id": 22560,
                                                "nodeType": "Return",
                                                "src": "7160:17:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 22569,
                                    "nodeType": "UncheckedBlock",
                                    "src": "7278:57:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "components": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 22565,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 22563,
                                                            "name": "_z",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22504,
                                                            "src": "7310:2:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 22564,
                                                            "name": "ze",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22446,
                                                            "src": "7315:2:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "7310:7:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "hexValue": "74727565",
                                                        "id": 22566,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "7319:4:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    }
                                                ],
                                                "id": 22567,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "7309:15:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                    "typeString": "tuple(uint256,bool)"
                                                }
                                            },
                                            "functionReturnParameters": 22462,
                                            "id": 22568,
                                            "nodeType": "Return",
                                            "src": "7302:22:128"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22444,
                            "nodeType": "StructuredDocumentation",
                            "src": "4916:655:128",
                            "text": "@dev Calculates the amount of shares a user must provide the pool to\n      receive a specified amount of bonds. This function returns a\n      success flag instead of reverting. We overestimate the amount of\n      shares in.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dy The amount of bonds paid to the trader.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The amount of shares the trader pays.\n @return A flag indicating if the calculation succeeded."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateSharesInGivenBondsOutUpSafe",
                        "nameLocation": "5585:36:128",
                        "parameters": {
                            "id": 22457,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22446,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "5639:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22571,
                                    "src": "5631:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22445,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5631:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22448,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "5659:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22571,
                                    "src": "5651:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22447,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5651:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22450,
                                    "mutability": "mutable",
                                    "name": "dy",
                                    "nameLocation": "5678:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22571,
                                    "src": "5670:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22449,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5670:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22452,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "5698:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22571,
                                    "src": "5690:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22451,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5690:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22454,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "5717:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22571,
                                    "src": "5709:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22453,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5709:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22456,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "5736:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22571,
                                    "src": "5728:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22455,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5728:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5621:123:128"
                        },
                        "returnParameters": {
                            "id": 22462,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22459,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22571,
                                    "src": "5768:7:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22458,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5768:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22461,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22571,
                                    "src": "5777:4:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 22460,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5777:4:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5767:15:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22707,
                        "nodeType": "FunctionDefinition",
                        "src": "7870:1957:128",
                        "nodes": [],
                        "body": {
                            "id": 22706,
                            "nodeType": "Block",
                            "src": "8069:1758:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22590
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22590,
                                            "mutability": "mutable",
                                            "name": "k",
                                            "nameLocation": "8228:1:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22706,
                                            "src": "8220:9:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22589,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8220:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22598,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 22592,
                                                "name": "ze",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22574,
                                                "src": "8238:2:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22593,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22576,
                                                "src": "8242:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22594,
                                                "name": "t",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22580,
                                                "src": "8245:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22595,
                                                "name": "c",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22582,
                                                "src": "8248:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22596,
                                                "name": "mu",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22584,
                                                "src": "8251:2:128",
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
                                            "id": 22591,
                                            "name": "kDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23243,
                                            "src": "8232:5:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 22597,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8232:22:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8220:34:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22601,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22599,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22576,
                                            "src": "8324:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22600,
                                            "name": "dy",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22578,
                                            "src": "8328:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "8324:6:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22611,
                                    "nodeType": "IfStatement",
                                    "src": "8320:166:128",
                                    "trueBody": {
                                        "id": 22610,
                                        "nodeType": "Block",
                                        "src": "8332:154:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 22605,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11028,
                                                                    "src": "8402:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 22606,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "8414:27:128",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10881,
                                                                "src": "8402:39:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10881_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 22607,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8442:19:128",
                                                            "memberName": "ArithmeticUnderflow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10877,
                                                            "src": "8402:59:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 22602,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18619,
                                                            "src": "8346:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18619_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 22604,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8353:31:128",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18618,
                                                        "src": "8346:38:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10881_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 22608,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8346:129:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22609,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8346:129:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 22616,
                                    "nodeType": "UncheckedBlock",
                                    "src": "8524:42:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 22614,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 22612,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22576,
                                                    "src": "8548:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "-=",
                                                "rightHandSide": {
                                                    "id": 22613,
                                                    "name": "dy",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22578,
                                                    "src": "8553:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "8548:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 22615,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8548:7:128"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 22622,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22617,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22576,
                                            "src": "8575:1:128",
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
                                                    "id": 22620,
                                                    "name": "t",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22580,
                                                    "src": "8585:1:128",
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
                                                    "id": 22618,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22576,
                                                    "src": "8579:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22619,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "8581:3:128",
                                                "memberName": "pow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18799,
                                                "src": "8579:5:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22621,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "8579:8:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "8575:12:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22623,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8575:12:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22626,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22624,
                                            "name": "k",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22590,
                                            "src": "8656:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22625,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22576,
                                            "src": "8660:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "8656:5:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22636,
                                    "nodeType": "IfStatement",
                                    "src": "8652:165:128",
                                    "trueBody": {
                                        "id": 22635,
                                        "nodeType": "Block",
                                        "src": "8663:154:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 22630,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11028,
                                                                    "src": "8733:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 22631,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "8745:27:128",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10881,
                                                                "src": "8733:39:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10881_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 22632,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8773:19:128",
                                                            "memberName": "ArithmeticUnderflow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10877,
                                                            "src": "8733:59:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 22627,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18619,
                                                            "src": "8677:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18619_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 22629,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8684:31:128",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18618,
                                                        "src": "8677:38:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10881_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 22633,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8677:129:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22634,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8677:129:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        22638
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22638,
                                            "mutability": "mutable",
                                            "name": "_z",
                                            "nameLocation": "8988:2:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22706,
                                            "src": "8980:10:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22637,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8980:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22639,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8980:10:128"
                                },
                                {
                                    "id": 22646,
                                    "nodeType": "UncheckedBlock",
                                    "src": "9000:45:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 22644,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 22640,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22638,
                                                    "src": "9024:2:128",
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
                                                    "id": 22643,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 22641,
                                                        "name": "k",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22590,
                                                        "src": "9029:1:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 22642,
                                                        "name": "y",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22576,
                                                        "src": "9033:1:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "9029:5:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "9024:10:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 22645,
                                            "nodeType": "ExpressionStatement",
                                            "src": "9024:10:128"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 22653,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22647,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22638,
                                            "src": "9054:2:128",
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
                                                    "id": 22650,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22584,
                                                    "src": "9073:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22651,
                                                    "name": "c",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22582,
                                                    "src": "9077:1:128",
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
                                                    "id": 22648,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22638,
                                                    "src": "9059:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22649,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "9062:10:128",
                                                "memberName": "mulDivDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18656,
                                                "src": "9059:13:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22652,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "9059:20:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "9054:25:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22654,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9054:25:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22657,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22655,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22638,
                                            "src": "9093:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">=",
                                        "rightExpression": {
                                            "id": 22656,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18628,
                                            "src": "9099:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "9093:9:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 22679,
                                        "nodeType": "Block",
                                        "src": "9233:119:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22677,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22669,
                                                        "name": "_z",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22638,
                                                        "src": "9316:2:128",
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
                                                                        "id": 22674,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22580,
                                                                        "src": "9338:1:128",
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
                                                                        "id": 22672,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "9328:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22673,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "9332:5:128",
                                                                    "memberName": "divUp",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18742,
                                                                    "src": "9328:9:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22675,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "9328:12:128",
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
                                                                "id": 22670,
                                                                "name": "_z",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22638,
                                                                "src": "9321:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22671,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9324:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "9321:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22676,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9321:20:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "9316:25:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22678,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9316:25:128"
                                            }
                                        ]
                                    },
                                    "id": 22680,
                                    "nodeType": "IfStatement",
                                    "src": "9089:263:128",
                                    "trueBody": {
                                        "id": 22668,
                                        "nodeType": "Block",
                                        "src": "9104:123:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22666,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22658,
                                                        "name": "_z",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22638,
                                                        "src": "9189:2:128",
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
                                                                        "id": 22663,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22580,
                                                                        "src": "9213:1:128",
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
                                                                        "id": 22661,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "9201:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22662,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "9205:7:128",
                                                                    "memberName": "divDown",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18692,
                                                                    "src": "9201:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22664,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "9201:14:128",
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
                                                                "id": 22659,
                                                                "name": "_z",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22638,
                                                                "src": "9194:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22660,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9197:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "9194:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22665,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9194:22:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "9189:27:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22667,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9189:27:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22686,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22681,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22638,
                                            "src": "9429:2:128",
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
                                                    "id": 22684,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22584,
                                                    "src": "9445:2:128",
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
                                                    "id": 22682,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22638,
                                                    "src": "9434:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22683,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "9437:7:128",
                                                "memberName": "divDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18692,
                                                "src": "9434:10:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22685,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "9434:14:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "9429:19:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22687,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9429:19:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22690,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22688,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22638,
                                            "src": "9519:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22689,
                                            "name": "ze",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22574,
                                            "src": "9524:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "9519:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22700,
                                    "nodeType": "IfStatement",
                                    "src": "9515:167:128",
                                    "trueBody": {
                                        "id": 22699,
                                        "nodeType": "Block",
                                        "src": "9528:154:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 22694,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11028,
                                                                    "src": "9598:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 22695,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "9610:27:128",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10881,
                                                                "src": "9598:39:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10881_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 22696,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9638:19:128",
                                                            "memberName": "ArithmeticUnderflow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10877,
                                                            "src": "9598:59:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 22691,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18619,
                                                            "src": "9542:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18619_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 22693,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9549:31:128",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18618,
                                                        "src": "9542:38:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10881_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 22697,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9542:129:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22698,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9542:129:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 22705,
                                    "nodeType": "UncheckedBlock",
                                    "src": "9772:49:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 22703,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 22701,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22638,
                                                    "src": "9803:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 22702,
                                                    "name": "ze",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22574,
                                                    "src": "9808:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "9803:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "functionReturnParameters": 22588,
                                            "id": 22704,
                                            "nodeType": "Return",
                                            "src": "9796:14:128"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22572,
                            "nodeType": "StructuredDocumentation",
                            "src": "7347:518:128",
                            "text": "@dev Calculates the amount of shares a user must provide the pool to\n      receive a specified amount of bonds. We underestimate the amount of\n      shares in.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dy The amount of bonds paid to the trader.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The amount of shares the user pays."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateSharesInGivenBondsOutDown",
                        "nameLocation": "7879:34:128",
                        "parameters": {
                            "id": 22585,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22574,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "7931:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22707,
                                    "src": "7923:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22573,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7923:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22576,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "7951:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22707,
                                    "src": "7943:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22575,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7943:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22578,
                                    "mutability": "mutable",
                                    "name": "dy",
                                    "nameLocation": "7970:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22707,
                                    "src": "7962:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22577,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7962:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22580,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "7990:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22707,
                                    "src": "7982:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22579,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7982:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22582,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "8009:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22707,
                                    "src": "8001:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22581,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8001:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22584,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "8028:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22707,
                                    "src": "8020:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22583,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8020:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7913:123:128"
                        },
                        "returnParameters": {
                            "id": 22588,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22587,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22707,
                                    "src": "8060:7:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22586,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8060:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8059:9:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22754,
                        "nodeType": "FunctionDefinition",
                        "src": "10452:583:128",
                        "nodes": [],
                        "body": {
                            "id": 22753,
                            "nodeType": "Block",
                            "src": "10658:377:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22726
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22726,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "10673:7:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22753,
                                            "src": "10668:12:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 22725,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10668:4:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22727,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10668:12:128"
                                },
                                {
                                    "expression": {
                                        "id": 22739,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 22728,
                                                    "name": "result",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22723,
                                                    "src": "10691:6:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22729,
                                                    "name": "success",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22726,
                                                    "src": "10699:7:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 22730,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "10690:17:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                "typeString": "tuple(uint256,bool)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 22732,
                                                    "name": "ze",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22710,
                                                    "src": "10762:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22733,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22712,
                                                    "src": "10778:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22734,
                                                    "name": "dy",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22714,
                                                    "src": "10793:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22735,
                                                    "name": "t",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22716,
                                                    "src": "10809:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22736,
                                                    "name": "c",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22718,
                                                    "src": "10824:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22737,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22720,
                                                    "src": "10839:2:128",
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
                                                "id": 22731,
                                                "name": "calculateSharesOutGivenBondsInDownSafe",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22871,
                                                "src": "10710:38:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_bool_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,bool)"
                                                }
                                            },
                                            "id": 22738,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "10710:141:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                "typeString": "tuple(uint256,bool)"
                                            }
                                        },
                                        "src": "10690:161:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 22740,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10690:161:128"
                                },
                                {
                                    "condition": {
                                        "id": 22742,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "10865:8:128",
                                        "subExpression": {
                                            "id": 22741,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22726,
                                            "src": "10866:7:128",
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
                                    "id": 22752,
                                    "nodeType": "IfStatement",
                                    "src": "10861:168:128",
                                    "trueBody": {
                                        "id": 22751,
                                        "nodeType": "Block",
                                        "src": "10875:154:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 22746,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11028,
                                                                    "src": "10945:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 22747,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "10957:27:128",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10881,
                                                                "src": "10945:39:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10881_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 22748,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "10985:19:128",
                                                            "memberName": "ArithmeticUnderflow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10877,
                                                            "src": "10945:59:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10881",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 22743,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18619,
                                                            "src": "10889:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18619_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 22745,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10896:31:128",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18618,
                                                        "src": "10889:38:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10881_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 22749,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10889:129:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 22750,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10889:129:128"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22708,
                            "nodeType": "StructuredDocumentation",
                            "src": "9833:614:128",
                            "text": "@dev Calculates the amount of shares a user will receive from the pool\n      by providing a specified amount of bonds. This function reverts if\n      an integer overflow or underflow occurs. We underestimate the\n      amount of shares out.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dy The amount of bonds paid to the pool.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return result The amount of shares the user receives."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateSharesOutGivenBondsInDown",
                        "nameLocation": "10461:34:128",
                        "parameters": {
                            "id": 22721,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22710,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "10513:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22754,
                                    "src": "10505:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22709,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10505:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22712,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "10533:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22754,
                                    "src": "10525:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22711,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10525:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22714,
                                    "mutability": "mutable",
                                    "name": "dy",
                                    "nameLocation": "10552:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22754,
                                    "src": "10544:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22713,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10544:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22716,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "10572:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22754,
                                    "src": "10564:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22715,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10564:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22718,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "10591:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22754,
                                    "src": "10583:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22717,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10583:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22720,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "10610:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22754,
                                    "src": "10602:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22719,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10602:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10495:123:128"
                        },
                        "returnParameters": {
                            "id": 22724,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22723,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "10650:6:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22754,
                                    "src": "10642:14:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22722,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10642:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10641:16:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22871,
                        "nodeType": "FunctionDefinition",
                        "src": "11709:1515:128",
                        "nodes": [],
                        "body": {
                            "id": 22870,
                            "nodeType": "Block",
                            "src": "11918:1306:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22775
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22775,
                                            "mutability": "mutable",
                                            "name": "k",
                                            "nameLocation": "12074:1:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22870,
                                            "src": "12066:9:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22774,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12066:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22783,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 22777,
                                                "name": "ze",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22757,
                                                "src": "12082:2:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22778,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22759,
                                                "src": "12086:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22779,
                                                "name": "t",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22763,
                                                "src": "12089:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22780,
                                                "name": "c",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22765,
                                                "src": "12092:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22781,
                                                "name": "mu",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22767,
                                                "src": "12095:2:128",
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
                                            "id": 22776,
                                            "name": "kUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23209,
                                            "src": "12078:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 22782,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12078:20:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12066:32:128"
                                },
                                {
                                    "expression": {
                                        "id": 22792,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22784,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22759,
                                            "src": "12137:1:128",
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
                                                    "id": 22790,
                                                    "name": "t",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22763,
                                                    "src": "12154:1:128",
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
                                                            "id": 22787,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 22785,
                                                                "name": "y",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22759,
                                                                "src": "12142:1:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "+",
                                                            "rightExpression": {
                                                                "id": 22786,
                                                                "name": "dy",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22761,
                                                                "src": "12146:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "12142:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 22788,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "12141:8:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22789,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12150:3:128",
                                                "memberName": "pow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18799,
                                                "src": "12141:12:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22791,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12141:15:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "12137:19:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22793,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12137:19:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22796,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22794,
                                            "name": "k",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22775,
                                            "src": "12234:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22795,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22759,
                                            "src": "12238:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "12234:5:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22802,
                                    "nodeType": "IfStatement",
                                    "src": "12230:53:128",
                                    "trueBody": {
                                        "id": 22801,
                                        "nodeType": "Block",
                                        "src": "12241:42:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 22797,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "12263:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 22798,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "12266:5:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 22799,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "12262:10:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 22773,
                                                "id": 22800,
                                                "nodeType": "Return",
                                                "src": "12255:17:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        22804
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22804,
                                            "mutability": "mutable",
                                            "name": "_z",
                                            "nameLocation": "12446:2:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22870,
                                            "src": "12438:10:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22803,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12438:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22805,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12438:10:128"
                                },
                                {
                                    "id": 22812,
                                    "nodeType": "UncheckedBlock",
                                    "src": "12458:45:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 22810,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 22806,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22804,
                                                    "src": "12482:2:128",
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
                                                    "id": 22809,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 22807,
                                                        "name": "k",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22775,
                                                        "src": "12487:1:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 22808,
                                                        "name": "y",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22759,
                                                        "src": "12491:1:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "12487:5:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "12482:10:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 22811,
                                            "nodeType": "ExpressionStatement",
                                            "src": "12482:10:128"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 22819,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22813,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22804,
                                            "src": "12512:2:128",
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
                                                    "id": 22816,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22767,
                                                    "src": "12529:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 22817,
                                                    "name": "c",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22765,
                                                    "src": "12533:1:128",
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
                                                    "id": 22814,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22804,
                                                    "src": "12517:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22815,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12520:8:128",
                                                "memberName": "mulDivUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18706,
                                                "src": "12517:11:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22818,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12517:18:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "12512:23:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22820,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12512:23:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22823,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22821,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22804,
                                            "src": "12549:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">=",
                                        "rightExpression": {
                                            "id": 22822,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18628,
                                            "src": "12555:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "12549:9:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 22845,
                                        "nodeType": "Block",
                                        "src": "12685:123:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22843,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22835,
                                                        "name": "_z",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22804,
                                                        "src": "12770:2:128",
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
                                                                        "id": 22840,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22763,
                                                                        "src": "12794:1:128",
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
                                                                        "id": 22838,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "12782:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22839,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "12786:7:128",
                                                                    "memberName": "divDown",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18692,
                                                                    "src": "12782:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22841,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "12782:14:128",
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
                                                                "id": 22836,
                                                                "name": "_z",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22804,
                                                                "src": "12775:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22837,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "12778:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "12775:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22842,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "12775:22:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "12770:27:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22844,
                                                "nodeType": "ExpressionStatement",
                                                "src": "12770:27:128"
                                            }
                                        ]
                                    },
                                    "id": 22846,
                                    "nodeType": "IfStatement",
                                    "src": "12545:263:128",
                                    "trueBody": {
                                        "id": 22834,
                                        "nodeType": "Block",
                                        "src": "12560:119:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22832,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22824,
                                                        "name": "_z",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22804,
                                                        "src": "12643:2:128",
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
                                                                        "id": 22829,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22763,
                                                                        "src": "12665:1:128",
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
                                                                        "id": 22827,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "12655:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22828,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "12659:5:128",
                                                                    "memberName": "divUp",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18742,
                                                                    "src": "12655:9:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22830,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "12655:12:128",
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
                                                                "id": 22825,
                                                                "name": "_z",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22804,
                                                                "src": "12648:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22826,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "12651:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "12648:6:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22831,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "12648:20:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "12643:25:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22833,
                                                "nodeType": "ExpressionStatement",
                                                "src": "12643:25:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22852,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22847,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22804,
                                            "src": "12885:2:128",
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
                                                    "id": 22850,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22767,
                                                    "src": "12899:2:128",
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
                                                    "id": 22848,
                                                    "name": "_z",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22804,
                                                    "src": "12890:2:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22849,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12893:5:128",
                                                "memberName": "divUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18742,
                                                "src": "12890:8:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22851,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12890:12:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "12885:17:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22853,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12885:17:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22856,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22854,
                                            "name": "ze",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22757,
                                            "src": "13022:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22855,
                                            "name": "_z",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22804,
                                            "src": "13027:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "13022:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22862,
                                    "nodeType": "IfStatement",
                                    "src": "13018:55:128",
                                    "trueBody": {
                                        "id": 22861,
                                        "nodeType": "Block",
                                        "src": "13031:42:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 22857,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "13053:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 22858,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "13056:5:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 22859,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "13052:10:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 22773,
                                                "id": 22860,
                                                "nodeType": "Return",
                                                "src": "13045:17:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 22869,
                                    "nodeType": "UncheckedBlock",
                                    "src": "13161:57:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "components": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 22865,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 22863,
                                                            "name": "ze",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22757,
                                                            "src": "13193:2:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 22864,
                                                            "name": "_z",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22804,
                                                            "src": "13198:2:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "13193:7:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "hexValue": "74727565",
                                                        "id": 22866,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "13202:4:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    }
                                                ],
                                                "id": 22867,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "13192:15:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                    "typeString": "tuple(uint256,bool)"
                                                }
                                            },
                                            "functionReturnParameters": 22773,
                                            "id": 22868,
                                            "nodeType": "Return",
                                            "src": "13185:22:128"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22755,
                            "nodeType": "StructuredDocumentation",
                            "src": "11041:663:128",
                            "text": "@dev Calculates the amount of shares a user will receive from the pool\n      by providing a specified amount of bonds. This function returns a\n      success flag instead of reverting. We underestimate the amount of\n      shares out.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param dy The amount of bonds paid to the pool.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The amount of shares the user receives\n @return A flag indicating if the calculation succeeded."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateSharesOutGivenBondsInDownSafe",
                        "nameLocation": "11718:38:128",
                        "parameters": {
                            "id": 22768,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22757,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "11774:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22871,
                                    "src": "11766:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22756,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11766:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22759,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "11794:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22871,
                                    "src": "11786:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22758,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11786:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22761,
                                    "mutability": "mutable",
                                    "name": "dy",
                                    "nameLocation": "11813:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22871,
                                    "src": "11805:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22760,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11805:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22763,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "11833:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22871,
                                    "src": "11825:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22762,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11825:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22765,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "11852:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22871,
                                    "src": "11844:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22764,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11844:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22767,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "11871:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22871,
                                    "src": "11863:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22766,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11863:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11756:123:128"
                        },
                        "returnParameters": {
                            "id": 22773,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22770,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22871,
                                    "src": "11903:7:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22769,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11903:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22772,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22871,
                                    "src": "11912:4:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 22771,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11912:4:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11902:15:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 22961,
                        "nodeType": "FunctionDefinition",
                        "src": "13859:1409:128",
                        "nodes": [],
                        "body": {
                            "id": 22960,
                            "nodeType": "Block",
                            "src": "14037:1231:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22890
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22890,
                                            "mutability": "mutable",
                                            "name": "k",
                                            "nameLocation": "14551:1:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22960,
                                            "src": "14543:9:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22889,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14543:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22898,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 22892,
                                                "name": "ze",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22874,
                                                "src": "14561:2:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22893,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22876,
                                                "src": "14565:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22894,
                                                "name": "t",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22878,
                                                "src": "14568:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22895,
                                                "name": "c",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22880,
                                                "src": "14571:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22896,
                                                "name": "mu",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22882,
                                                "src": "14574:2:128",
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
                                            "id": 22891,
                                            "name": "kDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23243,
                                            "src": "14555:5:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 22897,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14555:22:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14543:34:128"
                                },
                                {
                                    "assignments": [
                                        22900
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22900,
                                            "mutability": "mutable",
                                            "name": "optimalZe",
                                            "nameLocation": "14595:9:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 22960,
                                            "src": "14587:17:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22899,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14587:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22910,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 22908,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [
                                                        {
                                                            "id": 22905,
                                                            "name": "mu",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22882,
                                                            "src": "14625:2:128",
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
                                                            "id": 22903,
                                                            "name": "c",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22880,
                                                            "src": "14617:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 22904,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "14619:5:128",
                                                        "memberName": "divUp",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18742,
                                                        "src": "14617:7:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 22906,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "14617:11:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "id": 22907,
                                                    "name": "ONE",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18628,
                                                    "src": "14631:3:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "14617:17:128",
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
                                                "id": 22901,
                                                "name": "k",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22890,
                                                "src": "14607:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 22902,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "14609:7:128",
                                            "memberName": "divDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18692,
                                            "src": "14607:9:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 22909,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14607:28:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14587:48:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22913,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22911,
                                            "name": "optimalZe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22900,
                                            "src": "14649:9:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">=",
                                        "rightExpression": {
                                            "id": 22912,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18628,
                                            "src": "14662:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "14649:16:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 22935,
                                        "nodeType": "Block",
                                        "src": "14811:134:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22933,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22925,
                                                        "name": "optimalZe",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22900,
                                                        "src": "14895:9:128",
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
                                                                        "id": 22930,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22878,
                                                                        "src": "14931:1:128",
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
                                                                        "id": 22928,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "14921:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22929,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "14925:5:128",
                                                                    "memberName": "divUp",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18742,
                                                                    "src": "14921:9:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22931,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "14921:12:128",
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
                                                                "id": 22926,
                                                                "name": "optimalZe",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22900,
                                                                "src": "14907:9:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22927,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "14917:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "14907:13:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22932,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "14907:27:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "14895:39:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22934,
                                                "nodeType": "ExpressionStatement",
                                                "src": "14895:39:128"
                                            }
                                        ]
                                    },
                                    "id": 22936,
                                    "nodeType": "IfStatement",
                                    "src": "14645:300:128",
                                    "trueBody": {
                                        "id": 22924,
                                        "nodeType": "Block",
                                        "src": "14667:138:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 22922,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 22914,
                                                        "name": "optimalZe",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22900,
                                                        "src": "14753:9:128",
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
                                                                        "id": 22919,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22878,
                                                                        "src": "14791:1:128",
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
                                                                        "id": 22917,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "14779:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 22918,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "14783:7:128",
                                                                    "memberName": "divDown",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18692,
                                                                    "src": "14779:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 22920,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "14779:14:128",
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
                                                                "id": 22915,
                                                                "name": "optimalZe",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22900,
                                                                "src": "14765:9:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 22916,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "14775:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "14765:13:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 22921,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "14765:29:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "14753:41:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22923,
                                                "nodeType": "ExpressionStatement",
                                                "src": "14753:41:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 22942,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 22937,
                                            "name": "optimalZe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22900,
                                            "src": "14954:9:128",
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
                                                    "id": 22940,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22882,
                                                    "src": "14984:2:128",
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
                                                    "id": 22938,
                                                    "name": "optimalZe",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22900,
                                                    "src": "14966:9:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 22939,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "14976:7:128",
                                                "memberName": "divDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18692,
                                                "src": "14966:17:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 22941,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "14966:21:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "14954:33:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 22943,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14954:33:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 22946,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 22944,
                                            "name": "optimalZe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22900,
                                            "src": "15131:9:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 22945,
                                            "name": "ze",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22874,
                                            "src": "15143:2:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "15131:14:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 22952,
                                    "nodeType": "IfStatement",
                                    "src": "15127:62:128",
                                    "trueBody": {
                                        "id": 22951,
                                        "nodeType": "Block",
                                        "src": "15147:42:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 22947,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "15169:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 22948,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "15172:5:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 22949,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "15168:10:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 22888,
                                                "id": 22950,
                                                "nodeType": "Return",
                                                "src": "15161:17:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 22959,
                                    "nodeType": "UncheckedBlock",
                                    "src": "15198:64:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "components": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 22955,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 22953,
                                                            "name": "optimalZe",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22900,
                                                            "src": "15230:9:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 22954,
                                                            "name": "ze",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22874,
                                                            "src": "15242:2:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "15230:14:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "hexValue": "74727565",
                                                        "id": 22956,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "15246:4:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    }
                                                ],
                                                "id": 22957,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "15229:22:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                    "typeString": "tuple(uint256,bool)"
                                                }
                                            },
                                            "functionReturnParameters": 22888,
                                            "id": 22958,
                                            "nodeType": "Return",
                                            "src": "15222:29:128"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22872,
                            "nodeType": "StructuredDocumentation",
                            "src": "13230:624:128",
                            "text": "@dev Calculates the share payment required to purchase the maximum\n      amount of bonds from the pool. This function returns a success flag\n      instead of reverting. We round so that the max buy amount is\n      underestimated.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The share payment to purchase the maximum amount of bonds.\n @return A flag indicating if the calculation succeeded."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateMaxBuySharesInSafe",
                        "nameLocation": "13868:27:128",
                        "parameters": {
                            "id": 22883,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22874,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "13913:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22961,
                                    "src": "13905:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22873,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13905:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22876,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "13933:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22961,
                                    "src": "13925:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22875,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13925:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22878,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "13952:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22961,
                                    "src": "13944:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22877,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13944:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22880,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "13971:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22961,
                                    "src": "13963:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22879,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13963:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22882,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "13990:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22961,
                                    "src": "13982:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22881,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13982:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13895:103:128"
                        },
                        "returnParameters": {
                            "id": 22888,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22885,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22961,
                                    "src": "14022:7:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22884,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14022:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22887,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 22961,
                                    "src": "14031:4:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 22886,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14031:4:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14021:15:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 23044,
                        "nodeType": "FunctionDefinition",
                        "src": "15892:1050:128",
                        "nodes": [],
                        "body": {
                            "id": 23043,
                            "nodeType": "Block",
                            "src": "16070:872:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        22980
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22980,
                                            "mutability": "mutable",
                                            "name": "k",
                                            "nameLocation": "16284:1:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23043,
                                            "src": "16276:9:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22979,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "16276:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 22988,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 22982,
                                                "name": "ze",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22964,
                                                "src": "16292:2:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22983,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22966,
                                                "src": "16296:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22984,
                                                "name": "t",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22968,
                                                "src": "16299:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22985,
                                                "name": "c",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22970,
                                                "src": "16302:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 22986,
                                                "name": "mu",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22972,
                                                "src": "16305:2:128",
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
                                            "id": 22981,
                                            "name": "kUp",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23209,
                                            "src": "16288:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 22987,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16288:20:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "16276:32:128"
                                },
                                {
                                    "assignments": [
                                        22990
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 22990,
                                            "mutability": "mutable",
                                            "name": "optimalY",
                                            "nameLocation": "16326:8:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23043,
                                            "src": "16318:16:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 22989,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "16318:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23000,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 22998,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [
                                                        {
                                                            "id": 22995,
                                                            "name": "mu",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22972,
                                                            "src": "16355:2:128",
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
                                                            "id": 22993,
                                                            "name": "c",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22970,
                                                            "src": "16345:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 22994,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "16347:7:128",
                                                        "memberName": "divDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18692,
                                                        "src": "16345:9:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 22996,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "16345:13:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "id": 22997,
                                                    "name": "ONE",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18628,
                                                    "src": "16361:3:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "16345:19:128",
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
                                                "id": 22991,
                                                "name": "k",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22980,
                                                "src": "16337:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 22992,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16339:5:128",
                                            "memberName": "divUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18742,
                                            "src": "16337:7:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 22999,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16337:28:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "16318:47:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 23003,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 23001,
                                            "name": "optimalY",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22990,
                                            "src": "16379:8:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">=",
                                        "rightExpression": {
                                            "id": 23002,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18628,
                                            "src": "16391:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16379:15:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 23025,
                                        "nodeType": "Block",
                                        "src": "16533:135:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 23023,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 23015,
                                                        "name": "optimalY",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22990,
                                                        "src": "16618:8:128",
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
                                                                        "id": 23020,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22968,
                                                                        "src": "16654:1:128",
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
                                                                        "id": 23018,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "16642:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 23019,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "16646:7:128",
                                                                    "memberName": "divDown",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18692,
                                                                    "src": "16642:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 23021,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "16642:14:128",
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
                                                                "id": 23016,
                                                                "name": "optimalY",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22990,
                                                                "src": "16629:8:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 23017,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "16638:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "16629:12:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 23022,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "16629:28:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "16618:39:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 23024,
                                                "nodeType": "ExpressionStatement",
                                                "src": "16618:39:128"
                                            }
                                        ]
                                    },
                                    "id": 23026,
                                    "nodeType": "IfStatement",
                                    "src": "16375:293:128",
                                    "trueBody": {
                                        "id": 23014,
                                        "nodeType": "Block",
                                        "src": "16396:131:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 23012,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 23004,
                                                        "name": "optimalY",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22990,
                                                        "src": "16479:8:128",
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
                                                                        "id": 23009,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 22968,
                                                                        "src": "16513:1:128",
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
                                                                        "id": 23007,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "16503:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 23008,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "16507:5:128",
                                                                    "memberName": "divUp",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18742,
                                                                    "src": "16503:9:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 23010,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "16503:12:128",
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
                                                                "id": 23005,
                                                                "name": "optimalY",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 22990,
                                                                "src": "16490:8:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 23006,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "16499:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "16490:12:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 23011,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "16490:26:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "16479:37:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 23013,
                                                "nodeType": "ExpressionStatement",
                                                "src": "16479:37:128"
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
                                        "id": 23029,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 23027,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22966,
                                            "src": "16809:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 23028,
                                            "name": "optimalY",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22990,
                                            "src": "16813:8:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16809:12:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 23035,
                                    "nodeType": "IfStatement",
                                    "src": "16805:60:128",
                                    "trueBody": {
                                        "id": 23034,
                                        "nodeType": "Block",
                                        "src": "16823:42:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 23030,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "16845:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 23031,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "16848:5:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 23032,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "16844:10:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 22978,
                                                "id": 23033,
                                                "nodeType": "Return",
                                                "src": "16837:17:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 23042,
                                    "nodeType": "UncheckedBlock",
                                    "src": "16874:62:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "components": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 23038,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 23036,
                                                            "name": "y",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22966,
                                                            "src": "16906:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 23037,
                                                            "name": "optimalY",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22990,
                                                            "src": "16910:8:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "16906:12:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "hexValue": "74727565",
                                                        "id": 23039,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "16920:4:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    }
                                                ],
                                                "id": 23040,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "16905:20:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                    "typeString": "tuple(uint256,bool)"
                                                }
                                            },
                                            "functionReturnParameters": 22978,
                                            "id": 23041,
                                            "nodeType": "Return",
                                            "src": "16898:27:128"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 22962,
                            "nodeType": "StructuredDocumentation",
                            "src": "15274:613:128",
                            "text": "@dev Calculates the maximum amount of bonds that can be purchased with\n      the specified reserves. This function returns a success flag\n      instead of reverting. We round so that the max buy amount is\n      underestimated.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The maximum amount of bonds that can be purchased.\n @return A flag indicating if the calculation succeeded."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateMaxBuyBondsOutSafe",
                        "nameLocation": "15901:27:128",
                        "parameters": {
                            "id": 22973,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22964,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "15946:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23044,
                                    "src": "15938:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22963,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15938:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22966,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "15966:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23044,
                                    "src": "15958:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22965,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15958:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22968,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "15985:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23044,
                                    "src": "15977:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22967,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15977:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22970,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "16004:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23044,
                                    "src": "15996:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22969,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "15996:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22972,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "16023:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23044,
                                    "src": "16015:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22971,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16015:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "15928:103:128"
                        },
                        "returnParameters": {
                            "id": 22978,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 22975,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23044,
                                    "src": "16055:7:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 22974,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16055:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22977,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23044,
                                    "src": "16064:4:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 22976,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16064:4:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16054:15:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 23175,
                        "nodeType": "FunctionDefinition",
                        "src": "17581:1971:128",
                        "nodes": [],
                        "body": {
                            "id": 23174,
                            "nodeType": "Block",
                            "src": "17801:1751:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 23068,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 23066,
                                            "name": "zeta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23049,
                                            "src": "18085:4:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 23067,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "18092:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "18085:8:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 23080,
                                    "nodeType": "IfStatement",
                                    "src": "18081:67:128",
                                    "trueBody": {
                                        "id": 23079,
                                        "nodeType": "Block",
                                        "src": "18095:53:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 23077,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 23069,
                                                        "name": "zMin",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 23053,
                                                        "src": "18109:4:128",
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
                                                        "id": 23076,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 23070,
                                                            "name": "zMin",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 23053,
                                                            "src": "18116:4:128",
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
                                                                    "id": 23074,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "UnaryOperation",
                                                                    "operator": "-",
                                                                    "prefix": true,
                                                                    "src": "18131:5:128",
                                                                    "subExpression": {
                                                                        "id": 23073,
                                                                        "name": "zeta",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 23049,
                                                                        "src": "18132:4:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_int256",
                                                                            "typeString": "int256"
                                                                        }
                                                                    },
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
                                                                "id": 23072,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "18123:7:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 23071,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "18123:7:128",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 23075,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "18123:14:128",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "18116:21:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "18109:28:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 23078,
                                                "nodeType": "ExpressionStatement",
                                                "src": "18109:28:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        23082
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23082,
                                            "mutability": "mutable",
                                            "name": "ze",
                                            "nameLocation": "18651:2:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23174,
                                            "src": "18643:10:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23081,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "18643:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23088,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 23085,
                                                "name": "z",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23047,
                                                "src": "18703:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23086,
                                                "name": "zeta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23049,
                                                "src": "18706:4:128",
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
                                            "expression": {
                                                "id": 23083,
                                                "name": "HyperdriveMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20142,
                                                "src": "18656:14:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$20142_$",
                                                    "typeString": "type(library HyperdriveMath)"
                                                }
                                            },
                                            "id": 23084,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "18671:31:128",
                                            "memberName": "calculateEffectiveShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19585,
                                            "src": "18656:46:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,int256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 23087,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "18656:55:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "18643:68:128"
                                },
                                {
                                    "assignments": [
                                        23090
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23090,
                                            "mutability": "mutable",
                                            "name": "k",
                                            "nameLocation": "18729:1:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23174,
                                            "src": "18721:9:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23089,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "18721:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23098,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 23092,
                                                "name": "ze",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23082,
                                                "src": "18739:2:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23093,
                                                "name": "y",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23051,
                                                "src": "18743:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23094,
                                                "name": "t",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23055,
                                                "src": "18746:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23095,
                                                "name": "c",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23057,
                                                "src": "18749:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23096,
                                                "name": "mu",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23059,
                                                "src": "18752:2:128",
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
                                            "id": 23091,
                                            "name": "kDown",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23243,
                                            "src": "18733:5:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 23097,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "18733:22:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "18721:34:128"
                                },
                                {
                                    "assignments": [
                                        23100
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23100,
                                            "mutability": "mutable",
                                            "name": "rhs",
                                            "nameLocation": "18773:3:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23174,
                                            "src": "18765:11:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23099,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "18765:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23112,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 23108,
                                                        "name": "t",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 23055,
                                                        "src": "18809:1:128",
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
                                                                "id": 23105,
                                                                "name": "zMin",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 23053,
                                                                "src": "18799:4:128",
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
                                                                "id": 23103,
                                                                "name": "mu",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 23059,
                                                                "src": "18790:2:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 23104,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "18793:5:128",
                                                            "memberName": "mulUp",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18724,
                                                            "src": "18790:8:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 23106,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "18790:14:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 23107,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "18805:3:128",
                                                    "memberName": "pow",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18799,
                                                    "src": "18790:18:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 23109,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "18790:21:128",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 23110,
                                                "name": "mu",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23059,
                                                "src": "18813:2:128",
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
                                                "id": 23101,
                                                "name": "c",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 23057,
                                                "src": "18779:1:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 23102,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "18781:8:128",
                                            "memberName": "mulDivUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18706,
                                            "src": "18779:10:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 23111,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "18779:37:128",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "18765:51:128"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 23115,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 23113,
                                            "name": "k",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23090,
                                            "src": "18830:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 23114,
                                            "name": "rhs",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23100,
                                            "src": "18834:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "18830:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 23121,
                                    "nodeType": "IfStatement",
                                    "src": "18826:55:128",
                                    "trueBody": {
                                        "id": 23120,
                                        "nodeType": "Block",
                                        "src": "18839:42:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 23116,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "18861:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 23117,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "18864:5:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 23118,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "18860:10:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 23065,
                                                "id": 23119,
                                                "nodeType": "Return",
                                                "src": "18853:17:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        23123
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 23123,
                                            "mutability": "mutable",
                                            "name": "optimalY",
                                            "nameLocation": "18898:8:128",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 23174,
                                            "src": "18890:16:128",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 23122,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "18890:7:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 23124,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "18890:16:128"
                                },
                                {
                                    "id": 23131,
                                    "nodeType": "UncheckedBlock",
                                    "src": "18916:53:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 23129,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 23125,
                                                    "name": "optimalY",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23123,
                                                    "src": "18940:8:128",
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
                                                    "id": 23128,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 23126,
                                                        "name": "k",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 23090,
                                                        "src": "18951:1:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 23127,
                                                        "name": "rhs",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 23100,
                                                        "src": "18955:3:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "18951:7:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "18940:18:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 23130,
                                            "nodeType": "ExpressionStatement",
                                            "src": "18940:18:128"
                                        }
                                    ]
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 23134,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 23132,
                                            "name": "optimalY",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23123,
                                            "src": "18982:8:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">=",
                                        "rightExpression": {
                                            "id": 23133,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18628,
                                            "src": "18994:3:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "18982:15:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 23156,
                                        "nodeType": "Block",
                                        "src": "19141:132:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 23154,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 23146,
                                                        "name": "optimalY",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 23123,
                                                        "src": "19225:8:128",
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
                                                                        "id": 23151,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 23055,
                                                                        "src": "19259:1:128",
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
                                                                        "id": 23149,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "19249:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 23150,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "19253:5:128",
                                                                    "memberName": "divUp",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18742,
                                                                    "src": "19249:9:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 23152,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "19249:12:128",
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
                                                                "id": 23147,
                                                                "name": "optimalY",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 23123,
                                                                "src": "19236:8:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 23148,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "19245:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "19236:12:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 23153,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "19236:26:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "19225:37:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 23155,
                                                "nodeType": "ExpressionStatement",
                                                "src": "19225:37:128"
                                            }
                                        ]
                                    },
                                    "id": 23157,
                                    "nodeType": "IfStatement",
                                    "src": "18978:295:128",
                                    "trueBody": {
                                        "id": 23145,
                                        "nodeType": "Block",
                                        "src": "18999:136:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 23143,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 23135,
                                                        "name": "optimalY",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 23123,
                                                        "src": "19085:8:128",
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
                                                                        "id": 23140,
                                                                        "name": "t",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 23055,
                                                                        "src": "19121:1:128",
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
                                                                        "id": 23138,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 18628,
                                                                        "src": "19109:3:128",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 23139,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "19113:7:128",
                                                                    "memberName": "divDown",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18692,
                                                                    "src": "19109:11:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 23141,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "19109:14:128",
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
                                                                "id": 23136,
                                                                "name": "optimalY",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 23123,
                                                                "src": "19096:8:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 23137,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "19105:3:128",
                                                            "memberName": "pow",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18799,
                                                            "src": "19096:12:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 23142,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "19096:28:128",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "19085:39:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 23144,
                                                "nodeType": "ExpressionStatement",
                                                "src": "19085:39:128"
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
                                        "id": 23160,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 23158,
                                            "name": "optimalY",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23123,
                                            "src": "19419:8:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 23159,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23051,
                                            "src": "19430:1:128",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "19419:12:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 23166,
                                    "nodeType": "IfStatement",
                                    "src": "19415:60:128",
                                    "trueBody": {
                                        "id": 23165,
                                        "nodeType": "Block",
                                        "src": "19433:42:128",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 23161,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "19455:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 23162,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "19458:5:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 23163,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "19454:10:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 23065,
                                                "id": 23164,
                                                "nodeType": "Return",
                                                "src": "19447:17:128"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 23173,
                                    "nodeType": "UncheckedBlock",
                                    "src": "19484:62:128",
                                    "statements": [
                                        {
                                            "expression": {
                                                "components": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 23169,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 23167,
                                                            "name": "optimalY",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 23123,
                                                            "src": "19516:8:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 23168,
                                                            "name": "y",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 23051,
                                                            "src": "19527:1:128",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "19516:12:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "hexValue": "74727565",
                                                        "id": 23170,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "19530:4:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    }
                                                ],
                                                "id": 23171,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "19515:20:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                    "typeString": "tuple(uint256,bool)"
                                                }
                                            },
                                            "functionReturnParameters": 23065,
                                            "id": 23172,
                                            "nodeType": "Return",
                                            "src": "19508:27:128"
                                        }
                                    ]
                                }
                            ]
                        },
                        "documentation": {
                            "id": 23045,
                            "nodeType": "StructuredDocumentation",
                            "src": "16948:628:128",
                            "text": "@dev Calculates the maximum amount of bonds that can be sold with the\n      specified reserves. We round so that the max sell amount is\n      underestimated.\n @param z The share reserves.\n @param zeta The share adjustment.\n @param y The bond reserves.\n @param zMin The minimum share reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The maximum amount of bonds that can be sold.\n @return A flag indicating whether or not the calculation was successful."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateMaxSellBondsInSafe",
                        "nameLocation": "17590:27:128",
                        "parameters": {
                            "id": 23060,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23047,
                                    "mutability": "mutable",
                                    "name": "z",
                                    "nameLocation": "17635:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23175,
                                    "src": "17627:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23046,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17627:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23049,
                                    "mutability": "mutable",
                                    "name": "zeta",
                                    "nameLocation": "17653:4:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23175,
                                    "src": "17646:11:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 23048,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17646:6:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23051,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "17675:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23175,
                                    "src": "17667:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23050,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17667:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23053,
                                    "mutability": "mutable",
                                    "name": "zMin",
                                    "nameLocation": "17694:4:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23175,
                                    "src": "17686:12:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23052,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17686:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23055,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "17716:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23175,
                                    "src": "17708:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23054,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17708:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23057,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "17735:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23175,
                                    "src": "17727:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23056,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17727:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23059,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "17754:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23175,
                                    "src": "17746:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23058,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17746:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17617:145:128"
                        },
                        "returnParameters": {
                            "id": 23065,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23062,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23175,
                                    "src": "17786:7:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23061,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17786:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23064,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23175,
                                    "src": "17795:4:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 23063,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17795:4:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17785:15:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 23209,
                        "nodeType": "FunctionDefinition",
                        "src": "20059:343:128",
                        "nodes": [],
                        "body": {
                            "id": 23208,
                            "nodeType": "Block",
                            "src": "20207:195:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "documentation": "k = (c / µ) * (µ * ze)^(1 - t) + y^(1 - t)",
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 23206,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 23198,
                                                            "name": "t",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 23182,
                                                            "src": "20377:1:128",
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
                                                                    "id": 23195,
                                                                    "name": "ze",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 23178,
                                                                    "src": "20369:2:128",
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
                                                                    "id": 23193,
                                                                    "name": "mu",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 23186,
                                                                    "src": "20360:2:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "id": 23194,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "20363:5:128",
                                                                "memberName": "mulUp",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 18724,
                                                                "src": "20360:8:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                }
                                                            },
                                                            "id": 23196,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "20360:12:128",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 23197,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "20373:3:128",
                                                        "memberName": "pow",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18799,
                                                        "src": "20360:16:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 23199,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "20360:19:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 23200,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23186,
                                                    "src": "20381:2:128",
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
                                                    "id": 23191,
                                                    "name": "c",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23184,
                                                    "src": "20349:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 23192,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20351:8:128",
                                                "memberName": "mulDivUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18706,
                                                "src": "20349:10:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 23201,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20349:35:128",
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
                                                    "id": 23204,
                                                    "name": "t",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23182,
                                                    "src": "20393:1:128",
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
                                                    "id": 23202,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23180,
                                                    "src": "20387:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 23203,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20389:3:128",
                                                "memberName": "pow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18799,
                                                "src": "20387:5:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 23205,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20387:8:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20349:46:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23190,
                                    "id": 23207,
                                    "nodeType": "Return",
                                    "src": "20342:53:128"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 23176,
                            "nodeType": "StructuredDocumentation",
                            "src": "19558:496:128",
                            "text": "@dev Calculates the YieldSpace invariant k. This invariant is given by:\n      k = (c / µ) * (µ * ze)^(1 - t) + y^(1 - t)\n      This variant of the calculation overestimates the result.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The YieldSpace invariant, k."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "kUp",
                        "nameLocation": "20068:3:128",
                        "parameters": {
                            "id": 23187,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23178,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "20089:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23209,
                                    "src": "20081:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23177,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20081:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23180,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "20109:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23209,
                                    "src": "20101:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23179,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20101:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23182,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "20128:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23209,
                                    "src": "20120:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23181,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20120:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23184,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "20147:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23209,
                                    "src": "20139:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23183,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20139:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23186,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "20166:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23209,
                                    "src": "20158:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23185,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20158:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "20071:103:128"
                        },
                        "returnParameters": {
                            "id": 23190,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23189,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23209,
                                    "src": "20198:7:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23188,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20198:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "20197:9:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 23243,
                        "nodeType": "FunctionDefinition",
                        "src": "20915:352:128",
                        "nodes": [],
                        "body": {
                            "id": 23242,
                            "nodeType": "Block",
                            "src": "21065:202:128",
                            "nodes": [],
                            "statements": [
                                {
                                    "documentation": "k = (c / µ) * (µ * ze)^(1 - t) + y^(1 - t)",
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 23240,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 23232,
                                                            "name": "t",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 23216,
                                                            "src": "21242:1:128",
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
                                                                    "id": 23229,
                                                                    "name": "ze",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 23212,
                                                                    "src": "21234:2:128",
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
                                                                    "id": 23227,
                                                                    "name": "mu",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 23220,
                                                                    "src": "21223:2:128",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "id": 23228,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "21226:7:128",
                                                                "memberName": "mulDown",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 18674,
                                                                "src": "21223:10:128",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                }
                                                            },
                                                            "id": 23230,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "21223:14:128",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 23231,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "21238:3:128",
                                                        "memberName": "pow",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18799,
                                                        "src": "21223:18:128",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 23233,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "21223:21:128",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 23234,
                                                    "name": "mu",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23220,
                                                    "src": "21246:2:128",
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
                                                    "id": 23225,
                                                    "name": "c",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23218,
                                                    "src": "21210:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 23226,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "21212:10:128",
                                                "memberName": "mulDivDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18656,
                                                "src": "21210:12:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 23235,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "21210:39:128",
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
                                                    "id": 23238,
                                                    "name": "t",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23216,
                                                    "src": "21258:1:128",
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
                                                    "id": 23236,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 23214,
                                                    "src": "21252:1:128",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 23237,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "21254:3:128",
                                                "memberName": "pow",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18799,
                                                "src": "21252:5:128",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 23239,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "21252:8:128",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "21210:50:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23224,
                                    "id": 23241,
                                    "nodeType": "Return",
                                    "src": "21203:57:128"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 23210,
                            "nodeType": "StructuredDocumentation",
                            "src": "20408:502:128",
                            "text": "@dev Calculates the YieldSpace invariant k. This invariant is given by:\n      k = (c / µ) * (µ * ze)^(1 - t) + y^(1 - t)\n      This variant of the calculation underestimates the result.\n @param ze The effective share reserves.\n @param y The bond reserves.\n @param t The time elapsed since the term's start.\n @param c The vault share price.\n @param mu The initial vault share price.\n @return The modified YieldSpace Constant."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "kDown",
                        "nameLocation": "20924:5:128",
                        "parameters": {
                            "id": 23221,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23212,
                                    "mutability": "mutable",
                                    "name": "ze",
                                    "nameLocation": "20947:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23243,
                                    "src": "20939:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23211,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20939:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23214,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "20967:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23243,
                                    "src": "20959:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23213,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20959:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23216,
                                    "mutability": "mutable",
                                    "name": "t",
                                    "nameLocation": "20986:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23243,
                                    "src": "20978:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23215,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20978:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23218,
                                    "mutability": "mutable",
                                    "name": "c",
                                    "nameLocation": "21005:1:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23243,
                                    "src": "20997:9:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23217,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20997:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 23220,
                                    "mutability": "mutable",
                                    "name": "mu",
                                    "nameLocation": "21024:2:128",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23243,
                                    "src": "21016:10:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23219,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "21016:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "20929:103:128"
                        },
                        "returnParameters": {
                            "id": 23224,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23223,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23243,
                                    "src": "21056:7:128",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23222,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "21056:7:128",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "21055:9:128"
                        },
                        "scope": 23244,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "YieldSpaceMath",
                "contractDependencies": [],
                "contractKind": "library",
                "documentation": {
                    "id": 22277,
                    "nodeType": "StructuredDocumentation",
                    "src": "281:1185:128",
                    "text": "@author DELV\n @title YieldSpaceMath\n @notice Math for the YieldSpace pricing model.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.\n @dev It is advised for developers to attain the pre-requisite knowledge\n      of how this implementation works on the mathematical level. This\n      excerpt attempts to document this pre-requisite knowledge explaining\n      the underpinning mathematical concepts in an understandable manner and\n      relating it directly to the code implementation.\n      This implementation is based on a paper called \"YieldSpace with Yield\n      Bearing Vaults\" or more casually \"Modified YieldSpace\". It can be\n      found at the following link.\n      https://hackmd.io/lRZ4mgdrRgOpxZQXqKYlFw?view\n      That paper builds on the original YieldSpace paper, \"YieldSpace:\n      An Automated Liquidity Provider for Fixed Yield Tokens\". It can be\n      found at the following link:\n      https://yieldprotocol.com/YieldSpace.pdf"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    23244
                ],
                "name": "YieldSpaceMath",
                "nameLocation": "1474:14:128",
                "scope": 23245,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 128
};
