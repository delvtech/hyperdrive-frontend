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
        "object": "0x61029e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220ac6d004962e7b31b9a7ba8b41d8e1004191e47b1c8d5722617f77fea7a8a0ae464736f6c63430008140033",
        "sourceMap": "212:7579:233:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;212:7579:233;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220ac6d004962e7b31b9a7ba8b41d8e1004191e47b1c8d5722617f77fea7a8a0ae464736f6c63430008140033",
        "sourceMap": "212:7579:233:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7432:175;;;;;;:::i;:::-;;:::i;:::-;;;1586:14:234;;1579:22;1561:41;;1549:2;1534:18;7432:175:233;;;;;;;7613:176;;;;;;:::i;:::-;;:::i;7432:175::-;7499:4;7596:2;7579:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7569:31;;;;;;7561:2;7544:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7534:31;;;;;;:66;7515:85;;7432:175;;;;:::o;7613:176::-;7681:4;7778:2;7761:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7751:31;;;;;;7743:2;7726:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7716:31;;;;;;:66;;7697:85;;7613:176;;;;:::o;14:127:234:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:718;188:5;241:3;234:4;226:6;222:17;218:27;208:55;;259:1;256;249:12;208:55;295:6;282:20;321:18;358:2;354;351:10;348:36;;;364:18;;:::i;:::-;439:2;433:9;407:2;493:13;;-1:-1:-1;;489:22:234;;;513:2;485:31;481:40;469:53;;;537:18;;;557:22;;;534:46;531:72;;;583:18;;:::i;:::-;623:10;619:2;612:22;658:2;650:6;643:18;704:3;697:4;692:2;684:6;680:15;676:26;673:35;670:55;;;721:1;718;711:12;670:55;785:2;778:4;770:6;766:17;759:4;751:6;747:17;734:54;832:1;825:4;820:2;812:6;808:15;804:26;797:37;852:6;843:15;;;;;;146:718;;;;:::o;869:539::-;955:6;963;1016:2;1004:9;995:7;991:23;987:32;984:52;;;1032:1;1029;1022:12;984:52;1072:9;1059:23;1101:18;1142:2;1134:6;1131:14;1128:34;;;1158:1;1155;1148:12;1128:34;1181:49;1222:7;1213:6;1202:9;1198:22;1181:49;:::i;:::-;1171:59;;1283:2;1272:9;1268:18;1255:32;1239:48;;1312:2;1302:8;1299:16;1296:36;;;1328:1;1325;1318:12;1296:36;;1351:51;1394:7;1383:8;1372:9;1368:24;1351:51;:::i;:::-;1341:61;;;869:539;;;;;:::o;1613:412::-;1742:3;1780:6;1774:13;1805:1;1815:129;1829:6;1826:1;1823:13;1815:129;;;1927:4;1911:14;;;1907:25;;1901:32;1888:11;;;1881:53;1844:12;1815:129;;;-1:-1:-1;1999:1:234;1963:16;;1988:13;;;-1:-1:-1;1963:16:234;1613:412;-1:-1:-1;1613:412:234:o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "eq(bytes,bytes)": "cdb16840",
        "neq(bytes,bytes)": "d37a20ba"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"eq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"neq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/Lib.sol\":\"Lib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"test/utils/Lib.sol\":{\"keccak256\":\"0x912d18df3f75cbd2b14b90a3974c71947dde5a7c53e20e106ae6f7bd18a68f1e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://853298cef661e6006681ea7066ab72dcda6f44efecec79ebdcef58649a543a74\",\"dweb:/ipfs/Qme9LSzGAwTfre5ZEW6AaAmQToNjS7BDYaoEA3HmPuDPAw\"]}},\"version\":1}",
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
        "id": 160623,
        "exportedSymbols": {
            "Lib": [
                160622
            ],
            "Vm": [
                40778
            ],
            "VmSafe": [
                40306
            ],
            "console2": [
                56967
            ],
            "stdMath": [
                35646
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:7753:233",
        "nodes": [
            {
                "id": 160022,
                "nodeType": "PragmaDirective",
                "src": "39:23:233",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 160024,
                "nodeType": "ImportDirective",
                "src": "64:50:233",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/console2.sol",
                "file": "forge-std/console2.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 160623,
                "sourceUnit": 56968,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 160023,
                            "name": "console2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56967,
                            "src": "73:8:233",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 160026,
                "nodeType": "ImportDirective",
                "src": "115:48:233",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdMath.sol",
                "file": "forge-std/StdMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 160623,
                "sourceUnit": 35647,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 160025,
                            "name": "stdMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35646,
                            "src": "124:7:233",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 160029,
                "nodeType": "ImportDirective",
                "src": "164:46:233",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "forge-std/Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 160623,
                "sourceUnit": 40779,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 160027,
                            "name": "Vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40778,
                            "src": "173:2:233",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 160028,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40306,
                            "src": "177:6:233",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 160622,
                "nodeType": "ContractDefinition",
                "src": "212:7579:233",
                "nodes": [
                    {
                        "id": 160093,
                        "nodeType": "FunctionDefinition",
                        "src": "485:579:233",
                        "nodes": [],
                        "body": {
                            "id": 160092,
                            "nodeType": "Block",
                            "src": "628:436:233",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        160044
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160044,
                                            "mutability": "mutable",
                                            "name": "current",
                                            "nameLocation": "674:7:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160092,
                                            "src": "666:15:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 160043,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "666:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160046,
                                    "initialValue": {
                                        "hexValue": "30",
                                        "id": 160045,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "684:1:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "666:19:233"
                                },
                                {
                                    "expression": {
                                        "id": 160055,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 160047,
                                            "name": "filteredLogs",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160041,
                                            "src": "695:12:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct VmSafe.Log memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 160052,
                                                        "name": "logs",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 160034,
                                                        "src": "727:4:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                                            "typeString": "struct VmSafe.Log memory[] memory"
                                                        }
                                                    },
                                                    "id": 160053,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "732:6:233",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "727:11:233",
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
                                                "id": 160051,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "NewExpression",
                                                "src": "710:16:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr_$",
                                                    "typeString": "function (uint256) pure returns (struct VmSafe.Log memory[] memory)"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 160049,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 160048,
                                                            "name": "VmSafe.Log",
                                                            "nameLocations": [
                                                                "714:6:233",
                                                                "721:3:233"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 39258,
                                                            "src": "714:10:233"
                                                        },
                                                        "referencedDeclaration": 39258,
                                                        "src": "714:10:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Log_$39258_storage_ptr",
                                                            "typeString": "struct VmSafe.Log"
                                                        }
                                                    },
                                                    "id": 160050,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "714:12:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_struct$_Log_$39258_storage_$dyn_storage_ptr",
                                                        "typeString": "struct VmSafe.Log[]"
                                                    }
                                                }
                                            },
                                            "id": 160054,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "710:29:233",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct VmSafe.Log memory[] memory"
                                            }
                                        },
                                        "src": "695:44:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct VmSafe.Log memory[] memory"
                                        }
                                    },
                                    "id": 160056,
                                    "nodeType": "ExpressionStatement",
                                    "src": "695:44:233"
                                },
                                {
                                    "body": {
                                        "id": 160087,
                                        "nodeType": "Block",
                                        "src": "791:125:233",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 160075,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "baseExpression": {
                                                            "expression": {
                                                                "baseExpression": {
                                                                    "id": 160068,
                                                                    "name": "logs",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 160034,
                                                                    "src": "809:4:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                                                        "typeString": "struct VmSafe.Log memory[] memory"
                                                                    }
                                                                },
                                                                "id": 160070,
                                                                "indexExpression": {
                                                                    "id": 160069,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 160058,
                                                                    "src": "814:1:233",
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
                                                                "src": "809:7:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Log_$39258_memory_ptr",
                                                                    "typeString": "struct VmSafe.Log memory"
                                                                }
                                                            },
                                                            "id": 160071,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "817:6:233",
                                                            "memberName": "topics",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 39253,
                                                            "src": "809:14:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                                "typeString": "bytes32[] memory"
                                                            }
                                                        },
                                                        "id": 160073,
                                                        "indexExpression": {
                                                            "hexValue": "30",
                                                            "id": 160072,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "824:1:233",
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
                                                        "src": "809:17:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "id": 160074,
                                                        "name": "selector",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 160036,
                                                        "src": "830:8:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "809:29:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 160086,
                                                "nodeType": "IfStatement",
                                                "src": "805:101:233",
                                                "trueBody": {
                                                    "id": 160085,
                                                    "nodeType": "Block",
                                                    "src": "840:66:233",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 160083,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 160076,
                                                                        "name": "filteredLogs",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 160041,
                                                                        "src": "858:12:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                                                            "typeString": "struct VmSafe.Log memory[] memory"
                                                                        }
                                                                    },
                                                                    "id": 160079,
                                                                    "indexExpression": {
                                                                        "id": 160078,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "UnaryOperation",
                                                                        "operator": "++",
                                                                        "prefix": false,
                                                                        "src": "871:9:233",
                                                                        "subExpression": {
                                                                            "id": 160077,
                                                                            "name": "current",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 160044,
                                                                            "src": "871:7:233",
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
                                                                    "src": "858:23:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Log_$39258_memory_ptr",
                                                                        "typeString": "struct VmSafe.Log memory"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 160080,
                                                                        "name": "logs",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 160034,
                                                                        "src": "884:4:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                                                            "typeString": "struct VmSafe.Log memory[] memory"
                                                                        }
                                                                    },
                                                                    "id": 160082,
                                                                    "indexExpression": {
                                                                        "id": 160081,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 160058,
                                                                        "src": "889:1:233",
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
                                                                    "src": "884:7:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Log_$39258_memory_ptr",
                                                                        "typeString": "struct VmSafe.Log memory"
                                                                    }
                                                                },
                                                                "src": "858:33:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Log_$39258_memory_ptr",
                                                                    "typeString": "struct VmSafe.Log memory"
                                                                }
                                                            },
                                                            "id": 160084,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "858:33:233"
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
                                        "id": 160064,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160061,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160058,
                                            "src": "769:1:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 160062,
                                                "name": "logs",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160034,
                                                "src": "773:4:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                                    "typeString": "struct VmSafe.Log memory[] memory"
                                                }
                                            },
                                            "id": 160063,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "778:6:233",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "773:11:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "769:15:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 160088,
                                    "initializationExpression": {
                                        "assignments": [
                                            160058
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 160058,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "762:1:233",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 160088,
                                                "src": "754:9:233",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 160057,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "754:7:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 160060,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 160059,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "766:1:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "754:13:233"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 160066,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "786:3:233",
                                            "subExpression": {
                                                "id": 160065,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160058,
                                                "src": "786:1:233",
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
                                        "id": 160067,
                                        "nodeType": "ExpressionStatement",
                                        "src": "786:3:233"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "749:167:233"
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "976:53:233",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "filteredLogs",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "997:12:233"
                                                        },
                                                        {
                                                            "name": "current",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1011:7:233"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "990:6:233"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "990:29:233"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "990:29:233"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 160044,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1011:7:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160041,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "997:12:233",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 160089,
                                    "nodeType": "InlineAssembly",
                                    "src": "967:62:233"
                                },
                                {
                                    "expression": {
                                        "id": 160090,
                                        "name": "filteredLogs",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 160041,
                                        "src": "1045:12:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct VmSafe.Log memory[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 160042,
                                    "id": 160091,
                                    "nodeType": "Return",
                                    "src": "1038:19:233"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 160030,
                            "nodeType": "StructuredDocumentation",
                            "src": "230:250:233",
                            "text": "@dev Filters an array of longs for events that match the provided\n      selector.\n @param logs The array of logs to filter.\n @param selector The selector to filter for.\n @return filteredLogs The filtered array of logs."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "filterLogs",
                        "nameLocation": "494:10:233",
                        "parameters": {
                            "id": 160037,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160034,
                                    "mutability": "mutable",
                                    "name": "logs",
                                    "nameLocation": "534:4:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160093,
                                    "src": "514:24:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct VmSafe.Log[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 160032,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 160031,
                                                "name": "VmSafe.Log",
                                                "nameLocations": [
                                                    "514:6:233",
                                                    "521:3:233"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 39258,
                                                "src": "514:10:233"
                                            },
                                            "referencedDeclaration": 39258,
                                            "src": "514:10:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Log_$39258_storage_ptr",
                                                "typeString": "struct VmSafe.Log"
                                            }
                                        },
                                        "id": 160033,
                                        "nodeType": "ArrayTypeName",
                                        "src": "514:12:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$39258_storage_$dyn_storage_ptr",
                                            "typeString": "struct VmSafe.Log[]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160036,
                                    "mutability": "mutable",
                                    "name": "selector",
                                    "nameLocation": "556:8:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160093,
                                    "src": "548:16:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 160035,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "548:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "504:66:233"
                        },
                        "returnParameters": {
                            "id": 160042,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160041,
                                    "mutability": "mutable",
                                    "name": "filteredLogs",
                                    "nameLocation": "614:12:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160093,
                                    "src": "594:32:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Log_$39258_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct VmSafe.Log[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 160039,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 160038,
                                                "name": "VmSafe.Log",
                                                "nameLocations": [
                                                    "594:6:233",
                                                    "601:3:233"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 39258,
                                                "src": "594:10:233"
                                            },
                                            "referencedDeclaration": 39258,
                                            "src": "594:10:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Log_$39258_storage_ptr",
                                                "typeString": "struct VmSafe.Log"
                                            }
                                        },
                                        "id": 160040,
                                        "nodeType": "ArrayTypeName",
                                        "src": "594:12:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$39258_storage_$dyn_storage_ptr",
                                            "typeString": "struct VmSafe.Log[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "593:34:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 160113,
                        "nodeType": "FunctionDefinition",
                        "src": "1283:192:233",
                        "nodes": [],
                        "body": {
                            "id": 160112,
                            "nodeType": "Block",
                            "src": "1373:102:233",
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
                                                                "id": 160106,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "1442:15:233",
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
                                                            "id": 160105,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "1432:9:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 160107,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1432:26:233",
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
                                                    "id": 160104,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1425:6:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_bytes4_$",
                                                        "typeString": "type(bytes4)"
                                                    },
                                                    "typeName": {
                                                        "id": 160103,
                                                        "name": "bytes4",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1425:6:233",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 160108,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1425:34:233",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes4",
                                                    "typeString": "bytes4"
                                                }
                                            },
                                            {
                                                "id": 160109,
                                                "name": "reason",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160096,
                                                "src": "1461:6:233",
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
                                                "id": 160101,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "1402:3:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_abi",
                                                    "typeString": "abi"
                                                }
                                            },
                                            "id": 160102,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "1406:18:233",
                                            "memberName": "encodeWithSelector",
                                            "nodeType": "MemberAccess",
                                            "src": "1402:22:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes4) pure returns (bytes memory)"
                                            }
                                        },
                                        "id": 160110,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1402:66:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 160100,
                                    "id": 160111,
                                    "nodeType": "Return",
                                    "src": "1383:85:233"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 160094,
                            "nodeType": "StructuredDocumentation",
                            "src": "1070:208:233",
                            "text": "@dev Encodes a reason into a string error. This is useful for verifying\n      string errors in low-level calls.\n @param reason The reason to encode.\n @return The encoded string error."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toError",
                        "nameLocation": "1292:7:233",
                        "parameters": {
                            "id": 160097,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160096,
                                    "mutability": "mutable",
                                    "name": "reason",
                                    "nameLocation": "1323:6:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160113,
                                    "src": "1309:20:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 160095,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1309:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1299:36:233"
                        },
                        "returnParameters": {
                            "id": 160100,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160099,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160113,
                                    "src": "1359:12:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 160098,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1359:5:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1358:14:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 160262,
                        "nodeType": "FunctionDefinition",
                        "src": "1924:2036:233",
                        "nodes": [],
                        "body": {
                            "id": 160261,
                            "nodeType": "Block",
                            "src": "2039:1921:233",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        160124
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160124,
                                            "mutability": "mutable",
                                            "name": "maxStringLength",
                                            "nameLocation": "2329:15:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160261,
                                            "src": "2321:23:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 160123,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2321:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160126,
                                    "initialValue": {
                                        "hexValue": "3739",
                                        "id": 160125,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2347:2:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_79_by_1",
                                            "typeString": "int_const 79"
                                        },
                                        "value": "79"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2321:28:233"
                                },
                                {
                                    "assignments": [
                                        160128
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160128,
                                            "mutability": "mutable",
                                            "name": "rawResult",
                                            "nameLocation": "2372:9:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160261,
                                            "src": "2359:22:233",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 160127,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2359:5:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160133,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 160131,
                                                "name": "maxStringLength",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160124,
                                                "src": "2394:15:233",
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
                                            "id": 160130,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "2384:9:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 160129,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2388:5:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 160132,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2384:26:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2359:51:233"
                                },
                                {
                                    "assignments": [
                                        160135
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160135,
                                            "mutability": "mutable",
                                            "name": "isNegative",
                                            "nameLocation": "2688:10:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160261,
                                            "src": "2683:15:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 160134,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2683:4:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160139,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 160138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160136,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160116,
                                            "src": "2701:3:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 160137,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2707:1:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "2701:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2683:25:233"
                                },
                                {
                                    "expression": {
                                        "id": 160148,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 160140,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160116,
                                            "src": "2718:3:233",
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
                                                "id": 160143,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 160141,
                                                    "name": "num",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160116,
                                                    "src": "2724:3:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 160142,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2730:1:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "2724:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "id": 160146,
                                                "name": "num",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160116,
                                                "src": "2741:3:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 160147,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "2724:20:233",
                                            "trueExpression": {
                                                "id": 160145,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "-",
                                                "prefix": true,
                                                "src": "2734:4:233",
                                                "subExpression": {
                                                    "id": 160144,
                                                    "name": "num",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160116,
                                                    "src": "2735:3:233",
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
                                        "src": "2718:26:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 160149,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2718:26:233"
                                },
                                {
                                    "expression": {
                                        "id": 160170,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 160150,
                                                "name": "rawResult",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160128,
                                                "src": "2909:9:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 160154,
                                            "indexExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 160153,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 160151,
                                                    "name": "maxStringLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160124,
                                                    "src": "2919:15:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 160152,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2937:1:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "2919:19:233",
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
                                            "src": "2909:30:233",
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
                                                                    "id": 160166,
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
                                                                                "id": 160163,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "leftExpression": {
                                                                                    "id": 160161,
                                                                                    "name": "num",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 160116,
                                                                                    "src": "2977:3:233",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_int256",
                                                                                        "typeString": "int256"
                                                                                    }
                                                                                },
                                                                                "nodeType": "BinaryOperation",
                                                                                "operator": "%",
                                                                                "rightExpression": {
                                                                                    "hexValue": "3130",
                                                                                    "id": 160162,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "kind": "number",
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "Literal",
                                                                                    "src": "2983:2:233",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                                        "typeString": "int_const 10"
                                                                                    },
                                                                                    "value": "10"
                                                                                },
                                                                                "src": "2977:8:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "id": 160164,
                                                                        "isConstant": false,
                                                                        "isInlineArray": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "TupleExpression",
                                                                        "src": "2976:10:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_int256",
                                                                            "typeString": "int256"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "+",
                                                                    "rightExpression": {
                                                                        "hexValue": "3438",
                                                                        "id": 160165,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "2989:2:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_48_by_1",
                                                                            "typeString": "int_const 48"
                                                                        },
                                                                        "value": "48"
                                                                    },
                                                                    "src": "2976:15:233",
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
                                                                "id": 160160,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "2968:7:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 160159,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "2968:7:233",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 160167,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2968:24:233",
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
                                                        "id": 160158,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2962:5:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint8_$",
                                                            "typeString": "type(uint8)"
                                                        },
                                                        "typeName": {
                                                            "id": 160157,
                                                            "name": "uint8",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2962:5:233",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 160168,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2962:31:233",
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
                                                "id": 160156,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2942:6:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                                    "typeString": "type(bytes1)"
                                                },
                                                "typeName": {
                                                    "id": 160155,
                                                    "name": "bytes1",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2942:6:233",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 160169,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2942:61:233",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            }
                                        },
                                        "src": "2909:94:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes1",
                                            "typeString": "bytes1"
                                        }
                                    },
                                    "id": 160171,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2909:94:233"
                                },
                                {
                                    "expression": {
                                        "id": 160174,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 160172,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160116,
                                            "src": "3013:3:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "/=",
                                        "rightHandSide": {
                                            "hexValue": "3130",
                                            "id": 160173,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3020:2:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_10_by_1",
                                                "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                        },
                                        "src": "3013:9:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 160175,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3013:9:233"
                                },
                                {
                                    "assignments": [
                                        160177
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160177,
                                            "mutability": "mutable",
                                            "name": "digits",
                                            "nameLocation": "3040:6:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160261,
                                            "src": "3032:14:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 160176,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3032:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160179,
                                    "initialValue": {
                                        "hexValue": "31",
                                        "id": 160178,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3049:1:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_1_by_1",
                                            "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3032:18:233"
                                },
                                {
                                    "body": {
                                        "id": 160240,
                                        "nodeType": "Block",
                                        "src": "3103:349:233",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 160195,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 160191,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 160189,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160118,
                                                            "src": "3121:8:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 160190,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3132:1:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "3121:12:233",
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
                                                        "id": 160194,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 160192,
                                                            "name": "digits",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160177,
                                                            "src": "3137:6:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "id": 160193,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160118,
                                                            "src": "3147:8:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3137:18:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "3121:34:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 160235,
                                                    "nodeType": "Block",
                                                    "src": "3241:179:233",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 160229,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 160207,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 160128,
                                                                        "src": "3259:9:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 160213,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 160212,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 160210,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 160208,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 160124,
                                                                                "src": "3269:15:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 160209,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 160177,
                                                                                "src": "3287:6:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "3269:24:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 160211,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3296:1:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "3269:28:233",
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
                                                                    "src": "3259:39:233",
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
                                                                                            "id": 160225,
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
                                                                                                        "id": 160222,
                                                                                                        "isConstant": false,
                                                                                                        "isLValue": false,
                                                                                                        "isPure": false,
                                                                                                        "lValueRequested": false,
                                                                                                        "leftExpression": {
                                                                                                            "id": 160220,
                                                                                                            "name": "num",
                                                                                                            "nodeType": "Identifier",
                                                                                                            "overloadedDeclarations": [],
                                                                                                            "referencedDeclaration": 160116,
                                                                                                            "src": "3344:3:233",
                                                                                                            "typeDescriptions": {
                                                                                                                "typeIdentifier": "t_int256",
                                                                                                                "typeString": "int256"
                                                                                                            }
                                                                                                        },
                                                                                                        "nodeType": "BinaryOperation",
                                                                                                        "operator": "%",
                                                                                                        "rightExpression": {
                                                                                                            "hexValue": "3130",
                                                                                                            "id": 160221,
                                                                                                            "isConstant": false,
                                                                                                            "isLValue": false,
                                                                                                            "isPure": true,
                                                                                                            "kind": "number",
                                                                                                            "lValueRequested": false,
                                                                                                            "nodeType": "Literal",
                                                                                                            "src": "3350:2:233",
                                                                                                            "typeDescriptions": {
                                                                                                                "typeIdentifier": "t_rational_10_by_1",
                                                                                                                "typeString": "int_const 10"
                                                                                                            },
                                                                                                            "value": "10"
                                                                                                        },
                                                                                                        "src": "3344:8:233",
                                                                                                        "typeDescriptions": {
                                                                                                            "typeIdentifier": "t_int256",
                                                                                                            "typeString": "int256"
                                                                                                        }
                                                                                                    }
                                                                                                ],
                                                                                                "id": 160223,
                                                                                                "isConstant": false,
                                                                                                "isInlineArray": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": false,
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "TupleExpression",
                                                                                                "src": "3343:10:233",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_int256",
                                                                                                    "typeString": "int256"
                                                                                                }
                                                                                            },
                                                                                            "nodeType": "BinaryOperation",
                                                                                            "operator": "+",
                                                                                            "rightExpression": {
                                                                                                "hexValue": "3438",
                                                                                                "id": 160224,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": true,
                                                                                                "kind": "number",
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "Literal",
                                                                                                "src": "3356:2:233",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_rational_48_by_1",
                                                                                                    "typeString": "int_const 48"
                                                                                                },
                                                                                                "value": "48"
                                                                                            },
                                                                                            "src": "3343:15:233",
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
                                                                                        "id": 160219,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                                        "src": "3335:7:233",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                                                            "typeString": "type(uint256)"
                                                                                        },
                                                                                        "typeName": {
                                                                                            "id": 160218,
                                                                                            "name": "uint256",
                                                                                            "nodeType": "ElementaryTypeName",
                                                                                            "src": "3335:7:233",
                                                                                            "typeDescriptions": {}
                                                                                        }
                                                                                    },
                                                                                    "id": 160226,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "kind": "typeConversion",
                                                                                    "lValueRequested": false,
                                                                                    "nameLocations": [],
                                                                                    "names": [],
                                                                                    "nodeType": "FunctionCall",
                                                                                    "src": "3335:24:233",
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
                                                                                "id": 160217,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                                "src": "3329:5:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_uint8_$",
                                                                                    "typeString": "type(uint8)"
                                                                                },
                                                                                "typeName": {
                                                                                    "id": 160216,
                                                                                    "name": "uint8",
                                                                                    "nodeType": "ElementaryTypeName",
                                                                                    "src": "3329:5:233",
                                                                                    "typeDescriptions": {}
                                                                                }
                                                                            },
                                                                            "id": 160227,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "3329:31:233",
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
                                                                        "id": 160215,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "3301:6:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 160214,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "3301:6:233",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 160228,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3301:77:233",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "3259:119:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 160230,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3259:119:233"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 160233,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 160231,
                                                                    "name": "num",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 160116,
                                                                    "src": "3396:3:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "/=",
                                                                "rightHandSide": {
                                                                    "hexValue": "3130",
                                                                    "id": 160232,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3403:2:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                        "typeString": "int_const 10"
                                                                    },
                                                                    "value": "10"
                                                                },
                                                                "src": "3396:9:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "id": 160234,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3396:9:233"
                                                        }
                                                    ]
                                                },
                                                "id": 160236,
                                                "nodeType": "IfStatement",
                                                "src": "3117:303:233",
                                                "trueBody": {
                                                    "id": 160206,
                                                    "nodeType": "Block",
                                                    "src": "3157:78:233",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 160204,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 160196,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 160128,
                                                                        "src": "3175:9:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 160202,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 160201,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 160199,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 160197,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 160124,
                                                                                "src": "3185:15:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 160198,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 160177,
                                                                                "src": "3203:6:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "3185:24:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 160200,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3212:1:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "3185:28:233",
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
                                                                    "src": "3175:39:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "hexValue": "2e",
                                                                    "id": 160203,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3217:3:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                                                        "typeString": "literal_string \".\""
                                                                    },
                                                                    "value": "."
                                                                },
                                                                "src": "3175:45:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 160205,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3175:45:233"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 160238,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "src": "3433:8:233",
                                                    "subExpression": {
                                                        "id": 160237,
                                                        "name": "digits",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 160177,
                                                        "src": "3433:6:233",
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
                                                "id": 160239,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3433:8:233"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 160188,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 160182,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 160180,
                                                "name": "num",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160116,
                                                "src": "3067:3:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 160181,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3074:1:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3067:8:233",
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
                                            "id": 160187,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 160183,
                                                "name": "digits",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160177,
                                                "src": "3079:6:233",
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
                                                "id": 160186,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 160184,
                                                    "name": "decimals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160118,
                                                    "src": "3089:8:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 160185,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3100:1:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "3089:12:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3079:22:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "3067:34:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 160241,
                                    "nodeType": "WhileStatement",
                                    "src": "3060:392:233"
                                },
                                {
                                    "condition": {
                                        "id": 160242,
                                        "name": "isNegative",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 160135,
                                        "src": "3566:10:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 160257,
                                    "nodeType": "IfStatement",
                                    "src": "3562:108:233",
                                    "trueBody": {
                                        "id": 160256,
                                        "nodeType": "Block",
                                        "src": "3578:92:233",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 160251,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 160243,
                                                            "name": "rawResult",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160128,
                                                            "src": "3592:9:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 160249,
                                                        "indexExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 160248,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 160246,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 160244,
                                                                    "name": "maxStringLength",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 160124,
                                                                    "src": "3602:15:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "-",
                                                                "rightExpression": {
                                                                    "id": 160245,
                                                                    "name": "digits",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 160177,
                                                                    "src": "3620:6:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "3602:24:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "hexValue": "31",
                                                                "id": 160247,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3629:1:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_1_by_1",
                                                                    "typeString": "int_const 1"
                                                                },
                                                                "value": "1"
                                                            },
                                                            "src": "3602:28:233",
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
                                                        "src": "3592:39:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "hexValue": "2d",
                                                        "id": 160250,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "3634:3:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561",
                                                            "typeString": "literal_string \"-\""
                                                        },
                                                        "value": "-"
                                                    },
                                                    "src": "3592:45:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes1",
                                                        "typeString": "bytes1"
                                                    }
                                                },
                                                "id": 160252,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3592:45:233"
                                            },
                                            {
                                                "expression": {
                                                    "id": 160254,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "src": "3651:8:233",
                                                    "subExpression": {
                                                        "id": 160253,
                                                        "name": "digits",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 160177,
                                                        "src": "3651:6:233",
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
                                                "id": 160255,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3651:8:233"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "3802:129:233",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "3816:62:233",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "rawResult",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3830:9:233"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "maxStringLength",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3849:15:233"
                                                                        },
                                                                        {
                                                                            "name": "digits",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3866:6:233"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "sub",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3845:3:233"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3845:28:233"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3875:1:233",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3841:3:233"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3841:36:233"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3826:3:233"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3826:52:233"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "result",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3816:6:233"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "result",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3898:6:233"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "digits",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3910:6:233"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3918:1:233",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3906:3:233"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3906:14:233"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3891:6:233"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3891:30:233"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "3891:30:233"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 160177,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3866:6:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160177,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3910:6:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160124,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3849:15:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160128,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3830:9:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160121,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3816:6:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160121,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3898:6:233",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 160258,
                                    "nodeType": "InlineAssembly",
                                    "src": "3793:138:233"
                                },
                                {
                                    "expression": {
                                        "id": 160259,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 160121,
                                        "src": "3947:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 160122,
                                    "id": 160260,
                                    "nodeType": "Return",
                                    "src": "3940:13:233"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 160114,
                            "nodeType": "StructuredDocumentation",
                            "src": "1481:438:233",
                            "text": "@dev Converts a signed integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toString",
                        "nameLocation": "1933:8:233",
                        "parameters": {
                            "id": 160119,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160116,
                                    "mutability": "mutable",
                                    "name": "num",
                                    "nameLocation": "1958:3:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160262,
                                    "src": "1951:10:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 160115,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1951:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160118,
                                    "mutability": "mutable",
                                    "name": "decimals",
                                    "nameLocation": "1979:8:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160262,
                                    "src": "1971:16:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160117,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1971:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1941:52:233"
                        },
                        "returnParameters": {
                            "id": 160122,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160121,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "2031:6:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160262,
                                    "src": "2017:20:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 160120,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2017:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2016:22:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 160373,
                        "nodeType": "FunctionDefinition",
                        "src": "4412:1394:233",
                        "nodes": [],
                        "body": {
                            "id": 160372,
                            "nodeType": "Block",
                            "src": "4528:1278:233",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        160273
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160273,
                                            "mutability": "mutable",
                                            "name": "maxStringLength",
                                            "nameLocation": "4767:15:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160372,
                                            "src": "4759:23:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 160272,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4759:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160275,
                                    "initialValue": {
                                        "hexValue": "3739",
                                        "id": 160274,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "4785:2:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_79_by_1",
                                            "typeString": "int_const 79"
                                        },
                                        "value": "79"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4759:28:233"
                                },
                                {
                                    "assignments": [
                                        160277
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160277,
                                            "mutability": "mutable",
                                            "name": "rawResult",
                                            "nameLocation": "4810:9:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160372,
                                            "src": "4797:22:233",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 160276,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4797:5:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160282,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 160280,
                                                "name": "maxStringLength",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160273,
                                                "src": "4832:15:233",
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
                                            "id": 160279,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "4822:9:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 160278,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4826:5:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 160281,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4822:26:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4797:51:233"
                                },
                                {
                                    "expression": {
                                        "id": 160300,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 160283,
                                                "name": "rawResult",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160277,
                                                "src": "5013:9:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 160287,
                                            "indexExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 160286,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 160284,
                                                    "name": "maxStringLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160273,
                                                    "src": "5023:15:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 160285,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5041:1:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "5023:19:233",
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
                                            "src": "5013:30:233",
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
                                                            "id": 160297,
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
                                                                        "id": 160294,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "id": 160292,
                                                                            "name": "num",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 160265,
                                                                            "src": "5060:3:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "%",
                                                                        "rightExpression": {
                                                                            "hexValue": "3130",
                                                                            "id": 160293,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5066:2:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_10_by_1",
                                                                                "typeString": "int_const 10"
                                                                            },
                                                                            "value": "10"
                                                                        },
                                                                        "src": "5060:8:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "id": 160295,
                                                                "isConstant": false,
                                                                "isInlineArray": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "TupleExpression",
                                                                "src": "5059:10:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "+",
                                                            "rightExpression": {
                                                                "hexValue": "3438",
                                                                "id": 160296,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5072:2:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_48_by_1",
                                                                    "typeString": "int_const 48"
                                                                },
                                                                "value": "48"
                                                            },
                                                            "src": "5059:15:233",
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
                                                        "id": 160291,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "5053:5:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint8_$",
                                                            "typeString": "type(uint8)"
                                                        },
                                                        "typeName": {
                                                            "id": 160290,
                                                            "name": "uint8",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5053:5:233",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 160298,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5053:22:233",
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
                                                "id": 160289,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "5046:6:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                                    "typeString": "type(bytes1)"
                                                },
                                                "typeName": {
                                                    "id": 160288,
                                                    "name": "bytes1",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5046:6:233",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 160299,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5046:30:233",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            }
                                        },
                                        "src": "5013:63:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes1",
                                            "typeString": "bytes1"
                                        }
                                    },
                                    "id": 160301,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5013:63:233"
                                },
                                {
                                    "expression": {
                                        "id": 160304,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 160302,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160265,
                                            "src": "5086:3:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "/=",
                                        "rightHandSide": {
                                            "hexValue": "3130",
                                            "id": 160303,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5093:2:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_10_by_1",
                                                "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                        },
                                        "src": "5086:9:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 160305,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5086:9:233"
                                },
                                {
                                    "assignments": [
                                        160307
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160307,
                                            "mutability": "mutable",
                                            "name": "digits",
                                            "nameLocation": "5113:6:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160372,
                                            "src": "5105:14:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 160306,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5105:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160309,
                                    "initialValue": {
                                        "hexValue": "31",
                                        "id": 160308,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "5122:1:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_1_by_1",
                                            "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5105:18:233"
                                },
                                {
                                    "body": {
                                        "id": 160367,
                                        "nodeType": "Block",
                                        "src": "5176:340:233",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 160325,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 160321,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 160319,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160267,
                                                            "src": "5194:8:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 160320,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5205:1:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5194:12:233",
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
                                                        "id": 160324,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 160322,
                                                            "name": "digits",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160307,
                                                            "src": "5210:6:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "id": 160323,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160267,
                                                            "src": "5220:8:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "5210:18:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5194:34:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 160362,
                                                    "nodeType": "Block",
                                                    "src": "5314:170:233",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 160356,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 160337,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 160277,
                                                                        "src": "5332:9:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 160343,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 160342,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 160340,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 160338,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 160273,
                                                                                "src": "5342:15:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 160339,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 160307,
                                                                                "src": "5360:6:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "5342:24:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 160341,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5369:1:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "5342:28:233",
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
                                                                    "src": "5332:39:233",
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
                                                                                    "id": 160353,
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
                                                                                                "id": 160350,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": false,
                                                                                                "lValueRequested": false,
                                                                                                "leftExpression": {
                                                                                                    "id": 160348,
                                                                                                    "name": "num",
                                                                                                    "nodeType": "Identifier",
                                                                                                    "overloadedDeclarations": [],
                                                                                                    "referencedDeclaration": 160265,
                                                                                                    "src": "5409:3:233",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_uint256",
                                                                                                        "typeString": "uint256"
                                                                                                    }
                                                                                                },
                                                                                                "nodeType": "BinaryOperation",
                                                                                                "operator": "%",
                                                                                                "rightExpression": {
                                                                                                    "hexValue": "3130",
                                                                                                    "id": 160349,
                                                                                                    "isConstant": false,
                                                                                                    "isLValue": false,
                                                                                                    "isPure": true,
                                                                                                    "kind": "number",
                                                                                                    "lValueRequested": false,
                                                                                                    "nodeType": "Literal",
                                                                                                    "src": "5415:2:233",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                                                        "typeString": "int_const 10"
                                                                                                    },
                                                                                                    "value": "10"
                                                                                                },
                                                                                                "src": "5409:8:233",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_uint256",
                                                                                                    "typeString": "uint256"
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "id": 160351,
                                                                                        "isConstant": false,
                                                                                        "isInlineArray": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "TupleExpression",
                                                                                        "src": "5408:10:233",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    },
                                                                                    "nodeType": "BinaryOperation",
                                                                                    "operator": "+",
                                                                                    "rightExpression": {
                                                                                        "hexValue": "3438",
                                                                                        "id": 160352,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "kind": "number",
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "Literal",
                                                                                        "src": "5421:2:233",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_rational_48_by_1",
                                                                                            "typeString": "int_const 48"
                                                                                        },
                                                                                        "value": "48"
                                                                                    },
                                                                                    "src": "5408:15:233",
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
                                                                                "id": 160347,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                                "src": "5402:5:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_uint8_$",
                                                                                    "typeString": "type(uint8)"
                                                                                },
                                                                                "typeName": {
                                                                                    "id": 160346,
                                                                                    "name": "uint8",
                                                                                    "nodeType": "ElementaryTypeName",
                                                                                    "src": "5402:5:233",
                                                                                    "typeDescriptions": {}
                                                                                }
                                                                            },
                                                                            "id": 160354,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "5402:22:233",
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
                                                                        "id": 160345,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5374:6:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 160344,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5374:6:233",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 160355,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5374:68:233",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "5332:110:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 160357,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "5332:110:233"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 160360,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 160358,
                                                                    "name": "num",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 160265,
                                                                    "src": "5460:3:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "/=",
                                                                "rightHandSide": {
                                                                    "hexValue": "3130",
                                                                    "id": 160359,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "5467:2:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                        "typeString": "int_const 10"
                                                                    },
                                                                    "value": "10"
                                                                },
                                                                "src": "5460:9:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 160361,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "5460:9:233"
                                                        }
                                                    ]
                                                },
                                                "id": 160363,
                                                "nodeType": "IfStatement",
                                                "src": "5190:294:233",
                                                "trueBody": {
                                                    "id": 160336,
                                                    "nodeType": "Block",
                                                    "src": "5230:78:233",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 160334,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 160326,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 160277,
                                                                        "src": "5248:9:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 160332,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 160331,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 160329,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 160327,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 160273,
                                                                                "src": "5258:15:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 160328,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 160307,
                                                                                "src": "5276:6:233",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "5258:24:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 160330,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5285:1:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "5258:28:233",
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
                                                                    "src": "5248:39:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "hexValue": "2e",
                                                                    "id": 160333,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "5290:3:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                                                        "typeString": "literal_string \".\""
                                                                    },
                                                                    "value": "."
                                                                },
                                                                "src": "5248:45:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 160335,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "5248:45:233"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 160365,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "src": "5497:8:233",
                                                    "subExpression": {
                                                        "id": 160364,
                                                        "name": "digits",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 160307,
                                                        "src": "5497:6:233",
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
                                                "id": 160366,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5497:8:233"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 160318,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 160312,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 160310,
                                                "name": "num",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160265,
                                                "src": "5140:3:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 160311,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5147:1:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "5140:8:233",
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
                                            "id": 160317,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 160313,
                                                "name": "digits",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160307,
                                                "src": "5152:6:233",
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
                                                "id": 160316,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 160314,
                                                    "name": "decimals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160267,
                                                    "src": "5162:8:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 160315,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5173:1:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "5162:12:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5152:22:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5140:34:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 160368,
                                    "nodeType": "WhileStatement",
                                    "src": "5133:383:233"
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "5648:129:233",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "5662:62:233",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "rawResult",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5676:9:233"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "maxStringLength",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5695:15:233"
                                                                        },
                                                                        {
                                                                            "name": "digits",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5712:6:233"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "sub",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "5691:3:233"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "5691:28:233"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "5721:1:233",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5687:3:233"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5687:36:233"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5672:3:233"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5672:52:233"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "result",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5662:6:233"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "result",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5744:6:233"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "digits",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5756:6:233"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "5764:1:233",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5752:3:233"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5752:14:233"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5737:6:233"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5737:30:233"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "5737:30:233"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 160307,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5712:6:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160307,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5756:6:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160273,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5695:15:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160277,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5676:9:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160270,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5662:6:233",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 160270,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5744:6:233",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 160369,
                                    "nodeType": "InlineAssembly",
                                    "src": "5639:138:233"
                                },
                                {
                                    "expression": {
                                        "id": 160370,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 160270,
                                        "src": "5793:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 160271,
                                    "id": 160371,
                                    "nodeType": "Return",
                                    "src": "5786:13:233"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 160263,
                            "nodeType": "StructuredDocumentation",
                            "src": "3966:441:233",
                            "text": "@dev Converts an unsigned integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toString",
                        "nameLocation": "4421:8:233",
                        "parameters": {
                            "id": 160268,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160265,
                                    "mutability": "mutable",
                                    "name": "num",
                                    "nameLocation": "4447:3:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160373,
                                    "src": "4439:11:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160264,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4439:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160267,
                                    "mutability": "mutable",
                                    "name": "decimals",
                                    "nameLocation": "4468:8:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160373,
                                    "src": "4460:16:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160266,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4460:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4429:53:233"
                        },
                        "returnParameters": {
                            "id": 160271,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160270,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "4520:6:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160373,
                                    "src": "4506:20:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 160269,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4506:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4505:22:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 160442,
                        "nodeType": "FunctionDefinition",
                        "src": "5812:448:233",
                        "nodes": [],
                        "body": {
                            "id": 160441,
                            "nodeType": "Block",
                            "src": "5913:347:233",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 160384,
                                                "name": "prelude",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160375,
                                                "src": "5936:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "hexValue": "5b",
                                                "id": 160385,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5945:3:233",
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
                                                "id": 160381,
                                                "name": "console2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 56967,
                                                "src": "5923:8:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_console2_$56967_$",
                                                    "typeString": "type(library console2)"
                                                }
                                            },
                                            "id": 160383,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5932:3:233",
                                            "memberName": "log",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 49628,
                                            "src": "5923:12:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory) pure"
                                            }
                                        },
                                        "id": 160386,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5923:26:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 160387,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5923:26:233"
                                },
                                {
                                    "body": {
                                        "id": 160427,
                                        "nodeType": "Block",
                                        "src": "6002:195:233",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 160404,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 160399,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 160389,
                                                        "src": "6020:1:233",
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
                                                        "id": 160403,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 160400,
                                                                "name": "array",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 160378,
                                                                "src": "6024:5:233",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                    "typeString": "uint256[] memory"
                                                                }
                                                            },
                                                            "id": 160401,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "6030:6:233",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "6024:12:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "hexValue": "31",
                                                            "id": 160402,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6039:1:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                "typeString": "int_const 1"
                                                            },
                                                            "value": "1"
                                                        },
                                                        "src": "6024:16:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "6020:20:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 160425,
                                                    "nodeType": "Block",
                                                    "src": "6120:67:233",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "2020202020202020",
                                                                        "id": 160419,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6151:10:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                                                            "typeString": "literal_string \"        \""
                                                                        },
                                                                        "value": "        "
                                                                    },
                                                                    {
                                                                        "baseExpression": {
                                                                            "id": 160420,
                                                                            "name": "array",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 160378,
                                                                            "src": "6163:5:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                                "typeString": "uint256[] memory"
                                                                            }
                                                                        },
                                                                        "id": 160422,
                                                                        "indexExpression": {
                                                                            "id": 160421,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 160389,
                                                                            "src": "6169:1:233",
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
                                                                        "src": "6163:8:233",
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
                                                                        "id": 160416,
                                                                        "name": "console2",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 56967,
                                                                        "src": "6138:8:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_console2_$56967_$",
                                                                            "typeString": "type(library console2)"
                                                                        }
                                                                    },
                                                                    "id": 160418,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6147:3:233",
                                                                    "memberName": "log",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 49594,
                                                                    "src": "6138:12:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                                                                        "typeString": "function (string memory,uint256) pure"
                                                                    }
                                                                },
                                                                "id": 160423,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6138:34:233",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 160424,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6138:34:233"
                                                        }
                                                    ]
                                                },
                                                "id": 160426,
                                                "nodeType": "IfStatement",
                                                "src": "6016:171:233",
                                                "trueBody": {
                                                    "id": 160415,
                                                    "nodeType": "Block",
                                                    "src": "6042:72:233",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "2020202020202020",
                                                                        "id": 160408,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6073:10:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                                                            "typeString": "literal_string \"        \""
                                                                        },
                                                                        "value": "        "
                                                                    },
                                                                    {
                                                                        "baseExpression": {
                                                                            "id": 160409,
                                                                            "name": "array",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 160378,
                                                                            "src": "6085:5:233",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                                "typeString": "uint256[] memory"
                                                                            }
                                                                        },
                                                                        "id": 160411,
                                                                        "indexExpression": {
                                                                            "id": 160410,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 160389,
                                                                            "src": "6091:1:233",
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
                                                                        "src": "6085:8:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "hexValue": "2c",
                                                                        "id": 160412,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6095:3:233",
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
                                                                        "id": 160405,
                                                                        "name": "console2",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 56967,
                                                                        "src": "6060:8:233",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_console2_$56967_$",
                                                                            "typeString": "type(library console2)"
                                                                        }
                                                                    },
                                                                    "id": 160407,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6069:3:233",
                                                                    "memberName": "log",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 50158,
                                                                    "src": "6060:12:233",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                                                                        "typeString": "function (string memory,uint256,string memory) pure"
                                                                    }
                                                                },
                                                                "id": 160413,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6060:39:233",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 160414,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6060:39:233"
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
                                        "id": 160395,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160392,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160389,
                                            "src": "5979:1:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 160393,
                                                "name": "array",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160378,
                                                "src": "5983:5:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            "id": 160394,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5989:6:233",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "5983:12:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5979:16:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 160428,
                                    "initializationExpression": {
                                        "assignments": [
                                            160389
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 160389,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "5972:1:233",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 160428,
                                                "src": "5964:9:233",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 160388,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5964:7:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 160391,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 160390,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5976:1:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "5964:13:233"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 160397,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "5997:3:233",
                                            "subExpression": {
                                                "id": 160396,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160389,
                                                "src": "5997:1:233",
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
                                        "id": 160398,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5997:3:233"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "5959:238:233"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "202020205d",
                                                "id": 160432,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6219:7:233",
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
                                                "id": 160429,
                                                "name": "console2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 56967,
                                                "src": "6206:8:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_console2_$56967_$",
                                                    "typeString": "type(library console2)"
                                                }
                                            },
                                            "id": 160431,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6215:3:233",
                                            "memberName": "log",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 49481,
                                            "src": "6206:12:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory) pure"
                                            }
                                        },
                                        "id": 160433,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6206:21:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 160434,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6206:21:233"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "",
                                                "id": 160438,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6250:2:233",
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
                                                "id": 160435,
                                                "name": "console2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 56967,
                                                "src": "6237:8:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_console2_$56967_$",
                                                    "typeString": "type(library console2)"
                                                }
                                            },
                                            "id": 160437,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6246:3:233",
                                            "memberName": "log",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 49481,
                                            "src": "6237:12:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory) pure"
                                            }
                                        },
                                        "id": 160439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6237:16:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 160440,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6237:16:233"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "logArray",
                        "nameLocation": "5821:8:233",
                        "parameters": {
                            "id": 160379,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160375,
                                    "mutability": "mutable",
                                    "name": "prelude",
                                    "nameLocation": "5853:7:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160442,
                                    "src": "5839:21:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 160374,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5839:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160378,
                                    "mutability": "mutable",
                                    "name": "array",
                                    "nameLocation": "5887:5:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160442,
                                    "src": "5870:22:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 160376,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5870:7:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 160377,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5870:9:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5829:69:233"
                        },
                        "returnParameters": {
                            "id": 160380,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5913:0:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 160479,
                        "nodeType": "FunctionDefinition",
                        "src": "6266:333:233",
                        "nodes": [],
                        "body": {
                            "id": 160478,
                            "nodeType": "Block",
                            "src": "6403:196:233",
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
                                                "id": 160456,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 160454,
                                                    "name": "minimum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160446,
                                                    "src": "6421:7:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 160455,
                                                    "name": "maximum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160448,
                                                    "src": "6432:7:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6421:18:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4c69623a206d696e203e206d6178",
                                                "id": 160457,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6441:16:233",
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
                                            "id": 160453,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "6413:7:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 160458,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6413:45:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 160459,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6413:45:233"
                                },
                                {
                                    "assignments": [
                                        160461
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160461,
                                            "mutability": "mutable",
                                            "name": "rangeSize",
                                            "nameLocation": "6477:9:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160478,
                                            "src": "6469:17:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 160460,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6469:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160467,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 160466,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 160464,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 160462,
                                                "name": "maximum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160448,
                                                "src": "6489:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 160463,
                                                "name": "minimum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160446,
                                                "src": "6499:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "6489:17:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 160465,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6509:1:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "6489:21:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6469:41:233"
                                },
                                {
                                    "assignments": [
                                        160469
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160469,
                                            "mutability": "mutable",
                                            "name": "modValue",
                                            "nameLocation": "6528:8:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160478,
                                            "src": "6520:16:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 160468,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6520:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160473,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 160472,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160470,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160444,
                                            "src": "6539:5:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "%",
                                        "rightExpression": {
                                            "id": 160471,
                                            "name": "rangeSize",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160461,
                                            "src": "6547:9:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6539:17:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6520:36:233"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 160476,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160474,
                                            "name": "modValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160469,
                                            "src": "6574:8:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "id": 160475,
                                            "name": "minimum",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160446,
                                            "src": "6585:7:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6574:18:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 160452,
                                    "id": 160477,
                                    "nodeType": "Return",
                                    "src": "6567:25:233"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "normalizeToRange",
                        "nameLocation": "6275:16:233",
                        "parameters": {
                            "id": 160449,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160444,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "6309:5:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160479,
                                    "src": "6301:13:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160443,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6301:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160446,
                                    "mutability": "mutable",
                                    "name": "minimum",
                                    "nameLocation": "6332:7:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160479,
                                    "src": "6324:15:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160445,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6324:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160448,
                                    "mutability": "mutable",
                                    "name": "maximum",
                                    "nameLocation": "6357:7:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160479,
                                    "src": "6349:15:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160447,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6349:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6291:79:233"
                        },
                        "returnParameters": {
                            "id": 160452,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160451,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160479,
                                    "src": "6394:7:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160450,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6394:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6393:9:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 160525,
                        "nodeType": "FunctionDefinition",
                        "src": "6605:401:233",
                        "nodes": [],
                        "body": {
                            "id": 160524,
                            "nodeType": "Block",
                            "src": "6738:268:233",
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
                                                "id": 160493,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 160491,
                                                    "name": "minimum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160483,
                                                    "src": "6756:7:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 160492,
                                                    "name": "maximum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 160485,
                                                    "src": "6767:7:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "6756:18:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4c69623a206d696e203e206d6178",
                                                "id": 160494,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6776:16:233",
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
                                            "id": 160490,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "6748:7:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 160495,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6748:45:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 160496,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6748:45:233"
                                },
                                {
                                    "assignments": [
                                        160498
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160498,
                                            "mutability": "mutable",
                                            "name": "rangeSize",
                                            "nameLocation": "6811:9:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160524,
                                            "src": "6804:16:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 160497,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6804:6:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160504,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 160503,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 160501,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 160499,
                                                "name": "maximum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160485,
                                                "src": "6823:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 160500,
                                                "name": "minimum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160483,
                                                "src": "6833:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "src": "6823:17:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 160502,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6843:1:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "6823:21:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6804:40:233"
                                },
                                {
                                    "assignments": [
                                        160506
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160506,
                                            "mutability": "mutable",
                                            "name": "modValue",
                                            "nameLocation": "6861:8:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160524,
                                            "src": "6854:15:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 160505,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6854:6:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160510,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 160509,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160507,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160481,
                                            "src": "6872:5:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "%",
                                        "rightExpression": {
                                            "id": 160508,
                                            "name": "rangeSize",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160498,
                                            "src": "6880:9:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "6872:17:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6854:35:233"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 160513,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160511,
                                            "name": "modValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160506,
                                            "src": "6904:8:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 160512,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6915:1:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "6904:12:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 160519,
                                    "nodeType": "IfStatement",
                                    "src": "6900:64:233",
                                    "trueBody": {
                                        "id": 160518,
                                        "nodeType": "Block",
                                        "src": "6918:46:233",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 160516,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 160514,
                                                        "name": "modValue",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 160506,
                                                        "src": "6932:8:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 160515,
                                                        "name": "rangeSize",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 160498,
                                                        "src": "6944:9:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "src": "6932:21:233",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "id": 160517,
                                                "nodeType": "ExpressionStatement",
                                                "src": "6932:21:233"
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
                                        "id": 160522,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160520,
                                            "name": "modValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160506,
                                            "src": "6981:8:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "id": 160521,
                                            "name": "minimum",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160483,
                                            "src": "6992:7:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "6981:18:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 160489,
                                    "id": 160523,
                                    "nodeType": "Return",
                                    "src": "6974:25:233"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "normalizeToRange",
                        "nameLocation": "6614:16:233",
                        "parameters": {
                            "id": 160486,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160481,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "6647:5:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160525,
                                    "src": "6640:12:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 160480,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6640:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160483,
                                    "mutability": "mutable",
                                    "name": "minimum",
                                    "nameLocation": "6669:7:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160525,
                                    "src": "6662:14:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 160482,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6662:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160485,
                                    "mutability": "mutable",
                                    "name": "maximum",
                                    "nameLocation": "6693:7:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160525,
                                    "src": "6686:14:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 160484,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6686:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6630:76:233"
                        },
                        "returnParameters": {
                            "id": 160489,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160488,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160525,
                                    "src": "6730:6:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 160487,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6730:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6729:8:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 160549,
                        "nodeType": "FunctionDefinition",
                        "src": "7012:205:233",
                        "nodes": [],
                        "body": {
                            "id": 160548,
                            "nodeType": "Block",
                            "src": "7130:87:233",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        160537
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160537,
                                            "mutability": "mutable",
                                            "name": "delta",
                                            "nameLocation": "7148:5:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160548,
                                            "src": "7140:13:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 160536,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7140:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160543,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 160540,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160527,
                                                "src": "7170:1:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 160541,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160529,
                                                "src": "7173:1:233",
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
                                                "id": 160538,
                                                "name": "stdMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35646,
                                                "src": "7156:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_stdMath_$35646_$",
                                                    "typeString": "type(library stdMath)"
                                                }
                                            },
                                            "id": 160539,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7164:5:233",
                                            "memberName": "delta",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 35557,
                                            "src": "7156:13:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 160542,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7156:19:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7140:35:233"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 160546,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160544,
                                            "name": "delta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160537,
                                            "src": "7192:5:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "id": 160545,
                                            "name": "tolerance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160531,
                                            "src": "7201:9:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7192:18:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 160535,
                                    "id": 160547,
                                    "nodeType": "Return",
                                    "src": "7185:25:233"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approxEq",
                        "nameLocation": "7021:8:233",
                        "parameters": {
                            "id": 160532,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160527,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "7047:1:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160549,
                                    "src": "7039:9:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160526,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7039:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160529,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "7066:1:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160549,
                                    "src": "7058:9:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160528,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7058:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160531,
                                    "mutability": "mutable",
                                    "name": "tolerance",
                                    "nameLocation": "7085:9:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160549,
                                    "src": "7077:17:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160530,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7077:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7029:71:233"
                        },
                        "returnParameters": {
                            "id": 160535,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160534,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160549,
                                    "src": "7124:4:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 160533,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7124:4:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7123:6:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 160573,
                        "nodeType": "FunctionDefinition",
                        "src": "7223:203:233",
                        "nodes": [],
                        "body": {
                            "id": 160572,
                            "nodeType": "Block",
                            "src": "7339:87:233",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        160561
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 160561,
                                            "mutability": "mutable",
                                            "name": "delta",
                                            "nameLocation": "7357:5:233",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 160572,
                                            "src": "7349:13:233",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 160560,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7349:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 160567,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 160564,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160551,
                                                "src": "7379:1:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "id": 160565,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 160553,
                                                "src": "7382:1:233",
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
                                                "id": 160562,
                                                "name": "stdMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35646,
                                                "src": "7365:7:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_stdMath_$35646_$",
                                                    "typeString": "type(library stdMath)"
                                                }
                                            },
                                            "id": 160563,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7373:5:233",
                                            "memberName": "delta",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 35593,
                                            "src": "7365:13:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                                                "typeString": "function (int256,int256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 160566,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7365:19:233",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7349:35:233"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 160570,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 160568,
                                            "name": "delta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160561,
                                            "src": "7401:5:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "id": 160569,
                                            "name": "tolerance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 160555,
                                            "src": "7410:9:233",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7401:18:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 160559,
                                    "id": 160571,
                                    "nodeType": "Return",
                                    "src": "7394:25:233"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approxEq",
                        "nameLocation": "7232:8:233",
                        "parameters": {
                            "id": 160556,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160551,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "7257:1:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160573,
                                    "src": "7250:8:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 160550,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7250:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160553,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "7275:1:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160573,
                                    "src": "7268:8:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 160552,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7268:6:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160555,
                                    "mutability": "mutable",
                                    "name": "tolerance",
                                    "nameLocation": "7294:9:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160573,
                                    "src": "7286:17:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 160554,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7286:7:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7240:69:233"
                        },
                        "returnParameters": {
                            "id": 160559,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160558,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160573,
                                    "src": "7333:4:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 160557,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7333:4:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7332:6:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 160597,
                        "nodeType": "FunctionDefinition",
                        "src": "7432:175:233",
                        "nodes": [],
                        "body": {
                            "id": 160596,
                            "nodeType": "Block",
                            "src": "7505:102:233",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        },
                                        "id": 160594,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 160585,
                                                            "name": "b1",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160575,
                                                            "src": "7561:2:233",
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
                                                            "id": 160583,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7544:3:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 160584,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7548:12:233",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7544:16:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 160586,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7544:20:233",
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
                                                "id": 160582,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7534:9:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 160587,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7534:31:233",
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
                                                            "id": 160591,
                                                            "name": "b2",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160577,
                                                            "src": "7596:2:233",
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
                                                            "id": 160589,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7579:3:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 160590,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7583:12:233",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7579:16:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 160592,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7579:20:233",
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
                                                "id": 160588,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7569:9:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 160593,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7569:31:233",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "7534:66:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 160581,
                                    "id": 160595,
                                    "nodeType": "Return",
                                    "src": "7515:85:233"
                                }
                            ]
                        },
                        "functionSelector": "cdb16840",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "eq",
                        "nameLocation": "7441:2:233",
                        "parameters": {
                            "id": 160578,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160575,
                                    "mutability": "mutable",
                                    "name": "b1",
                                    "nameLocation": "7457:2:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160597,
                                    "src": "7444:15:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 160574,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7444:5:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160577,
                                    "mutability": "mutable",
                                    "name": "b2",
                                    "nameLocation": "7474:2:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160597,
                                    "src": "7461:15:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 160576,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7461:5:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7443:34:233"
                        },
                        "returnParameters": {
                            "id": 160581,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160580,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160597,
                                    "src": "7499:4:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 160579,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7499:4:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7498:6:233"
                        },
                        "scope": 160622,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 160621,
                        "nodeType": "FunctionDefinition",
                        "src": "7613:176:233",
                        "nodes": [],
                        "body": {
                            "id": 160620,
                            "nodeType": "Block",
                            "src": "7687:102:233",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        },
                                        "id": 160618,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 160609,
                                                            "name": "b1",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160599,
                                                            "src": "7743:2:233",
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
                                                            "id": 160607,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7726:3:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 160608,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7730:12:233",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7726:16:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 160610,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7726:20:233",
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
                                                "id": 160606,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7716:9:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 160611,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7716:31:233",
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
                                                            "id": 160615,
                                                            "name": "b2",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 160601,
                                                            "src": "7778:2:233",
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
                                                            "id": 160613,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7761:3:233",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 160614,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7765:12:233",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7761:16:233",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 160616,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7761:20:233",
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
                                                "id": 160612,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7751:9:233",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 160617,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7751:31:233",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "7716:66:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 160605,
                                    "id": 160619,
                                    "nodeType": "Return",
                                    "src": "7697:85:233"
                                }
                            ]
                        },
                        "functionSelector": "d37a20ba",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "neq",
                        "nameLocation": "7622:3:233",
                        "parameters": {
                            "id": 160602,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160599,
                                    "mutability": "mutable",
                                    "name": "b1",
                                    "nameLocation": "7639:2:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160621,
                                    "src": "7626:15:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 160598,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7626:5:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 160601,
                                    "mutability": "mutable",
                                    "name": "b2",
                                    "nameLocation": "7656:2:233",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160621,
                                    "src": "7643:15:233",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 160600,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7643:5:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7625:34:233"
                        },
                        "returnParameters": {
                            "id": 160605,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 160604,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 160621,
                                    "src": "7681:4:233",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 160603,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7681:4:233",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7680:6:233"
                        },
                        "scope": 160622,
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
                    160622
                ],
                "name": "Lib",
                "nameLocation": "220:3:233",
                "scope": 160623,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 233
};
