export const Script = {
    "abi": [
        {
            "inputs": [],
            "name": "IS_SCRIPT",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "IS_SCRIPT()": "f8ccbf47"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"IS_SCRIPT\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Script.sol\":\"Script\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/Script.sol\":{\"keccak256\":\"0x2315be74cc2826f9da401bea3da46a10ad6a6efdf73176d79160b453286d0ed2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://af0d4dc826911d6cb4d6272ed5cbdb6950e1476141cca328e178b808d848789c\",\"dweb:/ipfs/QmV2ytjUEkV84VtdMs1nZqQTBoVE987cHboQMpiha5yo3e\"]},\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/StdCheats.sol\":{\"keccak256\":\"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a\",\"dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe\"]},\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]},\"lib/forge-std/src/safeconsole.sol\":{\"keccak256\":\"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae\",\"dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "IS_SCRIPT",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
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
                "lib/forge-std/src/Script.sol": "Script"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/Base.sol": {
                "keccak256": "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c",
                "urls": [
                    "bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224",
                    "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/Script.sol": {
                "keccak256": "0x2315be74cc2826f9da401bea3da46a10ad6a6efdf73176d79160b453286d0ed2",
                "urls": [
                    "bzz-raw://af0d4dc826911d6cb4d6272ed5cbdb6950e1476141cca328e178b808d848789c",
                    "dweb:/ipfs/QmV2ytjUEkV84VtdMs1nZqQTBoVE987cHboQMpiha5yo3e"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdChains.sol": {
                "keccak256": "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d",
                "urls": [
                    "bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4",
                    "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdCheats.sol": {
                "keccak256": "0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5",
                "urls": [
                    "bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a",
                    "dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdJson.sol": {
                "keccak256": "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b",
                "urls": [
                    "bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c",
                    "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdMath.sol": {
                "keccak256": "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
                "urls": [
                    "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
                    "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdStorage.sol": {
                "keccak256": "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d",
                "urls": [
                    "bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26",
                    "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdStyle.sol": {
                "keccak256": "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d",
                "urls": [
                    "bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8",
                    "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/StdUtils.sol": {
                "keccak256": "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1",
                "urls": [
                    "bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140",
                    "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/Vm.sol": {
                "keccak256": "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
                "urls": [
                    "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
                    "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/console.sol": {
                "keccak256": "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba",
                "urls": [
                    "bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70",
                    "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/console2.sol": {
                "keccak256": "0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea",
                "urls": [
                    "bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973",
                    "dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/interfaces/IMulticall3.sol": {
                "keccak256": "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
                "urls": [
                    "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
                    "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"
                ],
                "license": "MIT"
            },
            "lib/forge-std/src/safeconsole.sol": {
                "keccak256": "0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381",
                "urls": [
                    "bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae",
                    "dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/forge-std/src/Script.sol",
        "id": 25150,
        "exportedSymbols": {
            "Script": [
                25149
            ],
            "ScriptBase": [
                25110
            ],
            "StdChains": [
                27287
            ],
            "StdCheatsSafe": [
                29341
            ],
            "StdStorage": [
                31145
            ],
            "StdStyle": [
                33809
            ],
            "StdUtils": [
                34657
            ],
            "VmSafe": [
                35773
            ],
            "console": [
                44309
            ],
            "console2": [
                52434
            ],
            "safeconsole": [
                65672
            ],
            "stdJson": [
                30971
            ],
            "stdMath": [
                31113
            ],
            "stdStorageSafe": [
                32037
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:800:96",
        "nodes": [
            {
                "id": 25112,
                "nodeType": "PragmaDirective",
                "src": "32:31:96",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.6",
                    ".2",
                    "<",
                    "0.9",
                    ".0"
                ]
            },
            {
                "id": 25114,
                "nodeType": "ImportDirective",
                "src": "127:38:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/console.sol",
                "file": "./console.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 44310,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25113,
                            "name": "console",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44309,
                            "src": "135:7:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25116,
                "nodeType": "ImportDirective",
                "src": "166:40:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/console2.sol",
                "file": "./console2.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 52435,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25115,
                            "name": "console2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52434,
                            "src": "174:8:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25118,
                "nodeType": "ImportDirective",
                "src": "207:46:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/safeconsole.sol",
                "file": "./safeconsole.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 65673,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25117,
                            "name": "safeconsole",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 65672,
                            "src": "215:11:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25120,
                "nodeType": "ImportDirective",
                "src": "254:42:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdChains.sol",
                "file": "./StdChains.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 27288,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25119,
                            "name": "StdChains",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27287,
                            "src": "262:9:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25122,
                "nodeType": "ImportDirective",
                "src": "297:46:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdCheats.sol",
                "file": "./StdCheats.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 30106,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25121,
                            "name": "StdCheatsSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29341,
                            "src": "305:13:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25124,
                "nodeType": "ImportDirective",
                "src": "344:38:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdJson.sol",
                "file": "./StdJson.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 30972,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25123,
                            "name": "stdJson",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30971,
                            "src": "352:7:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25126,
                "nodeType": "ImportDirective",
                "src": "383:38:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdMath.sol",
                "file": "./StdMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 31114,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25125,
                            "name": "stdMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31113,
                            "src": "391:7:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25129,
                "nodeType": "ImportDirective",
                "src": "422:60:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdStorage.sol",
                "file": "./StdStorage.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 32599,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25127,
                            "name": "StdStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31145,
                            "src": "430:10:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 25128,
                            "name": "stdStorageSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32037,
                            "src": "442:14:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25131,
                "nodeType": "ImportDirective",
                "src": "483:40:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdStyle.sol",
                "file": "./StdStyle.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 33810,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25130,
                            "name": "StdStyle",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33809,
                            "src": "491:8:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25133,
                "nodeType": "ImportDirective",
                "src": "524:40:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdUtils.sol",
                "file": "./StdUtils.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 34658,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25132,
                            "name": "StdUtils",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34657,
                            "src": "532:8:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25135,
                "nodeType": "ImportDirective",
                "src": "565:32:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 36246,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25134,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35773,
                            "src": "573:6:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25137,
                "nodeType": "ImportDirective",
                "src": "619:38:96",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Base.sol",
                "file": "./Base.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25150,
                "sourceUnit": 25111,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25136,
                            "name": "ScriptBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25110,
                            "src": "627:10:96",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25149,
                "nodeType": "ContractDefinition",
                "src": "676:155:96",
                "nodes": [
                    {
                        "id": 25148,
                        "nodeType": "VariableDeclaration",
                        "src": "800:28:96",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "f8ccbf47",
                        "mutability": "mutable",
                        "name": "IS_SCRIPT",
                        "nameLocation": "812:9:96",
                        "scope": 25149,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 25146,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "800:4:96",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "value": {
                            "hexValue": "74727565",
                            "id": 25147,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "824:4:96",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "value": "true"
                        },
                        "visibility": "public"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25138,
                            "name": "ScriptBase",
                            "nameLocations": [
                                "704:10:96"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 25110,
                            "src": "704:10:96"
                        },
                        "id": 25139,
                        "nodeType": "InheritanceSpecifier",
                        "src": "704:10:96"
                    },
                    {
                        "baseName": {
                            "id": 25140,
                            "name": "StdChains",
                            "nameLocations": [
                                "716:9:96"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 27287,
                            "src": "716:9:96"
                        },
                        "id": 25141,
                        "nodeType": "InheritanceSpecifier",
                        "src": "716:9:96"
                    },
                    {
                        "baseName": {
                            "id": 25142,
                            "name": "StdCheatsSafe",
                            "nameLocations": [
                                "727:13:96"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 29341,
                            "src": "727:13:96"
                        },
                        "id": 25143,
                        "nodeType": "InheritanceSpecifier",
                        "src": "727:13:96"
                    },
                    {
                        "baseName": {
                            "id": 25144,
                            "name": "StdUtils",
                            "nameLocations": [
                                "742:8:96"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 34657,
                            "src": "742:8:96"
                        },
                        "id": 25145,
                        "nodeType": "InheritanceSpecifier",
                        "src": "742:8:96"
                    }
                ],
                "canonicalName": "Script",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25149,
                    34657,
                    29341,
                    27287,
                    25110,
                    25098
                ],
                "name": "Script",
                "nameLocation": "694:6:96",
                "scope": 25150,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 96
};
