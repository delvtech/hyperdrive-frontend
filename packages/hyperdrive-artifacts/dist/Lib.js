export const Lib = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "b1",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "b2",
                    "type": "bytes"
                }
            ],
            "name": "eq",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "b1",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "b2",
                    "type": "bytes"
                }
            ],
            "name": "neq",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x61029e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220d333ef02d5eecddba074fc17f5144964088c0d18c8f6c7c51de77771642d720b64736f6c63430008140033",
        "sourceMap": "212:7579:181:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;212:7579:181;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220d333ef02d5eecddba074fc17f5144964088c0d18c8f6c7c51de77771642d720b64736f6c63430008140033",
        "sourceMap": "212:7579:181:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7432:175;;;;;;:::i;:::-;;:::i;:::-;;;1586:14:182;;1579:22;1561:41;;1549:2;1534:18;7432:175:181;;;;;;;7613:176;;;;;;:::i;:::-;;:::i;7432:175::-;7499:4;7596:2;7579:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7569:31;;;;;;7561:2;7544:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7534:31;;;;;;:66;7515:85;;7432:175;;;;:::o;7613:176::-;7681:4;7778:2;7761:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7751:31;;;;;;7743:2;7726:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7716:31;;;;;;:66;;7697:85;;7613:176;;;;:::o;14:127:182:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:718;188:5;241:3;234:4;226:6;222:17;218:27;208:55;;259:1;256;249:12;208:55;295:6;282:20;321:18;358:2;354;351:10;348:36;;;364:18;;:::i;:::-;439:2;433:9;407:2;493:13;;-1:-1:-1;;489:22:182;;;513:2;485:31;481:40;469:53;;;537:18;;;557:22;;;534:46;531:72;;;583:18;;:::i;:::-;623:10;619:2;612:22;658:2;650:6;643:18;704:3;697:4;692:2;684:6;680:15;676:26;673:35;670:55;;;721:1;718;711:12;670:55;785:2;778:4;770:6;766:17;759:4;751:6;747:17;734:54;832:1;825:4;820:2;812:6;808:15;804:26;797:37;852:6;843:15;;;;;;146:718;;;;:::o;869:539::-;955:6;963;1016:2;1004:9;995:7;991:23;987:32;984:52;;;1032:1;1029;1022:12;984:52;1072:9;1059:23;1101:18;1142:2;1134:6;1131:14;1128:34;;;1158:1;1155;1148:12;1128:34;1181:49;1222:7;1213:6;1202:9;1198:22;1181:49;:::i;:::-;1171:59;;1283:2;1272:9;1268:18;1255:32;1239:48;;1312:2;1302:8;1299:16;1296:36;;;1328:1;1325;1318:12;1296:36;;1351:51;1394:7;1383:8;1372:9;1368:24;1351:51;:::i;:::-;1341:61;;;869:539;;;;;:::o;1613:412::-;1742:3;1780:6;1774:13;1805:1;1815:129;1829:6;1826:1;1823:13;1815:129;;;1927:4;1911:14;;;1907:25;;1901:32;1888:11;;;1881:53;1844:12;1815:129;;;-1:-1:-1;1999:1:182;1963:16;;1988:13;;;-1:-1:-1;1963:16:182;1613:412;-1:-1:-1;1613:412:182:o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "eq(bytes,bytes)": "cdb16840",
        "neq(bytes,bytes)": "d37a20ba"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"eq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"neq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/Lib.sol\":\"Lib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"test/utils/Lib.sol\":{\"keccak256\":\"0x912d18df3f75cbd2b14b90a3974c71947dde5a7c53e20e106ae6f7bd18a68f1e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://853298cef661e6006681ea7066ab72dcda6f44efecec79ebdcef58649a543a74\",\"dweb:/ipfs/Qme9LSzGAwTfre5ZEW6AaAmQToNjS7BDYaoEA3HmPuDPAw\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "bytes",
                            "name": "b1",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes",
                            "name": "b2",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "eq",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes",
                            "name": "b1",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes",
                            "name": "b2",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "neq",
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
                "test/utils/Lib.sol": "Lib"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/StdMath.sol": {
                "keccak256": "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2",
                "urls": [
                    "bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92",
                    "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"
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
            "lib/forge-std/src/console2.sol": {
                "keccak256": "0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea",
                "urls": [
                    "bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973",
                    "dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"
                ],
                "license": "MIT"
            },
            "test/utils/Lib.sol": {
                "keccak256": "0x912d18df3f75cbd2b14b90a3974c71947dde5a7c53e20e106ae6f7bd18a68f1e",
                "urls": [
                    "bzz-raw://853298cef661e6006681ea7066ab72dcda6f44efecec79ebdcef58649a543a74",
                    "dweb:/ipfs/Qme9LSzGAwTfre5ZEW6AaAmQToNjS7BDYaoEA3HmPuDPAw"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "test/utils/Lib.sol",
        "id": 144960,
        "exportedSymbols": {
            "Lib": [
                144959
            ],
            "Vm": [
                36497
            ],
            "VmSafe": [
                36025
            ],
            "console2": [
                52686
            ],
            "stdMath": [
                31365
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:7753:181",
        "nodes": [
            {
                "id": 144359,
                "nodeType": "PragmaDirective",
                "src": "39:23:181",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 144361,
                "nodeType": "ImportDirective",
                "src": "64:50:181",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/console2.sol",
                "file": "forge-std/console2.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 144960,
                "sourceUnit": 52687,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 144360,
                            "name": "console2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52686,
                            "src": "73:8:181",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 144363,
                "nodeType": "ImportDirective",
                "src": "115:48:181",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdMath.sol",
                "file": "forge-std/StdMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 144960,
                "sourceUnit": 31366,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 144362,
                            "name": "stdMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 31365,
                            "src": "124:7:181",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 144366,
                "nodeType": "ImportDirective",
                "src": "164:46:181",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "forge-std/Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 144960,
                "sourceUnit": 36498,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 144364,
                            "name": "Vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36497,
                            "src": "173:2:181",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 144365,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36025,
                            "src": "177:6:181",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 144959,
                "nodeType": "ContractDefinition",
                "src": "212:7579:181",
                "nodes": [
                    {
                        "id": 144430,
                        "nodeType": "FunctionDefinition",
                        "src": "485:579:181",
                        "nodes": [],
                        "body": {
                            "id": 144429,
                            "nodeType": "Block",
                            "src": "628:436:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        144381
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144381,
                                            "mutability": "mutable",
                                            "name": "current",
                                            "nameLocation": "674:7:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144429,
                                            "src": "666:15:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 144380,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "666:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144383,
                                    "initialValue": {
                                        "hexValue": "30",
                                        "id": 144382,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "684:1:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "666:19:181"
                                },
                                {
                                    "expression": {
                                        "id": 144392,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 144384,
                                            "name": "filteredLogs",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144378,
                                            "src": "695:12:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct VmSafe.Log memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 144389,
                                                        "name": "logs",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144371,
                                                        "src": "727:4:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                                            "typeString": "struct VmSafe.Log memory[] memory"
                                                        }
                                                    },
                                                    "id": 144390,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "732:6:181",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "727:11:181",
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
                                                "id": 144388,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "NewExpression",
                                                "src": "710:16:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr_$",
                                                    "typeString": "function (uint256) pure returns (struct VmSafe.Log memory[] memory)"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 144386,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 144385,
                                                            "name": "VmSafe.Log",
                                                            "nameLocations": [
                                                                "714:6:181",
                                                                "721:3:181"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 34977,
                                                            "src": "714:10:181"
                                                        },
                                                        "referencedDeclaration": 34977,
                                                        "src": "714:10:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Log_$34977_storage_ptr",
                                                            "typeString": "struct VmSafe.Log"
                                                        }
                                                    },
                                                    "id": 144387,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "714:12:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_struct$_Log_$34977_storage_$dyn_storage_ptr",
                                                        "typeString": "struct VmSafe.Log[]"
                                                    }
                                                }
                                            },
                                            "id": 144391,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "710:29:181",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct VmSafe.Log memory[] memory"
                                            }
                                        },
                                        "src": "695:44:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct VmSafe.Log memory[] memory"
                                        }
                                    },
                                    "id": 144393,
                                    "nodeType": "ExpressionStatement",
                                    "src": "695:44:181"
                                },
                                {
                                    "body": {
                                        "id": 144424,
                                        "nodeType": "Block",
                                        "src": "791:125:181",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 144412,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "baseExpression": {
                                                            "expression": {
                                                                "baseExpression": {
                                                                    "id": 144405,
                                                                    "name": "logs",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 144371,
                                                                    "src": "809:4:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                                                        "typeString": "struct VmSafe.Log memory[] memory"
                                                                    }
                                                                },
                                                                "id": 144407,
                                                                "indexExpression": {
                                                                    "id": 144406,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 144395,
                                                                    "src": "814:1:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "809:7:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Log_$34977_memory_ptr",
                                                                    "typeString": "struct VmSafe.Log memory"
                                                                }
                                                            },
                                                            "id": 144408,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "817:6:181",
                                                            "memberName": "topics",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 34972,
                                                            "src": "809:14:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                                "typeString": "bytes32[] memory"
                                                            }
                                                        },
                                                        "id": 144410,
                                                        "indexExpression": {
                                                            "hexValue": "30",
                                                            "id": 144409,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "824:1:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "809:17:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "id": 144411,
                                                        "name": "selector",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144373,
                                                        "src": "830:8:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "809:29:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 144423,
                                                "nodeType": "IfStatement",
                                                "src": "805:101:181",
                                                "trueBody": {
                                                    "id": 144422,
                                                    "nodeType": "Block",
                                                    "src": "840:66:181",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 144420,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 144413,
                                                                        "name": "filteredLogs",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 144378,
                                                                        "src": "858:12:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                                                            "typeString": "struct VmSafe.Log memory[] memory"
                                                                        }
                                                                    },
                                                                    "id": 144416,
                                                                    "indexExpression": {
                                                                        "id": 144415,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "UnaryOperation",
                                                                        "operator": "++",
                                                                        "prefix": false,
                                                                        "src": "871:9:181",
                                                                        "subExpression": {
                                                                            "id": 144414,
                                                                            "name": "current",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 144381,
                                                                            "src": "871:7:181",
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
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "858:23:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Log_$34977_memory_ptr",
                                                                        "typeString": "struct VmSafe.Log memory"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 144417,
                                                                        "name": "logs",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 144371,
                                                                        "src": "884:4:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                                                            "typeString": "struct VmSafe.Log memory[] memory"
                                                                        }
                                                                    },
                                                                    "id": 144419,
                                                                    "indexExpression": {
                                                                        "id": 144418,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 144395,
                                                                        "src": "889:1:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "884:7:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Log_$34977_memory_ptr",
                                                                        "typeString": "struct VmSafe.Log memory"
                                                                    }
                                                                },
                                                                "src": "858:33:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Log_$34977_memory_ptr",
                                                                    "typeString": "struct VmSafe.Log memory"
                                                                }
                                                            },
                                                            "id": 144421,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "858:33:181"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 144401,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144398,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144395,
                                            "src": "769:1:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 144399,
                                                "name": "logs",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144371,
                                                "src": "773:4:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                                    "typeString": "struct VmSafe.Log memory[] memory"
                                                }
                                            },
                                            "id": 144400,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "778:6:181",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "773:11:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "769:15:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 144425,
                                    "initializationExpression": {
                                        "assignments": [
                                            144395
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 144395,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "762:1:181",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 144425,
                                                "src": "754:9:181",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 144394,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "754:7:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 144397,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 144396,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "766:1:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "754:13:181"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 144403,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "786:3:181",
                                            "subExpression": {
                                                "id": 144402,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144395,
                                                "src": "786:1:181",
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
                                        "id": 144404,
                                        "nodeType": "ExpressionStatement",
                                        "src": "786:3:181"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "749:167:181"
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "976:53:181",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "filteredLogs",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "997:12:181"
                                                        },
                                                        {
                                                            "name": "current",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1011:7:181"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "990:6:181"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "990:29:181"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "990:29:181"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 144381,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1011:7:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144378,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "997:12:181",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 144426,
                                    "nodeType": "InlineAssembly",
                                    "src": "967:62:181"
                                },
                                {
                                    "expression": {
                                        "id": 144427,
                                        "name": "filteredLogs",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 144378,
                                        "src": "1045:12:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct VmSafe.Log memory[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 144379,
                                    "id": 144428,
                                    "nodeType": "Return",
                                    "src": "1038:19:181"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 144367,
                            "nodeType": "StructuredDocumentation",
                            "src": "230:250:181",
                            "text": "@dev Filters an array of longs for events that match the provided\n      selector.\n @param logs The array of logs to filter.\n @param selector The selector to filter for.\n @return filteredLogs The filtered array of logs."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "filterLogs",
                        "nameLocation": "494:10:181",
                        "parameters": {
                            "id": 144374,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144371,
                                    "mutability": "mutable",
                                    "name": "logs",
                                    "nameLocation": "534:4:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144430,
                                    "src": "514:24:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct VmSafe.Log[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 144369,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 144368,
                                                "name": "VmSafe.Log",
                                                "nameLocations": [
                                                    "514:6:181",
                                                    "521:3:181"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 34977,
                                                "src": "514:10:181"
                                            },
                                            "referencedDeclaration": 34977,
                                            "src": "514:10:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Log_$34977_storage_ptr",
                                                "typeString": "struct VmSafe.Log"
                                            }
                                        },
                                        "id": 144370,
                                        "nodeType": "ArrayTypeName",
                                        "src": "514:12:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$34977_storage_$dyn_storage_ptr",
                                            "typeString": "struct VmSafe.Log[]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144373,
                                    "mutability": "mutable",
                                    "name": "selector",
                                    "nameLocation": "556:8:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144430,
                                    "src": "548:16:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 144372,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "548:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "504:66:181"
                        },
                        "returnParameters": {
                            "id": 144379,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144378,
                                    "mutability": "mutable",
                                    "name": "filteredLogs",
                                    "nameLocation": "614:12:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144430,
                                    "src": "594:32:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Log_$34977_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct VmSafe.Log[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 144376,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 144375,
                                                "name": "VmSafe.Log",
                                                "nameLocations": [
                                                    "594:6:181",
                                                    "601:3:181"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 34977,
                                                "src": "594:10:181"
                                            },
                                            "referencedDeclaration": 34977,
                                            "src": "594:10:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Log_$34977_storage_ptr",
                                                "typeString": "struct VmSafe.Log"
                                            }
                                        },
                                        "id": 144377,
                                        "nodeType": "ArrayTypeName",
                                        "src": "594:12:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$34977_storage_$dyn_storage_ptr",
                                            "typeString": "struct VmSafe.Log[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "593:34:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 144450,
                        "nodeType": "FunctionDefinition",
                        "src": "1283:192:181",
                        "nodes": [],
                        "body": {
                            "id": 144449,
                            "nodeType": "Block",
                            "src": "1373:102:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "4572726f7228737472696e6729",
                                                                "id": 144443,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "1442:15:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_08c379a0afcc32b1a39302f7cb8073359698411ab5fd6e3edb2c02c0b5fba8aa",
                                                                    "typeString": "literal_string \"Error(string)\""
                                                                },
                                                                "value": "Error(string)"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_08c379a0afcc32b1a39302f7cb8073359698411ab5fd6e3edb2c02c0b5fba8aa",
                                                                    "typeString": "literal_string \"Error(string)\""
                                                                }
                                                            ],
                                                            "id": 144442,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "1432:9:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 144444,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1432:26:181",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    ],
                                                    "id": 144441,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1425:6:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_bytes4_$",
                                                        "typeString": "type(bytes4)"
                                                    },
                                                    "typeName": {
                                                        "id": 144440,
                                                        "name": "bytes4",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1425:6:181",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 144445,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1425:34:181",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes4",
                                                    "typeString": "bytes4"
                                                }
                                            },
                                            {
                                                "id": 144446,
                                                "name": "reason",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144433,
                                                "src": "1461:6:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes4",
                                                    "typeString": "bytes4"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 144438,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "1402:3:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_abi",
                                                    "typeString": "abi"
                                                }
                                            },
                                            "id": 144439,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "1406:18:181",
                                            "memberName": "encodeWithSelector",
                                            "nodeType": "MemberAccess",
                                            "src": "1402:22:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes4) pure returns (bytes memory)"
                                            }
                                        },
                                        "id": 144447,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1402:66:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 144437,
                                    "id": 144448,
                                    "nodeType": "Return",
                                    "src": "1383:85:181"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 144431,
                            "nodeType": "StructuredDocumentation",
                            "src": "1070:208:181",
                            "text": "@dev Encodes a reason into a string error. This is useful for verifying\n      string errors in low-level calls.\n @param reason The reason to encode.\n @return The encoded string error."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toError",
                        "nameLocation": "1292:7:181",
                        "parameters": {
                            "id": 144434,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144433,
                                    "mutability": "mutable",
                                    "name": "reason",
                                    "nameLocation": "1323:6:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144450,
                                    "src": "1309:20:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 144432,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1309:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1299:36:181"
                        },
                        "returnParameters": {
                            "id": 144437,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144436,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144450,
                                    "src": "1359:12:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 144435,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1359:5:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1358:14:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 144599,
                        "nodeType": "FunctionDefinition",
                        "src": "1924:2036:181",
                        "nodes": [],
                        "body": {
                            "id": 144598,
                            "nodeType": "Block",
                            "src": "2039:1921:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        144461
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144461,
                                            "mutability": "mutable",
                                            "name": "maxStringLength",
                                            "nameLocation": "2329:15:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144598,
                                            "src": "2321:23:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 144460,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2321:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144463,
                                    "initialValue": {
                                        "hexValue": "3739",
                                        "id": 144462,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2347:2:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_79_by_1",
                                            "typeString": "int_const 79"
                                        },
                                        "value": "79"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2321:28:181"
                                },
                                {
                                    "assignments": [
                                        144465
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144465,
                                            "mutability": "mutable",
                                            "name": "rawResult",
                                            "nameLocation": "2372:9:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144598,
                                            "src": "2359:22:181",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 144464,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2359:5:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144470,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 144468,
                                                "name": "maxStringLength",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144461,
                                                "src": "2394:15:181",
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
                                            "id": 144467,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "2384:9:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 144466,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2388:5:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 144469,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2384:26:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2359:51:181"
                                },
                                {
                                    "assignments": [
                                        144472
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144472,
                                            "mutability": "mutable",
                                            "name": "isNegative",
                                            "nameLocation": "2688:10:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144598,
                                            "src": "2683:15:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 144471,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2683:4:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144476,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 144475,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144473,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144453,
                                            "src": "2701:3:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 144474,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2707:1:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "2701:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2683:25:181"
                                },
                                {
                                    "expression": {
                                        "id": 144485,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 144477,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144453,
                                            "src": "2718:3:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 144480,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 144478,
                                                    "name": "num",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144453,
                                                    "src": "2724:3:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 144479,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2730:1:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "2724:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "id": 144483,
                                                "name": "num",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144453,
                                                "src": "2741:3:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 144484,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "2724:20:181",
                                            "trueExpression": {
                                                "id": 144482,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "-",
                                                "prefix": true,
                                                "src": "2734:4:181",
                                                "subExpression": {
                                                    "id": 144481,
                                                    "name": "num",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144453,
                                                    "src": "2735:3:181",
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
                                        "src": "2718:26:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 144486,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2718:26:181"
                                },
                                {
                                    "expression": {
                                        "id": 144507,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 144487,
                                                "name": "rawResult",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144465,
                                                "src": "2909:9:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 144491,
                                            "indexExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 144490,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 144488,
                                                    "name": "maxStringLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144461,
                                                    "src": "2919:15:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 144489,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2937:1:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "2919:19:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2909:30:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    },
                                                                    "id": 144503,
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
                                                                                "id": 144500,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "leftExpression": {
                                                                                    "id": 144498,
                                                                                    "name": "num",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 144453,
                                                                                    "src": "2977:3:181",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_int256",
                                                                                        "typeString": "int256"
                                                                                    }
                                                                                },
                                                                                "nodeType": "BinaryOperation",
                                                                                "operator": "%",
                                                                                "rightExpression": {
                                                                                    "hexValue": "3130",
                                                                                    "id": 144499,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "kind": "number",
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "Literal",
                                                                                    "src": "2983:2:181",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                                        "typeString": "int_const 10"
                                                                                    },
                                                                                    "value": "10"
                                                                                },
                                                                                "src": "2977:8:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "id": 144501,
                                                                        "isConstant": false,
                                                                        "isInlineArray": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "TupleExpression",
                                                                        "src": "2976:10:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_int256",
                                                                            "typeString": "int256"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "+",
                                                                    "rightExpression": {
                                                                        "hexValue": "3438",
                                                                        "id": 144502,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "2989:2:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_48_by_1",
                                                                            "typeString": "int_const 48"
                                                                        },
                                                                        "value": "48"
                                                                    },
                                                                    "src": "2976:15:181",
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
                                                                "id": 144497,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "2968:7:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 144496,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "2968:7:181",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 144504,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2968:24:181",
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
                                                        "id": 144495,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2962:5:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint8_$",
                                                            "typeString": "type(uint8)"
                                                        },
                                                        "typeName": {
                                                            "id": 144494,
                                                            "name": "uint8",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2962:5:181",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 144505,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2962:31:181",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint8",
                                                        "typeString": "uint8"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint8",
                                                        "typeString": "uint8"
                                                    }
                                                ],
                                                "id": 144493,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2942:6:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                                    "typeString": "type(bytes1)"
                                                },
                                                "typeName": {
                                                    "id": 144492,
                                                    "name": "bytes1",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2942:6:181",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 144506,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2942:61:181",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            }
                                        },
                                        "src": "2909:94:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes1",
                                            "typeString": "bytes1"
                                        }
                                    },
                                    "id": 144508,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2909:94:181"
                                },
                                {
                                    "expression": {
                                        "id": 144511,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 144509,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144453,
                                            "src": "3013:3:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "/=",
                                        "rightHandSide": {
                                            "hexValue": "3130",
                                            "id": 144510,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3020:2:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_10_by_1",
                                                "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                        },
                                        "src": "3013:9:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 144512,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3013:9:181"
                                },
                                {
                                    "assignments": [
                                        144514
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144514,
                                            "mutability": "mutable",
                                            "name": "digits",
                                            "nameLocation": "3040:6:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144598,
                                            "src": "3032:14:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 144513,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3032:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144516,
                                    "initialValue": {
                                        "hexValue": "31",
                                        "id": 144515,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3049:1:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_1_by_1",
                                            "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3032:18:181"
                                },
                                {
                                    "body": {
                                        "id": 144577,
                                        "nodeType": "Block",
                                        "src": "3103:349:181",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 144532,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 144528,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 144526,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144455,
                                                            "src": "3121:8:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 144527,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3132:1:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "3121:12:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "&&",
                                                    "rightExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 144531,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 144529,
                                                            "name": "digits",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144514,
                                                            "src": "3137:6:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "id": 144530,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144455,
                                                            "src": "3147:8:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3137:18:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "3121:34:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 144572,
                                                    "nodeType": "Block",
                                                    "src": "3241:179:181",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 144566,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 144544,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 144465,
                                                                        "src": "3259:9:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 144550,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 144549,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 144547,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 144545,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 144461,
                                                                                "src": "3269:15:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 144546,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 144514,
                                                                                "src": "3287:6:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "3269:24:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 144548,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3296:1:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "3269:28:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "3259:39:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "commonType": {
                                                                                                "typeIdentifier": "t_int256",
                                                                                                "typeString": "int256"
                                                                                            },
                                                                                            "id": 144562,
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
                                                                                                        "id": 144559,
                                                                                                        "isConstant": false,
                                                                                                        "isLValue": false,
                                                                                                        "isPure": false,
                                                                                                        "lValueRequested": false,
                                                                                                        "leftExpression": {
                                                                                                            "id": 144557,
                                                                                                            "name": "num",
                                                                                                            "nodeType": "Identifier",
                                                                                                            "overloadedDeclarations": [],
                                                                                                            "referencedDeclaration": 144453,
                                                                                                            "src": "3344:3:181",
                                                                                                            "typeDescriptions": {
                                                                                                                "typeIdentifier": "t_int256",
                                                                                                                "typeString": "int256"
                                                                                                            }
                                                                                                        },
                                                                                                        "nodeType": "BinaryOperation",
                                                                                                        "operator": "%",
                                                                                                        "rightExpression": {
                                                                                                            "hexValue": "3130",
                                                                                                            "id": 144558,
                                                                                                            "isConstant": false,
                                                                                                            "isLValue": false,
                                                                                                            "isPure": true,
                                                                                                            "kind": "number",
                                                                                                            "lValueRequested": false,
                                                                                                            "nodeType": "Literal",
                                                                                                            "src": "3350:2:181",
                                                                                                            "typeDescriptions": {
                                                                                                                "typeIdentifier": "t_rational_10_by_1",
                                                                                                                "typeString": "int_const 10"
                                                                                                            },
                                                                                                            "value": "10"
                                                                                                        },
                                                                                                        "src": "3344:8:181",
                                                                                                        "typeDescriptions": {
                                                                                                            "typeIdentifier": "t_int256",
                                                                                                            "typeString": "int256"
                                                                                                        }
                                                                                                    }
                                                                                                ],
                                                                                                "id": 144560,
                                                                                                "isConstant": false,
                                                                                                "isInlineArray": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": false,
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "TupleExpression",
                                                                                                "src": "3343:10:181",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_int256",
                                                                                                    "typeString": "int256"
                                                                                                }
                                                                                            },
                                                                                            "nodeType": "BinaryOperation",
                                                                                            "operator": "+",
                                                                                            "rightExpression": {
                                                                                                "hexValue": "3438",
                                                                                                "id": 144561,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": true,
                                                                                                "kind": "number",
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "Literal",
                                                                                                "src": "3356:2:181",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_rational_48_by_1",
                                                                                                    "typeString": "int_const 48"
                                                                                                },
                                                                                                "value": "48"
                                                                                            },
                                                                                            "src": "3343:15:181",
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
                                                                                        "id": 144556,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                                        "src": "3335:7:181",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                                                            "typeString": "type(uint256)"
                                                                                        },
                                                                                        "typeName": {
                                                                                            "id": 144555,
                                                                                            "name": "uint256",
                                                                                            "nodeType": "ElementaryTypeName",
                                                                                            "src": "3335:7:181",
                                                                                            "typeDescriptions": {}
                                                                                        }
                                                                                    },
                                                                                    "id": 144563,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "kind": "typeConversion",
                                                                                    "lValueRequested": false,
                                                                                    "nameLocations": [],
                                                                                    "names": [],
                                                                                    "nodeType": "FunctionCall",
                                                                                    "src": "3335:24:181",
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
                                                                                "id": 144554,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                                "src": "3329:5:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_uint8_$",
                                                                                    "typeString": "type(uint8)"
                                                                                },
                                                                                "typeName": {
                                                                                    "id": 144553,
                                                                                    "name": "uint8",
                                                                                    "nodeType": "ElementaryTypeName",
                                                                                    "src": "3329:5:181",
                                                                                    "typeDescriptions": {}
                                                                                }
                                                                            },
                                                                            "id": 144564,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "3329:31:181",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint8",
                                                                                "typeString": "uint8"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_uint8",
                                                                                "typeString": "uint8"
                                                                            }
                                                                        ],
                                                                        "id": 144552,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "3301:6:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 144551,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "3301:6:181",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 144565,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3301:77:181",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "3259:119:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 144567,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3259:119:181"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 144570,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 144568,
                                                                    "name": "num",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 144453,
                                                                    "src": "3396:3:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "/=",
                                                                "rightHandSide": {
                                                                    "hexValue": "3130",
                                                                    "id": 144569,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3403:2:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                        "typeString": "int_const 10"
                                                                    },
                                                                    "value": "10"
                                                                },
                                                                "src": "3396:9:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "id": 144571,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3396:9:181"
                                                        }
                                                    ]
                                                },
                                                "id": 144573,
                                                "nodeType": "IfStatement",
                                                "src": "3117:303:181",
                                                "trueBody": {
                                                    "id": 144543,
                                                    "nodeType": "Block",
                                                    "src": "3157:78:181",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 144541,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 144533,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 144465,
                                                                        "src": "3175:9:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 144539,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 144538,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 144536,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 144534,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 144461,
                                                                                "src": "3185:15:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 144535,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 144514,
                                                                                "src": "3203:6:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "3185:24:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 144537,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3212:1:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "3185:28:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "3175:39:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "hexValue": "2e",
                                                                    "id": 144540,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3217:3:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                                                        "typeString": "literal_string \".\""
                                                                    },
                                                                    "value": "."
                                                                },
                                                                "src": "3175:45:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 144542,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3175:45:181"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 144575,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "src": "3433:8:181",
                                                    "subExpression": {
                                                        "id": 144574,
                                                        "name": "digits",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144514,
                                                        "src": "3433:6:181",
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
                                                "id": 144576,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3433:8:181"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 144525,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 144519,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 144517,
                                                "name": "num",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144453,
                                                "src": "3067:3:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 144518,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3074:1:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3067:8:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "||",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 144524,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 144520,
                                                "name": "digits",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144514,
                                                "src": "3079:6:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<=",
                                            "rightExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 144523,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 144521,
                                                    "name": "decimals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144455,
                                                    "src": "3089:8:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 144522,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3100:1:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "3089:12:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3079:22:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "3067:34:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 144578,
                                    "nodeType": "WhileStatement",
                                    "src": "3060:392:181"
                                },
                                {
                                    "condition": {
                                        "id": 144579,
                                        "name": "isNegative",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 144472,
                                        "src": "3566:10:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 144594,
                                    "nodeType": "IfStatement",
                                    "src": "3562:108:181",
                                    "trueBody": {
                                        "id": 144593,
                                        "nodeType": "Block",
                                        "src": "3578:92:181",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 144588,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 144580,
                                                            "name": "rawResult",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144465,
                                                            "src": "3592:9:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 144586,
                                                        "indexExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 144585,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 144583,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 144581,
                                                                    "name": "maxStringLength",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 144461,
                                                                    "src": "3602:15:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "-",
                                                                "rightExpression": {
                                                                    "id": 144582,
                                                                    "name": "digits",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 144514,
                                                                    "src": "3620:6:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "3602:24:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "hexValue": "31",
                                                                "id": 144584,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3629:1:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_1_by_1",
                                                                    "typeString": "int_const 1"
                                                                },
                                                                "value": "1"
                                                            },
                                                            "src": "3602:28:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "3592:39:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "hexValue": "2d",
                                                        "id": 144587,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "3634:3:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561",
                                                            "typeString": "literal_string \"-\""
                                                        },
                                                        "value": "-"
                                                    },
                                                    "src": "3592:45:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes1",
                                                        "typeString": "bytes1"
                                                    }
                                                },
                                                "id": 144589,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3592:45:181"
                                            },
                                            {
                                                "expression": {
                                                    "id": 144591,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "src": "3651:8:181",
                                                    "subExpression": {
                                                        "id": 144590,
                                                        "name": "digits",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144514,
                                                        "src": "3651:6:181",
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
                                                "id": 144592,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3651:8:181"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "3802:129:181",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "3816:62:181",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "rawResult",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3830:9:181"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "maxStringLength",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3849:15:181"
                                                                        },
                                                                        {
                                                                            "name": "digits",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3866:6:181"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "sub",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3845:3:181"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3845:28:181"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3875:1:181",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3841:3:181"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3841:36:181"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3826:3:181"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3826:52:181"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "result",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3816:6:181"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "result",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3898:6:181"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "digits",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3910:6:181"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3918:1:181",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3906:3:181"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3906:14:181"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3891:6:181"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3891:30:181"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "3891:30:181"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 144514,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3866:6:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144514,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3910:6:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144461,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3849:15:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144465,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3830:9:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144458,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3816:6:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144458,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3898:6:181",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 144595,
                                    "nodeType": "InlineAssembly",
                                    "src": "3793:138:181"
                                },
                                {
                                    "expression": {
                                        "id": 144596,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 144458,
                                        "src": "3947:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 144459,
                                    "id": 144597,
                                    "nodeType": "Return",
                                    "src": "3940:13:181"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 144451,
                            "nodeType": "StructuredDocumentation",
                            "src": "1481:438:181",
                            "text": "@dev Converts a signed integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toString",
                        "nameLocation": "1933:8:181",
                        "parameters": {
                            "id": 144456,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144453,
                                    "mutability": "mutable",
                                    "name": "num",
                                    "nameLocation": "1958:3:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144599,
                                    "src": "1951:10:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 144452,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1951:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144455,
                                    "mutability": "mutable",
                                    "name": "decimals",
                                    "nameLocation": "1979:8:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144599,
                                    "src": "1971:16:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144454,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1971:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1941:52:181"
                        },
                        "returnParameters": {
                            "id": 144459,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144458,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "2031:6:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144599,
                                    "src": "2017:20:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 144457,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2017:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2016:22:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 144710,
                        "nodeType": "FunctionDefinition",
                        "src": "4412:1394:181",
                        "nodes": [],
                        "body": {
                            "id": 144709,
                            "nodeType": "Block",
                            "src": "4528:1278:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        144610
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144610,
                                            "mutability": "mutable",
                                            "name": "maxStringLength",
                                            "nameLocation": "4767:15:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144709,
                                            "src": "4759:23:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 144609,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4759:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144612,
                                    "initialValue": {
                                        "hexValue": "3739",
                                        "id": 144611,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "4785:2:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_79_by_1",
                                            "typeString": "int_const 79"
                                        },
                                        "value": "79"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4759:28:181"
                                },
                                {
                                    "assignments": [
                                        144614
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144614,
                                            "mutability": "mutable",
                                            "name": "rawResult",
                                            "nameLocation": "4810:9:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144709,
                                            "src": "4797:22:181",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 144613,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4797:5:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144619,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 144617,
                                                "name": "maxStringLength",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144610,
                                                "src": "4832:15:181",
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
                                            "id": 144616,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "4822:9:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 144615,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4826:5:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 144618,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4822:26:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4797:51:181"
                                },
                                {
                                    "expression": {
                                        "id": 144637,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 144620,
                                                "name": "rawResult",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144614,
                                                "src": "5013:9:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 144624,
                                            "indexExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 144623,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 144621,
                                                    "name": "maxStringLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144610,
                                                    "src": "5023:15:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 144622,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5041:1:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "5023:19:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "5013:30:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 144634,
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
                                                                        "id": 144631,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "id": 144629,
                                                                            "name": "num",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 144602,
                                                                            "src": "5060:3:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "%",
                                                                        "rightExpression": {
                                                                            "hexValue": "3130",
                                                                            "id": 144630,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5066:2:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_10_by_1",
                                                                                "typeString": "int_const 10"
                                                                            },
                                                                            "value": "10"
                                                                        },
                                                                        "src": "5060:8:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "id": 144632,
                                                                "isConstant": false,
                                                                "isInlineArray": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "TupleExpression",
                                                                "src": "5059:10:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "+",
                                                            "rightExpression": {
                                                                "hexValue": "3438",
                                                                "id": 144633,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5072:2:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_48_by_1",
                                                                    "typeString": "int_const 48"
                                                                },
                                                                "value": "48"
                                                            },
                                                            "src": "5059:15:181",
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
                                                        "id": 144628,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "5053:5:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint8_$",
                                                            "typeString": "type(uint8)"
                                                        },
                                                        "typeName": {
                                                            "id": 144627,
                                                            "name": "uint8",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5053:5:181",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 144635,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5053:22:181",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint8",
                                                        "typeString": "uint8"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint8",
                                                        "typeString": "uint8"
                                                    }
                                                ],
                                                "id": 144626,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "5046:6:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                                    "typeString": "type(bytes1)"
                                                },
                                                "typeName": {
                                                    "id": 144625,
                                                    "name": "bytes1",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5046:6:181",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 144636,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5046:30:181",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            }
                                        },
                                        "src": "5013:63:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes1",
                                            "typeString": "bytes1"
                                        }
                                    },
                                    "id": 144638,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5013:63:181"
                                },
                                {
                                    "expression": {
                                        "id": 144641,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 144639,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144602,
                                            "src": "5086:3:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "/=",
                                        "rightHandSide": {
                                            "hexValue": "3130",
                                            "id": 144640,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5093:2:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_10_by_1",
                                                "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                        },
                                        "src": "5086:9:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 144642,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5086:9:181"
                                },
                                {
                                    "assignments": [
                                        144644
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144644,
                                            "mutability": "mutable",
                                            "name": "digits",
                                            "nameLocation": "5113:6:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144709,
                                            "src": "5105:14:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 144643,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5105:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144646,
                                    "initialValue": {
                                        "hexValue": "31",
                                        "id": 144645,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "5122:1:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_1_by_1",
                                            "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5105:18:181"
                                },
                                {
                                    "body": {
                                        "id": 144704,
                                        "nodeType": "Block",
                                        "src": "5176:340:181",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 144662,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 144658,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 144656,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144604,
                                                            "src": "5194:8:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 144657,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5205:1:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5194:12:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "&&",
                                                    "rightExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 144661,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 144659,
                                                            "name": "digits",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144644,
                                                            "src": "5210:6:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "id": 144660,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144604,
                                                            "src": "5220:8:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "5210:18:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5194:34:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 144699,
                                                    "nodeType": "Block",
                                                    "src": "5314:170:181",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 144693,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 144674,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 144614,
                                                                        "src": "5332:9:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 144680,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 144679,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 144677,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 144675,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 144610,
                                                                                "src": "5342:15:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 144676,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 144644,
                                                                                "src": "5360:6:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "5342:24:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 144678,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5369:1:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "5342:28:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "5332:39:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "arguments": [
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "commonType": {
                                                                                        "typeIdentifier": "t_uint256",
                                                                                        "typeString": "uint256"
                                                                                    },
                                                                                    "id": 144690,
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
                                                                                                "id": 144687,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": false,
                                                                                                "lValueRequested": false,
                                                                                                "leftExpression": {
                                                                                                    "id": 144685,
                                                                                                    "name": "num",
                                                                                                    "nodeType": "Identifier",
                                                                                                    "overloadedDeclarations": [],
                                                                                                    "referencedDeclaration": 144602,
                                                                                                    "src": "5409:3:181",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_uint256",
                                                                                                        "typeString": "uint256"
                                                                                                    }
                                                                                                },
                                                                                                "nodeType": "BinaryOperation",
                                                                                                "operator": "%",
                                                                                                "rightExpression": {
                                                                                                    "hexValue": "3130",
                                                                                                    "id": 144686,
                                                                                                    "isConstant": false,
                                                                                                    "isLValue": false,
                                                                                                    "isPure": true,
                                                                                                    "kind": "number",
                                                                                                    "lValueRequested": false,
                                                                                                    "nodeType": "Literal",
                                                                                                    "src": "5415:2:181",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                                                        "typeString": "int_const 10"
                                                                                                    },
                                                                                                    "value": "10"
                                                                                                },
                                                                                                "src": "5409:8:181",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_uint256",
                                                                                                    "typeString": "uint256"
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "id": 144688,
                                                                                        "isConstant": false,
                                                                                        "isInlineArray": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "TupleExpression",
                                                                                        "src": "5408:10:181",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    },
                                                                                    "nodeType": "BinaryOperation",
                                                                                    "operator": "+",
                                                                                    "rightExpression": {
                                                                                        "hexValue": "3438",
                                                                                        "id": 144689,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "kind": "number",
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "Literal",
                                                                                        "src": "5421:2:181",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_rational_48_by_1",
                                                                                            "typeString": "int_const 48"
                                                                                        },
                                                                                        "value": "48"
                                                                                    },
                                                                                    "src": "5408:15:181",
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
                                                                                "id": 144684,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                                "src": "5402:5:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_uint8_$",
                                                                                    "typeString": "type(uint8)"
                                                                                },
                                                                                "typeName": {
                                                                                    "id": 144683,
                                                                                    "name": "uint8",
                                                                                    "nodeType": "ElementaryTypeName",
                                                                                    "src": "5402:5:181",
                                                                                    "typeDescriptions": {}
                                                                                }
                                                                            },
                                                                            "id": 144691,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "5402:22:181",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint8",
                                                                                "typeString": "uint8"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_uint8",
                                                                                "typeString": "uint8"
                                                                            }
                                                                        ],
                                                                        "id": 144682,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5374:6:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 144681,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5374:6:181",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 144692,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5374:68:181",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "5332:110:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 144694,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "5332:110:181"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 144697,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 144695,
                                                                    "name": "num",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 144602,
                                                                    "src": "5460:3:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "/=",
                                                                "rightHandSide": {
                                                                    "hexValue": "3130",
                                                                    "id": 144696,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "5467:2:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                        "typeString": "int_const 10"
                                                                    },
                                                                    "value": "10"
                                                                },
                                                                "src": "5460:9:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 144698,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "5460:9:181"
                                                        }
                                                    ]
                                                },
                                                "id": 144700,
                                                "nodeType": "IfStatement",
                                                "src": "5190:294:181",
                                                "trueBody": {
                                                    "id": 144673,
                                                    "nodeType": "Block",
                                                    "src": "5230:78:181",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 144671,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 144663,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 144614,
                                                                        "src": "5248:9:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 144669,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 144668,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 144666,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 144664,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 144610,
                                                                                "src": "5258:15:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 144665,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 144644,
                                                                                "src": "5276:6:181",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "5258:24:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 144667,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5285:1:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "5258:28:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "5248:39:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "hexValue": "2e",
                                                                    "id": 144670,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "5290:3:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                                                        "typeString": "literal_string \".\""
                                                                    },
                                                                    "value": "."
                                                                },
                                                                "src": "5248:45:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 144672,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "5248:45:181"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 144702,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "src": "5497:8:181",
                                                    "subExpression": {
                                                        "id": 144701,
                                                        "name": "digits",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144644,
                                                        "src": "5497:6:181",
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
                                                "id": 144703,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5497:8:181"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 144655,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 144649,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 144647,
                                                "name": "num",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144602,
                                                "src": "5140:3:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 144648,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5147:1:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "5140:8:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "||",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 144654,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 144650,
                                                "name": "digits",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144644,
                                                "src": "5152:6:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<=",
                                            "rightExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 144653,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 144651,
                                                    "name": "decimals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144604,
                                                    "src": "5162:8:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 144652,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5173:1:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "5162:12:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5152:22:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5140:34:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 144705,
                                    "nodeType": "WhileStatement",
                                    "src": "5133:383:181"
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "5648:129:181",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "5662:62:181",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "rawResult",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5676:9:181"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "maxStringLength",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5695:15:181"
                                                                        },
                                                                        {
                                                                            "name": "digits",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5712:6:181"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "sub",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "5691:3:181"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "5691:28:181"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "5721:1:181",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5687:3:181"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5687:36:181"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5672:3:181"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5672:52:181"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "result",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5662:6:181"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "result",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5744:6:181"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "digits",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5756:6:181"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "5764:1:181",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5752:3:181"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5752:14:181"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5737:6:181"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5737:30:181"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "5737:30:181"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 144644,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5712:6:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144644,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5756:6:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144610,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5695:15:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144614,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5676:9:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144607,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5662:6:181",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 144607,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5744:6:181",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 144706,
                                    "nodeType": "InlineAssembly",
                                    "src": "5639:138:181"
                                },
                                {
                                    "expression": {
                                        "id": 144707,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 144607,
                                        "src": "5793:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 144608,
                                    "id": 144708,
                                    "nodeType": "Return",
                                    "src": "5786:13:181"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 144600,
                            "nodeType": "StructuredDocumentation",
                            "src": "3966:441:181",
                            "text": "@dev Converts an unsigned integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toString",
                        "nameLocation": "4421:8:181",
                        "parameters": {
                            "id": 144605,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144602,
                                    "mutability": "mutable",
                                    "name": "num",
                                    "nameLocation": "4447:3:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144710,
                                    "src": "4439:11:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144601,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4439:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144604,
                                    "mutability": "mutable",
                                    "name": "decimals",
                                    "nameLocation": "4468:8:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144710,
                                    "src": "4460:16:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144603,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4460:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4429:53:181"
                        },
                        "returnParameters": {
                            "id": 144608,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144607,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "4520:6:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144710,
                                    "src": "4506:20:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 144606,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4506:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4505:22:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 144779,
                        "nodeType": "FunctionDefinition",
                        "src": "5812:448:181",
                        "nodes": [],
                        "body": {
                            "id": 144778,
                            "nodeType": "Block",
                            "src": "5913:347:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 144721,
                                                "name": "prelude",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144712,
                                                "src": "5936:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "hexValue": "5b",
                                                "id": 144722,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5945:3:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9f50164828976b6baa479ea39c718c745bbc0d2521b67dfde8474cbdc9711057",
                                                    "typeString": "literal_string \"[\""
                                                },
                                                "value": "["
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9f50164828976b6baa479ea39c718c745bbc0d2521b67dfde8474cbdc9711057",
                                                    "typeString": "literal_string \"[\""
                                                }
                                            ],
                                            "expression": {
                                                "id": 144718,
                                                "name": "console2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 52686,
                                                "src": "5923:8:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_console2_$52686_$",
                                                    "typeString": "type(library console2)"
                                                }
                                            },
                                            "id": 144720,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5932:3:181",
                                            "memberName": "log",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 45347,
                                            "src": "5923:12:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory) pure"
                                            }
                                        },
                                        "id": 144723,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5923:26:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 144724,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5923:26:181"
                                },
                                {
                                    "body": {
                                        "id": 144764,
                                        "nodeType": "Block",
                                        "src": "6002:195:181",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 144741,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 144736,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144726,
                                                        "src": "6020:1:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 144740,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 144737,
                                                                "name": "array",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 144715,
                                                                "src": "6024:5:181",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                    "typeString": "uint256[] memory"
                                                                }
                                                            },
                                                            "id": 144738,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "6030:6:181",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "6024:12:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "hexValue": "31",
                                                            "id": 144739,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6039:1:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                "typeString": "int_const 1"
                                                            },
                                                            "value": "1"
                                                        },
                                                        "src": "6024:16:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "6020:20:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 144762,
                                                    "nodeType": "Block",
                                                    "src": "6120:67:181",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "2020202020202020",
                                                                        "id": 144756,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6151:10:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                                                            "typeString": "literal_string \"        \""
                                                                        },
                                                                        "value": "        "
                                                                    },
                                                                    {
                                                                        "baseExpression": {
                                                                            "id": 144757,
                                                                            "name": "array",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 144715,
                                                                            "src": "6163:5:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                                "typeString": "uint256[] memory"
                                                                            }
                                                                        },
                                                                        "id": 144759,
                                                                        "indexExpression": {
                                                                            "id": 144758,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 144726,
                                                                            "src": "6169:1:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "IndexAccess",
                                                                        "src": "6163:8:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                                                            "typeString": "literal_string \"        \""
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "id": 144753,
                                                                        "name": "console2",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 52686,
                                                                        "src": "6138:8:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_console2_$52686_$",
                                                                            "typeString": "type(library console2)"
                                                                        }
                                                                    },
                                                                    "id": 144755,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6147:3:181",
                                                                    "memberName": "log",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 45313,
                                                                    "src": "6138:12:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                                                                        "typeString": "function (string memory,uint256) pure"
                                                                    }
                                                                },
                                                                "id": 144760,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6138:34:181",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 144761,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6138:34:181"
                                                        }
                                                    ]
                                                },
                                                "id": 144763,
                                                "nodeType": "IfStatement",
                                                "src": "6016:171:181",
                                                "trueBody": {
                                                    "id": 144752,
                                                    "nodeType": "Block",
                                                    "src": "6042:72:181",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "2020202020202020",
                                                                        "id": 144745,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6073:10:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                                                            "typeString": "literal_string \"        \""
                                                                        },
                                                                        "value": "        "
                                                                    },
                                                                    {
                                                                        "baseExpression": {
                                                                            "id": 144746,
                                                                            "name": "array",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 144715,
                                                                            "src": "6085:5:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                                "typeString": "uint256[] memory"
                                                                            }
                                                                        },
                                                                        "id": 144748,
                                                                        "indexExpression": {
                                                                            "id": 144747,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 144726,
                                                                            "src": "6091:1:181",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "IndexAccess",
                                                                        "src": "6085:8:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "hexValue": "2c",
                                                                        "id": 144749,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6095:3:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_3e7a35b97029f9e0cf6effd71c1a7958822e9a217d3a3aec886668a7dd8231cb",
                                                                            "typeString": "literal_string \",\""
                                                                        },
                                                                        "value": ","
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                                                            "typeString": "literal_string \"        \""
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_3e7a35b97029f9e0cf6effd71c1a7958822e9a217d3a3aec886668a7dd8231cb",
                                                                            "typeString": "literal_string \",\""
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "id": 144742,
                                                                        "name": "console2",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 52686,
                                                                        "src": "6060:8:181",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_console2_$52686_$",
                                                                            "typeString": "type(library console2)"
                                                                        }
                                                                    },
                                                                    "id": 144744,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6069:3:181",
                                                                    "memberName": "log",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 45877,
                                                                    "src": "6060:12:181",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                                                                        "typeString": "function (string memory,uint256,string memory) pure"
                                                                    }
                                                                },
                                                                "id": 144750,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6060:39:181",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 144751,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6060:39:181"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 144732,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144729,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144726,
                                            "src": "5979:1:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 144730,
                                                "name": "array",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144715,
                                                "src": "5983:5:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            "id": 144731,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5989:6:181",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "5983:12:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5979:16:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 144765,
                                    "initializationExpression": {
                                        "assignments": [
                                            144726
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 144726,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "5972:1:181",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 144765,
                                                "src": "5964:9:181",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 144725,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5964:7:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 144728,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 144727,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5976:1:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "5964:13:181"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 144734,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "5997:3:181",
                                            "subExpression": {
                                                "id": 144733,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144726,
                                                "src": "5997:1:181",
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
                                        "id": 144735,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5997:3:181"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "5959:238:181"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "202020205d",
                                                "id": 144769,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6219:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_aba926a8471cf1b6e3f6131cd50d3daaf157c3ba5068bc6d78358ed5c2e7da07",
                                                    "typeString": "literal_string \"    ]\""
                                                },
                                                "value": "    ]"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_aba926a8471cf1b6e3f6131cd50d3daaf157c3ba5068bc6d78358ed5c2e7da07",
                                                    "typeString": "literal_string \"    ]\""
                                                }
                                            ],
                                            "expression": {
                                                "id": 144766,
                                                "name": "console2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 52686,
                                                "src": "6206:8:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_console2_$52686_$",
                                                    "typeString": "type(library console2)"
                                                }
                                            },
                                            "id": 144768,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6215:3:181",
                                            "memberName": "log",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 45200,
                                            "src": "6206:12:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory) pure"
                                            }
                                        },
                                        "id": 144770,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6206:21:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 144771,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6206:21:181"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "",
                                                "id": 144775,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6250:2:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                },
                                                "value": ""
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                }
                                            ],
                                            "expression": {
                                                "id": 144772,
                                                "name": "console2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 52686,
                                                "src": "6237:8:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_console2_$52686_$",
                                                    "typeString": "type(library console2)"
                                                }
                                            },
                                            "id": 144774,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6246:3:181",
                                            "memberName": "log",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 45200,
                                            "src": "6237:12:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory) pure"
                                            }
                                        },
                                        "id": 144776,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6237:16:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 144777,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6237:16:181"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "logArray",
                        "nameLocation": "5821:8:181",
                        "parameters": {
                            "id": 144716,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144712,
                                    "mutability": "mutable",
                                    "name": "prelude",
                                    "nameLocation": "5853:7:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144779,
                                    "src": "5839:21:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 144711,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5839:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144715,
                                    "mutability": "mutable",
                                    "name": "array",
                                    "nameLocation": "5887:5:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144779,
                                    "src": "5870:22:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 144713,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5870:7:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 144714,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5870:9:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5829:69:181"
                        },
                        "returnParameters": {
                            "id": 144717,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5913:0:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 144816,
                        "nodeType": "FunctionDefinition",
                        "src": "6266:333:181",
                        "nodes": [],
                        "body": {
                            "id": 144815,
                            "nodeType": "Block",
                            "src": "6403:196:181",
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
                                                "id": 144793,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 144791,
                                                    "name": "minimum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144783,
                                                    "src": "6421:7:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 144792,
                                                    "name": "maximum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144785,
                                                    "src": "6432:7:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6421:18:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4c69623a206d696e203e206d6178",
                                                "id": 144794,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6441:16:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_4396c41319f83190fa71c858ec035e721b0116f384ff32fc1c4f691ca19dd6bf",
                                                    "typeString": "literal_string \"Lib: min > max\""
                                                },
                                                "value": "Lib: min > max"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_4396c41319f83190fa71c858ec035e721b0116f384ff32fc1c4f691ca19dd6bf",
                                                    "typeString": "literal_string \"Lib: min > max\""
                                                }
                                            ],
                                            "id": 144790,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "6413:7:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 144795,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6413:45:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 144796,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6413:45:181"
                                },
                                {
                                    "assignments": [
                                        144798
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144798,
                                            "mutability": "mutable",
                                            "name": "rangeSize",
                                            "nameLocation": "6477:9:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144815,
                                            "src": "6469:17:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 144797,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6469:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144804,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 144803,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 144801,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 144799,
                                                "name": "maximum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144785,
                                                "src": "6489:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 144800,
                                                "name": "minimum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144783,
                                                "src": "6499:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "6489:17:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 144802,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6509:1:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "6489:21:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6469:41:181"
                                },
                                {
                                    "assignments": [
                                        144806
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144806,
                                            "mutability": "mutable",
                                            "name": "modValue",
                                            "nameLocation": "6528:8:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144815,
                                            "src": "6520:16:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 144805,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6520:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144810,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 144809,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144807,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144781,
                                            "src": "6539:5:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "%",
                                        "rightExpression": {
                                            "id": 144808,
                                            "name": "rangeSize",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144798,
                                            "src": "6547:9:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6539:17:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6520:36:181"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 144813,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144811,
                                            "name": "modValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144806,
                                            "src": "6574:8:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "id": 144812,
                                            "name": "minimum",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144783,
                                            "src": "6585:7:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6574:18:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 144789,
                                    "id": 144814,
                                    "nodeType": "Return",
                                    "src": "6567:25:181"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "normalizeToRange",
                        "nameLocation": "6275:16:181",
                        "parameters": {
                            "id": 144786,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144781,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "6309:5:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144816,
                                    "src": "6301:13:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144780,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6301:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144783,
                                    "mutability": "mutable",
                                    "name": "minimum",
                                    "nameLocation": "6332:7:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144816,
                                    "src": "6324:15:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144782,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6324:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144785,
                                    "mutability": "mutable",
                                    "name": "maximum",
                                    "nameLocation": "6357:7:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144816,
                                    "src": "6349:15:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144784,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6349:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6291:79:181"
                        },
                        "returnParameters": {
                            "id": 144789,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144788,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144816,
                                    "src": "6394:7:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144787,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6394:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6393:9:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 144862,
                        "nodeType": "FunctionDefinition",
                        "src": "6605:401:181",
                        "nodes": [],
                        "body": {
                            "id": 144861,
                            "nodeType": "Block",
                            "src": "6738:268:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 144830,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 144828,
                                                    "name": "minimum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144820,
                                                    "src": "6756:7:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 144829,
                                                    "name": "maximum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 144822,
                                                    "src": "6767:7:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "6756:18:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4c69623a206d696e203e206d6178",
                                                "id": 144831,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6776:16:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_4396c41319f83190fa71c858ec035e721b0116f384ff32fc1c4f691ca19dd6bf",
                                                    "typeString": "literal_string \"Lib: min > max\""
                                                },
                                                "value": "Lib: min > max"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_4396c41319f83190fa71c858ec035e721b0116f384ff32fc1c4f691ca19dd6bf",
                                                    "typeString": "literal_string \"Lib: min > max\""
                                                }
                                            ],
                                            "id": 144827,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "6748:7:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 144832,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6748:45:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 144833,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6748:45:181"
                                },
                                {
                                    "assignments": [
                                        144835
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144835,
                                            "mutability": "mutable",
                                            "name": "rangeSize",
                                            "nameLocation": "6811:9:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144861,
                                            "src": "6804:16:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 144834,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6804:6:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144841,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 144840,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 144838,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 144836,
                                                "name": "maximum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144822,
                                                "src": "6823:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 144837,
                                                "name": "minimum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144820,
                                                "src": "6833:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "src": "6823:17:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 144839,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6843:1:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "6823:21:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6804:40:181"
                                },
                                {
                                    "assignments": [
                                        144843
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144843,
                                            "mutability": "mutable",
                                            "name": "modValue",
                                            "nameLocation": "6861:8:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144861,
                                            "src": "6854:15:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 144842,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6854:6:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144847,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 144846,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144844,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144818,
                                            "src": "6872:5:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "%",
                                        "rightExpression": {
                                            "id": 144845,
                                            "name": "rangeSize",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144835,
                                            "src": "6880:9:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "6872:17:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6854:35:181"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 144850,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144848,
                                            "name": "modValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144843,
                                            "src": "6904:8:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 144849,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6915:1:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "6904:12:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 144856,
                                    "nodeType": "IfStatement",
                                    "src": "6900:64:181",
                                    "trueBody": {
                                        "id": 144855,
                                        "nodeType": "Block",
                                        "src": "6918:46:181",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 144853,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 144851,
                                                        "name": "modValue",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144843,
                                                        "src": "6932:8:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 144852,
                                                        "name": "rangeSize",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 144835,
                                                        "src": "6944:9:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "src": "6932:21:181",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "id": 144854,
                                                "nodeType": "ExpressionStatement",
                                                "src": "6932:21:181"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 144859,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144857,
                                            "name": "modValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144843,
                                            "src": "6981:8:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "id": 144858,
                                            "name": "minimum",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144820,
                                            "src": "6992:7:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "6981:18:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 144826,
                                    "id": 144860,
                                    "nodeType": "Return",
                                    "src": "6974:25:181"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "normalizeToRange",
                        "nameLocation": "6614:16:181",
                        "parameters": {
                            "id": 144823,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144818,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "6647:5:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144862,
                                    "src": "6640:12:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 144817,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6640:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144820,
                                    "mutability": "mutable",
                                    "name": "minimum",
                                    "nameLocation": "6669:7:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144862,
                                    "src": "6662:14:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 144819,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6662:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144822,
                                    "mutability": "mutable",
                                    "name": "maximum",
                                    "nameLocation": "6693:7:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144862,
                                    "src": "6686:14:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 144821,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6686:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6630:76:181"
                        },
                        "returnParameters": {
                            "id": 144826,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144825,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144862,
                                    "src": "6730:6:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 144824,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6730:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6729:8:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 144886,
                        "nodeType": "FunctionDefinition",
                        "src": "7012:205:181",
                        "nodes": [],
                        "body": {
                            "id": 144885,
                            "nodeType": "Block",
                            "src": "7130:87:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        144874
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144874,
                                            "mutability": "mutable",
                                            "name": "delta",
                                            "nameLocation": "7148:5:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144885,
                                            "src": "7140:13:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 144873,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7140:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144880,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 144877,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144864,
                                                "src": "7170:1:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 144878,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144866,
                                                "src": "7173:1:181",
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
                                                "id": 144875,
                                                "name": "stdMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31365,
                                                "src": "7156:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_stdMath_$31365_$",
                                                    "typeString": "type(library stdMath)"
                                                }
                                            },
                                            "id": 144876,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7164:5:181",
                                            "memberName": "delta",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 31276,
                                            "src": "7156:13:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 144879,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7156:19:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7140:35:181"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 144883,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144881,
                                            "name": "delta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144874,
                                            "src": "7192:5:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "id": 144882,
                                            "name": "tolerance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144868,
                                            "src": "7201:9:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7192:18:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 144872,
                                    "id": 144884,
                                    "nodeType": "Return",
                                    "src": "7185:25:181"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approxEq",
                        "nameLocation": "7021:8:181",
                        "parameters": {
                            "id": 144869,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144864,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "7047:1:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144886,
                                    "src": "7039:9:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144863,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7039:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144866,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "7066:1:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144886,
                                    "src": "7058:9:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144865,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7058:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144868,
                                    "mutability": "mutable",
                                    "name": "tolerance",
                                    "nameLocation": "7085:9:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144886,
                                    "src": "7077:17:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144867,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7077:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7029:71:181"
                        },
                        "returnParameters": {
                            "id": 144872,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144871,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144886,
                                    "src": "7124:4:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 144870,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7124:4:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7123:6:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 144910,
                        "nodeType": "FunctionDefinition",
                        "src": "7223:203:181",
                        "nodes": [],
                        "body": {
                            "id": 144909,
                            "nodeType": "Block",
                            "src": "7339:87:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        144898
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 144898,
                                            "mutability": "mutable",
                                            "name": "delta",
                                            "nameLocation": "7357:5:181",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 144909,
                                            "src": "7349:13:181",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 144897,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7349:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 144904,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 144901,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144888,
                                                "src": "7379:1:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "id": 144902,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 144890,
                                                "src": "7382:1:181",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 144899,
                                                "name": "stdMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31365,
                                                "src": "7365:7:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_stdMath_$31365_$",
                                                    "typeString": "type(library stdMath)"
                                                }
                                            },
                                            "id": 144900,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7373:5:181",
                                            "memberName": "delta",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 31312,
                                            "src": "7365:13:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                                                "typeString": "function (int256,int256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 144903,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7365:19:181",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7349:35:181"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 144907,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 144905,
                                            "name": "delta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144898,
                                            "src": "7401:5:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "id": 144906,
                                            "name": "tolerance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 144892,
                                            "src": "7410:9:181",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7401:18:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 144896,
                                    "id": 144908,
                                    "nodeType": "Return",
                                    "src": "7394:25:181"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approxEq",
                        "nameLocation": "7232:8:181",
                        "parameters": {
                            "id": 144893,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144888,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "7257:1:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144910,
                                    "src": "7250:8:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 144887,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7250:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144890,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "7275:1:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144910,
                                    "src": "7268:8:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 144889,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7268:6:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144892,
                                    "mutability": "mutable",
                                    "name": "tolerance",
                                    "nameLocation": "7294:9:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144910,
                                    "src": "7286:17:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 144891,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7286:7:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7240:69:181"
                        },
                        "returnParameters": {
                            "id": 144896,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144895,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144910,
                                    "src": "7333:4:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 144894,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7333:4:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7332:6:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 144934,
                        "nodeType": "FunctionDefinition",
                        "src": "7432:175:181",
                        "nodes": [],
                        "body": {
                            "id": 144933,
                            "nodeType": "Block",
                            "src": "7505:102:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        },
                                        "id": 144931,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 144922,
                                                            "name": "b1",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144912,
                                                            "src": "7561:2:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 144920,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7544:3:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 144921,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7548:12:181",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7544:16:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 144923,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7544:20:181",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "id": 144919,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7534:9:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 144924,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7534:31:181",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 144928,
                                                            "name": "b2",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144914,
                                                            "src": "7596:2:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 144926,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7579:3:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 144927,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7583:12:181",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7579:16:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 144929,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7579:20:181",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "id": 144925,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7569:9:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 144930,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7569:31:181",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "7534:66:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 144918,
                                    "id": 144932,
                                    "nodeType": "Return",
                                    "src": "7515:85:181"
                                }
                            ]
                        },
                        "functionSelector": "cdb16840",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "eq",
                        "nameLocation": "7441:2:181",
                        "parameters": {
                            "id": 144915,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144912,
                                    "mutability": "mutable",
                                    "name": "b1",
                                    "nameLocation": "7457:2:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144934,
                                    "src": "7444:15:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 144911,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7444:5:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144914,
                                    "mutability": "mutable",
                                    "name": "b2",
                                    "nameLocation": "7474:2:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144934,
                                    "src": "7461:15:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 144913,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7461:5:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7443:34:181"
                        },
                        "returnParameters": {
                            "id": 144918,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144917,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144934,
                                    "src": "7499:4:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 144916,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7499:4:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7498:6:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 144958,
                        "nodeType": "FunctionDefinition",
                        "src": "7613:176:181",
                        "nodes": [],
                        "body": {
                            "id": 144957,
                            "nodeType": "Block",
                            "src": "7687:102:181",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        },
                                        "id": 144955,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 144946,
                                                            "name": "b1",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144936,
                                                            "src": "7743:2:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 144944,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7726:3:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 144945,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7730:12:181",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7726:16:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 144947,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7726:20:181",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "id": 144943,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7716:9:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 144948,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7716:31:181",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 144952,
                                                            "name": "b2",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 144938,
                                                            "src": "7778:2:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 144950,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7761:3:181",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 144951,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7765:12:181",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7761:16:181",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 144953,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7761:20:181",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                ],
                                                "id": 144949,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7751:9:181",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 144954,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7751:31:181",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "7716:66:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 144942,
                                    "id": 144956,
                                    "nodeType": "Return",
                                    "src": "7697:85:181"
                                }
                            ]
                        },
                        "functionSelector": "d37a20ba",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "neq",
                        "nameLocation": "7622:3:181",
                        "parameters": {
                            "id": 144939,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144936,
                                    "mutability": "mutable",
                                    "name": "b1",
                                    "nameLocation": "7639:2:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144958,
                                    "src": "7626:15:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 144935,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7626:5:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 144938,
                                    "mutability": "mutable",
                                    "name": "b2",
                                    "nameLocation": "7656:2:181",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144958,
                                    "src": "7643:15:181",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 144937,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7643:5:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7625:34:181"
                        },
                        "returnParameters": {
                            "id": 144942,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 144941,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 144958,
                                    "src": "7681:4:181",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 144940,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7681:4:181",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7680:6:181"
                        },
                        "scope": 144959,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "Lib",
                "contractDependencies": [],
                "contractKind": "library",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    144959
                ],
                "name": "Lib",
                "nameLocation": "220:3:181",
                "scope": 144960,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 181
};
