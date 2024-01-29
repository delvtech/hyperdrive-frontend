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
    "object": "0x61029e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220d333ef02d5eecddba074fc17f5144964088c0d18c8f6c7c51de77771642d720b64736f6c63430008140033",
    "sourceMap": "212:7579:183:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;212:7579:183;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220d333ef02d5eecddba074fc17f5144964088c0d18c8f6c7c51de77771642d720b64736f6c63430008140033",
    "sourceMap": "212:7579:183:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7432:175;;;;;;:::i;:::-;;:::i;:::-;;;1586:14:184;;1579:22;1561:41;;1549:2;1534:18;7432:175:183;;;;;;;7613:176;;;;;;:::i;:::-;;:::i;7432:175::-;7499:4;7596:2;7579:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7569:31;;;;;;7561:2;7544:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7534:31;;;;;;:66;7515:85;;7432:175;;;;:::o;7613:176::-;7681:4;7778:2;7761:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7751:31;;;;;;7743:2;7726:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7716:31;;;;;;:66;;7697:85;;7613:176;;;;:::o;14:127:184:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:718;188:5;241:3;234:4;226:6;222:17;218:27;208:55;;259:1;256;249:12;208:55;295:6;282:20;321:18;358:2;354;351:10;348:36;;;364:18;;:::i;:::-;439:2;433:9;407:2;493:13;;-1:-1:-1;;489:22:184;;;513:2;485:31;481:40;469:53;;;537:18;;;557:22;;;534:46;531:72;;;583:18;;:::i;:::-;623:10;619:2;612:22;658:2;650:6;643:18;704:3;697:4;692:2;684:6;680:15;676:26;673:35;670:55;;;721:1;718;711:12;670:55;785:2;778:4;770:6;766:17;759:4;751:6;747:17;734:54;832:1;825:4;820:2;812:6;808:15;804:26;797:37;852:6;843:15;;;;;;146:718;;;;:::o;869:539::-;955:6;963;1016:2;1004:9;995:7;991:23;987:32;984:52;;;1032:1;1029;1022:12;984:52;1072:9;1059:23;1101:18;1142:2;1134:6;1131:14;1128:34;;;1158:1;1155;1148:12;1128:34;1181:49;1222:7;1213:6;1202:9;1198:22;1181:49;:::i;:::-;1171:59;;1283:2;1272:9;1268:18;1255:32;1239:48;;1312:2;1302:8;1299:16;1296:36;;;1328:1;1325;1318:12;1296:36;;1351:51;1394:7;1383:8;1372:9;1368:24;1351:51;:::i;:::-;1341:61;;;869:539;;;;;:::o;1613:412::-;1742:3;1780:6;1774:13;1805:1;1815:129;1829:6;1826:1;1823:13;1815:129;;;1927:4;1911:14;;;1907:25;;1901:32;1888:11;;;1881:53;1844:12;1815:129;;;-1:-1:-1;1999:1:184;1963:16;;1988:13;;;-1:-1:-1;1963:16:184;1613:412;-1:-1:-1;1613:412:184:o",
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
    "id": 146184,
    "exportedSymbols": {
      "Lib": [
        146183
      ],
      "Vm": [
        36245
      ],
      "VmSafe": [
        35773
      ],
      "console2": [
        52434
      ],
      "stdMath": [
        31113
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:7753:183",
    "nodes": [
      {
        "id": 145583,
        "nodeType": "PragmaDirective",
        "src": "39:23:183",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 145585,
        "nodeType": "ImportDirective",
        "src": "64:50:183",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/console2.sol",
        "file": "forge-std/console2.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 146184,
        "sourceUnit": 52435,
        "symbolAliases": [
          {
            "foreign": {
              "id": 145584,
              "name": "console2",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52434,
              "src": "73:8:183",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 145587,
        "nodeType": "ImportDirective",
        "src": "115:48:183",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/StdMath.sol",
        "file": "forge-std/StdMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 146184,
        "sourceUnit": 31114,
        "symbolAliases": [
          {
            "foreign": {
              "id": 145586,
              "name": "stdMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 31113,
              "src": "124:7:183",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 145590,
        "nodeType": "ImportDirective",
        "src": "164:46:183",
        "nodes": [],
        "absolutePath": "lib/forge-std/src/Vm.sol",
        "file": "forge-std/Vm.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 146184,
        "sourceUnit": 36246,
        "symbolAliases": [
          {
            "foreign": {
              "id": 145588,
              "name": "Vm",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 36245,
              "src": "173:2:183",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 145589,
              "name": "VmSafe",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 35773,
              "src": "177:6:183",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 146183,
        "nodeType": "ContractDefinition",
        "src": "212:7579:183",
        "nodes": [
          {
            "id": 145654,
            "nodeType": "FunctionDefinition",
            "src": "485:579:183",
            "nodes": [],
            "body": {
              "id": 145653,
              "nodeType": "Block",
              "src": "628:436:183",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    145605
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 145605,
                      "mutability": "mutable",
                      "name": "current",
                      "nameLocation": "674:7:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 145653,
                      "src": "666:15:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 145604,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "666:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 145607,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 145606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "684:1:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "666:19:183"
                },
                {
                  "expression": {
                    "id": 145616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 145608,
                      "name": "filteredLogs",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 145602,
                      "src": "695:12:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct VmSafe.Log memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 145613,
                            "name": "logs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 145595,
                            "src": "727:4:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                              "typeString": "struct VmSafe.Log memory[] memory"
                            }
                          },
                          "id": 145614,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "732:6:183",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "727:11:183",
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
                        "id": 145612,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "710:16:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (struct VmSafe.Log memory[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 145610,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 145609,
                              "name": "VmSafe.Log",
                              "nameLocations": [
                                "714:6:183",
                                "721:3:183"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 34725,
                              "src": "714:10:183"
                            },
                            "referencedDeclaration": 34725,
                            "src": "714:10:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Log_$34725_storage_ptr",
                              "typeString": "struct VmSafe.Log"
                            }
                          },
                          "id": 145611,
                          "nodeType": "ArrayTypeName",
                          "src": "714:12:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Log_$34725_storage_$dyn_storage_ptr",
                            "typeString": "struct VmSafe.Log[]"
                          }
                        }
                      },
                      "id": 145615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "710:29:183",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct VmSafe.Log memory[] memory"
                      }
                    },
                    "src": "695:44:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct VmSafe.Log memory[] memory"
                    }
                  },
                  "id": 145617,
                  "nodeType": "ExpressionStatement",
                  "src": "695:44:183"
                },
                {
                  "body": {
                    "id": 145648,
                    "nodeType": "Block",
                    "src": "791:125:183",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 145636,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "expression": {
                                "baseExpression": {
                                  "id": 145629,
                                  "name": "logs",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 145595,
                                  "src": "809:4:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                                    "typeString": "struct VmSafe.Log memory[] memory"
                                  }
                                },
                                "id": 145631,
                                "indexExpression": {
                                  "id": 145630,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 145619,
                                  "src": "814:1:183",
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
                                "src": "809:7:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Log_$34725_memory_ptr",
                                  "typeString": "struct VmSafe.Log memory"
                                }
                              },
                              "id": 145632,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "817:6:183",
                              "memberName": "topics",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 34720,
                              "src": "809:14:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            "id": 145634,
                            "indexExpression": {
                              "hexValue": "30",
                              "id": 145633,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "824:1:183",
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
                            "src": "809:17:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 145635,
                            "name": "selector",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 145597,
                            "src": "830:8:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "809:29:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 145647,
                        "nodeType": "IfStatement",
                        "src": "805:101:183",
                        "trueBody": {
                          "id": 145646,
                          "nodeType": "Block",
                          "src": "840:66:183",
                          "statements": [
                            {
                              "expression": {
                                "id": 145644,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 145637,
                                    "name": "filteredLogs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 145602,
                                    "src": "858:12:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                                      "typeString": "struct VmSafe.Log memory[] memory"
                                    }
                                  },
                                  "id": 145640,
                                  "indexExpression": {
                                    "id": 145639,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "++",
                                    "prefix": false,
                                    "src": "871:9:183",
                                    "subExpression": {
                                      "id": 145638,
                                      "name": "current",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 145605,
                                      "src": "871:7:183",
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
                                  "src": "858:23:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Log_$34725_memory_ptr",
                                    "typeString": "struct VmSafe.Log memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "baseExpression": {
                                    "id": 145641,
                                    "name": "logs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 145595,
                                    "src": "884:4:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                                      "typeString": "struct VmSafe.Log memory[] memory"
                                    }
                                  },
                                  "id": 145643,
                                  "indexExpression": {
                                    "id": 145642,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 145619,
                                    "src": "889:1:183",
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
                                  "src": "884:7:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Log_$34725_memory_ptr",
                                    "typeString": "struct VmSafe.Log memory"
                                  }
                                },
                                "src": "858:33:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Log_$34725_memory_ptr",
                                  "typeString": "struct VmSafe.Log memory"
                                }
                              },
                              "id": 145645,
                              "nodeType": "ExpressionStatement",
                              "src": "858:33:183"
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
                    "id": 145625,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 145622,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 145619,
                      "src": "769:1:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 145623,
                        "name": "logs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145595,
                        "src": "773:4:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct VmSafe.Log memory[] memory"
                        }
                      },
                      "id": 145624,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "778:6:183",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "773:11:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "769:15:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 145649,
                  "initializationExpression": {
                    "assignments": [
                      145619
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 145619,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "762:1:183",
                        "nodeType": "VariableDeclaration",
                        "scope": 145649,
                        "src": "754:9:183",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 145618,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "754:7:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 145621,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 145620,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "766:1:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "754:13:183"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 145627,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "786:3:183",
                      "subExpression": {
                        "id": 145626,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145619,
                        "src": "786:1:183",
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
                    "id": 145628,
                    "nodeType": "ExpressionStatement",
                    "src": "786:3:183"
                  },
                  "nodeType": "ForStatement",
                  "src": "749:167:183"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "976:53:183",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "filteredLogs",
                              "nodeType": "YulIdentifier",
                              "src": "997:12:183"
                            },
                            {
                              "name": "current",
                              "nodeType": "YulIdentifier",
                              "src": "1011:7:183"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "990:6:183"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "990:29:183"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "990:29:183"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 145605,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1011:7:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145602,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "997:12:183",
                      "valueSize": 1
                    }
                  ],
                  "id": 145650,
                  "nodeType": "InlineAssembly",
                  "src": "967:62:183"
                },
                {
                  "expression": {
                    "id": 145651,
                    "name": "filteredLogs",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 145602,
                    "src": "1045:12:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct VmSafe.Log memory[] memory"
                    }
                  },
                  "functionReturnParameters": 145603,
                  "id": 145652,
                  "nodeType": "Return",
                  "src": "1038:19:183"
                }
              ]
            },
            "documentation": {
              "id": 145591,
              "nodeType": "StructuredDocumentation",
              "src": "230:250:183",
              "text": "@dev Filters an array of longs for events that match the provided\n      selector.\n @param logs The array of logs to filter.\n @param selector The selector to filter for.\n @return filteredLogs The filtered array of logs."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "filterLogs",
            "nameLocation": "494:10:183",
            "parameters": {
              "id": 145598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145595,
                  "mutability": "mutable",
                  "name": "logs",
                  "nameLocation": "534:4:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145654,
                  "src": "514:24:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 145593,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 145592,
                        "name": "VmSafe.Log",
                        "nameLocations": [
                          "514:6:183",
                          "521:3:183"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 34725,
                        "src": "514:10:183"
                      },
                      "referencedDeclaration": 34725,
                      "src": "514:10:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$34725_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 145594,
                    "nodeType": "ArrayTypeName",
                    "src": "514:12:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$34725_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 145597,
                  "mutability": "mutable",
                  "name": "selector",
                  "nameLocation": "556:8:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145654,
                  "src": "548:16:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 145596,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "504:66:183"
            },
            "returnParameters": {
              "id": 145603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145602,
                  "mutability": "mutable",
                  "name": "filteredLogs",
                  "nameLocation": "614:12:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145654,
                  "src": "594:32:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 145600,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 145599,
                        "name": "VmSafe.Log",
                        "nameLocations": [
                          "594:6:183",
                          "601:3:183"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 34725,
                        "src": "594:10:183"
                      },
                      "referencedDeclaration": 34725,
                      "src": "594:10:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$34725_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 145601,
                    "nodeType": "ArrayTypeName",
                    "src": "594:12:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$34725_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "593:34:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 145674,
            "nodeType": "FunctionDefinition",
            "src": "1283:192:183",
            "nodes": [],
            "body": {
              "id": 145673,
              "nodeType": "Block",
              "src": "1373:102:183",
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
                                "id": 145667,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1442:15:183",
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
                              "id": 145666,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "1432:9:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 145668,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1432:26:183",
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
                          "id": 145665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1425:6:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes4_$",
                            "typeString": "type(bytes4)"
                          },
                          "typeName": {
                            "id": 145664,
                            "name": "bytes4",
                            "nodeType": "ElementaryTypeName",
                            "src": "1425:6:183",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 145669,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1425:34:183",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "id": 145670,
                        "name": "reason",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145657,
                        "src": "1461:6:183",
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
                        "id": 145662,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -1,
                        "src": "1402:3:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 145663,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1406:18:183",
                      "memberName": "encodeWithSelector",
                      "nodeType": "MemberAccess",
                      "src": "1402:22:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes4) pure returns (bytes memory)"
                      }
                    },
                    "id": 145671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1402:66:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 145661,
                  "id": 145672,
                  "nodeType": "Return",
                  "src": "1383:85:183"
                }
              ]
            },
            "documentation": {
              "id": 145655,
              "nodeType": "StructuredDocumentation",
              "src": "1070:208:183",
              "text": "@dev Encodes a reason into a string error. This is useful for verifying\n      string errors in low-level calls.\n @param reason The reason to encode.\n @return The encoded string error."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toError",
            "nameLocation": "1292:7:183",
            "parameters": {
              "id": 145658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145657,
                  "mutability": "mutable",
                  "name": "reason",
                  "nameLocation": "1323:6:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145674,
                  "src": "1309:20:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 145656,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1309:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1299:36:183"
            },
            "returnParameters": {
              "id": 145661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145660,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 145674,
                  "src": "1359:12:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 145659,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1359:5:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1358:14:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 145823,
            "nodeType": "FunctionDefinition",
            "src": "1924:2036:183",
            "nodes": [],
            "body": {
              "id": 145822,
              "nodeType": "Block",
              "src": "2039:1921:183",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    145685
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 145685,
                      "mutability": "mutable",
                      "name": "maxStringLength",
                      "nameLocation": "2329:15:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 145822,
                      "src": "2321:23:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 145684,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2321:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 145687,
                  "initialValue": {
                    "hexValue": "3739",
                    "id": 145686,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2347:2:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_79_by_1",
                      "typeString": "int_const 79"
                    },
                    "value": "79"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2321:28:183"
                },
                {
                  "assignments": [
                    145689
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 145689,
                      "mutability": "mutable",
                      "name": "rawResult",
                      "nameLocation": "2372:9:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 145822,
                      "src": "2359:22:183",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 145688,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2359:5:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 145694,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 145692,
                        "name": "maxStringLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145685,
                        "src": "2394:15:183",
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
                      "id": 145691,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2384:9:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 145690,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2388:5:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 145693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2384:26:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2359:51:183"
                },
                {
                  "assignments": [
                    145696
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 145696,
                      "mutability": "mutable",
                      "name": "isNegative",
                      "nameLocation": "2688:10:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 145822,
                      "src": "2683:15:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 145695,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2683:4:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 145700,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 145699,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 145697,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 145677,
                      "src": "2701:3:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 145698,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2707:1:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2701:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2683:25:183"
                },
                {
                  "expression": {
                    "id": 145709,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 145701,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 145677,
                      "src": "2718:3:183",
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
                        "id": 145704,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 145702,
                          "name": "num",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 145677,
                          "src": "2724:3:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 145703,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2730:1:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2724:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 145707,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145677,
                        "src": "2741:3:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 145708,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "2724:20:183",
                      "trueExpression": {
                        "id": 145706,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "-",
                        "prefix": true,
                        "src": "2734:4:183",
                        "subExpression": {
                          "id": 145705,
                          "name": "num",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 145677,
                          "src": "2735:3:183",
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
                    "src": "2718:26:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 145710,
                  "nodeType": "ExpressionStatement",
                  "src": "2718:26:183"
                },
                {
                  "expression": {
                    "id": 145731,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 145711,
                        "name": "rawResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145689,
                        "src": "2909:9:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 145715,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145714,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 145712,
                          "name": "maxStringLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 145685,
                          "src": "2919:15:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 145713,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2937:1:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "2919:19:183",
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
                      "src": "2909:30:183",
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
                                  "id": 145727,
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
                                        "id": 145724,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "id": 145722,
                                          "name": "num",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 145677,
                                          "src": "2977:3:183",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "%",
                                        "rightExpression": {
                                          "hexValue": "3130",
                                          "id": 145723,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "2983:2:183",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_10_by_1",
                                            "typeString": "int_const 10"
                                          },
                                          "value": "10"
                                        },
                                        "src": "2977:8:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      }
                                    ],
                                    "id": 145725,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "2976:10:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "+",
                                  "rightExpression": {
                                    "hexValue": "3438",
                                    "id": 145726,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2989:2:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_48_by_1",
                                      "typeString": "int_const 48"
                                    },
                                    "value": "48"
                                  },
                                  "src": "2976:15:183",
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
                                "id": 145721,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2968:7:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 145720,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2968:7:183",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 145728,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2968:24:183",
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
                            "id": 145719,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2962:5:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": {
                              "id": 145718,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "2962:5:183",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 145729,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2962:31:183",
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
                        "id": 145717,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2942:6:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes1_$",
                          "typeString": "type(bytes1)"
                        },
                        "typeName": {
                          "id": 145716,
                          "name": "bytes1",
                          "nodeType": "ElementaryTypeName",
                          "src": "2942:6:183",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 145730,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2942:61:183",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "src": "2909:94:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 145732,
                  "nodeType": "ExpressionStatement",
                  "src": "2909:94:183"
                },
                {
                  "expression": {
                    "id": 145735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 145733,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 145677,
                      "src": "3013:3:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "hexValue": "3130",
                      "id": 145734,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3020:2:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "3013:9:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 145736,
                  "nodeType": "ExpressionStatement",
                  "src": "3013:9:183"
                },
                {
                  "assignments": [
                    145738
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 145738,
                      "mutability": "mutable",
                      "name": "digits",
                      "nameLocation": "3040:6:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 145822,
                      "src": "3032:14:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 145737,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3032:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 145740,
                  "initialValue": {
                    "hexValue": "31",
                    "id": 145739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3049:1:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1_by_1",
                      "typeString": "int_const 1"
                    },
                    "value": "1"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3032:18:183"
                },
                {
                  "body": {
                    "id": 145801,
                    "nodeType": "Block",
                    "src": "3103:349:183",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 145756,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 145752,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 145750,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 145679,
                              "src": "3121:8:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 145751,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3132:1:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "3121:12:183",
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
                            "id": 145755,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 145753,
                              "name": "digits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 145738,
                              "src": "3137:6:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 145754,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 145679,
                              "src": "3147:8:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3137:18:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3121:34:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 145796,
                          "nodeType": "Block",
                          "src": "3241:179:183",
                          "statements": [
                            {
                              "expression": {
                                "id": 145790,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 145768,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 145689,
                                    "src": "3259:9:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 145774,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 145773,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 145771,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 145769,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 145685,
                                        "src": "3269:15:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 145770,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 145738,
                                        "src": "3287:6:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "3269:24:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 145772,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3296:1:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "3269:28:183",
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
                                  "src": "3259:39:183",
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
                                              "id": 145786,
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
                                                    "id": 145783,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                      "id": 145781,
                                                      "name": "num",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 145677,
                                                      "src": "3344:3:183",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                      }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "%",
                                                    "rightExpression": {
                                                      "hexValue": "3130",
                                                      "id": 145782,
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "kind": "number",
                                                      "lValueRequested": false,
                                                      "nodeType": "Literal",
                                                      "src": "3350:2:183",
                                                      "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_10_by_1",
                                                        "typeString": "int_const 10"
                                                      },
                                                      "value": "10"
                                                    },
                                                    "src": "3344:8:183",
                                                    "typeDescriptions": {
                                                      "typeIdentifier": "t_int256",
                                                      "typeString": "int256"
                                                    }
                                                  }
                                                ],
                                                "id": 145784,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "3343:10:183",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_int256",
                                                  "typeString": "int256"
                                                }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "+",
                                              "rightExpression": {
                                                "hexValue": "3438",
                                                "id": 145785,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3356:2:183",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_48_by_1",
                                                  "typeString": "int_const 48"
                                                },
                                                "value": "48"
                                              },
                                              "src": "3343:15:183",
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
                                            "id": 145780,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "3335:7:183",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": {
                                              "id": 145779,
                                              "name": "uint256",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "3335:7:183",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 145787,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "3335:24:183",
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
                                        "id": 145778,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "3329:5:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint8_$",
                                          "typeString": "type(uint8)"
                                        },
                                        "typeName": {
                                          "id": 145777,
                                          "name": "uint8",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "3329:5:183",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 145788,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3329:31:183",
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
                                    "id": 145776,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3301:6:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 145775,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3301:6:183",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 145789,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3301:77:183",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "3259:119:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 145791,
                              "nodeType": "ExpressionStatement",
                              "src": "3259:119:183"
                            },
                            {
                              "expression": {
                                "id": 145794,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 145792,
                                  "name": "num",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 145677,
                                  "src": "3396:3:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "/=",
                                "rightHandSide": {
                                  "hexValue": "3130",
                                  "id": 145793,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3403:2:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "src": "3396:9:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 145795,
                              "nodeType": "ExpressionStatement",
                              "src": "3396:9:183"
                            }
                          ]
                        },
                        "id": 145797,
                        "nodeType": "IfStatement",
                        "src": "3117:303:183",
                        "trueBody": {
                          "id": 145767,
                          "nodeType": "Block",
                          "src": "3157:78:183",
                          "statements": [
                            {
                              "expression": {
                                "id": 145765,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 145757,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 145689,
                                    "src": "3175:9:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 145763,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 145762,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 145760,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 145758,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 145685,
                                        "src": "3185:15:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 145759,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 145738,
                                        "src": "3203:6:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "3185:24:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 145761,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3212:1:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "3185:28:183",
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
                                  "src": "3175:39:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "hexValue": "2e",
                                  "id": 145764,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3217:3:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                    "typeString": "literal_string \".\""
                                  },
                                  "value": "."
                                },
                                "src": "3175:45:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 145766,
                              "nodeType": "ExpressionStatement",
                              "src": "3175:45:183"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 145799,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "3433:8:183",
                          "subExpression": {
                            "id": 145798,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 145738,
                            "src": "3433:6:183",
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
                        "id": 145800,
                        "nodeType": "ExpressionStatement",
                        "src": "3433:8:183"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 145749,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 145743,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 145741,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145677,
                        "src": "3067:3:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 145742,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3074:1:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3067:8:183",
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
                      "id": 145748,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 145744,
                        "name": "digits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145738,
                        "src": "3079:6:183",
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
                        "id": 145747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 145745,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 145679,
                          "src": "3089:8:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 145746,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3100:1:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "3089:12:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3079:22:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3067:34:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 145802,
                  "nodeType": "WhileStatement",
                  "src": "3060:392:183"
                },
                {
                  "condition": {
                    "id": 145803,
                    "name": "isNegative",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 145696,
                    "src": "3566:10:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 145818,
                  "nodeType": "IfStatement",
                  "src": "3562:108:183",
                  "trueBody": {
                    "id": 145817,
                    "nodeType": "Block",
                    "src": "3578:92:183",
                    "statements": [
                      {
                        "expression": {
                          "id": 145812,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 145804,
                              "name": "rawResult",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 145689,
                              "src": "3592:9:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 145810,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 145809,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 145807,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 145805,
                                  "name": "maxStringLength",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 145685,
                                  "src": "3602:15:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 145806,
                                  "name": "digits",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 145738,
                                  "src": "3620:6:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "3602:24:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 145808,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3629:1:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "3602:28:183",
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
                            "src": "3592:39:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "2d",
                            "id": 145811,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3634:3:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561",
                              "typeString": "literal_string \"-\""
                            },
                            "value": "-"
                          },
                          "src": "3592:45:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 145813,
                        "nodeType": "ExpressionStatement",
                        "src": "3592:45:183"
                      },
                      {
                        "expression": {
                          "id": 145815,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "3651:8:183",
                          "subExpression": {
                            "id": 145814,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 145738,
                            "src": "3651:6:183",
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
                        "id": 145816,
                        "nodeType": "ExpressionStatement",
                        "src": "3651:8:183"
                      }
                    ]
                  }
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "3802:129:183",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3816:62:183",
                        "value": {
                          "arguments": [
                            {
                              "name": "rawResult",
                              "nodeType": "YulIdentifier",
                              "src": "3830:9:183"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "maxStringLength",
                                      "nodeType": "YulIdentifier",
                                      "src": "3849:15:183"
                                    },
                                    {
                                      "name": "digits",
                                      "nodeType": "YulIdentifier",
                                      "src": "3866:6:183"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "3845:3:183"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3845:28:183"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3875:1:183",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3841:3:183"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3841:36:183"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3826:3:183"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3826:52:183"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "3816:6:183"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "result",
                              "nodeType": "YulIdentifier",
                              "src": "3898:6:183"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "digits",
                                  "nodeType": "YulIdentifier",
                                  "src": "3910:6:183"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3918:1:183",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3906:3:183"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3906:14:183"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3891:6:183"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3891:30:183"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3891:30:183"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 145738,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3866:6:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145738,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3910:6:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145685,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3849:15:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145689,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3830:9:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145682,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3816:6:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145682,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3898:6:183",
                      "valueSize": 1
                    }
                  ],
                  "id": 145819,
                  "nodeType": "InlineAssembly",
                  "src": "3793:138:183"
                },
                {
                  "expression": {
                    "id": 145820,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 145682,
                    "src": "3947:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 145683,
                  "id": 145821,
                  "nodeType": "Return",
                  "src": "3940:13:183"
                }
              ]
            },
            "documentation": {
              "id": 145675,
              "nodeType": "StructuredDocumentation",
              "src": "1481:438:183",
              "text": "@dev Converts a signed integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "1933:8:183",
            "parameters": {
              "id": 145680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145677,
                  "mutability": "mutable",
                  "name": "num",
                  "nameLocation": "1958:3:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145823,
                  "src": "1951:10:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 145676,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1951:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 145679,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "1979:8:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145823,
                  "src": "1971:16:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 145678,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1971:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1941:52:183"
            },
            "returnParameters": {
              "id": 145683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145682,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2031:6:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145823,
                  "src": "2017:20:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 145681,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2017:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2016:22:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 145934,
            "nodeType": "FunctionDefinition",
            "src": "4412:1394:183",
            "nodes": [],
            "body": {
              "id": 145933,
              "nodeType": "Block",
              "src": "4528:1278:183",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    145834
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 145834,
                      "mutability": "mutable",
                      "name": "maxStringLength",
                      "nameLocation": "4767:15:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 145933,
                      "src": "4759:23:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 145833,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4759:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 145836,
                  "initialValue": {
                    "hexValue": "3739",
                    "id": 145835,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4785:2:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_79_by_1",
                      "typeString": "int_const 79"
                    },
                    "value": "79"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4759:28:183"
                },
                {
                  "assignments": [
                    145838
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 145838,
                      "mutability": "mutable",
                      "name": "rawResult",
                      "nameLocation": "4810:9:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 145933,
                      "src": "4797:22:183",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 145837,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4797:5:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 145843,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 145841,
                        "name": "maxStringLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145834,
                        "src": "4832:15:183",
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
                      "id": 145840,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4822:9:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 145839,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4826:5:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 145842,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4822:26:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4797:51:183"
                },
                {
                  "expression": {
                    "id": 145861,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 145844,
                        "name": "rawResult",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145838,
                        "src": "5013:9:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 145848,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145847,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 145845,
                          "name": "maxStringLength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 145834,
                          "src": "5023:15:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 145846,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5041:1:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5023:19:183",
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
                      "src": "5013:30:183",
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
                              "id": 145858,
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
                                    "id": 145855,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "id": 145853,
                                      "name": "num",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 145826,
                                      "src": "5060:3:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "%",
                                    "rightExpression": {
                                      "hexValue": "3130",
                                      "id": 145854,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5066:2:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_10_by_1",
                                        "typeString": "int_const 10"
                                      },
                                      "value": "10"
                                    },
                                    "src": "5060:8:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 145856,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "5059:10:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "3438",
                                "id": 145857,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5072:2:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_48_by_1",
                                  "typeString": "int_const 48"
                                },
                                "value": "48"
                              },
                              "src": "5059:15:183",
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
                            "id": 145852,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "5053:5:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": {
                              "id": 145851,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "5053:5:183",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 145859,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5053:22:183",
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
                        "id": 145850,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5046:6:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_bytes1_$",
                          "typeString": "type(bytes1)"
                        },
                        "typeName": {
                          "id": 145849,
                          "name": "bytes1",
                          "nodeType": "ElementaryTypeName",
                          "src": "5046:6:183",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 145860,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5046:30:183",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "src": "5013:63:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 145862,
                  "nodeType": "ExpressionStatement",
                  "src": "5013:63:183"
                },
                {
                  "expression": {
                    "id": 145865,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 145863,
                      "name": "num",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 145826,
                      "src": "5086:3:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "hexValue": "3130",
                      "id": 145864,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5093:2:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "5086:9:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 145866,
                  "nodeType": "ExpressionStatement",
                  "src": "5086:9:183"
                },
                {
                  "assignments": [
                    145868
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 145868,
                      "mutability": "mutable",
                      "name": "digits",
                      "nameLocation": "5113:6:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 145933,
                      "src": "5105:14:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 145867,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5105:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 145870,
                  "initialValue": {
                    "hexValue": "31",
                    "id": 145869,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5122:1:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1_by_1",
                      "typeString": "int_const 1"
                    },
                    "value": "1"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5105:18:183"
                },
                {
                  "body": {
                    "id": 145928,
                    "nodeType": "Block",
                    "src": "5176:340:183",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 145886,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 145882,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 145880,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 145828,
                              "src": "5194:8:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 145881,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5205:1:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "5194:12:183",
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
                            "id": 145885,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 145883,
                              "name": "digits",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 145868,
                              "src": "5210:6:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 145884,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 145828,
                              "src": "5220:8:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5210:18:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "5194:34:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 145923,
                          "nodeType": "Block",
                          "src": "5314:170:183",
                          "statements": [
                            {
                              "expression": {
                                "id": 145917,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 145898,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 145838,
                                    "src": "5332:9:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 145904,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 145903,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 145901,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 145899,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 145834,
                                        "src": "5342:15:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 145900,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 145868,
                                        "src": "5360:6:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "5342:24:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 145902,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5369:1:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "5342:28:183",
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
                                  "src": "5332:39:183",
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
                                          "id": 145914,
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
                                                "id": 145911,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                  "id": 145909,
                                                  "name": "num",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 145826,
                                                  "src": "5409:3:183",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "%",
                                                "rightExpression": {
                                                  "hexValue": "3130",
                                                  "id": 145910,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "5415:2:183",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_10_by_1",
                                                    "typeString": "int_const 10"
                                                  },
                                                  "value": "10"
                                                },
                                                "src": "5409:8:183",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              }
                                            ],
                                            "id": 145912,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "5408:10:183",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "+",
                                          "rightExpression": {
                                            "hexValue": "3438",
                                            "id": 145913,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5421:2:183",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_48_by_1",
                                              "typeString": "int_const 48"
                                            },
                                            "value": "48"
                                          },
                                          "src": "5408:15:183",
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
                                        "id": 145908,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "5402:5:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint8_$",
                                          "typeString": "type(uint8)"
                                        },
                                        "typeName": {
                                          "id": 145907,
                                          "name": "uint8",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "5402:5:183",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 145915,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "5402:22:183",
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
                                    "id": 145906,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5374:6:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes1_$",
                                      "typeString": "type(bytes1)"
                                    },
                                    "typeName": {
                                      "id": 145905,
                                      "name": "bytes1",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5374:6:183",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 145916,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5374:68:183",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "src": "5332:110:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 145918,
                              "nodeType": "ExpressionStatement",
                              "src": "5332:110:183"
                            },
                            {
                              "expression": {
                                "id": 145921,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 145919,
                                  "name": "num",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 145826,
                                  "src": "5460:3:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "/=",
                                "rightHandSide": {
                                  "hexValue": "3130",
                                  "id": 145920,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5467:2:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "src": "5460:9:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 145922,
                              "nodeType": "ExpressionStatement",
                              "src": "5460:9:183"
                            }
                          ]
                        },
                        "id": 145924,
                        "nodeType": "IfStatement",
                        "src": "5190:294:183",
                        "trueBody": {
                          "id": 145897,
                          "nodeType": "Block",
                          "src": "5230:78:183",
                          "statements": [
                            {
                              "expression": {
                                "id": 145895,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 145887,
                                    "name": "rawResult",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 145838,
                                    "src": "5248:9:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 145893,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 145892,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 145890,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 145888,
                                        "name": "maxStringLength",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 145834,
                                        "src": "5258:15:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 145889,
                                        "name": "digits",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 145868,
                                        "src": "5276:6:183",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "5258:24:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 145891,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "5285:1:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "5258:28:183",
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
                                  "src": "5248:39:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "hexValue": "2e",
                                  "id": 145894,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5290:3:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                    "typeString": "literal_string \".\""
                                  },
                                  "value": "."
                                },
                                "src": "5248:45:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 145896,
                              "nodeType": "ExpressionStatement",
                              "src": "5248:45:183"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 145926,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "5497:8:183",
                          "subExpression": {
                            "id": 145925,
                            "name": "digits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 145868,
                            "src": "5497:6:183",
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
                        "id": 145927,
                        "nodeType": "ExpressionStatement",
                        "src": "5497:8:183"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 145879,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 145873,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 145871,
                        "name": "num",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145826,
                        "src": "5140:3:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 145872,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5147:1:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5140:8:183",
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
                      "id": 145878,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 145874,
                        "name": "digits",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145868,
                        "src": "5152:6:183",
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
                        "id": 145877,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 145875,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 145828,
                          "src": "5162:8:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 145876,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5173:1:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5162:12:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5152:22:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5140:34:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 145929,
                  "nodeType": "WhileStatement",
                  "src": "5133:383:183"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5648:129:183",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5662:62:183",
                        "value": {
                          "arguments": [
                            {
                              "name": "rawResult",
                              "nodeType": "YulIdentifier",
                              "src": "5676:9:183"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "maxStringLength",
                                      "nodeType": "YulIdentifier",
                                      "src": "5695:15:183"
                                    },
                                    {
                                      "name": "digits",
                                      "nodeType": "YulIdentifier",
                                      "src": "5712:6:183"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "5691:3:183"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5691:28:183"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5721:1:183",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "5687:3:183"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5687:36:183"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5672:3:183"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5672:52:183"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "5662:6:183"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "result",
                              "nodeType": "YulIdentifier",
                              "src": "5744:6:183"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "digits",
                                  "nodeType": "YulIdentifier",
                                  "src": "5756:6:183"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5764:1:183",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5752:3:183"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5752:14:183"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5737:6:183"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5737:30:183"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5737:30:183"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 145868,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5712:6:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145868,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5756:6:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145834,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5695:15:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145838,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5676:9:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145831,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5662:6:183",
                      "valueSize": 1
                    },
                    {
                      "declaration": 145831,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5744:6:183",
                      "valueSize": 1
                    }
                  ],
                  "id": 145930,
                  "nodeType": "InlineAssembly",
                  "src": "5639:138:183"
                },
                {
                  "expression": {
                    "id": 145931,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 145831,
                    "src": "5793:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 145832,
                  "id": 145932,
                  "nodeType": "Return",
                  "src": "5786:13:183"
                }
              ]
            },
            "documentation": {
              "id": 145824,
              "nodeType": "StructuredDocumentation",
              "src": "3966:441:183",
              "text": "@dev Converts an unsigned integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "4421:8:183",
            "parameters": {
              "id": 145829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145826,
                  "mutability": "mutable",
                  "name": "num",
                  "nameLocation": "4447:3:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145934,
                  "src": "4439:11:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 145825,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4439:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 145828,
                  "mutability": "mutable",
                  "name": "decimals",
                  "nameLocation": "4468:8:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145934,
                  "src": "4460:16:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 145827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4460:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4429:53:183"
            },
            "returnParameters": {
              "id": 145832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145831,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4520:6:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 145934,
                  "src": "4506:20:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 145830,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4506:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4505:22:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 146003,
            "nodeType": "FunctionDefinition",
            "src": "5812:448:183",
            "nodes": [],
            "body": {
              "id": 146002,
              "nodeType": "Block",
              "src": "5913:347:183",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 145945,
                        "name": "prelude",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145936,
                        "src": "5936:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "hexValue": "5b",
                        "id": 145946,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5945:3:183",
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
                        "id": 145942,
                        "name": "console2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52434,
                        "src": "5923:8:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_console2_$52434_$",
                          "typeString": "type(library console2)"
                        }
                      },
                      "id": 145944,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5932:3:183",
                      "memberName": "log",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 45095,
                      "src": "5923:12:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory) pure"
                      }
                    },
                    "id": 145947,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5923:26:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 145948,
                  "nodeType": "ExpressionStatement",
                  "src": "5923:26:183"
                },
                {
                  "body": {
                    "id": 145988,
                    "nodeType": "Block",
                    "src": "6002:195:183",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 145965,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 145960,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 145950,
                            "src": "6020:1:183",
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
                            "id": 145964,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 145961,
                                "name": "array",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 145939,
                                "src": "6024:5:183",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 145962,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6030:6:183",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "6024:12:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 145963,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6039:1:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "6024:16:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6020:20:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 145986,
                          "nodeType": "Block",
                          "src": "6120:67:183",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "2020202020202020",
                                    "id": 145980,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6151:10:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                      "typeString": "literal_string \"        \""
                                    },
                                    "value": "        "
                                  },
                                  {
                                    "baseExpression": {
                                      "id": 145981,
                                      "name": "array",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 145939,
                                      "src": "6163:5:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[] memory"
                                      }
                                    },
                                    "id": 145983,
                                    "indexExpression": {
                                      "id": 145982,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 145950,
                                      "src": "6169:1:183",
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
                                    "src": "6163:8:183",
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
                                    "id": 145977,
                                    "name": "console2",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52434,
                                    "src": "6138:8:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_console2_$52434_$",
                                      "typeString": "type(library console2)"
                                    }
                                  },
                                  "id": 145979,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "6147:3:183",
                                  "memberName": "log",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 45061,
                                  "src": "6138:12:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                                    "typeString": "function (string memory,uint256) pure"
                                  }
                                },
                                "id": 145984,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6138:34:183",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 145985,
                              "nodeType": "ExpressionStatement",
                              "src": "6138:34:183"
                            }
                          ]
                        },
                        "id": 145987,
                        "nodeType": "IfStatement",
                        "src": "6016:171:183",
                        "trueBody": {
                          "id": 145976,
                          "nodeType": "Block",
                          "src": "6042:72:183",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "2020202020202020",
                                    "id": 145969,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6073:10:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b",
                                      "typeString": "literal_string \"        \""
                                    },
                                    "value": "        "
                                  },
                                  {
                                    "baseExpression": {
                                      "id": 145970,
                                      "name": "array",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 145939,
                                      "src": "6085:5:183",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[] memory"
                                      }
                                    },
                                    "id": 145972,
                                    "indexExpression": {
                                      "id": 145971,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 145950,
                                      "src": "6091:1:183",
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
                                    "src": "6085:8:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "hexValue": "2c",
                                    "id": 145973,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6095:3:183",
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
                                    "id": 145966,
                                    "name": "console2",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 52434,
                                    "src": "6060:8:183",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_console2_$52434_$",
                                      "typeString": "type(library console2)"
                                    }
                                  },
                                  "id": 145968,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "6069:3:183",
                                  "memberName": "log",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 45625,
                                  "src": "6060:12:183",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory,uint256,string memory) pure"
                                  }
                                },
                                "id": 145974,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6060:39:183",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 145975,
                              "nodeType": "ExpressionStatement",
                              "src": "6060:39:183"
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
                    "id": 145956,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 145953,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 145950,
                      "src": "5979:1:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 145954,
                        "name": "array",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145939,
                        "src": "5983:5:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 145955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5989:6:183",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "5983:12:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5979:16:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 145989,
                  "initializationExpression": {
                    "assignments": [
                      145950
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 145950,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "5972:1:183",
                        "nodeType": "VariableDeclaration",
                        "scope": 145989,
                        "src": "5964:9:183",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 145949,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5964:7:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 145952,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 145951,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5976:1:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "5964:13:183"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 145958,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "5997:3:183",
                      "subExpression": {
                        "id": 145957,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 145950,
                        "src": "5997:1:183",
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
                    "id": 145959,
                    "nodeType": "ExpressionStatement",
                    "src": "5997:3:183"
                  },
                  "nodeType": "ForStatement",
                  "src": "5959:238:183"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "202020205d",
                        "id": 145993,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6219:7:183",
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
                        "id": 145990,
                        "name": "console2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52434,
                        "src": "6206:8:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_console2_$52434_$",
                          "typeString": "type(library console2)"
                        }
                      },
                      "id": 145992,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6215:3:183",
                      "memberName": "log",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 44948,
                      "src": "6206:12:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 145994,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6206:21:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 145995,
                  "nodeType": "ExpressionStatement",
                  "src": "6206:21:183"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 145999,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6250:2:183",
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
                        "id": 145996,
                        "name": "console2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52434,
                        "src": "6237:8:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_console2_$52434_$",
                          "typeString": "type(library console2)"
                        }
                      },
                      "id": 145998,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6246:3:183",
                      "memberName": "log",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 44948,
                      "src": "6237:12:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 146000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6237:16:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 146001,
                  "nodeType": "ExpressionStatement",
                  "src": "6237:16:183"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "logArray",
            "nameLocation": "5821:8:183",
            "parameters": {
              "id": 145940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145936,
                  "mutability": "mutable",
                  "name": "prelude",
                  "nameLocation": "5853:7:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146003,
                  "src": "5839:21:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 145935,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5839:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 145939,
                  "mutability": "mutable",
                  "name": "array",
                  "nameLocation": "5887:5:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146003,
                  "src": "5870:22:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 145937,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5870:7:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 145938,
                    "nodeType": "ArrayTypeName",
                    "src": "5870:9:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5829:69:183"
            },
            "returnParameters": {
              "id": 145941,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5913:0:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 146040,
            "nodeType": "FunctionDefinition",
            "src": "6266:333:183",
            "nodes": [],
            "body": {
              "id": 146039,
              "nodeType": "Block",
              "src": "6403:196:183",
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
                        "id": 146017,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 146015,
                          "name": "minimum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 146007,
                          "src": "6421:7:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 146016,
                          "name": "maximum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 146009,
                          "src": "6432:7:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6421:18:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c69623a206d696e203e206d6178",
                        "id": 146018,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6441:16:183",
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
                      "id": 146014,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6413:7:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 146019,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6413:45:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 146020,
                  "nodeType": "ExpressionStatement",
                  "src": "6413:45:183"
                },
                {
                  "assignments": [
                    146022
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 146022,
                      "mutability": "mutable",
                      "name": "rangeSize",
                      "nameLocation": "6477:9:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 146039,
                      "src": "6469:17:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 146021,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6469:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 146028,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 146027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 146025,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 146023,
                        "name": "maximum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146009,
                        "src": "6489:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 146024,
                        "name": "minimum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146007,
                        "src": "6499:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6489:17:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 146026,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6509:1:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6489:21:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6469:41:183"
                },
                {
                  "assignments": [
                    146030
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 146030,
                      "mutability": "mutable",
                      "name": "modValue",
                      "nameLocation": "6528:8:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 146039,
                      "src": "6520:16:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 146029,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6520:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 146034,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 146033,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 146031,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146005,
                      "src": "6539:5:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "id": 146032,
                      "name": "rangeSize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146022,
                      "src": "6547:9:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6539:17:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6520:36:183"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 146037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 146035,
                      "name": "modValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146030,
                      "src": "6574:8:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 146036,
                      "name": "minimum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146007,
                      "src": "6585:7:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6574:18:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 146013,
                  "id": 146038,
                  "nodeType": "Return",
                  "src": "6567:25:183"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "normalizeToRange",
            "nameLocation": "6275:16:183",
            "parameters": {
              "id": 146010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146005,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6309:5:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146040,
                  "src": "6301:13:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 146004,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6301:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146007,
                  "mutability": "mutable",
                  "name": "minimum",
                  "nameLocation": "6332:7:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146040,
                  "src": "6324:15:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 146006,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6324:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146009,
                  "mutability": "mutable",
                  "name": "maximum",
                  "nameLocation": "6357:7:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146040,
                  "src": "6349:15:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 146008,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6349:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6291:79:183"
            },
            "returnParameters": {
              "id": 146013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146012,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 146040,
                  "src": "6394:7:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 146011,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6394:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6393:9:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 146086,
            "nodeType": "FunctionDefinition",
            "src": "6605:401:183",
            "nodes": [],
            "body": {
              "id": 146085,
              "nodeType": "Block",
              "src": "6738:268:183",
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
                        "id": 146054,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 146052,
                          "name": "minimum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 146044,
                          "src": "6756:7:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 146053,
                          "name": "maximum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 146046,
                          "src": "6767:7:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6756:18:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c69623a206d696e203e206d6178",
                        "id": 146055,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6776:16:183",
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
                      "id": 146051,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6748:7:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 146056,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6748:45:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 146057,
                  "nodeType": "ExpressionStatement",
                  "src": "6748:45:183"
                },
                {
                  "assignments": [
                    146059
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 146059,
                      "mutability": "mutable",
                      "name": "rangeSize",
                      "nameLocation": "6811:9:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 146085,
                      "src": "6804:16:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 146058,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6804:6:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 146065,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 146064,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 146062,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 146060,
                        "name": "maximum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146046,
                        "src": "6823:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 146061,
                        "name": "minimum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146044,
                        "src": "6833:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "6823:17:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 146063,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6843:1:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "6823:21:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6804:40:183"
                },
                {
                  "assignments": [
                    146067
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 146067,
                      "mutability": "mutable",
                      "name": "modValue",
                      "nameLocation": "6861:8:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 146085,
                      "src": "6854:15:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 146066,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6854:6:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 146071,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 146070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 146068,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146042,
                      "src": "6872:5:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "id": 146069,
                      "name": "rangeSize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146059,
                      "src": "6880:9:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6872:17:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6854:35:183"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 146074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 146072,
                      "name": "modValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146067,
                      "src": "6904:8:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 146073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6915:1:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6904:12:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 146080,
                  "nodeType": "IfStatement",
                  "src": "6900:64:183",
                  "trueBody": {
                    "id": 146079,
                    "nodeType": "Block",
                    "src": "6918:46:183",
                    "statements": [
                      {
                        "expression": {
                          "id": 146077,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 146075,
                            "name": "modValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 146067,
                            "src": "6932:8:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 146076,
                            "name": "rangeSize",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 146059,
                            "src": "6944:9:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "6932:21:183",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 146078,
                        "nodeType": "ExpressionStatement",
                        "src": "6932:21:183"
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
                    "id": 146083,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 146081,
                      "name": "modValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146067,
                      "src": "6981:8:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 146082,
                      "name": "minimum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146044,
                      "src": "6992:7:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6981:18:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 146050,
                  "id": 146084,
                  "nodeType": "Return",
                  "src": "6974:25:183"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "normalizeToRange",
            "nameLocation": "6614:16:183",
            "parameters": {
              "id": 146047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146042,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6647:5:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146086,
                  "src": "6640:12:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 146041,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6640:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146044,
                  "mutability": "mutable",
                  "name": "minimum",
                  "nameLocation": "6669:7:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146086,
                  "src": "6662:14:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 146043,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6662:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146046,
                  "mutability": "mutable",
                  "name": "maximum",
                  "nameLocation": "6693:7:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146086,
                  "src": "6686:14:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 146045,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6686:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6630:76:183"
            },
            "returnParameters": {
              "id": 146050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146049,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 146086,
                  "src": "6730:6:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 146048,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6730:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6729:8:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 146110,
            "nodeType": "FunctionDefinition",
            "src": "7012:205:183",
            "nodes": [],
            "body": {
              "id": 146109,
              "nodeType": "Block",
              "src": "7130:87:183",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    146098
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 146098,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "7148:5:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 146109,
                      "src": "7140:13:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 146097,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7140:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 146104,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 146101,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146088,
                        "src": "7170:1:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 146102,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146090,
                        "src": "7173:1:183",
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
                        "id": 146099,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "7156:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 146100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7164:5:183",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31024,
                      "src": "7156:13:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 146103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7156:19:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7140:35:183"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 146107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 146105,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146098,
                      "src": "7192:5:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 146106,
                      "name": "tolerance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146092,
                      "src": "7201:9:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7192:18:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 146096,
                  "id": 146108,
                  "nodeType": "Return",
                  "src": "7185:25:183"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approxEq",
            "nameLocation": "7021:8:183",
            "parameters": {
              "id": 146093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146088,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7047:1:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146110,
                  "src": "7039:9:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 146087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7039:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146090,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7066:1:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146110,
                  "src": "7058:9:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 146089,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7058:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146092,
                  "mutability": "mutable",
                  "name": "tolerance",
                  "nameLocation": "7085:9:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146110,
                  "src": "7077:17:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 146091,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7077:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7029:71:183"
            },
            "returnParameters": {
              "id": 146096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146095,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 146110,
                  "src": "7124:4:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 146094,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7124:4:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7123:6:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 146134,
            "nodeType": "FunctionDefinition",
            "src": "7223:203:183",
            "nodes": [],
            "body": {
              "id": 146133,
              "nodeType": "Block",
              "src": "7339:87:183",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    146122
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 146122,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "7357:5:183",
                      "nodeType": "VariableDeclaration",
                      "scope": 146133,
                      "src": "7349:13:183",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 146121,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7349:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 146128,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 146125,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146112,
                        "src": "7379:1:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 146126,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146114,
                        "src": "7382:1:183",
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
                        "id": 146123,
                        "name": "stdMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31113,
                        "src": "7365:7:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_stdMath_$31113_$",
                          "typeString": "type(library stdMath)"
                        }
                      },
                      "id": 146124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7373:5:183",
                      "memberName": "delta",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 31060,
                      "src": "7365:13:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (int256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 146127,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7365:19:183",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7349:35:183"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 146131,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 146129,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146122,
                      "src": "7401:5:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 146130,
                      "name": "tolerance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 146116,
                      "src": "7410:9:183",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7401:18:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 146120,
                  "id": 146132,
                  "nodeType": "Return",
                  "src": "7394:25:183"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approxEq",
            "nameLocation": "7232:8:183",
            "parameters": {
              "id": 146117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146112,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7257:1:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146134,
                  "src": "7250:8:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 146111,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7250:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146114,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7275:1:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146134,
                  "src": "7268:8:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 146113,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7268:6:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146116,
                  "mutability": "mutable",
                  "name": "tolerance",
                  "nameLocation": "7294:9:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146134,
                  "src": "7286:17:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 146115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7286:7:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7240:69:183"
            },
            "returnParameters": {
              "id": 146120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146119,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 146134,
                  "src": "7333:4:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 146118,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7333:4:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7332:6:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 146158,
            "nodeType": "FunctionDefinition",
            "src": "7432:175:183",
            "nodes": [],
            "body": {
              "id": 146157,
              "nodeType": "Block",
              "src": "7505:102:183",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 146155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 146146,
                              "name": "b1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 146136,
                              "src": "7561:2:183",
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
                              "id": 146144,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7544:3:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 146145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7548:12:183",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7544:16:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 146147,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7544:20:183",
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
                        "id": 146143,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7534:9:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 146148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7534:31:183",
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
                              "id": 146152,
                              "name": "b2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 146138,
                              "src": "7596:2:183",
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
                              "id": 146150,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7579:3:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 146151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7583:12:183",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7579:16:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 146153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7579:20:183",
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
                        "id": 146149,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7569:9:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 146154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7569:31:183",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7534:66:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 146142,
                  "id": 146156,
                  "nodeType": "Return",
                  "src": "7515:85:183"
                }
              ]
            },
            "functionSelector": "cdb16840",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "eq",
            "nameLocation": "7441:2:183",
            "parameters": {
              "id": 146139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146136,
                  "mutability": "mutable",
                  "name": "b1",
                  "nameLocation": "7457:2:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146158,
                  "src": "7444:15:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 146135,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7444:5:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146138,
                  "mutability": "mutable",
                  "name": "b2",
                  "nameLocation": "7474:2:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146158,
                  "src": "7461:15:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 146137,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7461:5:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7443:34:183"
            },
            "returnParameters": {
              "id": 146142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146141,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 146158,
                  "src": "7499:4:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 146140,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7499:4:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7498:6:183"
            },
            "scope": 146183,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 146182,
            "nodeType": "FunctionDefinition",
            "src": "7613:176:183",
            "nodes": [],
            "body": {
              "id": 146181,
              "nodeType": "Block",
              "src": "7687:102:183",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "id": 146179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 146170,
                              "name": "b1",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 146160,
                              "src": "7743:2:183",
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
                              "id": 146168,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7726:3:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 146169,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7730:12:183",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7726:16:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 146171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7726:20:183",
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
                        "id": 146167,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7716:9:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 146172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7716:31:183",
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
                              "id": 146176,
                              "name": "b2",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 146162,
                              "src": "7778:2:183",
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
                              "id": 146174,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "7761:3:183",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 146175,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7765:12:183",
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "src": "7761:16:183",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 146177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7761:20:183",
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
                        "id": 146173,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "7751:9:183",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 146178,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7751:31:183",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7716:66:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 146166,
                  "id": 146180,
                  "nodeType": "Return",
                  "src": "7697:85:183"
                }
              ]
            },
            "functionSelector": "d37a20ba",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "neq",
            "nameLocation": "7622:3:183",
            "parameters": {
              "id": 146163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146160,
                  "mutability": "mutable",
                  "name": "b1",
                  "nameLocation": "7639:2:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146182,
                  "src": "7626:15:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 146159,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7626:5:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146162,
                  "mutability": "mutable",
                  "name": "b2",
                  "nameLocation": "7656:2:183",
                  "nodeType": "VariableDeclaration",
                  "scope": 146182,
                  "src": "7643:15:183",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 146161,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7643:5:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7625:34:183"
            },
            "returnParameters": {
              "id": 146166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 146165,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 146182,
                  "src": "7681:4:183",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 146164,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7681:4:183",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7680:6:183"
            },
            "scope": 146183,
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
          146183
        ],
        "name": "Lib",
        "nameLocation": "220:3:183",
        "scope": 146184,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 183
} as const;
