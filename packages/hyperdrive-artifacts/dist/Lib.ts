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
    "object": "0x61029e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220b88d8bd37583e52fe890fc46ceab17b31ce8bef0ccdc0b230ae03efade12e22164736f6c63430008130033",
    "sourceMap": "212:7579:166:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;212:7579:166;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220b88d8bd37583e52fe890fc46ceab17b31ce8bef0ccdc0b230ae03efade12e22164736f6c63430008130033",
    "sourceMap": "212:7579:166:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7432:175;;;;;;:::i;:::-;;:::i;:::-;;;1586:14:167;;1579:22;1561:41;;1549:2;1534:18;7432:175:166;;;;;;;7613:176;;;;;;:::i;:::-;;:::i;7432:175::-;7499:4;7596:2;7579:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7569:31;;;;;;7561:2;7544:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7534:31;;;;;;:66;7515:85;;7432:175;;;;:::o;7613:176::-;7681:4;7778:2;7761:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7751:31;;;;;;7743:2;7726:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7716:31;;;;;;:66;;7697:85;;7613:176;;;;:::o;14:127:167:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:718;188:5;241:3;234:4;226:6;222:17;218:27;208:55;;259:1;256;249:12;208:55;295:6;282:20;321:18;358:2;354;351:10;348:36;;;364:18;;:::i;:::-;439:2;433:9;407:2;493:13;;-1:-1:-1;;489:22:167;;;513:2;485:31;481:40;469:53;;;537:18;;;557:22;;;534:46;531:72;;;583:18;;:::i;:::-;623:10;619:2;612:22;658:2;650:6;643:18;704:3;697:4;692:2;684:6;680:15;676:26;673:35;670:55;;;721:1;718;711:12;670:55;785:2;778:4;770:6;766:17;759:4;751:6;747:17;734:54;832:1;825:4;820:2;812:6;808:15;804:26;797:37;852:6;843:15;;;;;;146:718;;;;:::o;869:539::-;955:6;963;1016:2;1004:9;995:7;991:23;987:32;984:52;;;1032:1;1029;1022:12;984:52;1072:9;1059:23;1101:18;1142:2;1134:6;1131:14;1128:34;;;1158:1;1155;1148:12;1128:34;1181:49;1222:7;1213:6;1202:9;1198:22;1181:49;:::i;:::-;1171:59;;1283:2;1272:9;1268:18;1255:32;1239:48;;1312:2;1302:8;1299:16;1296:36;;;1328:1;1325;1318:12;1296:36;;1351:51;1394:7;1383:8;1372:9;1368:24;1351:51;:::i;:::-;1341:61;;;869:539;;;;;:::o;1613:412::-;1742:3;1780:6;1774:13;1805:1;1815:129;1829:6;1826:1;1823:13;1815:129;;;1927:4;1911:14;;;1907:25;;1901:32;1888:11;;;1881:53;1844:12;1815:129;;;-1:-1:-1;1999:1:167;1963:16;;1988:13;;;-1:-1:-1;1963:16:167;1613:412;-1:-1:-1;1613:412:167:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "eq(bytes,bytes)": "cdb16840",
    "neq(bytes,bytes)": "d37a20ba"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"eq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"neq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/Lib.sol\":\"Lib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"test/utils/Lib.sol\":{\"keccak256\":\"0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171\",\"dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu\"]}},\"version\":1}",
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
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
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
    "id": 125393,
    "exportedSymbols": {
      "Lib": [
        125392
      ],
      "Vm": [
        28947
      ],
      "VmSafe": [
        28475
      ],
      "console2": [
        45136
      ],
      "stdMath": [
        23815
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:7753:166",
    "nodes": [
      {
        "id": 124792,
        "nodeType": "PragmaDirective",
        "src": "39:23:166",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 124794,
        "nodeType": "ImportDirective",
        "src": "64:50:166",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/console2.sol",
        "file": "forge-std/console2.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 125393,
        "sourceUnit": 45137,
        "symbolAliases": [
          {
            "foreign": {
              "id": 124793,
              "name": "console2",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 45136,
              "src": "73:8:166",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 124796,
        "nodeType": "ImportDirective",
        "src": "115:48:166",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/StdMath.sol",
        "file": "forge-std/StdMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 125393,
        "sourceUnit": 23816,
        "symbolAliases": [
          {
            "foreign": {
              "id": 124795,
              "name": "stdMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 23815,
              "src": "124:7:166",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 124799,
        "nodeType": "ImportDirective",
        "src": "164:46:166",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "forge-std/Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 125393,
        "sourceUnit": 28948,
        "symbolAliases": [
          {
            "foreign": {
              "id": 124797,
              "name": "Vm",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 28947,
              "src": "173:2:166",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 124798,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 28475,
              "src": "177:6:166",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 125392,
        "nodeType": "ContractDefinition",
        "src": "212:7579:166",
        "nodes": [
          {
            "id": 124863,
            "nodeType": "FunctionDefinition",
            "src": "485:579:166",
            "nodes": [],
            "body": {
              "id": 124862,
              "nodeType": "Block",
              "src": "628:436:166",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    124814
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 124814,
                      "mutability": "mutable",
                      "name": "current",
                      "nameLocation": "674:7:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 124862,
                      "src": "666:15:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 124813,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "666:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 124816,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 124815,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "684:1:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "666:19:166"
                },
                {
                  "expression": {
                    "id": 124825,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 124817,
                      "name": "filteredLogs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 124811,
                      "src": "695:12:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct VmSafe.Log memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 124822,
                            "name": "logs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 124804,
                            "src": "727:4:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                              "typeString": "struct VmSafe.Log memory[] memory"
                            }
                          },
                          "id": 124823,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "732:6:166",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "727:11:166",
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
                        "id": 124821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "710:16:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (struct VmSafe.Log memory[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 124819,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 124818,
                              "name": "VmSafe.Log",
                              "nameLocations": [
                                "714:6:166",
                                "721:3:166"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 27427,
                              "src": "714:10:166"
                            },
                            "referencedDeclaration": 27427,
                            "src": "714:10:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Log_$27427_storage_ptr",
                              "typeString": "struct VmSafe.Log"
                            }
                          },
                          "id": 124820,
                          "nodeType": "ArrayTypeName",
                          "src": "714:12:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Log_$27427_storage_$dyn_storage_ptr",
                            "typeString": "struct VmSafe.Log[]"
                          }
                        }
                      },
                      "id": 124824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "710:29:166",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct VmSafe.Log memory[] memory"
                      }
                    },
                    "src": "695:44:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct VmSafe.Log memory[] memory"
                    }
                  },
                  "id": 124826,
                  "nodeType": "ExpressionStatement",
                  "src": "695:44:166"
                },
                {
                  "body": {
                    "id": 124857,
                    "nodeType": "Block",
                    "src": "791:125:166",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 124845,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "expression": {
                                "baseExpression": {
                                  "id": 124838,
                                  "name": "logs",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 124804,
                                  "src": "809:4:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                                    "typeString": "struct VmSafe.Log memory[] memory"
                                  }
                                },
                                "id": 124840,
                                "indexExpression": {
                                  "id": 124839,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 124828,
                                  "src": "814:1:166",
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
                                "src": "809:7:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Log_$27427_memory_ptr",
                                  "typeString": "struct VmSafe.Log memory"
                                }
                              },
                              "id": 124841,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "817:6:166",
                              "memberName": "topics",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 27422,
                              "src": "809:14:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            "id": 124843,
                            "indexExpression": {
                              "hexValue": "30",
                              "id": 124842,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "824:1:166",
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
                            "src": "809:17:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 124844,
                            "name": "selector",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 124806,
                            "src": "830:8:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "809:29:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 124856,
                        "nodeType": "IfStatement",
                        "src": "805:101:166",
                        "trueBody": {
                          "id": 124855,
                          "nodeType": "Block",
                          "src": "840:66:166",
                          "statements": [
                            {
                              "expression": {
                                "id": 124853,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 124846,
                                    "name": "filteredLogs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 124811,
                                    "src": "858:12:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                                      "typeString": "struct VmSafe.Log memory[] memory"
                                    }
                                  },
                                  "id": 124849,
                                  "indexExpression": {
                                    "id": 124848,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "++",
                                    "prefix": false,
                                    "src": "871:9:166",
                                    "subExpression": {
                                      "id": 124847,
                                      "name": "current",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 124814,
                                      "src": "871:7:166",
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
                                  "src": "858:23:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Log_$27427_memory_ptr",
                                    "typeString": "struct VmSafe.Log memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "baseExpression": {
                                    "id": 124850,
                                    "name": "logs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 124804,
                                    "src": "884:4:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                                      "typeString": "struct VmSafe.Log memory[] memory"
                                    }
                                  },
                                  "id": 124852,
                                  "indexExpression": {
                                    "id": 124851,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 124828,
                                    "src": "889:1:166",
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
                                  "src": "884:7:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Log_$27427_memory_ptr",
                                    "typeString": "struct VmSafe.Log memory"
                                  }
                                },
                                "src": "858:33:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Log_$27427_memory_ptr",
                                  "typeString": "struct VmSafe.Log memory"
                                }
                              },
                              "id": 124854,
                              "nodeType": "ExpressionStatement",
                              "src": "858:33:166"
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
                    "id": 124834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 124831,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 124828,
                      "src": "769:1:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 124832,
                        "name": "logs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124804,
                        "src": "773:4:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct VmSafe.Log memory[] memory"
                        }
                      },
                      "id": 124833,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "778:6:166",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "773:11:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "769:15:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 124858,
                  "initializationExpression": {
                    "assignments": [
                      124828
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 124828,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "762:1:166",
                        "nodeType": "VariableDeclaration",
                        "scope": 124858,
                        "src": "754:9:166",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 124827,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "754:7:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 124830,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 124829,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "766:1:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "754:13:166"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 124836,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "786:3:166",
                      "subExpression": {
                        "id": 124835,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124828,
                        "src": "786:1:166",
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
                    "id": 124837,
                    "nodeType": "ExpressionStatement",
                    "src": "786:3:166"
                  },
                  "nodeType": "ForStatement",
                  "src": "749:167:166"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "976:53:166",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "filteredLogs",
                              "nodeType": "YulIdentifier",
                              "src": "997:12:166"
                            },
                            {
                              "name": "current",
                              "nodeType": "YulIdentifier",
                              "src": "1011:7:166"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "990:6:166"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "990:29:166"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "990:29:166"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 124814,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1011:7:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 124811,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "997:12:166",
                      "valueSize": 1
                    }
                  ],
                  "id": 124859,
                  "nodeType": "InlineAssembly",
                  "src": "967:62:166"
                },
                {
                  "expression": {
                    "id": 124860,
                    "name": "filteredLogs",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 124811,
                    "src": "1045:12:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct VmSafe.Log memory[] memory"
                    }
                  },
                  "functionReturnParameters": 124812,
                  "id": 124861,
                  "nodeType": "Return",
                  "src": "1038:19:166"
                }
              ]
            },
            "documentation": {
              "id": 124800,
              "nodeType": "StructuredDocumentation",
              "src": "230:250:166",
              "text": "@dev Filters an array of longs for events that match the provided\n      selector.\n @param logs The array of logs to filter.\n @param selector The selector to filter for.\n @return filteredLogs The filtered array of logs."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "filterLogs",
            "nameLocation": "494:10:166",
            "parameters": {
              "id": 124807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124804,
                  "mutability": "mutable",
                  "name": "logs",
                  "nameLocation": "534:4:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 124863,
                  "src": "514:24:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 124802,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 124801,
                        "name": "VmSafe.Log",
                        "nameLocations": [
                          "514:6:166",
                          "521:3:166"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 27427,
                        "src": "514:10:166"
                      },
                      "referencedDeclaration": 27427,
                      "src": "514:10:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$27427_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 124803,
                    "nodeType": "ArrayTypeName",
                    "src": "514:12:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$27427_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 124806,
                  "mutability": "mutable",
                  "name": "selector",
                  "nameLocation": "556:8:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 124863,
                  "src": "548:16:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 124805,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "504:66:166"
            },
            "returnParameters": {
              "id": 124812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124811,
                  "mutability": "mutable",
                  "name": "filteredLogs",
                  "nameLocation": "614:12:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 124863,
                  "src": "594:32:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$27427_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 124809,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 124808,
                        "name": "VmSafe.Log",
                        "nameLocations": [
                          "594:6:166",
                          "601:3:166"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 27427,
                        "src": "594:10:166"
                      },
                      "referencedDeclaration": 27427,
                      "src": "594:10:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$27427_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 124810,
                    "nodeType": "ArrayTypeName",
                    "src": "594:12:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$27427_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "593:34:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 124883,
            "nodeType": "FunctionDefinition",
            "src": "1283:192:166",
            "nodes": [],
            "body": {
              "id": 124882,
              "nodeType": "Block",
              "src": "1373:102:166",
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
                                "id": 124876,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1442:15:166",
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
                              "id": 124875,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "1432:9:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 124877,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1432:26:166",
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
                          "id": 124874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1425:6:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes4_$",
                            "typeString": "type(bytes4)"
                          },
                          "typeName": {
                            "id": 124873,
                            "name": "bytes4",
                            "nodeType": "ElementaryTypeName",
                            "src": "1425:6:166",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 124878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1425:34:166",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 124879,
                        "name": "reason",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124866,
                        "src": "1461:6:166",
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
                        "id": 124871,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "1402:3:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 124872,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1406:18:166",
                      "memberName": "encodeWithSelector",
                      "nodeType": "MemberAccess",
                      "src": "1402:22:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes4) pure returns (bytes memory)"
                      }
                    },
                    "id": 124880,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1402:66:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 124870,
                  "id": 124881,
                  "nodeType": "Return",
                  "src": "1383:85:166"
                }
              ]
            },
            "documentation": {
              "id": 124864,
              "nodeType": "StructuredDocumentation",
              "src": "1070:208:166",
              "text": "@dev Encodes a reason into a string error. This is useful for verifying\n      string errors in low-level calls.\n @param reason The reason to encode.\n @return The encoded string error."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toError",
            "nameLocation": "1292:7:166",
            "parameters": {
              "id": 124867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124866,
                  "mutability": "mutable",
                  "name": "reason",
                  "nameLocation": "1323:6:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 124883,
                  "src": "1309:20:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 124865,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1309:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1299:36:166"
            },
            "returnParameters": {
              "id": 124870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124869,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 124883,
                  "src": "1359:12:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 124868,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1359:5:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1358:14:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 125032,
            "nodeType": "FunctionDefinition",
            "src": "1924:2036:166",
            "nodes": [],
            "body": {
              "id": 125031,
              "nodeType": "Block",
              "src": "2039:1921:166",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    124894
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 124894,
                      "mutability": "mutable",
                      "name": "maxStringLength",
                      "nameLocation": "2329:15:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125031,
                      "src": "2321:23:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 124893,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2321:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 124896,
                  "initialValue": {
                    "hexValue": "3739",
                    "id": 124895,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2347:2:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_79_by_1",
                      "typeString": "int_const 79"
                    },
                    "value": "79"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2321:28:166"
                },
                {
                  "assignments": [
                    124898
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 124898,
                      "mutability": "mutable",
                      "name": "rawResult",
                      "nameLocation": "2372:9:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125031,
                      "src": "2359:22:166",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 124897,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2359:5:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 124903,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 124901,
                        "name": "maxStringLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124894,
                        "src": "2394:15:166",
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
                      "id": 124900,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2384:9:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 124899,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2388:5:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 124902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2384:26:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2359:51:166"
                },
                {
                  "assignments": [
                    124905
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 124905,
                      "mutability": "mutable",
                      "name": "isNegative",
                      "nameLocation": "2688:10:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125031,
                      "src": "2683:15:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 124904,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2683:4:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 124909,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 124908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 124906,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 124886,
                      "src": "2701:3:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 124907,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2707:1:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2701:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2683:25:166"
                },
                {
                  "expression": {
                    "id": 124918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 124910,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 124886,
                      "src": "2718:3:166",
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
                        "id": 124913,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 124911,
                          "name": "num",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124886,
                          "src": "2724:3:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 124912,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2730:1:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2724:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 124916,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124886,
                        "src": "2741:3:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 124917,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "2724:20:166",
                      "trueExpression": {
                        "id": 124915,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "-",
                        "prefix": true,
                        "src": "2734:4:166",
                        "subExpression": {
                          "id": 124914,
                          "name": "num",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124886,
                          "src": "2735:3:166",
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
                    "src": "2718:26:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 124919,
                  "nodeType": "ExpressionStatement",
                  "src": "2718:26:166"
                },
                {
                  "expression": {
                    "id": 124940,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 124920,
                        "name": "rawResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124898,
                        "src": "2909:9:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 124924,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 124923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 124921,
                          "name": "maxStringLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124894,
                          "src": "2919:15:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 124922,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2937:1:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "2919:19:166",
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
                      "src": "2909:30:166",
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
                                  "id": 124936,
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
                                        "id": 124933,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "id": 124931,
                                          "name": "num",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 124886,
                                          "src": "2977:3:166",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "%",
                                        "rightExpression": {
                                          "hexValue": "3130",
                                          "id": 124932,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "2983:2:166",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_10_by_1",
                                            "typeString": "int_const 10"
                                          },
                                          "value": "10"
                                        },
                                        "src": "2977:8:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      }
                                    ],
                                    "id": 124934,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "2976:10:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "+",
                                  "rightExpression": {
                                    "hexValue": "3438",
                                    "id": 124935,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2989:2:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_48_by_1",
                                      "typeString": "int_const 48"
                                    },
                                    "value": "48"
                                  },
                                  "src": "2976:15:166",
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
                                "id": 124930,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2968:7:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 124929,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2968:7:166",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 124937,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2968:24:166",
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
                            "id": 124928,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2962:5:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": {
                              "id": 124927,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "2962:5:166",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 124938,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2962:31:166",
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
                        "id": 124926,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2942:6:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes1_$",
                          "typeString": "type(bytes1)"
                        },
                        "typeName": {
                          "id": 124925,
                          "name": "bytes1",
                          "nodeType": "ElementaryTypeName",
                          "src": "2942:6:166",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 124939,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2942:61:166",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "src": "2909:94:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 124941,
                  "nodeType": "ExpressionStatement",
                  "src": "2909:94:166"
                },
                {
                  "expression": {
                    "id": 124944,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 124942,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 124886,
                      "src": "3013:3:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "hexValue": "3130",
                      "id": 124943,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3020:2:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "3013:9:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 124945,
                  "nodeType": "ExpressionStatement",
                  "src": "3013:9:166"
                },
                {
                  "assignments": [
                    124947
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 124947,
                      "mutability": "mutable",
                      "name": "digits",
                      "nameLocation": "3040:6:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125031,
                      "src": "3032:14:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 124946,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3032:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 124949,
                  "initialValue": {
                    "hexValue": "31",
                    "id": 124948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3049:1:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1_by_1",
                      "typeString": "int_const 1"
                    },
                    "value": "1"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3032:18:166"
                },
                {
                  "body": {
                    "id": 125010,
                    "nodeType": "Block",
                    "src": "3103:349:166",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 124965,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 124961,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 124959,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 124888,
                              "src": "3121:8:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 124960,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3132:1:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "3121:12:166",
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
                            "id": 124964,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 124962,
                              "name": "digits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 124947,
                              "src": "3137:6:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 124963,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 124888,
                              "src": "3147:8:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3137:18:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3121:34:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 125005,
                          "nodeType": "Block",
                          "src": "3241:179:166",
                          "statements": [
                            {
                              "expression": {
                                "id": 124999,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 124977,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 124898,
                                    "src": "3259:9:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 124983,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 124982,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 124980,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 124978,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 124894,
                                        "src": "3269:15:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 124979,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 124947,
                                        "src": "3287:6:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "3269:24:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 124981,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3296:1:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "3269:28:166",
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
                                  "src": "3259:39:166",
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
                                              "id": 124995,
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
                                                    "id": 124992,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                      "id": 124990,
                                                      "name": "num",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 124886,
                                                      "src": "3344:3:166",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                      }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "%",
                                                    "rightExpression": {
                                                      "hexValue": "3130",
                                                      "id": 124991,
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "kind": "number",
                                                      "lValueRequested": false,
                                                      "nodeType": "Literal",
                                                      "src": "3350:2:166",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_10_by_1",
                                                        "typeString": "int_const 10"
                                                      },
                                                      "value": "10"
                                                    },
                                                    "src": "3344:8:166",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_int256",
                                                      "typeString": "int256"
                                                    }
                                                  }
                                                ],
                                                "id": 124993,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "3343:10:166",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_int256",
                                                  "typeString": "int256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "+",
                                              "rightExpression": {
                                                "hexValue": "3438",
                                                "id": 124994,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3356:2:166",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_48_by_1",
                                                  "typeString": "int_const 48"
                                                },
                                                "value": "48"
                                              },
                                              "src": "3343:15:166",
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
                                            "id": 124989,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "3335:7:166",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                              "id": 124988,
                                              "name": "uint256",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "3335:7:166",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 124996,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "3335:24:166",
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
                                        "id": 124987,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3329:5:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint8_$",
                                          "typeString": "type(uint8)"
                                        },
                                        "typeName": {
                                          "id": 124986,
                                          "name": "uint8",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3329:5:166",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 124997,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3329:31:166",
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
                                    "id": 124985,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3301:6:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 124984,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3301:6:166",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 124998,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3301:77:166",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "3259:119:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 125000,
                              "nodeType": "ExpressionStatement",
                              "src": "3259:119:166"
                            },
                            {
                              "expression": {
                                "id": 125003,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 125001,
                                  "name": "num",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 124886,
                                  "src": "3396:3:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "/=",
                                "rightHandSide": {
                                  "hexValue": "3130",
                                  "id": 125002,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3403:2:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "src": "3396:9:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 125004,
                              "nodeType": "ExpressionStatement",
                              "src": "3396:9:166"
                            }
                          ]
                        },
                        "id": 125006,
                        "nodeType": "IfStatement",
                        "src": "3117:303:166",
                        "trueBody": {
                          "id": 124976,
                          "nodeType": "Block",
                          "src": "3157:78:166",
                          "statements": [
                            {
                              "expression": {
                                "id": 124974,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 124966,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 124898,
                                    "src": "3175:9:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 124972,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 124971,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 124969,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 124967,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 124894,
                                        "src": "3185:15:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 124968,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 124947,
                                        "src": "3203:6:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "3185:24:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 124970,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3212:1:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "3185:28:166",
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
                                  "src": "3175:39:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "hexValue": "2e",
                                  "id": 124973,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3217:3:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                    "typeString": "literal_string \".\""
                                  },
                                  "value": "."
                                },
                                "src": "3175:45:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 124975,
                              "nodeType": "ExpressionStatement",
                              "src": "3175:45:166"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 125008,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "3433:8:166",
                          "subExpression": {
                            "id": 125007,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 124947,
                            "src": "3433:6:166",
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
                        "id": 125009,
                        "nodeType": "ExpressionStatement",
                        "src": "3433:8:166"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 124958,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 124952,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 124950,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124886,
                        "src": "3067:3:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 124951,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3074:1:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3067:8:166",
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
                      "id": 124957,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 124953,
                        "name": "digits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124947,
                        "src": "3079:6:166",
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
                        "id": 124956,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 124954,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124888,
                          "src": "3089:8:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 124955,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3100:1:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "3089:12:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3079:22:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3067:34:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 125011,
                  "nodeType": "WhileStatement",
                  "src": "3060:392:166"
                },
                {
                  "condition": {
                    "id": 125012,
                    "name": "isNegative",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 124905,
                    "src": "3566:10:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 125027,
                  "nodeType": "IfStatement",
                  "src": "3562:108:166",
                  "trueBody": {
                    "id": 125026,
                    "nodeType": "Block",
                    "src": "3578:92:166",
                    "statements": [
                      {
                        "expression": {
                          "id": 125021,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 125013,
                              "name": "rawResult",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 124898,
                              "src": "3592:9:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 125019,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 125018,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 125016,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 125014,
                                  "name": "maxStringLength",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 124894,
                                  "src": "3602:15:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 125015,
                                  "name": "digits",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 124947,
                                  "src": "3620:6:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3602:24:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 125017,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3629:1:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "3602:28:166",
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
                            "src": "3592:39:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "2d",
                            "id": 125020,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3634:3:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561",
                              "typeString": "literal_string \"-\""
                            },
                            "value": "-"
                          },
                          "src": "3592:45:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 125022,
                        "nodeType": "ExpressionStatement",
                        "src": "3592:45:166"
                      },
                      {
                        "expression": {
                          "id": 125024,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "3651:8:166",
                          "subExpression": {
                            "id": 125023,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 124947,
                            "src": "3651:6:166",
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
                        "id": 125025,
                        "nodeType": "ExpressionStatement",
                        "src": "3651:8:166"
                      }
                    ]
                  }
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "3802:129:166",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3816:62:166",
                        "value": {
                          "arguments": [
                            {
                              "name": "rawResult",
                              "nodeType": "YulIdentifier",
                              "src": "3830:9:166"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "maxStringLength",
                                      "nodeType": "YulIdentifier",
                                      "src": "3849:15:166"
                                    },
                                    {
                                      "name": "digits",
                                      "nodeType": "YulIdentifier",
                                      "src": "3866:6:166"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "3845:3:166"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3845:28:166"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3875:1:166",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3841:3:166"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3841:36:166"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3826:3:166"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3826:52:166"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "3816:6:166"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "result",
                              "nodeType": "YulIdentifier",
                              "src": "3898:6:166"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "digits",
                                  "nodeType": "YulIdentifier",
                                  "src": "3910:6:166"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3918:1:166",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3906:3:166"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3906:14:166"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3891:6:166"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3891:30:166"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3891:30:166"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 124947,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3866:6:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 124947,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3910:6:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 124894,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3849:15:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 124898,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3830:9:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 124891,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3816:6:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 124891,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3898:6:166",
                      "valueSize": 1
                    }
                  ],
                  "id": 125028,
                  "nodeType": "InlineAssembly",
                  "src": "3793:138:166"
                },
                {
                  "expression": {
                    "id": 125029,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 124891,
                    "src": "3947:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 124892,
                  "id": 125030,
                  "nodeType": "Return",
                  "src": "3940:13:166"
                }
              ]
            },
            "documentation": {
              "id": 124884,
              "nodeType": "StructuredDocumentation",
              "src": "1481:438:166",
              "text": "@dev Converts a signed integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "1933:8:166",
            "parameters": {
              "id": 124889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124886,
                  "mutability": "mutable",
                  "name": "num",
                  "nameLocation": "1958:3:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125032,
                  "src": "1951:10:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 124885,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1951:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 124888,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "1979:8:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125032,
                  "src": "1971:16:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 124887,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1971:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1941:52:166"
            },
            "returnParameters": {
              "id": 124892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124891,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2031:6:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125032,
                  "src": "2017:20:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 124890,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2017:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2016:22:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 125143,
            "nodeType": "FunctionDefinition",
            "src": "4412:1394:166",
            "nodes": [],
            "body": {
              "id": 125142,
              "nodeType": "Block",
              "src": "4528:1278:166",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    125043
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125043,
                      "mutability": "mutable",
                      "name": "maxStringLength",
                      "nameLocation": "4767:15:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125142,
                      "src": "4759:23:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 125042,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4759:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 125045,
                  "initialValue": {
                    "hexValue": "3739",
                    "id": 125044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4785:2:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_79_by_1",
                      "typeString": "int_const 79"
                    },
                    "value": "79"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4759:28:166"
                },
                {
                  "assignments": [
                    125047
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125047,
                      "mutability": "mutable",
                      "name": "rawResult",
                      "nameLocation": "4810:9:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125142,
                      "src": "4797:22:166",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 125046,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4797:5:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 125052,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 125050,
                        "name": "maxStringLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125043,
                        "src": "4832:15:166",
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
                      "id": 125049,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4822:9:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 125048,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4826:5:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 125051,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4822:26:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4797:51:166"
                },
                {
                  "expression": {
                    "id": 125070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 125053,
                        "name": "rawResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125047,
                        "src": "5013:9:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 125057,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 125056,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 125054,
                          "name": "maxStringLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125043,
                          "src": "5023:15:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 125055,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5041:1:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5023:19:166",
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
                      "src": "5013:30:166",
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
                              "id": 125067,
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
                                    "id": 125064,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 125062,
                                      "name": "num",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 125035,
                                      "src": "5060:3:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "%",
                                    "rightExpression": {
                                      "hexValue": "3130",
                                      "id": 125063,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5066:2:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_10_by_1",
                                        "typeString": "int_const 10"
                                      },
                                      "value": "10"
                                    },
                                    "src": "5060:8:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 125065,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "5059:10:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "3438",
                                "id": 125066,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5072:2:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_48_by_1",
                                  "typeString": "int_const 48"
                                },
                                "value": "48"
                              },
                              "src": "5059:15:166",
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
                            "id": 125061,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5053:5:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": {
                              "id": 125060,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "5053:5:166",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 125068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5053:22:166",
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
                        "id": 125059,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5046:6:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes1_$",
                          "typeString": "type(bytes1)"
                        },
                        "typeName": {
                          "id": 125058,
                          "name": "bytes1",
                          "nodeType": "ElementaryTypeName",
                          "src": "5046:6:166",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 125069,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5046:30:166",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "src": "5013:63:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 125071,
                  "nodeType": "ExpressionStatement",
                  "src": "5013:63:166"
                },
                {
                  "expression": {
                    "id": 125074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 125072,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125035,
                      "src": "5086:3:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "hexValue": "3130",
                      "id": 125073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5093:2:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "5086:9:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 125075,
                  "nodeType": "ExpressionStatement",
                  "src": "5086:9:166"
                },
                {
                  "assignments": [
                    125077
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125077,
                      "mutability": "mutable",
                      "name": "digits",
                      "nameLocation": "5113:6:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125142,
                      "src": "5105:14:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 125076,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5105:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 125079,
                  "initialValue": {
                    "hexValue": "31",
                    "id": 125078,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5122:1:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1_by_1",
                      "typeString": "int_const 1"
                    },
                    "value": "1"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5105:18:166"
                },
                {
                  "body": {
                    "id": 125137,
                    "nodeType": "Block",
                    "src": "5176:340:166",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 125095,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 125091,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 125089,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125037,
                              "src": "5194:8:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 125090,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5205:1:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "5194:12:166",
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
                            "id": 125094,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 125092,
                              "name": "digits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125077,
                              "src": "5210:6:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 125093,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125037,
                              "src": "5220:8:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5210:18:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "5194:34:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 125132,
                          "nodeType": "Block",
                          "src": "5314:170:166",
                          "statements": [
                            {
                              "expression": {
                                "id": 125126,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 125107,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 125047,
                                    "src": "5332:9:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 125113,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 125112,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 125110,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 125108,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 125043,
                                        "src": "5342:15:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 125109,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 125077,
                                        "src": "5360:6:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "5342:24:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 125111,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5369:1:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "5342:28:166",
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
                                  "src": "5332:39:166",
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
                                          "id": 125123,
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
                                                "id": 125120,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "id": 125118,
                                                  "name": "num",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 125035,
                                                  "src": "5409:3:166",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "%",
                                                "rightExpression": {
                                                  "hexValue": "3130",
                                                  "id": 125119,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "5415:2:166",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_10_by_1",
                                                    "typeString": "int_const 10"
                                                  },
                                                  "value": "10"
                                                },
                                                "src": "5409:8:166",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              }
                                            ],
                                            "id": 125121,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "5408:10:166",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "+",
                                          "rightExpression": {
                                            "hexValue": "3438",
                                            "id": 125122,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5421:2:166",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_48_by_1",
                                              "typeString": "int_const 48"
                                            },
                                            "value": "48"
                                          },
                                          "src": "5408:15:166",
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
                                        "id": 125117,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "5402:5:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint8_$",
                                          "typeString": "type(uint8)"
                                        },
                                        "typeName": {
                                          "id": 125116,
                                          "name": "uint8",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "5402:5:166",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 125124,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "5402:22:166",
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
                                    "id": 125115,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5374:6:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 125114,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5374:6:166",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 125125,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5374:68:166",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "5332:110:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 125127,
                              "nodeType": "ExpressionStatement",
                              "src": "5332:110:166"
                            },
                            {
                              "expression": {
                                "id": 125130,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 125128,
                                  "name": "num",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 125035,
                                  "src": "5460:3:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "/=",
                                "rightHandSide": {
                                  "hexValue": "3130",
                                  "id": 125129,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5467:2:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "src": "5460:9:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 125131,
                              "nodeType": "ExpressionStatement",
                              "src": "5460:9:166"
                            }
                          ]
                        },
                        "id": 125133,
                        "nodeType": "IfStatement",
                        "src": "5190:294:166",
                        "trueBody": {
                          "id": 125106,
                          "nodeType": "Block",
                          "src": "5230:78:166",
                          "statements": [
                            {
                              "expression": {
                                "id": 125104,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 125096,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 125047,
                                    "src": "5248:9:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 125102,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 125101,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 125099,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 125097,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 125043,
                                        "src": "5258:15:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 125098,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 125077,
                                        "src": "5276:6:166",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "5258:24:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 125100,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5285:1:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "5258:28:166",
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
                                  "src": "5248:39:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "hexValue": "2e",
                                  "id": 125103,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5290:3:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                    "typeString": "literal_string \".\""
                                  },
                                  "value": "."
                                },
                                "src": "5248:45:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 125105,
                              "nodeType": "ExpressionStatement",
                              "src": "5248:45:166"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 125135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "5497:8:166",
                          "subExpression": {
                            "id": 125134,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125077,
                            "src": "5497:6:166",
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
                        "id": 125136,
                        "nodeType": "ExpressionStatement",
                        "src": "5497:8:166"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 125088,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 125082,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 125080,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125035,
                        "src": "5140:3:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 125081,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5147:1:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5140:8:166",
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
                      "id": 125087,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 125083,
                        "name": "digits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125077,
                        "src": "5152:6:166",
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
                        "id": 125086,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 125084,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125037,
                          "src": "5162:8:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 125085,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5173:1:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5162:12:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5152:22:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5140:34:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 125138,
                  "nodeType": "WhileStatement",
                  "src": "5133:383:166"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5648:129:166",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5662:62:166",
                        "value": {
                          "arguments": [
                            {
                              "name": "rawResult",
                              "nodeType": "YulIdentifier",
                              "src": "5676:9:166"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "maxStringLength",
                                      "nodeType": "YulIdentifier",
                                      "src": "5695:15:166"
                                    },
                                    {
                                      "name": "digits",
                                      "nodeType": "YulIdentifier",
                                      "src": "5712:6:166"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "5691:3:166"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5691:28:166"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5721:1:166",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "5687:3:166"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5687:36:166"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5672:3:166"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5672:52:166"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "5662:6:166"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "result",
                              "nodeType": "YulIdentifier",
                              "src": "5744:6:166"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "digits",
                                  "nodeType": "YulIdentifier",
                                  "src": "5756:6:166"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5764:1:166",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5752:3:166"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5752:14:166"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5737:6:166"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5737:30:166"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5737:30:166"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 125077,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5712:6:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 125077,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5756:6:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 125043,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5695:15:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 125047,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5676:9:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 125040,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5662:6:166",
                      "valueSize": 1
                    },
                    {
                      "declaration": 125040,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5744:6:166",
                      "valueSize": 1
                    }
                  ],
                  "id": 125139,
                  "nodeType": "InlineAssembly",
                  "src": "5639:138:166"
                },
                {
                  "expression": {
                    "id": 125140,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 125040,
                    "src": "5793:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 125041,
                  "id": 125141,
                  "nodeType": "Return",
                  "src": "5786:13:166"
                }
              ]
            },
            "documentation": {
              "id": 125033,
              "nodeType": "StructuredDocumentation",
              "src": "3966:441:166",
              "text": "@dev Converts an unsigned integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "4421:8:166",
            "parameters": {
              "id": 125038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125035,
                  "mutability": "mutable",
                  "name": "num",
                  "nameLocation": "4447:3:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125143,
                  "src": "4439:11:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125034,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4439:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125037,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4468:8:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125143,
                  "src": "4460:16:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125036,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4460:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4429:53:166"
            },
            "returnParameters": {
              "id": 125041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125040,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4520:6:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125143,
                  "src": "4506:20:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 125039,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4506:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4505:22:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 125212,
            "nodeType": "FunctionDefinition",
            "src": "5812:448:166",
            "nodes": [],
            "body": {
              "id": 125211,
              "nodeType": "Block",
              "src": "5913:347:166",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 125154,
                        "name": "prelude",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125145,
                        "src": "5936:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "hexValue": "5b",
                        "id": 125155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5945:3:166",
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
                        "id": 125151,
                        "name": "console2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45136,
                        "src": "5923:8:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_console2_$45136_$",
                          "typeString": "type(library console2)"
                        }
                      },
                      "id": 125153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5932:3:166",
                      "memberName": "log",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 37797,
                      "src": "5923:12:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory) pure"
                      }
                    },
                    "id": 125156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5923:26:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 125157,
                  "nodeType": "ExpressionStatement",
                  "src": "5923:26:166"
                },
                {
                  "body": {
                    "id": 125197,
                    "nodeType": "Block",
                    "src": "6002:195:166",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 125174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 125169,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125159,
                            "src": "6020:1:166",
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
                            "id": 125173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 125170,
                                "name": "array",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 125148,
                                "src": "6024:5:166",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 125171,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6030:6:166",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "6024:12:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 125172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6039:1:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "6024:16:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6020:20:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 125195,
                          "nodeType": "Block",
                          "src": "6120:67:166",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "2020202020202020",
                                    "id": 125189,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6151:10:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                      "typeString": "literal_string \"        \""
                                    },
                                    "value": "        "
                                  },
                                  {
                                    "baseExpression": {
                                      "id": 125190,
                                      "name": "array",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 125148,
                                      "src": "6163:5:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[] memory"
                                      }
                                    },
                                    "id": 125192,
                                    "indexExpression": {
                                      "id": 125191,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 125159,
                                      "src": "6169:1:166",
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
                                    "src": "6163:8:166",
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
                                    "id": 125186,
                                    "name": "console2",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 45136,
                                    "src": "6138:8:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_console2_$45136_$",
                                      "typeString": "type(library console2)"
                                    }
                                  },
                                  "id": 125188,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "6147:3:166",
                                  "memberName": "log",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 37763,
                                  "src": "6138:12:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                                    "typeString": "function (string memory,uint256) pure"
                                  }
                                },
                                "id": 125193,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6138:34:166",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 125194,
                              "nodeType": "ExpressionStatement",
                              "src": "6138:34:166"
                            }
                          ]
                        },
                        "id": 125196,
                        "nodeType": "IfStatement",
                        "src": "6016:171:166",
                        "trueBody": {
                          "id": 125185,
                          "nodeType": "Block",
                          "src": "6042:72:166",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "2020202020202020",
                                    "id": 125178,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6073:10:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                      "typeString": "literal_string \"        \""
                                    },
                                    "value": "        "
                                  },
                                  {
                                    "baseExpression": {
                                      "id": 125179,
                                      "name": "array",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 125148,
                                      "src": "6085:5:166",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[] memory"
                                      }
                                    },
                                    "id": 125181,
                                    "indexExpression": {
                                      "id": 125180,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 125159,
                                      "src": "6091:1:166",
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
                                    "src": "6085:8:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "hexValue": "2c",
                                    "id": 125182,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6095:3:166",
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
                                    "id": 125175,
                                    "name": "console2",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 45136,
                                    "src": "6060:8:166",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_console2_$45136_$",
                                      "typeString": "type(library console2)"
                                    }
                                  },
                                  "id": 125177,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "6069:3:166",
                                  "memberName": "log",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 38327,
                                  "src": "6060:12:166",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory,uint256,string memory) pure"
                                  }
                                },
                                "id": 125183,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6060:39:166",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 125184,
                              "nodeType": "ExpressionStatement",
                              "src": "6060:39:166"
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
                    "id": 125165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 125162,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125159,
                      "src": "5979:1:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 125163,
                        "name": "array",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125148,
                        "src": "5983:5:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 125164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5989:6:166",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "5983:12:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5979:16:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 125198,
                  "initializationExpression": {
                    "assignments": [
                      125159
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 125159,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "5972:1:166",
                        "nodeType": "VariableDeclaration",
                        "scope": 125198,
                        "src": "5964:9:166",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 125158,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5964:7:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 125161,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 125160,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5976:1:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5964:13:166"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 125167,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5997:3:166",
                      "subExpression": {
                        "id": 125166,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125159,
                        "src": "5997:1:166",
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
                    "id": 125168,
                    "nodeType": "ExpressionStatement",
                    "src": "5997:3:166"
                  },
                  "nodeType": "ForStatement",
                  "src": "5959:238:166"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "202020205d",
                        "id": 125202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6219:7:166",
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
                        "id": 125199,
                        "name": "console2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45136,
                        "src": "6206:8:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_console2_$45136_$",
                          "typeString": "type(library console2)"
                        }
                      },
                      "id": 125201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6215:3:166",
                      "memberName": "log",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 37650,
                      "src": "6206:12:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 125203,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6206:21:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 125204,
                  "nodeType": "ExpressionStatement",
                  "src": "6206:21:166"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 125208,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6250:2:166",
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
                        "id": 125205,
                        "name": "console2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45136,
                        "src": "6237:8:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_console2_$45136_$",
                          "typeString": "type(library console2)"
                        }
                      },
                      "id": 125207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6246:3:166",
                      "memberName": "log",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 37650,
                      "src": "6237:12:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 125209,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6237:16:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 125210,
                  "nodeType": "ExpressionStatement",
                  "src": "6237:16:166"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "logArray",
            "nameLocation": "5821:8:166",
            "parameters": {
              "id": 125149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125145,
                  "mutability": "mutable",
                  "name": "prelude",
                  "nameLocation": "5853:7:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125212,
                  "src": "5839:21:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 125144,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5839:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125148,
                  "mutability": "mutable",
                  "name": "array",
                  "nameLocation": "5887:5:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125212,
                  "src": "5870:22:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 125146,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5870:7:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 125147,
                    "nodeType": "ArrayTypeName",
                    "src": "5870:9:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5829:69:166"
            },
            "returnParameters": {
              "id": 125150,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5913:0:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 125249,
            "nodeType": "FunctionDefinition",
            "src": "6266:333:166",
            "nodes": [],
            "body": {
              "id": 125248,
              "nodeType": "Block",
              "src": "6403:196:166",
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
                        "id": 125226,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 125224,
                          "name": "minimum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125216,
                          "src": "6421:7:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 125225,
                          "name": "maximum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125218,
                          "src": "6432:7:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6421:18:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c69623a206d696e203e206d6178",
                        "id": 125227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6441:16:166",
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
                      "id": 125223,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6413:7:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 125228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6413:45:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 125229,
                  "nodeType": "ExpressionStatement",
                  "src": "6413:45:166"
                },
                {
                  "assignments": [
                    125231
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125231,
                      "mutability": "mutable",
                      "name": "rangeSize",
                      "nameLocation": "6477:9:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125248,
                      "src": "6469:17:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 125230,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6469:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 125237,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 125236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 125234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 125232,
                        "name": "maximum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125218,
                        "src": "6489:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 125233,
                        "name": "minimum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125216,
                        "src": "6499:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6489:17:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 125235,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6509:1:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6489:21:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6469:41:166"
                },
                {
                  "assignments": [
                    125239
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125239,
                      "mutability": "mutable",
                      "name": "modValue",
                      "nameLocation": "6528:8:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125248,
                      "src": "6520:16:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 125238,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6520:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 125243,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 125242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 125240,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125214,
                      "src": "6539:5:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "id": 125241,
                      "name": "rangeSize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125231,
                      "src": "6547:9:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6539:17:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6520:36:166"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 125246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 125244,
                      "name": "modValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125239,
                      "src": "6574:8:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 125245,
                      "name": "minimum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125216,
                      "src": "6585:7:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6574:18:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 125222,
                  "id": 125247,
                  "nodeType": "Return",
                  "src": "6567:25:166"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "normalizeToRange",
            "nameLocation": "6275:16:166",
            "parameters": {
              "id": 125219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125214,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6309:5:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125249,
                  "src": "6301:13:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125213,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6301:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125216,
                  "mutability": "mutable",
                  "name": "minimum",
                  "nameLocation": "6332:7:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125249,
                  "src": "6324:15:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125215,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6324:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125218,
                  "mutability": "mutable",
                  "name": "maximum",
                  "nameLocation": "6357:7:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125249,
                  "src": "6349:15:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125217,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6349:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6291:79:166"
            },
            "returnParameters": {
              "id": 125222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125221,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 125249,
                  "src": "6394:7:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125220,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6394:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6393:9:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 125295,
            "nodeType": "FunctionDefinition",
            "src": "6605:401:166",
            "nodes": [],
            "body": {
              "id": 125294,
              "nodeType": "Block",
              "src": "6738:268:166",
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
                        "id": 125263,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 125261,
                          "name": "minimum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125253,
                          "src": "6756:7:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 125262,
                          "name": "maximum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125255,
                          "src": "6767:7:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6756:18:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c69623a206d696e203e206d6178",
                        "id": 125264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6776:16:166",
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
                      "id": 125260,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6748:7:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 125265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6748:45:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 125266,
                  "nodeType": "ExpressionStatement",
                  "src": "6748:45:166"
                },
                {
                  "assignments": [
                    125268
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125268,
                      "mutability": "mutable",
                      "name": "rangeSize",
                      "nameLocation": "6811:9:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125294,
                      "src": "6804:16:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 125267,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6804:6:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 125274,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 125273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 125271,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 125269,
                        "name": "maximum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125255,
                        "src": "6823:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 125270,
                        "name": "minimum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125253,
                        "src": "6833:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "6823:17:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 125272,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6843:1:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6823:21:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6804:40:166"
                },
                {
                  "assignments": [
                    125276
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125276,
                      "mutability": "mutable",
                      "name": "modValue",
                      "nameLocation": "6861:8:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125294,
                      "src": "6854:15:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 125275,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6854:6:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 125280,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 125279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 125277,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125251,
                      "src": "6872:5:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "id": 125278,
                      "name": "rangeSize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125268,
                      "src": "6880:9:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6872:17:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6854:35:166"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 125283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 125281,
                      "name": "modValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125276,
                      "src": "6904:8:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 125282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6915:1:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6904:12:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 125289,
                  "nodeType": "IfStatement",
                  "src": "6900:64:166",
                  "trueBody": {
                    "id": 125288,
                    "nodeType": "Block",
                    "src": "6918:46:166",
                    "statements": [
                      {
                        "expression": {
                          "id": 125286,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 125284,
                            "name": "modValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125276,
                            "src": "6932:8:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 125285,
                            "name": "rangeSize",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125268,
                            "src": "6944:9:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6932:21:166",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 125287,
                        "nodeType": "ExpressionStatement",
                        "src": "6932:21:166"
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
                    "id": 125292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 125290,
                      "name": "modValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125276,
                      "src": "6981:8:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 125291,
                      "name": "minimum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125253,
                      "src": "6992:7:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6981:18:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 125259,
                  "id": 125293,
                  "nodeType": "Return",
                  "src": "6974:25:166"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "normalizeToRange",
            "nameLocation": "6614:16:166",
            "parameters": {
              "id": 125256,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125251,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6647:5:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125295,
                  "src": "6640:12:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 125250,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6640:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125253,
                  "mutability": "mutable",
                  "name": "minimum",
                  "nameLocation": "6669:7:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125295,
                  "src": "6662:14:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 125252,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6662:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125255,
                  "mutability": "mutable",
                  "name": "maximum",
                  "nameLocation": "6693:7:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125295,
                  "src": "6686:14:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 125254,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6686:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6630:76:166"
            },
            "returnParameters": {
              "id": 125259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125258,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 125295,
                  "src": "6730:6:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 125257,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6730:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6729:8:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 125319,
            "nodeType": "FunctionDefinition",
            "src": "7012:205:166",
            "nodes": [],
            "body": {
              "id": 125318,
              "nodeType": "Block",
              "src": "7130:87:166",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    125307
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125307,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "7148:5:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125318,
                      "src": "7140:13:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 125306,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7140:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 125313,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 125310,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125297,
                        "src": "7170:1:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 125311,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125299,
                        "src": "7173:1:166",
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
                        "id": 125308,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "7156:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 125309,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7164:5:166",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23726,
                      "src": "7156:13:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 125312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7156:19:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7140:35:166"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 125316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 125314,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125307,
                      "src": "7192:5:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 125315,
                      "name": "tolerance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125301,
                      "src": "7201:9:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7192:18:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 125305,
                  "id": 125317,
                  "nodeType": "Return",
                  "src": "7185:25:166"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approxEq",
            "nameLocation": "7021:8:166",
            "parameters": {
              "id": 125302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125297,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7047:1:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125319,
                  "src": "7039:9:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125296,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7039:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125299,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7066:1:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125319,
                  "src": "7058:9:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7058:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125301,
                  "mutability": "mutable",
                  "name": "tolerance",
                  "nameLocation": "7085:9:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125319,
                  "src": "7077:17:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125300,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7077:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7029:71:166"
            },
            "returnParameters": {
              "id": 125305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125304,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 125319,
                  "src": "7124:4:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 125303,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7124:4:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7123:6:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 125343,
            "nodeType": "FunctionDefinition",
            "src": "7223:203:166",
            "nodes": [],
            "body": {
              "id": 125342,
              "nodeType": "Block",
              "src": "7339:87:166",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    125331
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125331,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "7357:5:166",
                      "nodeType": "VariableDeclaration",
                      "scope": 125342,
                      "src": "7349:13:166",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 125330,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7349:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 125337,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 125334,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125321,
                        "src": "7379:1:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 125335,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125323,
                        "src": "7382:1:166",
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
                        "id": 125332,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23815,
                        "src": "7365:7:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$23815_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 125333,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7373:5:166",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 23762,
                      "src": "7365:13:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 125336,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7365:19:166",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7349:35:166"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 125340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 125338,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125331,
                      "src": "7401:5:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 125339,
                      "name": "tolerance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125325,
                      "src": "7410:9:166",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7401:18:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 125329,
                  "id": 125341,
                  "nodeType": "Return",
                  "src": "7394:25:166"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approxEq",
            "nameLocation": "7232:8:166",
            "parameters": {
              "id": 125326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125321,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7257:1:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125343,
                  "src": "7250:8:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 125320,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7250:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125323,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7275:1:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125343,
                  "src": "7268:8:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 125322,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7268:6:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125325,
                  "mutability": "mutable",
                  "name": "tolerance",
                  "nameLocation": "7294:9:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125343,
                  "src": "7286:17:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 125324,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7286:7:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7240:69:166"
            },
            "returnParameters": {
              "id": 125329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125328,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 125343,
                  "src": "7333:4:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 125327,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7333:4:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7332:6:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 125367,
            "nodeType": "FunctionDefinition",
            "src": "7432:175:166",
            "nodes": [],
            "body": {
              "id": 125366,
              "nodeType": "Block",
              "src": "7505:102:166",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 125364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 125355,
                              "name": "b1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125345,
                              "src": "7561:2:166",
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
                              "id": 125353,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7544:3:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 125354,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7548:12:166",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7544:16:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 125356,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7544:20:166",
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
                        "id": 125352,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7534:9:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 125357,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7534:31:166",
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
                              "id": 125361,
                              "name": "b2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125347,
                              "src": "7596:2:166",
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
                              "id": 125359,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7579:3:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 125360,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7583:12:166",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7579:16:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 125362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7579:20:166",
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
                        "id": 125358,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7569:9:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 125363,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7569:31:166",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7534:66:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 125351,
                  "id": 125365,
                  "nodeType": "Return",
                  "src": "7515:85:166"
                }
              ]
            },
            "functionSelector": "cdb16840",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "eq",
            "nameLocation": "7441:2:166",
            "parameters": {
              "id": 125348,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125345,
                  "mutability": "mutable",
                  "name": "b1",
                  "nameLocation": "7457:2:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125367,
                  "src": "7444:15:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 125344,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7444:5:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125347,
                  "mutability": "mutable",
                  "name": "b2",
                  "nameLocation": "7474:2:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125367,
                  "src": "7461:15:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 125346,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7461:5:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7443:34:166"
            },
            "returnParameters": {
              "id": 125351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125350,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 125367,
                  "src": "7499:4:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 125349,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7499:4:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7498:6:166"
            },
            "scope": 125392,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 125391,
            "nodeType": "FunctionDefinition",
            "src": "7613:176:166",
            "nodes": [],
            "body": {
              "id": 125390,
              "nodeType": "Block",
              "src": "7687:102:166",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 125388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 125379,
                              "name": "b1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125369,
                              "src": "7743:2:166",
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
                              "id": 125377,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7726:3:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 125378,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7730:12:166",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7726:16:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 125380,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7726:20:166",
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
                        "id": 125376,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7716:9:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 125381,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7716:31:166",
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
                              "id": 125385,
                              "name": "b2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125371,
                              "src": "7778:2:166",
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
                              "id": 125383,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7761:3:166",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 125384,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7765:12:166",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7761:16:166",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 125386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7761:20:166",
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
                        "id": 125382,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7751:9:166",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 125387,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7751:31:166",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7716:66:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 125375,
                  "id": 125389,
                  "nodeType": "Return",
                  "src": "7697:85:166"
                }
              ]
            },
            "functionSelector": "d37a20ba",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "neq",
            "nameLocation": "7622:3:166",
            "parameters": {
              "id": 125372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125369,
                  "mutability": "mutable",
                  "name": "b1",
                  "nameLocation": "7639:2:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125391,
                  "src": "7626:15:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 125368,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7626:5:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125371,
                  "mutability": "mutable",
                  "name": "b2",
                  "nameLocation": "7656:2:166",
                  "nodeType": "VariableDeclaration",
                  "scope": 125391,
                  "src": "7643:15:166",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 125370,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7643:5:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7625:34:166"
            },
            "returnParameters": {
              "id": 125375,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 125374,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 125391,
                  "src": "7681:4:166",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 125373,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7681:4:166",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7680:6:166"
            },
            "scope": 125392,
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
          125392
        ],
        "name": "Lib",
        "nameLocation": "220:3:166",
        "scope": 125393,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 166
} as const;
