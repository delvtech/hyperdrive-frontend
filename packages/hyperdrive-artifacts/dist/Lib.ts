export const Lib = 
{
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
    "object": "0x61029e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220db6ecd0dae8646f461b5ede15707bbb854f3b48c88fe729ee6962860b2ec22d064736f6c63430008130033",
    "sourceMap": "212:7579:148:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;212:7579:148;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220db6ecd0dae8646f461b5ede15707bbb854f3b48c88fe729ee6962860b2ec22d064736f6c63430008130033",
    "sourceMap": "212:7579:148:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7432:175;;;;;;:::i;:::-;;:::i;:::-;;;1586:14:149;;1579:22;1561:41;;1549:2;1534:18;7432:175:148;;;;;;;7613:176;;;;;;:::i;:::-;;:::i;7432:175::-;7499:4;7596:2;7579:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7569:31;;;;;;7561:2;7544:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7534:31;;;;;;:66;7515:85;;7432:175;;;;:::o;7613:176::-;7681:4;7778:2;7761:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7751:31;;;;;;7743:2;7726:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7716:31;;;;;;:66;;7697:85;;7613:176;;;;:::o;14:127:149:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:718;188:5;241:3;234:4;226:6;222:17;218:27;208:55;;259:1;256;249:12;208:55;295:6;282:20;321:18;358:2;354;351:10;348:36;;;364:18;;:::i;:::-;439:2;433:9;407:2;493:13;;-1:-1:-1;;489:22:149;;;513:2;485:31;481:40;469:53;;;537:18;;;557:22;;;534:46;531:72;;;583:18;;:::i;:::-;623:10;619:2;612:22;658:2;650:6;643:18;704:3;697:4;692:2;684:6;680:15;676:26;673:35;670:55;;;721:1;718;711:12;670:55;785:2;778:4;770:6;766:17;759:4;751:6;747:17;734:54;832:1;825:4;820:2;812:6;808:15;804:26;797:37;852:6;843:15;;;;;;146:718;;;;:::o;869:539::-;955:6;963;1016:2;1004:9;995:7;991:23;987:32;984:52;;;1032:1;1029;1022:12;984:52;1072:9;1059:23;1101:18;1142:2;1134:6;1131:14;1128:34;;;1158:1;1155;1148:12;1128:34;1181:49;1222:7;1213:6;1202:9;1198:22;1181:49;:::i;:::-;1171:59;;1283:2;1272:9;1268:18;1255:32;1239:48;;1312:2;1302:8;1299:16;1296:36;;;1328:1;1325;1318:12;1296:36;;1351:51;1394:7;1383:8;1372:9;1368:24;1351:51;:::i;:::-;1341:61;;;869:539;;;;;:::o;1613:412::-;1742:3;1780:6;1774:13;1805:1;1815:129;1829:6;1826:1;1823:13;1815:129;;;1927:4;1911:14;;;1907:25;;1901:32;1888:11;;;1881:53;1844:12;1815:129;;;-1:-1:-1;1999:1:149;1963:16;;1988:13;;;-1:-1:-1;1963:16:149;1613:412;-1:-1:-1;1613:412:149:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "eq(bytes,bytes)": "cdb16840",
    "neq(bytes,bytes)": "d37a20ba"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"eq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"neq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/Lib.sol\":\"Lib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"test/utils/Lib.sol\":{\"keccak256\":\"0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171\",\"dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
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
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
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
        "keccak256": "0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2",
        "urls": [
          "bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171",
          "dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/utils/Lib.sol",
    "id": 121341,
    "exportedSymbols": {
      "Lib": [
        121340
      ],
      "Vm": [
        29527
      ],
      "VmSafe": [
        29055
      ],
      "console2": [
        45716
      ],
      "stdMath": [
        24395
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:7753:148",
    "nodes": [
      {
        "id": 120740,
        "nodeType": "PragmaDirective",
        "src": "39:23:148",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 120742,
        "nodeType": "ImportDirective",
        "src": "64:50:148",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/console2.sol",
        "file": "forge-std/console2.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 121341,
        "sourceUnit": 45717,
        "symbolAliases": [
          {
            "foreign": {
              "id": 120741,
              "name": "console2",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 45716,
              "src": "73:8:148",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 120744,
        "nodeType": "ImportDirective",
        "src": "115:48:148",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/StdMath.sol",
        "file": "forge-std/StdMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 121341,
        "sourceUnit": 24396,
        "symbolAliases": [
          {
            "foreign": {
              "id": 120743,
              "name": "stdMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 24395,
              "src": "124:7:148",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 120747,
        "nodeType": "ImportDirective",
        "src": "164:46:148",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "forge-std/Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 121341,
        "sourceUnit": 29528,
        "symbolAliases": [
          {
            "foreign": {
              "id": 120745,
              "name": "Vm",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 29527,
              "src": "173:2:148",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 120746,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 29055,
              "src": "177:6:148",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 121340,
        "nodeType": "ContractDefinition",
        "src": "212:7579:148",
        "nodes": [
          {
            "id": 120811,
            "nodeType": "FunctionDefinition",
            "src": "485:579:148",
            "nodes": [],
            "body": {
              "id": 120810,
              "nodeType": "Block",
              "src": "628:436:148",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    120762
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 120762,
                      "mutability": "mutable",
                      "name": "current",
                      "nameLocation": "674:7:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 120810,
                      "src": "666:15:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 120761,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "666:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 120764,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 120763,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "684:1:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "666:19:148"
                },
                {
                  "expression": {
                    "id": 120773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 120765,
                      "name": "filteredLogs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120759,
                      "src": "695:12:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct VmSafe.Log memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 120770,
                            "name": "logs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120752,
                            "src": "727:4:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                              "typeString": "struct VmSafe.Log memory[] memory"
                            }
                          },
                          "id": 120771,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "732:6:148",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "727:11:148",
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
                        "id": 120769,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "710:16:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (struct VmSafe.Log memory[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 120767,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 120766,
                              "name": "VmSafe.Log",
                              "nameLocations": [
                                "714:6:148",
                                "721:3:148"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 28007,
                              "src": "714:10:148"
                            },
                            "referencedDeclaration": 28007,
                            "src": "714:10:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Log_$28007_storage_ptr",
                              "typeString": "struct VmSafe.Log"
                            }
                          },
                          "id": 120768,
                          "nodeType": "ArrayTypeName",
                          "src": "714:12:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Log_$28007_storage_$dyn_storage_ptr",
                            "typeString": "struct VmSafe.Log[]"
                          }
                        }
                      },
                      "id": 120772,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "710:29:148",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct VmSafe.Log memory[] memory"
                      }
                    },
                    "src": "695:44:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct VmSafe.Log memory[] memory"
                    }
                  },
                  "id": 120774,
                  "nodeType": "ExpressionStatement",
                  "src": "695:44:148"
                },
                {
                  "body": {
                    "id": 120805,
                    "nodeType": "Block",
                    "src": "791:125:148",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 120793,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "expression": {
                                "baseExpression": {
                                  "id": 120786,
                                  "name": "logs",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 120752,
                                  "src": "809:4:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                                    "typeString": "struct VmSafe.Log memory[] memory"
                                  }
                                },
                                "id": 120788,
                                "indexExpression": {
                                  "id": 120787,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 120776,
                                  "src": "814:1:148",
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
                                "src": "809:7:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Log_$28007_memory_ptr",
                                  "typeString": "struct VmSafe.Log memory"
                                }
                              },
                              "id": 120789,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "817:6:148",
                              "memberName": "topics",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 28002,
                              "src": "809:14:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            "id": 120791,
                            "indexExpression": {
                              "hexValue": "30",
                              "id": 120790,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "824:1:148",
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
                            "src": "809:17:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 120792,
                            "name": "selector",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120754,
                            "src": "830:8:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "809:29:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 120804,
                        "nodeType": "IfStatement",
                        "src": "805:101:148",
                        "trueBody": {
                          "id": 120803,
                          "nodeType": "Block",
                          "src": "840:66:148",
                          "statements": [
                            {
                              "expression": {
                                "id": 120801,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 120794,
                                    "name": "filteredLogs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 120759,
                                    "src": "858:12:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                                      "typeString": "struct VmSafe.Log memory[] memory"
                                    }
                                  },
                                  "id": 120797,
                                  "indexExpression": {
                                    "id": 120796,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "++",
                                    "prefix": false,
                                    "src": "871:9:148",
                                    "subExpression": {
                                      "id": 120795,
                                      "name": "current",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 120762,
                                      "src": "871:7:148",
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
                                  "src": "858:23:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Log_$28007_memory_ptr",
                                    "typeString": "struct VmSafe.Log memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "baseExpression": {
                                    "id": 120798,
                                    "name": "logs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 120752,
                                    "src": "884:4:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                                      "typeString": "struct VmSafe.Log memory[] memory"
                                    }
                                  },
                                  "id": 120800,
                                  "indexExpression": {
                                    "id": 120799,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 120776,
                                    "src": "889:1:148",
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
                                  "src": "884:7:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Log_$28007_memory_ptr",
                                    "typeString": "struct VmSafe.Log memory"
                                  }
                                },
                                "src": "858:33:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Log_$28007_memory_ptr",
                                  "typeString": "struct VmSafe.Log memory"
                                }
                              },
                              "id": 120802,
                              "nodeType": "ExpressionStatement",
                              "src": "858:33:148"
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
                    "id": 120782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 120779,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120776,
                      "src": "769:1:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 120780,
                        "name": "logs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120752,
                        "src": "773:4:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct VmSafe.Log memory[] memory"
                        }
                      },
                      "id": 120781,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "778:6:148",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "773:11:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "769:15:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 120806,
                  "initializationExpression": {
                    "assignments": [
                      120776
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 120776,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "762:1:148",
                        "nodeType": "VariableDeclaration",
                        "scope": 120806,
                        "src": "754:9:148",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 120775,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "754:7:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 120778,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 120777,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "766:1:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "754:13:148"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 120784,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "786:3:148",
                      "subExpression": {
                        "id": 120783,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120776,
                        "src": "786:1:148",
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
                    "id": 120785,
                    "nodeType": "ExpressionStatement",
                    "src": "786:3:148"
                  },
                  "nodeType": "ForStatement",
                  "src": "749:167:148"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "976:53:148",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "filteredLogs",
                              "nodeType": "YulIdentifier",
                              "src": "997:12:148"
                            },
                            {
                              "name": "current",
                              "nodeType": "YulIdentifier",
                              "src": "1011:7:148"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "990:6:148"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "990:29:148"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "990:29:148"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 120762,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1011:7:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120759,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "997:12:148",
                      "valueSize": 1
                    }
                  ],
                  "id": 120807,
                  "nodeType": "InlineAssembly",
                  "src": "967:62:148"
                },
                {
                  "expression": {
                    "id": 120808,
                    "name": "filteredLogs",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 120759,
                    "src": "1045:12:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct VmSafe.Log memory[] memory"
                    }
                  },
                  "functionReturnParameters": 120760,
                  "id": 120809,
                  "nodeType": "Return",
                  "src": "1038:19:148"
                }
              ]
            },
            "documentation": {
              "id": 120748,
              "nodeType": "StructuredDocumentation",
              "src": "230:250:148",
              "text": "@dev Filters an array of longs for events that match the provided\n      selector.\n @param logs The array of logs to filter.\n @param selector The selector to filter for.\n @return filteredLogs The filtered array of logs."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "filterLogs",
            "nameLocation": "494:10:148",
            "parameters": {
              "id": 120755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120752,
                  "mutability": "mutable",
                  "name": "logs",
                  "nameLocation": "534:4:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 120811,
                  "src": "514:24:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 120750,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 120749,
                        "name": "VmSafe.Log",
                        "nameLocations": [
                          "514:6:148",
                          "521:3:148"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 28007,
                        "src": "514:10:148"
                      },
                      "referencedDeclaration": 28007,
                      "src": "514:10:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$28007_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 120751,
                    "nodeType": "ArrayTypeName",
                    "src": "514:12:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$28007_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 120754,
                  "mutability": "mutable",
                  "name": "selector",
                  "nameLocation": "556:8:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 120811,
                  "src": "548:16:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 120753,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "504:66:148"
            },
            "returnParameters": {
              "id": 120760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120759,
                  "mutability": "mutable",
                  "name": "filteredLogs",
                  "nameLocation": "614:12:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 120811,
                  "src": "594:32:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$28007_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 120757,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 120756,
                        "name": "VmSafe.Log",
                        "nameLocations": [
                          "594:6:148",
                          "601:3:148"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 28007,
                        "src": "594:10:148"
                      },
                      "referencedDeclaration": 28007,
                      "src": "594:10:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$28007_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 120758,
                    "nodeType": "ArrayTypeName",
                    "src": "594:12:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$28007_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "593:34:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 120831,
            "nodeType": "FunctionDefinition",
            "src": "1283:192:148",
            "nodes": [],
            "body": {
              "id": 120830,
              "nodeType": "Block",
              "src": "1373:102:148",
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
                                "id": 120824,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1442:15:148",
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
                              "id": 120823,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "1432:9:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 120825,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1432:26:148",
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
                          "id": 120822,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1425:6:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes4_$",
                            "typeString": "type(bytes4)"
                          },
                          "typeName": {
                            "id": 120821,
                            "name": "bytes4",
                            "nodeType": "ElementaryTypeName",
                            "src": "1425:6:148",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 120826,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1425:34:148",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 120827,
                        "name": "reason",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120814,
                        "src": "1461:6:148",
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
                        "id": 120819,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "1402:3:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 120820,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1406:18:148",
                      "memberName": "encodeWithSelector",
                      "nodeType": "MemberAccess",
                      "src": "1402:22:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes4) pure returns (bytes memory)"
                      }
                    },
                    "id": 120828,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1402:66:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 120818,
                  "id": 120829,
                  "nodeType": "Return",
                  "src": "1383:85:148"
                }
              ]
            },
            "documentation": {
              "id": 120812,
              "nodeType": "StructuredDocumentation",
              "src": "1070:208:148",
              "text": "@dev Encodes a reason into a string error. This is useful for verifying\n      string errors in low-level calls.\n @param reason The reason to encode.\n @return The encoded string error."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toError",
            "nameLocation": "1292:7:148",
            "parameters": {
              "id": 120815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120814,
                  "mutability": "mutable",
                  "name": "reason",
                  "nameLocation": "1323:6:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 120831,
                  "src": "1309:20:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 120813,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1309:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1299:36:148"
            },
            "returnParameters": {
              "id": 120818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120817,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 120831,
                  "src": "1359:12:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 120816,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1359:5:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1358:14:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 120980,
            "nodeType": "FunctionDefinition",
            "src": "1924:2036:148",
            "nodes": [],
            "body": {
              "id": 120979,
              "nodeType": "Block",
              "src": "2039:1921:148",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    120842
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 120842,
                      "mutability": "mutable",
                      "name": "maxStringLength",
                      "nameLocation": "2329:15:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 120979,
                      "src": "2321:23:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 120841,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2321:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 120844,
                  "initialValue": {
                    "hexValue": "3739",
                    "id": 120843,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2347:2:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_79_by_1",
                      "typeString": "int_const 79"
                    },
                    "value": "79"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2321:28:148"
                },
                {
                  "assignments": [
                    120846
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 120846,
                      "mutability": "mutable",
                      "name": "rawResult",
                      "nameLocation": "2372:9:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 120979,
                      "src": "2359:22:148",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 120845,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2359:5:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 120851,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 120849,
                        "name": "maxStringLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120842,
                        "src": "2394:15:148",
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
                      "id": 120848,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2384:9:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 120847,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2388:5:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 120850,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2384:26:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2359:51:148"
                },
                {
                  "assignments": [
                    120853
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 120853,
                      "mutability": "mutable",
                      "name": "isNegative",
                      "nameLocation": "2688:10:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 120979,
                      "src": "2683:15:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 120852,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2683:4:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 120857,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 120856,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 120854,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120834,
                      "src": "2701:3:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 120855,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2707:1:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2701:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2683:25:148"
                },
                {
                  "expression": {
                    "id": 120866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 120858,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120834,
                      "src": "2718:3:148",
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
                        "id": 120861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 120859,
                          "name": "num",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120834,
                          "src": "2724:3:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 120860,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2730:1:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2724:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 120864,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120834,
                        "src": "2741:3:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 120865,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "2724:20:148",
                      "trueExpression": {
                        "id": 120863,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "-",
                        "prefix": true,
                        "src": "2734:4:148",
                        "subExpression": {
                          "id": 120862,
                          "name": "num",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120834,
                          "src": "2735:3:148",
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
                    "src": "2718:26:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 120867,
                  "nodeType": "ExpressionStatement",
                  "src": "2718:26:148"
                },
                {
                  "expression": {
                    "id": 120888,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 120868,
                        "name": "rawResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120846,
                        "src": "2909:9:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 120872,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 120871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 120869,
                          "name": "maxStringLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120842,
                          "src": "2919:15:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 120870,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2937:1:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "2919:19:148",
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
                      "src": "2909:30:148",
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
                                  "id": 120884,
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
                                        "id": 120881,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "id": 120879,
                                          "name": "num",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 120834,
                                          "src": "2977:3:148",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "%",
                                        "rightExpression": {
                                          "hexValue": "3130",
                                          "id": 120880,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "2983:2:148",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_10_by_1",
                                            "typeString": "int_const 10"
                                          },
                                          "value": "10"
                                        },
                                        "src": "2977:8:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      }
                                    ],
                                    "id": 120882,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "2976:10:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "+",
                                  "rightExpression": {
                                    "hexValue": "3438",
                                    "id": 120883,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2989:2:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_48_by_1",
                                      "typeString": "int_const 48"
                                    },
                                    "value": "48"
                                  },
                                  "src": "2976:15:148",
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
                                "id": 120878,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2968:7:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 120877,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2968:7:148",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 120885,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2968:24:148",
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
                            "id": 120876,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2962:5:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": {
                              "id": 120875,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "2962:5:148",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 120886,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2962:31:148",
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
                        "id": 120874,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2942:6:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes1_$",
                          "typeString": "type(bytes1)"
                        },
                        "typeName": {
                          "id": 120873,
                          "name": "bytes1",
                          "nodeType": "ElementaryTypeName",
                          "src": "2942:6:148",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 120887,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2942:61:148",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "src": "2909:94:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 120889,
                  "nodeType": "ExpressionStatement",
                  "src": "2909:94:148"
                },
                {
                  "expression": {
                    "id": 120892,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 120890,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120834,
                      "src": "3013:3:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "hexValue": "3130",
                      "id": 120891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3020:2:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "3013:9:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 120893,
                  "nodeType": "ExpressionStatement",
                  "src": "3013:9:148"
                },
                {
                  "assignments": [
                    120895
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 120895,
                      "mutability": "mutable",
                      "name": "digits",
                      "nameLocation": "3040:6:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 120979,
                      "src": "3032:14:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 120894,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3032:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 120897,
                  "initialValue": {
                    "hexValue": "31",
                    "id": 120896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3049:1:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1_by_1",
                      "typeString": "int_const 1"
                    },
                    "value": "1"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3032:18:148"
                },
                {
                  "body": {
                    "id": 120958,
                    "nodeType": "Block",
                    "src": "3103:349:148",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 120913,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 120909,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 120907,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 120836,
                              "src": "3121:8:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 120908,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3132:1:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "3121:12:148",
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
                            "id": 120912,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 120910,
                              "name": "digits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 120895,
                              "src": "3137:6:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 120911,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 120836,
                              "src": "3147:8:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3137:18:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3121:34:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 120953,
                          "nodeType": "Block",
                          "src": "3241:179:148",
                          "statements": [
                            {
                              "expression": {
                                "id": 120947,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 120925,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 120846,
                                    "src": "3259:9:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 120931,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 120930,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 120928,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 120926,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 120842,
                                        "src": "3269:15:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 120927,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 120895,
                                        "src": "3287:6:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "3269:24:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 120929,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3296:1:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "3269:28:148",
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
                                  "src": "3259:39:148",
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
                                              "id": 120943,
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
                                                    "id": 120940,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                      "id": 120938,
                                                      "name": "num",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 120834,
                                                      "src": "3344:3:148",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                      }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "%",
                                                    "rightExpression": {
                                                      "hexValue": "3130",
                                                      "id": 120939,
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "kind": "number",
                                                      "lValueRequested": false,
                                                      "nodeType": "Literal",
                                                      "src": "3350:2:148",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_10_by_1",
                                                        "typeString": "int_const 10"
                                                      },
                                                      "value": "10"
                                                    },
                                                    "src": "3344:8:148",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_int256",
                                                      "typeString": "int256"
                                                    }
                                                  }
                                                ],
                                                "id": 120941,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "3343:10:148",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_int256",
                                                  "typeString": "int256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "+",
                                              "rightExpression": {
                                                "hexValue": "3438",
                                                "id": 120942,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3356:2:148",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_48_by_1",
                                                  "typeString": "int_const 48"
                                                },
                                                "value": "48"
                                              },
                                              "src": "3343:15:148",
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
                                            "id": 120937,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "3335:7:148",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                              "id": 120936,
                                              "name": "uint256",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "3335:7:148",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 120944,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "3335:24:148",
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
                                        "id": 120935,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3329:5:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint8_$",
                                          "typeString": "type(uint8)"
                                        },
                                        "typeName": {
                                          "id": 120934,
                                          "name": "uint8",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3329:5:148",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 120945,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3329:31:148",
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
                                    "id": 120933,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3301:6:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 120932,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3301:6:148",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 120946,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3301:77:148",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "3259:119:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 120948,
                              "nodeType": "ExpressionStatement",
                              "src": "3259:119:148"
                            },
                            {
                              "expression": {
                                "id": 120951,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 120949,
                                  "name": "num",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 120834,
                                  "src": "3396:3:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "/=",
                                "rightHandSide": {
                                  "hexValue": "3130",
                                  "id": 120950,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3403:2:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "src": "3396:9:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 120952,
                              "nodeType": "ExpressionStatement",
                              "src": "3396:9:148"
                            }
                          ]
                        },
                        "id": 120954,
                        "nodeType": "IfStatement",
                        "src": "3117:303:148",
                        "trueBody": {
                          "id": 120924,
                          "nodeType": "Block",
                          "src": "3157:78:148",
                          "statements": [
                            {
                              "expression": {
                                "id": 120922,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 120914,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 120846,
                                    "src": "3175:9:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 120920,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 120919,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 120917,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 120915,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 120842,
                                        "src": "3185:15:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 120916,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 120895,
                                        "src": "3203:6:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "3185:24:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 120918,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3212:1:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "3185:28:148",
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
                                  "src": "3175:39:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "hexValue": "2e",
                                  "id": 120921,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3217:3:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                    "typeString": "literal_string \".\""
                                  },
                                  "value": "."
                                },
                                "src": "3175:45:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 120923,
                              "nodeType": "ExpressionStatement",
                              "src": "3175:45:148"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 120956,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "3433:8:148",
                          "subExpression": {
                            "id": 120955,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120895,
                            "src": "3433:6:148",
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
                        "id": 120957,
                        "nodeType": "ExpressionStatement",
                        "src": "3433:8:148"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 120906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 120900,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 120898,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120834,
                        "src": "3067:3:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 120899,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3074:1:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3067:8:148",
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
                      "id": 120905,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 120901,
                        "name": "digits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120895,
                        "src": "3079:6:148",
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
                        "id": 120904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 120902,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120836,
                          "src": "3089:8:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 120903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3100:1:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "3089:12:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3079:22:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3067:34:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 120959,
                  "nodeType": "WhileStatement",
                  "src": "3060:392:148"
                },
                {
                  "condition": {
                    "id": 120960,
                    "name": "isNegative",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 120853,
                    "src": "3566:10:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 120975,
                  "nodeType": "IfStatement",
                  "src": "3562:108:148",
                  "trueBody": {
                    "id": 120974,
                    "nodeType": "Block",
                    "src": "3578:92:148",
                    "statements": [
                      {
                        "expression": {
                          "id": 120969,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 120961,
                              "name": "rawResult",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 120846,
                              "src": "3592:9:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 120967,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 120966,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 120964,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 120962,
                                  "name": "maxStringLength",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 120842,
                                  "src": "3602:15:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 120963,
                                  "name": "digits",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 120895,
                                  "src": "3620:6:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3602:24:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 120965,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3629:1:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "3602:28:148",
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
                            "src": "3592:39:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "2d",
                            "id": 120968,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3634:3:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561",
                              "typeString": "literal_string \"-\""
                            },
                            "value": "-"
                          },
                          "src": "3592:45:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 120970,
                        "nodeType": "ExpressionStatement",
                        "src": "3592:45:148"
                      },
                      {
                        "expression": {
                          "id": 120972,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "3651:8:148",
                          "subExpression": {
                            "id": 120971,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120895,
                            "src": "3651:6:148",
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
                        "id": 120973,
                        "nodeType": "ExpressionStatement",
                        "src": "3651:8:148"
                      }
                    ]
                  }
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "3802:129:148",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3816:62:148",
                        "value": {
                          "arguments": [
                            {
                              "name": "rawResult",
                              "nodeType": "YulIdentifier",
                              "src": "3830:9:148"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "maxStringLength",
                                      "nodeType": "YulIdentifier",
                                      "src": "3849:15:148"
                                    },
                                    {
                                      "name": "digits",
                                      "nodeType": "YulIdentifier",
                                      "src": "3866:6:148"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "3845:3:148"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3845:28:148"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3875:1:148",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3841:3:148"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3841:36:148"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3826:3:148"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3826:52:148"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "3816:6:148"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "result",
                              "nodeType": "YulIdentifier",
                              "src": "3898:6:148"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "digits",
                                  "nodeType": "YulIdentifier",
                                  "src": "3910:6:148"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3918:1:148",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3906:3:148"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3906:14:148"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3891:6:148"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3891:30:148"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3891:30:148"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 120895,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3866:6:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120895,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3910:6:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120842,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3849:15:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120846,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3830:9:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120839,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3816:6:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120839,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3898:6:148",
                      "valueSize": 1
                    }
                  ],
                  "id": 120976,
                  "nodeType": "InlineAssembly",
                  "src": "3793:138:148"
                },
                {
                  "expression": {
                    "id": 120977,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 120839,
                    "src": "3947:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 120840,
                  "id": 120978,
                  "nodeType": "Return",
                  "src": "3940:13:148"
                }
              ]
            },
            "documentation": {
              "id": 120832,
              "nodeType": "StructuredDocumentation",
              "src": "1481:438:148",
              "text": "@dev Converts a signed integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "1933:8:148",
            "parameters": {
              "id": 120837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120834,
                  "mutability": "mutable",
                  "name": "num",
                  "nameLocation": "1958:3:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 120980,
                  "src": "1951:10:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 120833,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1951:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 120836,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "1979:8:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 120980,
                  "src": "1971:16:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120835,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1971:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1941:52:148"
            },
            "returnParameters": {
              "id": 120840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120839,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2031:6:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 120980,
                  "src": "2017:20:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 120838,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2017:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2016:22:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121091,
            "nodeType": "FunctionDefinition",
            "src": "4412:1394:148",
            "nodes": [],
            "body": {
              "id": 121090,
              "nodeType": "Block",
              "src": "4528:1278:148",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    120991
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 120991,
                      "mutability": "mutable",
                      "name": "maxStringLength",
                      "nameLocation": "4767:15:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 121090,
                      "src": "4759:23:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 120990,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4759:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 120993,
                  "initialValue": {
                    "hexValue": "3739",
                    "id": 120992,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4785:2:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_79_by_1",
                      "typeString": "int_const 79"
                    },
                    "value": "79"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4759:28:148"
                },
                {
                  "assignments": [
                    120995
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 120995,
                      "mutability": "mutable",
                      "name": "rawResult",
                      "nameLocation": "4810:9:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 121090,
                      "src": "4797:22:148",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 120994,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4797:5:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121000,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 120998,
                        "name": "maxStringLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120991,
                        "src": "4832:15:148",
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
                      "id": 120997,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4822:9:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 120996,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4826:5:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 120999,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4822:26:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4797:51:148"
                },
                {
                  "expression": {
                    "id": 121018,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 121001,
                        "name": "rawResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120995,
                        "src": "5013:9:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 121005,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 121004,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 121002,
                          "name": "maxStringLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120991,
                          "src": "5023:15:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 121003,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5041:1:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5023:19:148",
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
                      "src": "5013:30:148",
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
                              "id": 121015,
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
                                    "id": 121012,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 121010,
                                      "name": "num",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 120983,
                                      "src": "5060:3:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "%",
                                    "rightExpression": {
                                      "hexValue": "3130",
                                      "id": 121011,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5066:2:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_10_by_1",
                                        "typeString": "int_const 10"
                                      },
                                      "value": "10"
                                    },
                                    "src": "5060:8:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 121013,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "5059:10:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "3438",
                                "id": 121014,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5072:2:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_48_by_1",
                                  "typeString": "int_const 48"
                                },
                                "value": "48"
                              },
                              "src": "5059:15:148",
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
                            "id": 121009,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5053:5:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": {
                              "id": 121008,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "5053:5:148",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 121016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5053:22:148",
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
                        "id": 121007,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5046:6:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes1_$",
                          "typeString": "type(bytes1)"
                        },
                        "typeName": {
                          "id": 121006,
                          "name": "bytes1",
                          "nodeType": "ElementaryTypeName",
                          "src": "5046:6:148",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 121017,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5046:30:148",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "src": "5013:63:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 121019,
                  "nodeType": "ExpressionStatement",
                  "src": "5013:63:148"
                },
                {
                  "expression": {
                    "id": 121022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 121020,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120983,
                      "src": "5086:3:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "hexValue": "3130",
                      "id": 121021,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5093:2:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "5086:9:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 121023,
                  "nodeType": "ExpressionStatement",
                  "src": "5086:9:148"
                },
                {
                  "assignments": [
                    121025
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121025,
                      "mutability": "mutable",
                      "name": "digits",
                      "nameLocation": "5113:6:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 121090,
                      "src": "5105:14:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121024,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5105:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121027,
                  "initialValue": {
                    "hexValue": "31",
                    "id": 121026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5122:1:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1_by_1",
                      "typeString": "int_const 1"
                    },
                    "value": "1"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5105:18:148"
                },
                {
                  "body": {
                    "id": 121085,
                    "nodeType": "Block",
                    "src": "5176:340:148",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 121043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 121039,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 121037,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 120985,
                              "src": "5194:8:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 121038,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5205:1:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "5194:12:148",
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
                            "id": 121042,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 121040,
                              "name": "digits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121025,
                              "src": "5210:6:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 121041,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 120985,
                              "src": "5220:8:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5210:18:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "5194:34:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 121080,
                          "nodeType": "Block",
                          "src": "5314:170:148",
                          "statements": [
                            {
                              "expression": {
                                "id": 121074,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 121055,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 120995,
                                    "src": "5332:9:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 121061,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 121060,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 121058,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 121056,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 120991,
                                        "src": "5342:15:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 121057,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 121025,
                                        "src": "5360:6:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "5342:24:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 121059,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5369:1:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "5342:28:148",
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
                                  "src": "5332:39:148",
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
                                          "id": 121071,
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
                                                "id": 121068,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "id": 121066,
                                                  "name": "num",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 120983,
                                                  "src": "5409:3:148",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "%",
                                                "rightExpression": {
                                                  "hexValue": "3130",
                                                  "id": 121067,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "5415:2:148",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_10_by_1",
                                                    "typeString": "int_const 10"
                                                  },
                                                  "value": "10"
                                                },
                                                "src": "5409:8:148",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              }
                                            ],
                                            "id": 121069,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "5408:10:148",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "+",
                                          "rightExpression": {
                                            "hexValue": "3438",
                                            "id": 121070,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5421:2:148",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_48_by_1",
                                              "typeString": "int_const 48"
                                            },
                                            "value": "48"
                                          },
                                          "src": "5408:15:148",
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
                                        "id": 121065,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "5402:5:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint8_$",
                                          "typeString": "type(uint8)"
                                        },
                                        "typeName": {
                                          "id": 121064,
                                          "name": "uint8",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "5402:5:148",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 121072,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "5402:22:148",
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
                                    "id": 121063,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5374:6:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 121062,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5374:6:148",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 121073,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5374:68:148",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "5332:110:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 121075,
                              "nodeType": "ExpressionStatement",
                              "src": "5332:110:148"
                            },
                            {
                              "expression": {
                                "id": 121078,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 121076,
                                  "name": "num",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 120983,
                                  "src": "5460:3:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "/=",
                                "rightHandSide": {
                                  "hexValue": "3130",
                                  "id": 121077,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5467:2:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "src": "5460:9:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 121079,
                              "nodeType": "ExpressionStatement",
                              "src": "5460:9:148"
                            }
                          ]
                        },
                        "id": 121081,
                        "nodeType": "IfStatement",
                        "src": "5190:294:148",
                        "trueBody": {
                          "id": 121054,
                          "nodeType": "Block",
                          "src": "5230:78:148",
                          "statements": [
                            {
                              "expression": {
                                "id": 121052,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 121044,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 120995,
                                    "src": "5248:9:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 121050,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 121049,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 121047,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 121045,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 120991,
                                        "src": "5258:15:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 121046,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 121025,
                                        "src": "5276:6:148",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "5258:24:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 121048,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5285:1:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "5258:28:148",
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
                                  "src": "5248:39:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "hexValue": "2e",
                                  "id": 121051,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5290:3:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                    "typeString": "literal_string \".\""
                                  },
                                  "value": "."
                                },
                                "src": "5248:45:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 121053,
                              "nodeType": "ExpressionStatement",
                              "src": "5248:45:148"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 121083,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "5497:8:148",
                          "subExpression": {
                            "id": 121082,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121025,
                            "src": "5497:6:148",
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
                        "id": 121084,
                        "nodeType": "ExpressionStatement",
                        "src": "5497:8:148"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 121036,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 121030,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 121028,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120983,
                        "src": "5140:3:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 121029,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5147:1:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5140:8:148",
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
                      "id": 121035,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 121031,
                        "name": "digits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121025,
                        "src": "5152:6:148",
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
                        "id": 121034,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 121032,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120985,
                          "src": "5162:8:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 121033,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5173:1:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5162:12:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5152:22:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5140:34:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 121086,
                  "nodeType": "WhileStatement",
                  "src": "5133:383:148"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5648:129:148",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5662:62:148",
                        "value": {
                          "arguments": [
                            {
                              "name": "rawResult",
                              "nodeType": "YulIdentifier",
                              "src": "5676:9:148"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "maxStringLength",
                                      "nodeType": "YulIdentifier",
                                      "src": "5695:15:148"
                                    },
                                    {
                                      "name": "digits",
                                      "nodeType": "YulIdentifier",
                                      "src": "5712:6:148"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "5691:3:148"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5691:28:148"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5721:1:148",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "5687:3:148"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5687:36:148"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5672:3:148"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5672:52:148"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "5662:6:148"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "result",
                              "nodeType": "YulIdentifier",
                              "src": "5744:6:148"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "digits",
                                  "nodeType": "YulIdentifier",
                                  "src": "5756:6:148"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5764:1:148",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5752:3:148"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5752:14:148"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5737:6:148"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5737:30:148"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5737:30:148"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 121025,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5712:6:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 121025,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5756:6:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120991,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5695:15:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120995,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5676:9:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120988,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5662:6:148",
                      "valueSize": 1
                    },
                    {
                      "declaration": 120988,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5744:6:148",
                      "valueSize": 1
                    }
                  ],
                  "id": 121087,
                  "nodeType": "InlineAssembly",
                  "src": "5639:138:148"
                },
                {
                  "expression": {
                    "id": 121088,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 120988,
                    "src": "5793:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 120989,
                  "id": 121089,
                  "nodeType": "Return",
                  "src": "5786:13:148"
                }
              ]
            },
            "documentation": {
              "id": 120981,
              "nodeType": "StructuredDocumentation",
              "src": "3966:441:148",
              "text": "@dev Converts an unsigned integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "4421:8:148",
            "parameters": {
              "id": 120986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120983,
                  "mutability": "mutable",
                  "name": "num",
                  "nameLocation": "4447:3:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121091,
                  "src": "4439:11:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120982,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4439:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 120985,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4468:8:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121091,
                  "src": "4460:16:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120984,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4460:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4429:53:148"
            },
            "returnParameters": {
              "id": 120989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120988,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4520:6:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121091,
                  "src": "4506:20:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 120987,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4506:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4505:22:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121160,
            "nodeType": "FunctionDefinition",
            "src": "5812:448:148",
            "nodes": [],
            "body": {
              "id": 121159,
              "nodeType": "Block",
              "src": "5913:347:148",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 121102,
                        "name": "prelude",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121093,
                        "src": "5936:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "hexValue": "5b",
                        "id": 121103,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5945:3:148",
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
                        "id": 121099,
                        "name": "console2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45716,
                        "src": "5923:8:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_console2_$45716_$",
                          "typeString": "type(library console2)"
                        }
                      },
                      "id": 121101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5932:3:148",
                      "memberName": "log",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 38377,
                      "src": "5923:12:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory) pure"
                      }
                    },
                    "id": 121104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5923:26:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121105,
                  "nodeType": "ExpressionStatement",
                  "src": "5923:26:148"
                },
                {
                  "body": {
                    "id": 121145,
                    "nodeType": "Block",
                    "src": "6002:195:148",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 121122,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 121117,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121107,
                            "src": "6020:1:148",
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
                            "id": 121121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 121118,
                                "name": "array",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121096,
                                "src": "6024:5:148",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 121119,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6030:6:148",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "6024:12:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 121120,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6039:1:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "6024:16:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6020:20:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 121143,
                          "nodeType": "Block",
                          "src": "6120:67:148",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "2020202020202020",
                                    "id": 121137,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6151:10:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                      "typeString": "literal_string \"        \""
                                    },
                                    "value": "        "
                                  },
                                  {
                                    "baseExpression": {
                                      "id": 121138,
                                      "name": "array",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 121096,
                                      "src": "6163:5:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[] memory"
                                      }
                                    },
                                    "id": 121140,
                                    "indexExpression": {
                                      "id": 121139,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 121107,
                                      "src": "6169:1:148",
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
                                    "src": "6163:8:148",
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
                                    "id": 121134,
                                    "name": "console2",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 45716,
                                    "src": "6138:8:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_console2_$45716_$",
                                      "typeString": "type(library console2)"
                                    }
                                  },
                                  "id": 121136,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "6147:3:148",
                                  "memberName": "log",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 38343,
                                  "src": "6138:12:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                                    "typeString": "function (string memory,uint256) pure"
                                  }
                                },
                                "id": 121141,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6138:34:148",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 121142,
                              "nodeType": "ExpressionStatement",
                              "src": "6138:34:148"
                            }
                          ]
                        },
                        "id": 121144,
                        "nodeType": "IfStatement",
                        "src": "6016:171:148",
                        "trueBody": {
                          "id": 121133,
                          "nodeType": "Block",
                          "src": "6042:72:148",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "2020202020202020",
                                    "id": 121126,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6073:10:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                      "typeString": "literal_string \"        \""
                                    },
                                    "value": "        "
                                  },
                                  {
                                    "baseExpression": {
                                      "id": 121127,
                                      "name": "array",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 121096,
                                      "src": "6085:5:148",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[] memory"
                                      }
                                    },
                                    "id": 121129,
                                    "indexExpression": {
                                      "id": 121128,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 121107,
                                      "src": "6091:1:148",
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
                                    "src": "6085:8:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "hexValue": "2c",
                                    "id": 121130,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6095:3:148",
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
                                    "id": 121123,
                                    "name": "console2",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 45716,
                                    "src": "6060:8:148",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_console2_$45716_$",
                                      "typeString": "type(library console2)"
                                    }
                                  },
                                  "id": 121125,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "6069:3:148",
                                  "memberName": "log",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 38907,
                                  "src": "6060:12:148",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory,uint256,string memory) pure"
                                  }
                                },
                                "id": 121131,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6060:39:148",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 121132,
                              "nodeType": "ExpressionStatement",
                              "src": "6060:39:148"
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
                    "id": 121113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121110,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121107,
                      "src": "5979:1:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 121111,
                        "name": "array",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121096,
                        "src": "5983:5:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 121112,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5989:6:148",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "5983:12:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5979:16:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 121146,
                  "initializationExpression": {
                    "assignments": [
                      121107
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 121107,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "5972:1:148",
                        "nodeType": "VariableDeclaration",
                        "scope": 121146,
                        "src": "5964:9:148",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 121106,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5964:7:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 121109,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 121108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5976:1:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5964:13:148"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 121115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5997:3:148",
                      "subExpression": {
                        "id": 121114,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121107,
                        "src": "5997:1:148",
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
                    "id": 121116,
                    "nodeType": "ExpressionStatement",
                    "src": "5997:3:148"
                  },
                  "nodeType": "ForStatement",
                  "src": "5959:238:148"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "202020205d",
                        "id": 121150,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6219:7:148",
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
                        "id": 121147,
                        "name": "console2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45716,
                        "src": "6206:8:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_console2_$45716_$",
                          "typeString": "type(library console2)"
                        }
                      },
                      "id": 121149,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6215:3:148",
                      "memberName": "log",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 38230,
                      "src": "6206:12:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 121151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6206:21:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121152,
                  "nodeType": "ExpressionStatement",
                  "src": "6206:21:148"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 121156,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6250:2:148",
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
                        "id": 121153,
                        "name": "console2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45716,
                        "src": "6237:8:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_console2_$45716_$",
                          "typeString": "type(library console2)"
                        }
                      },
                      "id": 121155,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6246:3:148",
                      "memberName": "log",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 38230,
                      "src": "6237:12:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 121157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6237:16:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121158,
                  "nodeType": "ExpressionStatement",
                  "src": "6237:16:148"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "logArray",
            "nameLocation": "5821:8:148",
            "parameters": {
              "id": 121097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121093,
                  "mutability": "mutable",
                  "name": "prelude",
                  "nameLocation": "5853:7:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121160,
                  "src": "5839:21:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 121092,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5839:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121096,
                  "mutability": "mutable",
                  "name": "array",
                  "nameLocation": "5887:5:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121160,
                  "src": "5870:22:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 121094,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5870:7:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 121095,
                    "nodeType": "ArrayTypeName",
                    "src": "5870:9:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5829:69:148"
            },
            "returnParameters": {
              "id": 121098,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5913:0:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121197,
            "nodeType": "FunctionDefinition",
            "src": "6266:333:148",
            "nodes": [],
            "body": {
              "id": 121196,
              "nodeType": "Block",
              "src": "6403:196:148",
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
                        "id": 121174,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 121172,
                          "name": "minimum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121164,
                          "src": "6421:7:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 121173,
                          "name": "maximum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121166,
                          "src": "6432:7:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6421:18:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c69623a206d696e203e206d6178",
                        "id": 121175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6441:16:148",
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
                      "id": 121171,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6413:7:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 121176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6413:45:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121177,
                  "nodeType": "ExpressionStatement",
                  "src": "6413:45:148"
                },
                {
                  "assignments": [
                    121179
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121179,
                      "mutability": "mutable",
                      "name": "rangeSize",
                      "nameLocation": "6477:9:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 121196,
                      "src": "6469:17:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121178,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6469:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121185,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 121184,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 121182,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 121180,
                        "name": "maximum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121166,
                        "src": "6489:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 121181,
                        "name": "minimum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121164,
                        "src": "6499:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6489:17:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 121183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6509:1:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6489:21:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6469:41:148"
                },
                {
                  "assignments": [
                    121187
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121187,
                      "mutability": "mutable",
                      "name": "modValue",
                      "nameLocation": "6528:8:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 121196,
                      "src": "6520:16:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121186,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6520:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121191,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 121190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121188,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121162,
                      "src": "6539:5:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "id": 121189,
                      "name": "rangeSize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121179,
                      "src": "6547:9:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6539:17:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6520:36:148"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 121194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121192,
                      "name": "modValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121187,
                      "src": "6574:8:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 121193,
                      "name": "minimum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121164,
                      "src": "6585:7:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6574:18:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121170,
                  "id": 121195,
                  "nodeType": "Return",
                  "src": "6567:25:148"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "normalizeToRange",
            "nameLocation": "6275:16:148",
            "parameters": {
              "id": 121167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121162,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6309:5:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121197,
                  "src": "6301:13:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121161,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6301:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121164,
                  "mutability": "mutable",
                  "name": "minimum",
                  "nameLocation": "6332:7:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121197,
                  "src": "6324:15:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121163,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6324:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121166,
                  "mutability": "mutable",
                  "name": "maximum",
                  "nameLocation": "6357:7:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121197,
                  "src": "6349:15:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121165,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6349:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6291:79:148"
            },
            "returnParameters": {
              "id": 121170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121169,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121197,
                  "src": "6394:7:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121168,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6394:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6393:9:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121243,
            "nodeType": "FunctionDefinition",
            "src": "6605:401:148",
            "nodes": [],
            "body": {
              "id": 121242,
              "nodeType": "Block",
              "src": "6738:268:148",
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
                        "id": 121211,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 121209,
                          "name": "minimum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121201,
                          "src": "6756:7:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 121210,
                          "name": "maximum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121203,
                          "src": "6767:7:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6756:18:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c69623a206d696e203e206d6178",
                        "id": 121212,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6776:16:148",
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
                      "id": 121208,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6748:7:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 121213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6748:45:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121214,
                  "nodeType": "ExpressionStatement",
                  "src": "6748:45:148"
                },
                {
                  "assignments": [
                    121216
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121216,
                      "mutability": "mutable",
                      "name": "rangeSize",
                      "nameLocation": "6811:9:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 121242,
                      "src": "6804:16:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 121215,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6804:6:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121222,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 121221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 121219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 121217,
                        "name": "maximum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121203,
                        "src": "6823:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 121218,
                        "name": "minimum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121201,
                        "src": "6833:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "6823:17:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 121220,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6843:1:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6823:21:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6804:40:148"
                },
                {
                  "assignments": [
                    121224
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121224,
                      "mutability": "mutable",
                      "name": "modValue",
                      "nameLocation": "6861:8:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 121242,
                      "src": "6854:15:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 121223,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6854:6:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121228,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 121227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121225,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121199,
                      "src": "6872:5:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "id": 121226,
                      "name": "rangeSize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121216,
                      "src": "6880:9:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6872:17:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6854:35:148"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 121231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121229,
                      "name": "modValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121224,
                      "src": "6904:8:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 121230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6915:1:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6904:12:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 121237,
                  "nodeType": "IfStatement",
                  "src": "6900:64:148",
                  "trueBody": {
                    "id": 121236,
                    "nodeType": "Block",
                    "src": "6918:46:148",
                    "statements": [
                      {
                        "expression": {
                          "id": 121234,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 121232,
                            "name": "modValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121224,
                            "src": "6932:8:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 121233,
                            "name": "rangeSize",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121216,
                            "src": "6944:9:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6932:21:148",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 121235,
                        "nodeType": "ExpressionStatement",
                        "src": "6932:21:148"
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
                    "id": 121240,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121238,
                      "name": "modValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121224,
                      "src": "6981:8:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 121239,
                      "name": "minimum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121201,
                      "src": "6992:7:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6981:18:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 121207,
                  "id": 121241,
                  "nodeType": "Return",
                  "src": "6974:25:148"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "normalizeToRange",
            "nameLocation": "6614:16:148",
            "parameters": {
              "id": 121204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121199,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6647:5:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121243,
                  "src": "6640:12:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121198,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6640:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121201,
                  "mutability": "mutable",
                  "name": "minimum",
                  "nameLocation": "6669:7:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121243,
                  "src": "6662:14:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121200,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6662:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121203,
                  "mutability": "mutable",
                  "name": "maximum",
                  "nameLocation": "6693:7:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121243,
                  "src": "6686:14:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121202,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6686:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6630:76:148"
            },
            "returnParameters": {
              "id": 121207,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121206,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121243,
                  "src": "6730:6:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121205,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6730:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6729:8:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121267,
            "nodeType": "FunctionDefinition",
            "src": "7012:205:148",
            "nodes": [],
            "body": {
              "id": 121266,
              "nodeType": "Block",
              "src": "7130:87:148",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121255
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121255,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "7148:5:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 121266,
                      "src": "7140:13:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121254,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7140:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121261,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 121258,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121245,
                        "src": "7170:1:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 121259,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121247,
                        "src": "7173:1:148",
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
                        "id": 121256,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "7156:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 121257,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7164:5:148",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24306,
                      "src": "7156:13:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7156:19:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7140:35:148"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 121264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121262,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121255,
                      "src": "7192:5:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 121263,
                      "name": "tolerance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121249,
                      "src": "7201:9:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7192:18:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 121253,
                  "id": 121265,
                  "nodeType": "Return",
                  "src": "7185:25:148"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approxEq",
            "nameLocation": "7021:8:148",
            "parameters": {
              "id": 121250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121245,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7047:1:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121267,
                  "src": "7039:9:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121244,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7039:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121247,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7066:1:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121267,
                  "src": "7058:9:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121246,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7058:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121249,
                  "mutability": "mutable",
                  "name": "tolerance",
                  "nameLocation": "7085:9:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121267,
                  "src": "7077:17:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121248,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7077:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7029:71:148"
            },
            "returnParameters": {
              "id": 121253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121252,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121267,
                  "src": "7124:4:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 121251,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7124:4:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7123:6:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121291,
            "nodeType": "FunctionDefinition",
            "src": "7223:203:148",
            "nodes": [],
            "body": {
              "id": 121290,
              "nodeType": "Block",
              "src": "7339:87:148",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121279
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121279,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "7357:5:148",
                      "nodeType": "VariableDeclaration",
                      "scope": 121290,
                      "src": "7349:13:148",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121278,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7349:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121285,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 121282,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121269,
                        "src": "7379:1:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 121283,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121271,
                        "src": "7382:1:148",
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
                        "id": 121280,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24395,
                        "src": "7365:7:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$24395_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 121281,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7373:5:148",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24342,
                      "src": "7365:13:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 121284,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7365:19:148",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7349:35:148"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 121288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121286,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121279,
                      "src": "7401:5:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 121287,
                      "name": "tolerance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121273,
                      "src": "7410:9:148",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7401:18:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 121277,
                  "id": 121289,
                  "nodeType": "Return",
                  "src": "7394:25:148"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approxEq",
            "nameLocation": "7232:8:148",
            "parameters": {
              "id": 121274,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121269,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7257:1:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121291,
                  "src": "7250:8:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121268,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7250:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121271,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7275:1:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121291,
                  "src": "7268:8:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121270,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7268:6:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121273,
                  "mutability": "mutable",
                  "name": "tolerance",
                  "nameLocation": "7294:9:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121291,
                  "src": "7286:17:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121272,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7286:7:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7240:69:148"
            },
            "returnParameters": {
              "id": 121277,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121276,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121291,
                  "src": "7333:4:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 121275,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7333:4:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7332:6:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121315,
            "nodeType": "FunctionDefinition",
            "src": "7432:175:148",
            "nodes": [],
            "body": {
              "id": 121314,
              "nodeType": "Block",
              "src": "7505:102:148",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 121312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 121303,
                              "name": "b1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121293,
                              "src": "7561:2:148",
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
                              "id": 121301,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7544:3:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 121302,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7548:12:148",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7544:16:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 121304,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7544:20:148",
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
                        "id": 121300,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7534:9:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 121305,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7534:31:148",
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
                              "id": 121309,
                              "name": "b2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121295,
                              "src": "7596:2:148",
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
                              "id": 121307,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7579:3:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 121308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7583:12:148",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7579:16:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 121310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7579:20:148",
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
                        "id": 121306,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7569:9:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 121311,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7569:31:148",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7534:66:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 121299,
                  "id": 121313,
                  "nodeType": "Return",
                  "src": "7515:85:148"
                }
              ]
            },
            "functionSelector": "cdb16840",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "eq",
            "nameLocation": "7441:2:148",
            "parameters": {
              "id": 121296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121293,
                  "mutability": "mutable",
                  "name": "b1",
                  "nameLocation": "7457:2:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121315,
                  "src": "7444:15:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 121292,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7444:5:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121295,
                  "mutability": "mutable",
                  "name": "b2",
                  "nameLocation": "7474:2:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121315,
                  "src": "7461:15:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 121294,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7461:5:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7443:34:148"
            },
            "returnParameters": {
              "id": 121299,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121298,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121315,
                  "src": "7499:4:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 121297,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7499:4:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7498:6:148"
            },
            "scope": 121340,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 121339,
            "nodeType": "FunctionDefinition",
            "src": "7613:176:148",
            "nodes": [],
            "body": {
              "id": 121338,
              "nodeType": "Block",
              "src": "7687:102:148",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 121336,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 121327,
                              "name": "b1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121317,
                              "src": "7743:2:148",
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
                              "id": 121325,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7726:3:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 121326,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7730:12:148",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7726:16:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 121328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7726:20:148",
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
                        "id": 121324,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7716:9:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 121329,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7716:31:148",
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
                              "id": 121333,
                              "name": "b2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121319,
                              "src": "7778:2:148",
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
                              "id": 121331,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7761:3:148",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 121332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7765:12:148",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7761:16:148",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 121334,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7761:20:148",
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
                        "id": 121330,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7751:9:148",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 121335,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7751:31:148",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7716:66:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 121323,
                  "id": 121337,
                  "nodeType": "Return",
                  "src": "7697:85:148"
                }
              ]
            },
            "functionSelector": "d37a20ba",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "neq",
            "nameLocation": "7622:3:148",
            "parameters": {
              "id": 121320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121317,
                  "mutability": "mutable",
                  "name": "b1",
                  "nameLocation": "7639:2:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121339,
                  "src": "7626:15:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 121316,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7626:5:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121319,
                  "mutability": "mutable",
                  "name": "b2",
                  "nameLocation": "7656:2:148",
                  "nodeType": "VariableDeclaration",
                  "scope": 121339,
                  "src": "7643:15:148",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 121318,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7643:5:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7625:34:148"
            },
            "returnParameters": {
              "id": 121323,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121322,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121339,
                  "src": "7681:4:148",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 121321,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7681:4:148",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7680:6:148"
            },
            "scope": 121340,
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
          121340
        ],
        "name": "Lib",
        "nameLocation": "220:3:148",
        "scope": 121341,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 148
} as const;
