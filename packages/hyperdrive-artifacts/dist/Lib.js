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
        "sourceMap": "212:7579:234:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;212:7579:234;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220d333ef02d5eecddba074fc17f5144964088c0d18c8f6c7c51de77771642d720b64736f6c63430008140033",
        "sourceMap": "212:7579:234:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7432:175;;;;;;:::i;:::-;;:::i;:::-;;;1586:14:235;;1579:22;1561:41;;1549:2;1534:18;7432:175:234;;;;;;;7613:176;;;;;;:::i;:::-;;:::i;7432:175::-;7499:4;7596:2;7579:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7569:31;;;;;;7561:2;7544:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7534:31;;;;;;:66;7515:85;;7432:175;;;;:::o;7613:176::-;7681:4;7778:2;7761:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7751:31;;;;;;7743:2;7726:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7716:31;;;;;;:66;;7697:85;;7613:176;;;;:::o;14:127:235:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:718;188:5;241:3;234:4;226:6;222:17;218:27;208:55;;259:1;256;249:12;208:55;295:6;282:20;321:18;358:2;354;351:10;348:36;;;364:18;;:::i;:::-;439:2;433:9;407:2;493:13;;-1:-1:-1;;489:22:235;;;513:2;485:31;481:40;469:53;;;537:18;;;557:22;;;534:46;531:72;;;583:18;;:::i;:::-;623:10;619:2;612:22;658:2;650:6;643:18;704:3;697:4;692:2;684:6;680:15;676:26;673:35;670:55;;;721:1;718;711:12;670:55;785:2;778:4;770:6;766:17;759:4;751:6;747:17;734:54;832:1;825:4;820:2;812:6;808:15;804:26;797:37;852:6;843:15;;;;;;146:718;;;;:::o;869:539::-;955:6;963;1016:2;1004:9;995:7;991:23;987:32;984:52;;;1032:1;1029;1022:12;984:52;1072:9;1059:23;1101:18;1142:2;1134:6;1131:14;1128:34;;;1158:1;1155;1148:12;1128:34;1181:49;1222:7;1213:6;1202:9;1198:22;1181:49;:::i;:::-;1171:59;;1283:2;1272:9;1268:18;1255:32;1239:48;;1312:2;1302:8;1299:16;1296:36;;;1328:1;1325;1318:12;1296:36;;1351:51;1394:7;1383:8;1372:9;1368:24;1351:51;:::i;:::-;1341:61;;;869:539;;;;;:::o;1613:412::-;1742:3;1780:6;1774:13;1805:1;1815:129;1829:6;1826:1;1823:13;1815:129;;;1927:4;1911:14;;;1907:25;;1901:32;1888:11;;;1881:53;1844:12;1815:129;;;-1:-1:-1;1999:1:235;1963:16;;1988:13;;;-1:-1:-1;1963:16:235;1613:412;-1:-1:-1;1613:412:235:o",
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
        "id": 161928,
        "exportedSymbols": {
            "Lib": [
                161927
            ],
            "Vm": [
                41134
            ],
            "VmSafe": [
                40662
            ],
            "console2": [
                57323
            ],
            "stdMath": [
                36002
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:7753:234",
        "nodes": [
            {
                "id": 161327,
                "nodeType": "PragmaDirective",
                "src": "39:23:234",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 161329,
                "nodeType": "ImportDirective",
                "src": "64:50:234",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/console2.sol",
                "file": "forge-std/console2.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 161928,
                "sourceUnit": 57324,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 161328,
                            "name": "console2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57323,
                            "src": "73:8:234",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 161331,
                "nodeType": "ImportDirective",
                "src": "115:48:234",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/StdMath.sol",
                "file": "forge-std/StdMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 161928,
                "sourceUnit": 36003,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 161330,
                            "name": "stdMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36002,
                            "src": "124:7:234",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 161334,
                "nodeType": "ImportDirective",
                "src": "164:46:234",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "forge-std/Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 161928,
                "sourceUnit": 41135,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 161332,
                            "name": "Vm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41134,
                            "src": "173:2:234",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 161333,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40662,
                            "src": "177:6:234",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 161927,
                "nodeType": "ContractDefinition",
                "src": "212:7579:234",
                "nodes": [
                    {
                        "id": 161398,
                        "nodeType": "FunctionDefinition",
                        "src": "485:579:234",
                        "nodes": [],
                        "body": {
                            "id": 161397,
                            "nodeType": "Block",
                            "src": "628:436:234",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        161349
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161349,
                                            "mutability": "mutable",
                                            "name": "current",
                                            "nameLocation": "674:7:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161397,
                                            "src": "666:15:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 161348,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "666:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161351,
                                    "initialValue": {
                                        "hexValue": "30",
                                        "id": 161350,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "684:1:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "666:19:234"
                                },
                                {
                                    "expression": {
                                        "id": 161360,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 161352,
                                            "name": "filteredLogs",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161346,
                                            "src": "695:12:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct VmSafe.Log memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 161357,
                                                        "name": "logs",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 161339,
                                                        "src": "727:4:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                                            "typeString": "struct VmSafe.Log memory[] memory"
                                                        }
                                                    },
                                                    "id": 161358,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "732:6:234",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "727:11:234",
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
                                                "id": 161356,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "NewExpression",
                                                "src": "710:16:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr_$",
                                                    "typeString": "function (uint256) pure returns (struct VmSafe.Log memory[] memory)"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 161354,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 161353,
                                                            "name": "VmSafe.Log",
                                                            "nameLocations": [
                                                                "714:6:234",
                                                                "721:3:234"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 39614,
                                                            "src": "714:10:234"
                                                        },
                                                        "referencedDeclaration": 39614,
                                                        "src": "714:10:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Log_$39614_storage_ptr",
                                                            "typeString": "struct VmSafe.Log"
                                                        }
                                                    },
                                                    "id": 161355,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "714:12:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_struct$_Log_$39614_storage_$dyn_storage_ptr",
                                                        "typeString": "struct VmSafe.Log[]"
                                                    }
                                                }
                                            },
                                            "id": 161359,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "710:29:234",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct VmSafe.Log memory[] memory"
                                            }
                                        },
                                        "src": "695:44:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct VmSafe.Log memory[] memory"
                                        }
                                    },
                                    "id": 161361,
                                    "nodeType": "ExpressionStatement",
                                    "src": "695:44:234"
                                },
                                {
                                    "body": {
                                        "id": 161392,
                                        "nodeType": "Block",
                                        "src": "791:125:234",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 161380,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "baseExpression": {
                                                            "expression": {
                                                                "baseExpression": {
                                                                    "id": 161373,
                                                                    "name": "logs",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 161339,
                                                                    "src": "809:4:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                                                        "typeString": "struct VmSafe.Log memory[] memory"
                                                                    }
                                                                },
                                                                "id": 161375,
                                                                "indexExpression": {
                                                                    "id": 161374,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 161363,
                                                                    "src": "814:1:234",
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
                                                                "src": "809:7:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Log_$39614_memory_ptr",
                                                                    "typeString": "struct VmSafe.Log memory"
                                                                }
                                                            },
                                                            "id": 161376,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "817:6:234",
                                                            "memberName": "topics",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 39609,
                                                            "src": "809:14:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                                                "typeString": "bytes32[] memory"
                                                            }
                                                        },
                                                        "id": 161378,
                                                        "indexExpression": {
                                                            "hexValue": "30",
                                                            "id": 161377,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "824:1:234",
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
                                                        "src": "809:17:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "id": 161379,
                                                        "name": "selector",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 161341,
                                                        "src": "830:8:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "809:29:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 161391,
                                                "nodeType": "IfStatement",
                                                "src": "805:101:234",
                                                "trueBody": {
                                                    "id": 161390,
                                                    "nodeType": "Block",
                                                    "src": "840:66:234",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 161388,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 161381,
                                                                        "name": "filteredLogs",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 161346,
                                                                        "src": "858:12:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                                                            "typeString": "struct VmSafe.Log memory[] memory"
                                                                        }
                                                                    },
                                                                    "id": 161384,
                                                                    "indexExpression": {
                                                                        "id": 161383,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "UnaryOperation",
                                                                        "operator": "++",
                                                                        "prefix": false,
                                                                        "src": "871:9:234",
                                                                        "subExpression": {
                                                                            "id": 161382,
                                                                            "name": "current",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 161349,
                                                                            "src": "871:7:234",
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
                                                                    "src": "858:23:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Log_$39614_memory_ptr",
                                                                        "typeString": "struct VmSafe.Log memory"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 161385,
                                                                        "name": "logs",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 161339,
                                                                        "src": "884:4:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                                                            "typeString": "struct VmSafe.Log memory[] memory"
                                                                        }
                                                                    },
                                                                    "id": 161387,
                                                                    "indexExpression": {
                                                                        "id": 161386,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 161363,
                                                                        "src": "889:1:234",
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
                                                                    "src": "884:7:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Log_$39614_memory_ptr",
                                                                        "typeString": "struct VmSafe.Log memory"
                                                                    }
                                                                },
                                                                "src": "858:33:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Log_$39614_memory_ptr",
                                                                    "typeString": "struct VmSafe.Log memory"
                                                                }
                                                            },
                                                            "id": 161389,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "858:33:234"
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
                                        "id": 161369,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161366,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161363,
                                            "src": "769:1:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 161367,
                                                "name": "logs",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161339,
                                                "src": "773:4:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                                    "typeString": "struct VmSafe.Log memory[] memory"
                                                }
                                            },
                                            "id": 161368,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "778:6:234",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "773:11:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "769:15:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 161393,
                                    "initializationExpression": {
                                        "assignments": [
                                            161363
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 161363,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "762:1:234",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 161393,
                                                "src": "754:9:234",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 161362,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "754:7:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 161365,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 161364,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "766:1:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "754:13:234"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 161371,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "786:3:234",
                                            "subExpression": {
                                                "id": 161370,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161363,
                                                "src": "786:1:234",
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
                                        "id": 161372,
                                        "nodeType": "ExpressionStatement",
                                        "src": "786:3:234"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "749:167:234"
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "976:53:234",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "filteredLogs",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "997:12:234"
                                                        },
                                                        {
                                                            "name": "current",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1011:7:234"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "990:6:234"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "990:29:234"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "990:29:234"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 161349,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "1011:7:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161346,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "997:12:234",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 161394,
                                    "nodeType": "InlineAssembly",
                                    "src": "967:62:234"
                                },
                                {
                                    "expression": {
                                        "id": 161395,
                                        "name": "filteredLogs",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 161346,
                                        "src": "1045:12:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct VmSafe.Log memory[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 161347,
                                    "id": 161396,
                                    "nodeType": "Return",
                                    "src": "1038:19:234"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 161335,
                            "nodeType": "StructuredDocumentation",
                            "src": "230:250:234",
                            "text": "@dev Filters an array of longs for events that match the provided\n      selector.\n @param logs The array of logs to filter.\n @param selector The selector to filter for.\n @return filteredLogs The filtered array of logs."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "filterLogs",
                        "nameLocation": "494:10:234",
                        "parameters": {
                            "id": 161342,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161339,
                                    "mutability": "mutable",
                                    "name": "logs",
                                    "nameLocation": "534:4:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161398,
                                    "src": "514:24:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct VmSafe.Log[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 161337,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 161336,
                                                "name": "VmSafe.Log",
                                                "nameLocations": [
                                                    "514:6:234",
                                                    "521:3:234"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 39614,
                                                "src": "514:10:234"
                                            },
                                            "referencedDeclaration": 39614,
                                            "src": "514:10:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Log_$39614_storage_ptr",
                                                "typeString": "struct VmSafe.Log"
                                            }
                                        },
                                        "id": 161338,
                                        "nodeType": "ArrayTypeName",
                                        "src": "514:12:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$39614_storage_$dyn_storage_ptr",
                                            "typeString": "struct VmSafe.Log[]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161341,
                                    "mutability": "mutable",
                                    "name": "selector",
                                    "nameLocation": "556:8:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161398,
                                    "src": "548:16:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 161340,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "548:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "504:66:234"
                        },
                        "returnParameters": {
                            "id": 161347,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161346,
                                    "mutability": "mutable",
                                    "name": "filteredLogs",
                                    "nameLocation": "614:12:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161398,
                                    "src": "594:32:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_Log_$39614_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct VmSafe.Log[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 161344,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 161343,
                                                "name": "VmSafe.Log",
                                                "nameLocations": [
                                                    "594:6:234",
                                                    "601:3:234"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 39614,
                                                "src": "594:10:234"
                                            },
                                            "referencedDeclaration": 39614,
                                            "src": "594:10:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Log_$39614_storage_ptr",
                                                "typeString": "struct VmSafe.Log"
                                            }
                                        },
                                        "id": 161345,
                                        "nodeType": "ArrayTypeName",
                                        "src": "594:12:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Log_$39614_storage_$dyn_storage_ptr",
                                            "typeString": "struct VmSafe.Log[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "593:34:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 161418,
                        "nodeType": "FunctionDefinition",
                        "src": "1283:192:234",
                        "nodes": [],
                        "body": {
                            "id": 161417,
                            "nodeType": "Block",
                            "src": "1373:102:234",
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
                                                                "id": 161411,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "1442:15:234",
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
                                                            "id": 161410,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "1432:9:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 161412,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1432:26:234",
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
                                                    "id": 161409,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1425:6:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_bytes4_$",
                                                        "typeString": "type(bytes4)"
                                                    },
                                                    "typeName": {
                                                        "id": 161408,
                                                        "name": "bytes4",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1425:6:234",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 161413,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1425:34:234",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes4",
                                                    "typeString": "bytes4"
                                                }
                                            },
                                            {
                                                "id": 161414,
                                                "name": "reason",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161401,
                                                "src": "1461:6:234",
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
                                                "id": 161406,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "1402:3:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_abi",
                                                    "typeString": "abi"
                                                }
                                            },
                                            "id": 161407,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "1406:18:234",
                                            "memberName": "encodeWithSelector",
                                            "nodeType": "MemberAccess",
                                            "src": "1402:22:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes4) pure returns (bytes memory)"
                                            }
                                        },
                                        "id": 161415,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1402:66:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "functionReturnParameters": 161405,
                                    "id": 161416,
                                    "nodeType": "Return",
                                    "src": "1383:85:234"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 161399,
                            "nodeType": "StructuredDocumentation",
                            "src": "1070:208:234",
                            "text": "@dev Encodes a reason into a string error. This is useful for verifying\n      string errors in low-level calls.\n @param reason The reason to encode.\n @return The encoded string error."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toError",
                        "nameLocation": "1292:7:234",
                        "parameters": {
                            "id": 161402,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161401,
                                    "mutability": "mutable",
                                    "name": "reason",
                                    "nameLocation": "1323:6:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161418,
                                    "src": "1309:20:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 161400,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1309:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1299:36:234"
                        },
                        "returnParameters": {
                            "id": 161405,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161404,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161418,
                                    "src": "1359:12:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 161403,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1359:5:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1358:14:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 161567,
                        "nodeType": "FunctionDefinition",
                        "src": "1924:2036:234",
                        "nodes": [],
                        "body": {
                            "id": 161566,
                            "nodeType": "Block",
                            "src": "2039:1921:234",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        161429
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161429,
                                            "mutability": "mutable",
                                            "name": "maxStringLength",
                                            "nameLocation": "2329:15:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161566,
                                            "src": "2321:23:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 161428,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2321:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161431,
                                    "initialValue": {
                                        "hexValue": "3739",
                                        "id": 161430,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2347:2:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_79_by_1",
                                            "typeString": "int_const 79"
                                        },
                                        "value": "79"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2321:28:234"
                                },
                                {
                                    "assignments": [
                                        161433
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161433,
                                            "mutability": "mutable",
                                            "name": "rawResult",
                                            "nameLocation": "2372:9:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161566,
                                            "src": "2359:22:234",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 161432,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2359:5:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161438,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 161436,
                                                "name": "maxStringLength",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161429,
                                                "src": "2394:15:234",
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
                                            "id": 161435,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "2384:9:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 161434,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2388:5:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 161437,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2384:26:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2359:51:234"
                                },
                                {
                                    "assignments": [
                                        161440
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161440,
                                            "mutability": "mutable",
                                            "name": "isNegative",
                                            "nameLocation": "2688:10:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161566,
                                            "src": "2683:15:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 161439,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2683:4:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161444,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 161443,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161441,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161421,
                                            "src": "2701:3:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 161442,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2707:1:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "2701:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2683:25:234"
                                },
                                {
                                    "expression": {
                                        "id": 161453,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 161445,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161421,
                                            "src": "2718:3:234",
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
                                                "id": 161448,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 161446,
                                                    "name": "num",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161421,
                                                    "src": "2724:3:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 161447,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2730:1:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "2724:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "id": 161451,
                                                "name": "num",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161421,
                                                "src": "2741:3:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 161452,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "2724:20:234",
                                            "trueExpression": {
                                                "id": 161450,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "-",
                                                "prefix": true,
                                                "src": "2734:4:234",
                                                "subExpression": {
                                                    "id": 161449,
                                                    "name": "num",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161421,
                                                    "src": "2735:3:234",
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
                                        "src": "2718:26:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 161454,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2718:26:234"
                                },
                                {
                                    "expression": {
                                        "id": 161475,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 161455,
                                                "name": "rawResult",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161433,
                                                "src": "2909:9:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 161459,
                                            "indexExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 161458,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 161456,
                                                    "name": "maxStringLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161429,
                                                    "src": "2919:15:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 161457,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2937:1:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "2919:19:234",
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
                                            "src": "2909:30:234",
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
                                                                    "id": 161471,
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
                                                                                "id": 161468,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "leftExpression": {
                                                                                    "id": 161466,
                                                                                    "name": "num",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 161421,
                                                                                    "src": "2977:3:234",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_int256",
                                                                                        "typeString": "int256"
                                                                                    }
                                                                                },
                                                                                "nodeType": "BinaryOperation",
                                                                                "operator": "%",
                                                                                "rightExpression": {
                                                                                    "hexValue": "3130",
                                                                                    "id": 161467,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "kind": "number",
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "Literal",
                                                                                    "src": "2983:2:234",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                                        "typeString": "int_const 10"
                                                                                    },
                                                                                    "value": "10"
                                                                                },
                                                                                "src": "2977:8:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_int256",
                                                                                    "typeString": "int256"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "id": 161469,
                                                                        "isConstant": false,
                                                                        "isInlineArray": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "TupleExpression",
                                                                        "src": "2976:10:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_int256",
                                                                            "typeString": "int256"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "+",
                                                                    "rightExpression": {
                                                                        "hexValue": "3438",
                                                                        "id": 161470,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "2989:2:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_48_by_1",
                                                                            "typeString": "int_const 48"
                                                                        },
                                                                        "value": "48"
                                                                    },
                                                                    "src": "2976:15:234",
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
                                                                "id": 161465,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "2968:7:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 161464,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "2968:7:234",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 161472,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2968:24:234",
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
                                                        "id": 161463,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2962:5:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint8_$",
                                                            "typeString": "type(uint8)"
                                                        },
                                                        "typeName": {
                                                            "id": 161462,
                                                            "name": "uint8",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2962:5:234",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 161473,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2962:31:234",
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
                                                "id": 161461,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2942:6:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                                    "typeString": "type(bytes1)"
                                                },
                                                "typeName": {
                                                    "id": 161460,
                                                    "name": "bytes1",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2942:6:234",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 161474,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2942:61:234",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            }
                                        },
                                        "src": "2909:94:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes1",
                                            "typeString": "bytes1"
                                        }
                                    },
                                    "id": 161476,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2909:94:234"
                                },
                                {
                                    "expression": {
                                        "id": 161479,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 161477,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161421,
                                            "src": "3013:3:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "/=",
                                        "rightHandSide": {
                                            "hexValue": "3130",
                                            "id": 161478,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3020:2:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_10_by_1",
                                                "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                        },
                                        "src": "3013:9:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 161480,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3013:9:234"
                                },
                                {
                                    "assignments": [
                                        161482
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161482,
                                            "mutability": "mutable",
                                            "name": "digits",
                                            "nameLocation": "3040:6:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161566,
                                            "src": "3032:14:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 161481,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3032:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161484,
                                    "initialValue": {
                                        "hexValue": "31",
                                        "id": 161483,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3049:1:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_1_by_1",
                                            "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3032:18:234"
                                },
                                {
                                    "body": {
                                        "id": 161545,
                                        "nodeType": "Block",
                                        "src": "3103:349:234",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 161500,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 161496,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 161494,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161423,
                                                            "src": "3121:8:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 161495,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3132:1:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "3121:12:234",
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
                                                        "id": 161499,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 161497,
                                                            "name": "digits",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161482,
                                                            "src": "3137:6:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "id": 161498,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161423,
                                                            "src": "3147:8:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3137:18:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "3121:34:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 161540,
                                                    "nodeType": "Block",
                                                    "src": "3241:179:234",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 161534,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 161512,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 161433,
                                                                        "src": "3259:9:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 161518,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 161517,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 161515,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 161513,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 161429,
                                                                                "src": "3269:15:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 161514,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 161482,
                                                                                "src": "3287:6:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "3269:24:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 161516,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3296:1:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "3269:28:234",
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
                                                                    "src": "3259:39:234",
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
                                                                                            "id": 161530,
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
                                                                                                        "id": 161527,
                                                                                                        "isConstant": false,
                                                                                                        "isLValue": false,
                                                                                                        "isPure": false,
                                                                                                        "lValueRequested": false,
                                                                                                        "leftExpression": {
                                                                                                            "id": 161525,
                                                                                                            "name": "num",
                                                                                                            "nodeType": "Identifier",
                                                                                                            "overloadedDeclarations": [],
                                                                                                            "referencedDeclaration": 161421,
                                                                                                            "src": "3344:3:234",
                                                                                                            "typeDescriptions": {
                                                                                                                "typeIdentifier": "t_int256",
                                                                                                                "typeString": "int256"
                                                                                                            }
                                                                                                        },
                                                                                                        "nodeType": "BinaryOperation",
                                                                                                        "operator": "%",
                                                                                                        "rightExpression": {
                                                                                                            "hexValue": "3130",
                                                                                                            "id": 161526,
                                                                                                            "isConstant": false,
                                                                                                            "isLValue": false,
                                                                                                            "isPure": true,
                                                                                                            "kind": "number",
                                                                                                            "lValueRequested": false,
                                                                                                            "nodeType": "Literal",
                                                                                                            "src": "3350:2:234",
                                                                                                            "typeDescriptions": {
                                                                                                                "typeIdentifier": "t_rational_10_by_1",
                                                                                                                "typeString": "int_const 10"
                                                                                                            },
                                                                                                            "value": "10"
                                                                                                        },
                                                                                                        "src": "3344:8:234",
                                                                                                        "typeDescriptions": {
                                                                                                            "typeIdentifier": "t_int256",
                                                                                                            "typeString": "int256"
                                                                                                        }
                                                                                                    }
                                                                                                ],
                                                                                                "id": 161528,
                                                                                                "isConstant": false,
                                                                                                "isInlineArray": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": false,
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "TupleExpression",
                                                                                                "src": "3343:10:234",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_int256",
                                                                                                    "typeString": "int256"
                                                                                                }
                                                                                            },
                                                                                            "nodeType": "BinaryOperation",
                                                                                            "operator": "+",
                                                                                            "rightExpression": {
                                                                                                "hexValue": "3438",
                                                                                                "id": 161529,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": true,
                                                                                                "kind": "number",
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "Literal",
                                                                                                "src": "3356:2:234",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_rational_48_by_1",
                                                                                                    "typeString": "int_const 48"
                                                                                                },
                                                                                                "value": "48"
                                                                                            },
                                                                                            "src": "3343:15:234",
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
                                                                                        "id": 161524,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                                        "src": "3335:7:234",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                                                            "typeString": "type(uint256)"
                                                                                        },
                                                                                        "typeName": {
                                                                                            "id": 161523,
                                                                                            "name": "uint256",
                                                                                            "nodeType": "ElementaryTypeName",
                                                                                            "src": "3335:7:234",
                                                                                            "typeDescriptions": {}
                                                                                        }
                                                                                    },
                                                                                    "id": 161531,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "kind": "typeConversion",
                                                                                    "lValueRequested": false,
                                                                                    "nameLocations": [],
                                                                                    "names": [],
                                                                                    "nodeType": "FunctionCall",
                                                                                    "src": "3335:24:234",
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
                                                                                "id": 161522,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                                "src": "3329:5:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_uint8_$",
                                                                                    "typeString": "type(uint8)"
                                                                                },
                                                                                "typeName": {
                                                                                    "id": 161521,
                                                                                    "name": "uint8",
                                                                                    "nodeType": "ElementaryTypeName",
                                                                                    "src": "3329:5:234",
                                                                                    "typeDescriptions": {}
                                                                                }
                                                                            },
                                                                            "id": 161532,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "3329:31:234",
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
                                                                        "id": 161520,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "3301:6:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 161519,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "3301:6:234",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 161533,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "3301:77:234",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "3259:119:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 161535,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3259:119:234"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 161538,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 161536,
                                                                    "name": "num",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 161421,
                                                                    "src": "3396:3:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "/=",
                                                                "rightHandSide": {
                                                                    "hexValue": "3130",
                                                                    "id": 161537,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3403:2:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                        "typeString": "int_const 10"
                                                                    },
                                                                    "value": "10"
                                                                },
                                                                "src": "3396:9:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "id": 161539,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3396:9:234"
                                                        }
                                                    ]
                                                },
                                                "id": 161541,
                                                "nodeType": "IfStatement",
                                                "src": "3117:303:234",
                                                "trueBody": {
                                                    "id": 161511,
                                                    "nodeType": "Block",
                                                    "src": "3157:78:234",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 161509,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 161501,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 161433,
                                                                        "src": "3175:9:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 161507,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 161506,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 161504,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 161502,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 161429,
                                                                                "src": "3185:15:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 161503,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 161482,
                                                                                "src": "3203:6:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "3185:24:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 161505,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "3212:1:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "3185:28:234",
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
                                                                    "src": "3175:39:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "hexValue": "2e",
                                                                    "id": 161508,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3217:3:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                                                        "typeString": "literal_string \".\""
                                                                    },
                                                                    "value": "."
                                                                },
                                                                "src": "3175:45:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 161510,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3175:45:234"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 161543,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "src": "3433:8:234",
                                                    "subExpression": {
                                                        "id": 161542,
                                                        "name": "digits",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 161482,
                                                        "src": "3433:6:234",
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
                                                "id": 161544,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3433:8:234"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 161493,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 161487,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 161485,
                                                "name": "num",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161421,
                                                "src": "3067:3:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 161486,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3074:1:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3067:8:234",
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
                                            "id": 161492,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 161488,
                                                "name": "digits",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161482,
                                                "src": "3079:6:234",
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
                                                "id": 161491,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 161489,
                                                    "name": "decimals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161423,
                                                    "src": "3089:8:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 161490,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3100:1:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "3089:12:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3079:22:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "3067:34:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 161546,
                                    "nodeType": "WhileStatement",
                                    "src": "3060:392:234"
                                },
                                {
                                    "condition": {
                                        "id": 161547,
                                        "name": "isNegative",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 161440,
                                        "src": "3566:10:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 161562,
                                    "nodeType": "IfStatement",
                                    "src": "3562:108:234",
                                    "trueBody": {
                                        "id": 161561,
                                        "nodeType": "Block",
                                        "src": "3578:92:234",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 161556,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 161548,
                                                            "name": "rawResult",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161433,
                                                            "src": "3592:9:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 161554,
                                                        "indexExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 161553,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 161551,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 161549,
                                                                    "name": "maxStringLength",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 161429,
                                                                    "src": "3602:15:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "-",
                                                                "rightExpression": {
                                                                    "id": 161550,
                                                                    "name": "digits",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 161482,
                                                                    "src": "3620:6:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "3602:24:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "hexValue": "31",
                                                                "id": 161552,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3629:1:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_1_by_1",
                                                                    "typeString": "int_const 1"
                                                                },
                                                                "value": "1"
                                                            },
                                                            "src": "3602:28:234",
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
                                                        "src": "3592:39:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "hexValue": "2d",
                                                        "id": 161555,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "3634:3:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561",
                                                            "typeString": "literal_string \"-\""
                                                        },
                                                        "value": "-"
                                                    },
                                                    "src": "3592:45:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes1",
                                                        "typeString": "bytes1"
                                                    }
                                                },
                                                "id": 161557,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3592:45:234"
                                            },
                                            {
                                                "expression": {
                                                    "id": 161559,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "src": "3651:8:234",
                                                    "subExpression": {
                                                        "id": 161558,
                                                        "name": "digits",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 161482,
                                                        "src": "3651:6:234",
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
                                                "id": 161560,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3651:8:234"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "3802:129:234",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "3816:62:234",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "rawResult",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3830:9:234"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "maxStringLength",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3849:15:234"
                                                                        },
                                                                        {
                                                                            "name": "digits",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3866:6:234"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "sub",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3845:3:234"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3845:28:234"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3875:1:234",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3841:3:234"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3841:36:234"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3826:3:234"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3826:52:234"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "result",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3816:6:234"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "result",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3898:6:234"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "digits",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3910:6:234"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3918:1:234",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3906:3:234"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3906:14:234"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3891:6:234"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3891:30:234"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "3891:30:234"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 161482,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3866:6:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161482,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3910:6:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161429,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3849:15:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161433,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3830:9:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161426,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3816:6:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161426,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "3898:6:234",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 161563,
                                    "nodeType": "InlineAssembly",
                                    "src": "3793:138:234"
                                },
                                {
                                    "expression": {
                                        "id": 161564,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 161426,
                                        "src": "3947:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 161427,
                                    "id": 161565,
                                    "nodeType": "Return",
                                    "src": "3940:13:234"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 161419,
                            "nodeType": "StructuredDocumentation",
                            "src": "1481:438:234",
                            "text": "@dev Converts a signed integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toString",
                        "nameLocation": "1933:8:234",
                        "parameters": {
                            "id": 161424,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161421,
                                    "mutability": "mutable",
                                    "name": "num",
                                    "nameLocation": "1958:3:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161567,
                                    "src": "1951:10:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 161420,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1951:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161423,
                                    "mutability": "mutable",
                                    "name": "decimals",
                                    "nameLocation": "1979:8:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161567,
                                    "src": "1971:16:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161422,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1971:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1941:52:234"
                        },
                        "returnParameters": {
                            "id": 161427,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161426,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "2031:6:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161567,
                                    "src": "2017:20:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 161425,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2017:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2016:22:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 161678,
                        "nodeType": "FunctionDefinition",
                        "src": "4412:1394:234",
                        "nodes": [],
                        "body": {
                            "id": 161677,
                            "nodeType": "Block",
                            "src": "4528:1278:234",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        161578
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161578,
                                            "mutability": "mutable",
                                            "name": "maxStringLength",
                                            "nameLocation": "4767:15:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161677,
                                            "src": "4759:23:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 161577,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4759:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161580,
                                    "initialValue": {
                                        "hexValue": "3739",
                                        "id": 161579,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "4785:2:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_79_by_1",
                                            "typeString": "int_const 79"
                                        },
                                        "value": "79"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4759:28:234"
                                },
                                {
                                    "assignments": [
                                        161582
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161582,
                                            "mutability": "mutable",
                                            "name": "rawResult",
                                            "nameLocation": "4810:9:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161677,
                                            "src": "4797:22:234",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 161581,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4797:5:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161587,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 161585,
                                                "name": "maxStringLength",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161578,
                                                "src": "4832:15:234",
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
                                            "id": 161584,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "4822:9:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 161583,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4826:5:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 161586,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4822:26:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4797:51:234"
                                },
                                {
                                    "expression": {
                                        "id": 161605,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 161588,
                                                "name": "rawResult",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161582,
                                                "src": "5013:9:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 161592,
                                            "indexExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 161591,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 161589,
                                                    "name": "maxStringLength",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161578,
                                                    "src": "5023:15:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 161590,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5041:1:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "5023:19:234",
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
                                            "src": "5013:30:234",
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
                                                            "id": 161602,
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
                                                                        "id": 161599,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "id": 161597,
                                                                            "name": "num",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 161570,
                                                                            "src": "5060:3:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "%",
                                                                        "rightExpression": {
                                                                            "hexValue": "3130",
                                                                            "id": 161598,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5066:2:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_10_by_1",
                                                                                "typeString": "int_const 10"
                                                                            },
                                                                            "value": "10"
                                                                        },
                                                                        "src": "5060:8:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "id": 161600,
                                                                "isConstant": false,
                                                                "isInlineArray": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "TupleExpression",
                                                                "src": "5059:10:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "+",
                                                            "rightExpression": {
                                                                "hexValue": "3438",
                                                                "id": 161601,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5072:2:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_48_by_1",
                                                                    "typeString": "int_const 48"
                                                                },
                                                                "value": "48"
                                                            },
                                                            "src": "5059:15:234",
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
                                                        "id": 161596,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "5053:5:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint8_$",
                                                            "typeString": "type(uint8)"
                                                        },
                                                        "typeName": {
                                                            "id": 161595,
                                                            "name": "uint8",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5053:5:234",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 161603,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5053:22:234",
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
                                                "id": 161594,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "5046:6:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                                    "typeString": "type(bytes1)"
                                                },
                                                "typeName": {
                                                    "id": 161593,
                                                    "name": "bytes1",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5046:6:234",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 161604,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5046:30:234",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes1",
                                                "typeString": "bytes1"
                                            }
                                        },
                                        "src": "5013:63:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes1",
                                            "typeString": "bytes1"
                                        }
                                    },
                                    "id": 161606,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5013:63:234"
                                },
                                {
                                    "expression": {
                                        "id": 161609,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 161607,
                                            "name": "num",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161570,
                                            "src": "5086:3:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "/=",
                                        "rightHandSide": {
                                            "hexValue": "3130",
                                            "id": 161608,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5093:2:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_10_by_1",
                                                "typeString": "int_const 10"
                                            },
                                            "value": "10"
                                        },
                                        "src": "5086:9:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 161610,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5086:9:234"
                                },
                                {
                                    "assignments": [
                                        161612
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161612,
                                            "mutability": "mutable",
                                            "name": "digits",
                                            "nameLocation": "5113:6:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161677,
                                            "src": "5105:14:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 161611,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5105:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161614,
                                    "initialValue": {
                                        "hexValue": "31",
                                        "id": 161613,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "5122:1:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_1_by_1",
                                            "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5105:18:234"
                                },
                                {
                                    "body": {
                                        "id": 161672,
                                        "nodeType": "Block",
                                        "src": "5176:340:234",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 161630,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 161626,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 161624,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161572,
                                                            "src": "5194:8:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 161625,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5205:1:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "5194:12:234",
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
                                                        "id": 161629,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 161627,
                                                            "name": "digits",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161612,
                                                            "src": "5210:6:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "id": 161628,
                                                            "name": "decimals",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161572,
                                                            "src": "5220:8:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "5210:18:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5194:34:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 161667,
                                                    "nodeType": "Block",
                                                    "src": "5314:170:234",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 161661,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 161642,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 161582,
                                                                        "src": "5332:9:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 161648,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 161647,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 161645,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 161643,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 161578,
                                                                                "src": "5342:15:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 161644,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 161612,
                                                                                "src": "5360:6:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "5342:24:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 161646,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5369:1:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "5342:28:234",
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
                                                                    "src": "5332:39:234",
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
                                                                                    "id": 161658,
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
                                                                                                "id": 161655,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": false,
                                                                                                "lValueRequested": false,
                                                                                                "leftExpression": {
                                                                                                    "id": 161653,
                                                                                                    "name": "num",
                                                                                                    "nodeType": "Identifier",
                                                                                                    "overloadedDeclarations": [],
                                                                                                    "referencedDeclaration": 161570,
                                                                                                    "src": "5409:3:234",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_uint256",
                                                                                                        "typeString": "uint256"
                                                                                                    }
                                                                                                },
                                                                                                "nodeType": "BinaryOperation",
                                                                                                "operator": "%",
                                                                                                "rightExpression": {
                                                                                                    "hexValue": "3130",
                                                                                                    "id": 161654,
                                                                                                    "isConstant": false,
                                                                                                    "isLValue": false,
                                                                                                    "isPure": true,
                                                                                                    "kind": "number",
                                                                                                    "lValueRequested": false,
                                                                                                    "nodeType": "Literal",
                                                                                                    "src": "5415:2:234",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                                                        "typeString": "int_const 10"
                                                                                                    },
                                                                                                    "value": "10"
                                                                                                },
                                                                                                "src": "5409:8:234",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_uint256",
                                                                                                    "typeString": "uint256"
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "id": 161656,
                                                                                        "isConstant": false,
                                                                                        "isInlineArray": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "TupleExpression",
                                                                                        "src": "5408:10:234",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    },
                                                                                    "nodeType": "BinaryOperation",
                                                                                    "operator": "+",
                                                                                    "rightExpression": {
                                                                                        "hexValue": "3438",
                                                                                        "id": 161657,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "kind": "number",
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "Literal",
                                                                                        "src": "5421:2:234",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_rational_48_by_1",
                                                                                            "typeString": "int_const 48"
                                                                                        },
                                                                                        "value": "48"
                                                                                    },
                                                                                    "src": "5408:15:234",
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
                                                                                "id": 161652,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "lValueRequested": false,
                                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                                "src": "5402:5:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_type$_t_uint8_$",
                                                                                    "typeString": "type(uint8)"
                                                                                },
                                                                                "typeName": {
                                                                                    "id": 161651,
                                                                                    "name": "uint8",
                                                                                    "nodeType": "ElementaryTypeName",
                                                                                    "src": "5402:5:234",
                                                                                    "typeDescriptions": {}
                                                                                }
                                                                            },
                                                                            "id": 161659,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "typeConversion",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "5402:22:234",
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
                                                                        "id": 161650,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5374:6:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 161649,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5374:6:234",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 161660,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5374:68:234",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "5332:110:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 161662,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "5332:110:234"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 161665,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 161663,
                                                                    "name": "num",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 161570,
                                                                    "src": "5460:3:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "/=",
                                                                "rightHandSide": {
                                                                    "hexValue": "3130",
                                                                    "id": 161664,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "5467:2:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                        "typeString": "int_const 10"
                                                                    },
                                                                    "value": "10"
                                                                },
                                                                "src": "5460:9:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 161666,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "5460:9:234"
                                                        }
                                                    ]
                                                },
                                                "id": 161668,
                                                "nodeType": "IfStatement",
                                                "src": "5190:294:234",
                                                "trueBody": {
                                                    "id": 161641,
                                                    "nodeType": "Block",
                                                    "src": "5230:78:234",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 161639,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 161631,
                                                                        "name": "rawResult",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 161582,
                                                                        "src": "5248:9:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 161637,
                                                                    "indexExpression": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 161636,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 161634,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 161632,
                                                                                "name": "maxStringLength",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 161578,
                                                                                "src": "5258:15:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 161633,
                                                                                "name": "digits",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 161612,
                                                                                "src": "5276:6:234",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "5258:24:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "hexValue": "31",
                                                                            "id": 161635,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5285:1:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                                "typeString": "int_const 1"
                                                                            },
                                                                            "value": "1"
                                                                        },
                                                                        "src": "5258:28:234",
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
                                                                    "src": "5248:39:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "hexValue": "2e",
                                                                    "id": 161638,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "5290:3:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                                                        "typeString": "literal_string \".\""
                                                                    },
                                                                    "value": "."
                                                                },
                                                                "src": "5248:45:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 161640,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "5248:45:234"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 161670,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "++",
                                                    "prefix": false,
                                                    "src": "5497:8:234",
                                                    "subExpression": {
                                                        "id": 161669,
                                                        "name": "digits",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 161612,
                                                        "src": "5497:6:234",
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
                                                "id": 161671,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5497:8:234"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 161623,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 161617,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 161615,
                                                "name": "num",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161570,
                                                "src": "5140:3:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 161616,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5147:1:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "5140:8:234",
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
                                            "id": 161622,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 161618,
                                                "name": "digits",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161612,
                                                "src": "5152:6:234",
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
                                                "id": 161621,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 161619,
                                                    "name": "decimals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161572,
                                                    "src": "5162:8:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "hexValue": "31",
                                                    "id": 161620,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5173:1:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                "src": "5162:12:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5152:22:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5140:34:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 161673,
                                    "nodeType": "WhileStatement",
                                    "src": "5133:383:234"
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "5648:129:234",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "5662:62:234",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "rawResult",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5676:9:234"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "maxStringLength",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5695:15:234"
                                                                        },
                                                                        {
                                                                            "name": "digits",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5712:6:234"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "sub",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "5691:3:234"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "5691:28:234"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "5721:1:234",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5687:3:234"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5687:36:234"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5672:3:234"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5672:52:234"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "result",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5662:6:234"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "result",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5744:6:234"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "digits",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5756:6:234"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "5764:1:234",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5752:3:234"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5752:14:234"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5737:6:234"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5737:30:234"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "5737:30:234"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 161612,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5712:6:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161612,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5756:6:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161578,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5695:15:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161582,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5676:9:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161575,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5662:6:234",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 161575,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "5744:6:234",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 161674,
                                    "nodeType": "InlineAssembly",
                                    "src": "5639:138:234"
                                },
                                {
                                    "expression": {
                                        "id": 161675,
                                        "name": "result",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 161575,
                                        "src": "5793:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 161576,
                                    "id": 161676,
                                    "nodeType": "Return",
                                    "src": "5786:13:234"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 161568,
                            "nodeType": "StructuredDocumentation",
                            "src": "3966:441:234",
                            "text": "@dev Converts an unsigned integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toString",
                        "nameLocation": "4421:8:234",
                        "parameters": {
                            "id": 161573,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161570,
                                    "mutability": "mutable",
                                    "name": "num",
                                    "nameLocation": "4447:3:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161678,
                                    "src": "4439:11:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161569,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4439:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161572,
                                    "mutability": "mutable",
                                    "name": "decimals",
                                    "nameLocation": "4468:8:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161678,
                                    "src": "4460:16:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161571,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4460:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4429:53:234"
                        },
                        "returnParameters": {
                            "id": 161576,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161575,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "4520:6:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161678,
                                    "src": "4506:20:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 161574,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4506:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4505:22:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 161747,
                        "nodeType": "FunctionDefinition",
                        "src": "5812:448:234",
                        "nodes": [],
                        "body": {
                            "id": 161746,
                            "nodeType": "Block",
                            "src": "5913:347:234",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 161689,
                                                "name": "prelude",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161680,
                                                "src": "5936:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "hexValue": "5b",
                                                "id": 161690,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5945:3:234",
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
                                                "id": 161686,
                                                "name": "console2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 57323,
                                                "src": "5923:8:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_console2_$57323_$",
                                                    "typeString": "type(library console2)"
                                                }
                                            },
                                            "id": 161688,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5932:3:234",
                                            "memberName": "log",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 49984,
                                            "src": "5923:12:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory) pure"
                                            }
                                        },
                                        "id": 161691,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5923:26:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 161692,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5923:26:234"
                                },
                                {
                                    "body": {
                                        "id": 161732,
                                        "nodeType": "Block",
                                        "src": "6002:195:234",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 161709,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 161704,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 161694,
                                                        "src": "6020:1:234",
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
                                                        "id": 161708,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 161705,
                                                                "name": "array",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 161683,
                                                                "src": "6024:5:234",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                    "typeString": "uint256[] memory"
                                                                }
                                                            },
                                                            "id": 161706,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "6030:6:234",
                                                            "memberName": "length",
                                                            "nodeType": "MemberAccess",
                                                            "src": "6024:12:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "hexValue": "31",
                                                            "id": 161707,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6039:1:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                "typeString": "int_const 1"
                                                            },
                                                            "value": "1"
                                                        },
                                                        "src": "6024:16:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "6020:20:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 161730,
                                                    "nodeType": "Block",
                                                    "src": "6120:67:234",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "2020202020202020",
                                                                        "id": 161724,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6151:10:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                                                            "typeString": "literal_string \"        \""
                                                                        },
                                                                        "value": "        "
                                                                    },
                                                                    {
                                                                        "baseExpression": {
                                                                            "id": 161725,
                                                                            "name": "array",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 161683,
                                                                            "src": "6163:5:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                                "typeString": "uint256[] memory"
                                                                            }
                                                                        },
                                                                        "id": 161727,
                                                                        "indexExpression": {
                                                                            "id": 161726,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 161694,
                                                                            "src": "6169:1:234",
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
                                                                        "src": "6163:8:234",
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
                                                                        "id": 161721,
                                                                        "name": "console2",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 57323,
                                                                        "src": "6138:8:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_console2_$57323_$",
                                                                            "typeString": "type(library console2)"
                                                                        }
                                                                    },
                                                                    "id": 161723,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6147:3:234",
                                                                    "memberName": "log",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 49950,
                                                                    "src": "6138:12:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                                                                        "typeString": "function (string memory,uint256) pure"
                                                                    }
                                                                },
                                                                "id": 161728,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6138:34:234",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 161729,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6138:34:234"
                                                        }
                                                    ]
                                                },
                                                "id": 161731,
                                                "nodeType": "IfStatement",
                                                "src": "6016:171:234",
                                                "trueBody": {
                                                    "id": 161720,
                                                    "nodeType": "Block",
                                                    "src": "6042:72:234",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "2020202020202020",
                                                                        "id": 161713,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6073:10:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                                                            "typeString": "literal_string \"        \""
                                                                        },
                                                                        "value": "        "
                                                                    },
                                                                    {
                                                                        "baseExpression": {
                                                                            "id": 161714,
                                                                            "name": "array",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 161683,
                                                                            "src": "6085:5:234",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                                "typeString": "uint256[] memory"
                                                                            }
                                                                        },
                                                                        "id": 161716,
                                                                        "indexExpression": {
                                                                            "id": 161715,
                                                                            "name": "i",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 161694,
                                                                            "src": "6091:1:234",
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
                                                                        "src": "6085:8:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    {
                                                                        "hexValue": "2c",
                                                                        "id": 161717,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6095:3:234",
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
                                                                        "id": 161710,
                                                                        "name": "console2",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 57323,
                                                                        "src": "6060:8:234",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_console2_$57323_$",
                                                                            "typeString": "type(library console2)"
                                                                        }
                                                                    },
                                                                    "id": 161712,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6069:3:234",
                                                                    "memberName": "log",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 50514,
                                                                    "src": "6060:12:234",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                                                                        "typeString": "function (string memory,uint256,string memory) pure"
                                                                    }
                                                                },
                                                                "id": 161718,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6060:39:234",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 161719,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6060:39:234"
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
                                        "id": 161700,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161697,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161694,
                                            "src": "5979:1:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 161698,
                                                "name": "array",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161683,
                                                "src": "5983:5:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                    "typeString": "uint256[] memory"
                                                }
                                            },
                                            "id": 161699,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5989:6:234",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "5983:12:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5979:16:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 161733,
                                    "initializationExpression": {
                                        "assignments": [
                                            161694
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 161694,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "5972:1:234",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 161733,
                                                "src": "5964:9:234",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 161693,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5964:7:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 161696,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 161695,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5976:1:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "5964:13:234"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 161702,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "5997:3:234",
                                            "subExpression": {
                                                "id": 161701,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161694,
                                                "src": "5997:1:234",
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
                                        "id": 161703,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5997:3:234"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "5959:238:234"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "202020205d",
                                                "id": 161737,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6219:7:234",
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
                                                "id": 161734,
                                                "name": "console2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 57323,
                                                "src": "6206:8:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_console2_$57323_$",
                                                    "typeString": "type(library console2)"
                                                }
                                            },
                                            "id": 161736,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6215:3:234",
                                            "memberName": "log",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 49837,
                                            "src": "6206:12:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory) pure"
                                            }
                                        },
                                        "id": 161738,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6206:21:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 161739,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6206:21:234"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "",
                                                "id": 161743,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6250:2:234",
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
                                                "id": 161740,
                                                "name": "console2",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 57323,
                                                "src": "6237:8:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_console2_$57323_$",
                                                    "typeString": "type(library console2)"
                                                }
                                            },
                                            "id": 161742,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6246:3:234",
                                            "memberName": "log",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 49837,
                                            "src": "6237:12:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory) pure"
                                            }
                                        },
                                        "id": 161744,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6237:16:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 161745,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6237:16:234"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "logArray",
                        "nameLocation": "5821:8:234",
                        "parameters": {
                            "id": 161684,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161680,
                                    "mutability": "mutable",
                                    "name": "prelude",
                                    "nameLocation": "5853:7:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161747,
                                    "src": "5839:21:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 161679,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5839:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161683,
                                    "mutability": "mutable",
                                    "name": "array",
                                    "nameLocation": "5887:5:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161747,
                                    "src": "5870:22:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 161681,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "5870:7:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 161682,
                                        "nodeType": "ArrayTypeName",
                                        "src": "5870:9:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5829:69:234"
                        },
                        "returnParameters": {
                            "id": 161685,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5913:0:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 161784,
                        "nodeType": "FunctionDefinition",
                        "src": "6266:333:234",
                        "nodes": [],
                        "body": {
                            "id": 161783,
                            "nodeType": "Block",
                            "src": "6403:196:234",
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
                                                "id": 161761,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 161759,
                                                    "name": "minimum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161751,
                                                    "src": "6421:7:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 161760,
                                                    "name": "maximum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161753,
                                                    "src": "6432:7:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6421:18:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4c69623a206d696e203e206d6178",
                                                "id": 161762,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6441:16:234",
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
                                            "id": 161758,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "6413:7:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 161763,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6413:45:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 161764,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6413:45:234"
                                },
                                {
                                    "assignments": [
                                        161766
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161766,
                                            "mutability": "mutable",
                                            "name": "rangeSize",
                                            "nameLocation": "6477:9:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161783,
                                            "src": "6469:17:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 161765,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6469:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161772,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 161771,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 161769,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 161767,
                                                "name": "maximum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161753,
                                                "src": "6489:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 161768,
                                                "name": "minimum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161751,
                                                "src": "6499:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "6489:17:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 161770,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6509:1:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "6489:21:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6469:41:234"
                                },
                                {
                                    "assignments": [
                                        161774
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161774,
                                            "mutability": "mutable",
                                            "name": "modValue",
                                            "nameLocation": "6528:8:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161783,
                                            "src": "6520:16:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 161773,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6520:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161778,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 161777,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161775,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161749,
                                            "src": "6539:5:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "%",
                                        "rightExpression": {
                                            "id": 161776,
                                            "name": "rangeSize",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161766,
                                            "src": "6547:9:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6539:17:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6520:36:234"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 161781,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161779,
                                            "name": "modValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161774,
                                            "src": "6574:8:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "id": 161780,
                                            "name": "minimum",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161751,
                                            "src": "6585:7:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6574:18:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 161757,
                                    "id": 161782,
                                    "nodeType": "Return",
                                    "src": "6567:25:234"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "normalizeToRange",
                        "nameLocation": "6275:16:234",
                        "parameters": {
                            "id": 161754,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161749,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "6309:5:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161784,
                                    "src": "6301:13:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161748,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6301:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161751,
                                    "mutability": "mutable",
                                    "name": "minimum",
                                    "nameLocation": "6332:7:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161784,
                                    "src": "6324:15:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161750,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6324:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161753,
                                    "mutability": "mutable",
                                    "name": "maximum",
                                    "nameLocation": "6357:7:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161784,
                                    "src": "6349:15:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161752,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6349:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6291:79:234"
                        },
                        "returnParameters": {
                            "id": 161757,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161756,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161784,
                                    "src": "6394:7:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161755,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6394:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6393:9:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 161830,
                        "nodeType": "FunctionDefinition",
                        "src": "6605:401:234",
                        "nodes": [],
                        "body": {
                            "id": 161829,
                            "nodeType": "Block",
                            "src": "6738:268:234",
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
                                                "id": 161798,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 161796,
                                                    "name": "minimum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161788,
                                                    "src": "6756:7:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 161797,
                                                    "name": "maximum",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 161790,
                                                    "src": "6767:7:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "6756:18:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4c69623a206d696e203e206d6178",
                                                "id": 161799,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6776:16:234",
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
                                            "id": 161795,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "6748:7:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 161800,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6748:45:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 161801,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6748:45:234"
                                },
                                {
                                    "assignments": [
                                        161803
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161803,
                                            "mutability": "mutable",
                                            "name": "rangeSize",
                                            "nameLocation": "6811:9:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161829,
                                            "src": "6804:16:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 161802,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6804:6:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161809,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 161808,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 161806,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 161804,
                                                "name": "maximum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161790,
                                                "src": "6823:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 161805,
                                                "name": "minimum",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161788,
                                                "src": "6833:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "src": "6823:17:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 161807,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6843:1:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "6823:21:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6804:40:234"
                                },
                                {
                                    "assignments": [
                                        161811
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161811,
                                            "mutability": "mutable",
                                            "name": "modValue",
                                            "nameLocation": "6861:8:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161829,
                                            "src": "6854:15:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 161810,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6854:6:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161815,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 161814,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161812,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161786,
                                            "src": "6872:5:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "%",
                                        "rightExpression": {
                                            "id": 161813,
                                            "name": "rangeSize",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161803,
                                            "src": "6880:9:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "6872:17:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6854:35:234"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 161818,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161816,
                                            "name": "modValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161811,
                                            "src": "6904:8:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 161817,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6915:1:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "6904:12:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 161824,
                                    "nodeType": "IfStatement",
                                    "src": "6900:64:234",
                                    "trueBody": {
                                        "id": 161823,
                                        "nodeType": "Block",
                                        "src": "6918:46:234",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 161821,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 161819,
                                                        "name": "modValue",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 161811,
                                                        "src": "6932:8:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 161820,
                                                        "name": "rangeSize",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 161803,
                                                        "src": "6944:9:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    },
                                                    "src": "6932:21:234",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "id": 161822,
                                                "nodeType": "ExpressionStatement",
                                                "src": "6932:21:234"
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
                                        "id": 161827,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161825,
                                            "name": "modValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161811,
                                            "src": "6981:8:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "id": 161826,
                                            "name": "minimum",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161788,
                                            "src": "6992:7:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "6981:18:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 161794,
                                    "id": 161828,
                                    "nodeType": "Return",
                                    "src": "6974:25:234"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "normalizeToRange",
                        "nameLocation": "6614:16:234",
                        "parameters": {
                            "id": 161791,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161786,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "6647:5:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161830,
                                    "src": "6640:12:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 161785,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6640:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161788,
                                    "mutability": "mutable",
                                    "name": "minimum",
                                    "nameLocation": "6669:7:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161830,
                                    "src": "6662:14:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 161787,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6662:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161790,
                                    "mutability": "mutable",
                                    "name": "maximum",
                                    "nameLocation": "6693:7:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161830,
                                    "src": "6686:14:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 161789,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6686:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6630:76:234"
                        },
                        "returnParameters": {
                            "id": 161794,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161793,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161830,
                                    "src": "6730:6:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 161792,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6730:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6729:8:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 161854,
                        "nodeType": "FunctionDefinition",
                        "src": "7012:205:234",
                        "nodes": [],
                        "body": {
                            "id": 161853,
                            "nodeType": "Block",
                            "src": "7130:87:234",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        161842
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161842,
                                            "mutability": "mutable",
                                            "name": "delta",
                                            "nameLocation": "7148:5:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161853,
                                            "src": "7140:13:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 161841,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7140:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161848,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 161845,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161832,
                                                "src": "7170:1:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 161846,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161834,
                                                "src": "7173:1:234",
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
                                                "id": 161843,
                                                "name": "stdMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 36002,
                                                "src": "7156:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_stdMath_$36002_$",
                                                    "typeString": "type(library stdMath)"
                                                }
                                            },
                                            "id": 161844,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7164:5:234",
                                            "memberName": "delta",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 35913,
                                            "src": "7156:13:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 161847,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7156:19:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7140:35:234"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 161851,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161849,
                                            "name": "delta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161842,
                                            "src": "7192:5:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "id": 161850,
                                            "name": "tolerance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161836,
                                            "src": "7201:9:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7192:18:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 161840,
                                    "id": 161852,
                                    "nodeType": "Return",
                                    "src": "7185:25:234"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approxEq",
                        "nameLocation": "7021:8:234",
                        "parameters": {
                            "id": 161837,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161832,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "7047:1:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161854,
                                    "src": "7039:9:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161831,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7039:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161834,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "7066:1:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161854,
                                    "src": "7058:9:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161833,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7058:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161836,
                                    "mutability": "mutable",
                                    "name": "tolerance",
                                    "nameLocation": "7085:9:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161854,
                                    "src": "7077:17:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161835,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7077:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7029:71:234"
                        },
                        "returnParameters": {
                            "id": 161840,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161839,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161854,
                                    "src": "7124:4:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 161838,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7124:4:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7123:6:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 161878,
                        "nodeType": "FunctionDefinition",
                        "src": "7223:203:234",
                        "nodes": [],
                        "body": {
                            "id": 161877,
                            "nodeType": "Block",
                            "src": "7339:87:234",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        161866
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 161866,
                                            "mutability": "mutable",
                                            "name": "delta",
                                            "nameLocation": "7357:5:234",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 161877,
                                            "src": "7349:13:234",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 161865,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7349:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 161872,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 161869,
                                                "name": "a",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161856,
                                                "src": "7379:1:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "id": 161870,
                                                "name": "b",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 161858,
                                                "src": "7382:1:234",
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
                                                "id": 161867,
                                                "name": "stdMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 36002,
                                                "src": "7365:7:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_stdMath_$36002_$",
                                                    "typeString": "type(library stdMath)"
                                                }
                                            },
                                            "id": 161868,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7373:5:234",
                                            "memberName": "delta",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 35949,
                                            "src": "7365:13:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                                                "typeString": "function (int256,int256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 161871,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7365:19:234",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7349:35:234"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 161875,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 161873,
                                            "name": "delta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161866,
                                            "src": "7401:5:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "id": 161874,
                                            "name": "tolerance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 161860,
                                            "src": "7410:9:234",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7401:18:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 161864,
                                    "id": 161876,
                                    "nodeType": "Return",
                                    "src": "7394:25:234"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approxEq",
                        "nameLocation": "7232:8:234",
                        "parameters": {
                            "id": 161861,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161856,
                                    "mutability": "mutable",
                                    "name": "a",
                                    "nameLocation": "7257:1:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161878,
                                    "src": "7250:8:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 161855,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7250:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161858,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "7275:1:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161878,
                                    "src": "7268:8:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 161857,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7268:6:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161860,
                                    "mutability": "mutable",
                                    "name": "tolerance",
                                    "nameLocation": "7294:9:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161878,
                                    "src": "7286:17:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 161859,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7286:7:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7240:69:234"
                        },
                        "returnParameters": {
                            "id": 161864,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161863,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161878,
                                    "src": "7333:4:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 161862,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7333:4:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7332:6:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 161902,
                        "nodeType": "FunctionDefinition",
                        "src": "7432:175:234",
                        "nodes": [],
                        "body": {
                            "id": 161901,
                            "nodeType": "Block",
                            "src": "7505:102:234",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        },
                                        "id": 161899,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 161890,
                                                            "name": "b1",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161880,
                                                            "src": "7561:2:234",
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
                                                            "id": 161888,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7544:3:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 161889,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7548:12:234",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7544:16:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 161891,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7544:20:234",
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
                                                "id": 161887,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7534:9:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 161892,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7534:31:234",
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
                                                            "id": 161896,
                                                            "name": "b2",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161882,
                                                            "src": "7596:2:234",
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
                                                            "id": 161894,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7579:3:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 161895,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7583:12:234",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7579:16:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 161897,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7579:20:234",
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
                                                "id": 161893,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7569:9:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 161898,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7569:31:234",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "7534:66:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 161886,
                                    "id": 161900,
                                    "nodeType": "Return",
                                    "src": "7515:85:234"
                                }
                            ]
                        },
                        "functionSelector": "cdb16840",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "eq",
                        "nameLocation": "7441:2:234",
                        "parameters": {
                            "id": 161883,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161880,
                                    "mutability": "mutable",
                                    "name": "b1",
                                    "nameLocation": "7457:2:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161902,
                                    "src": "7444:15:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 161879,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7444:5:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161882,
                                    "mutability": "mutable",
                                    "name": "b2",
                                    "nameLocation": "7474:2:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161902,
                                    "src": "7461:15:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 161881,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7461:5:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7443:34:234"
                        },
                        "returnParameters": {
                            "id": 161886,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161885,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161902,
                                    "src": "7499:4:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 161884,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7499:4:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7498:6:234"
                        },
                        "scope": 161927,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 161926,
                        "nodeType": "FunctionDefinition",
                        "src": "7613:176:234",
                        "nodes": [],
                        "body": {
                            "id": 161925,
                            "nodeType": "Block",
                            "src": "7687:102:234",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        },
                                        "id": 161923,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 161914,
                                                            "name": "b1",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161904,
                                                            "src": "7743:2:234",
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
                                                            "id": 161912,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7726:3:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 161913,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7730:12:234",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7726:16:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 161915,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7726:20:234",
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
                                                "id": 161911,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7716:9:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 161916,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7716:31:234",
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
                                                            "id": 161920,
                                                            "name": "b2",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 161906,
                                                            "src": "7778:2:234",
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
                                                            "id": 161918,
                                                            "name": "abi",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -1,
                                                            "src": "7761:3:234",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_abi",
                                                                "typeString": "abi"
                                                            }
                                                        },
                                                        "id": 161919,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7765:12:234",
                                                        "memberName": "encodePacked",
                                                        "nodeType": "MemberAccess",
                                                        "src": "7761:16:234",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                            "typeString": "function () pure returns (bytes memory)"
                                                        }
                                                    },
                                                    "id": 161921,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7761:20:234",
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
                                                "id": 161917,
                                                "name": "keccak256",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -8,
                                                "src": "7751:9:234",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                }
                                            },
                                            "id": 161922,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7751:31:234",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "7716:66:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 161910,
                                    "id": 161924,
                                    "nodeType": "Return",
                                    "src": "7697:85:234"
                                }
                            ]
                        },
                        "functionSelector": "d37a20ba",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "neq",
                        "nameLocation": "7622:3:234",
                        "parameters": {
                            "id": 161907,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161904,
                                    "mutability": "mutable",
                                    "name": "b1",
                                    "nameLocation": "7639:2:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161926,
                                    "src": "7626:15:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 161903,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7626:5:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 161906,
                                    "mutability": "mutable",
                                    "name": "b2",
                                    "nameLocation": "7656:2:234",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161926,
                                    "src": "7643:15:234",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 161905,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7643:5:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7625:34:234"
                        },
                        "returnParameters": {
                            "id": 161910,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 161909,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 161926,
                                    "src": "7681:4:234",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 161908,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7681:4:234",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7680:6:234"
                        },
                        "scope": 161927,
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
                    161927
                ],
                "name": "Lib",
                "nameLocation": "220:3:234",
                "scope": 161928,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 234
};
