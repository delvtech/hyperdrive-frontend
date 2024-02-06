export declare const Lib: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "eq";
        readonly inputs: readonly [{
            readonly name: "b1";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "b2";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "neq";
        readonly inputs: readonly [{
            readonly name: "b1";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "b2";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }];
    readonly bytecode: {
        readonly object: "0x61029e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220d333ef02d5eecddba074fc17f5144964088c0d18c8f6c7c51de77771642d720b64736f6c63430008140033";
        readonly sourceMap: "212:7579:183:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;212:7579:183;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220d333ef02d5eecddba074fc17f5144964088c0d18c8f6c7c51de77771642d720b64736f6c63430008140033";
        readonly sourceMap: "212:7579:183:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7432:175;;;;;;:::i;:::-;;:::i;:::-;;;1586:14:184;;1579:22;1561:41;;1549:2;1534:18;7432:175:183;;;;;;;7613:176;;;;;;:::i;:::-;;:::i;7432:175::-;7499:4;7596:2;7579:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7569:31;;;;;;7561:2;7544:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7534:31;;;;;;:66;7515:85;;7432:175;;;;:::o;7613:176::-;7681:4;7778:2;7761:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7751:31;;;;;;7743:2;7726:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7716:31;;;;;;:66;;7697:85;;7613:176;;;;:::o;14:127:184:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:718;188:5;241:3;234:4;226:6;222:17;218:27;208:55;;259:1;256;249:12;208:55;295:6;282:20;321:18;358:2;354;351:10;348:36;;;364:18;;:::i;:::-;439:2;433:9;407:2;493:13;;-1:-1:-1;;489:22:184;;;513:2;485:31;481:40;469:53;;;537:18;;;557:22;;;534:46;531:72;;;583:18;;:::i;:::-;623:10;619:2;612:22;658:2;650:6;643:18;704:3;697:4;692:2;684:6;680:15;676:26;673:35;670:55;;;721:1;718;711:12;670:55;785:2;778:4;770:6;766:17;759:4;751:6;747:17;734:54;832:1;825:4;820:2;812:6;808:15;804:26;797:37;852:6;843:15;;;;;;146:718;;;;:::o;869:539::-;955:6;963;1016:2;1004:9;995:7;991:23;987:32;984:52;;;1032:1;1029;1022:12;984:52;1072:9;1059:23;1101:18;1142:2;1134:6;1131:14;1128:34;;;1158:1;1155;1148:12;1128:34;1181:49;1222:7;1213:6;1202:9;1198:22;1181:49;:::i;:::-;1171:59;;1283:2;1272:9;1268:18;1255:32;1239:48;;1312:2;1302:8;1299:16;1296:36;;;1328:1;1325;1318:12;1296:36;;1351:51;1394:7;1383:8;1372:9;1368:24;1351:51;:::i;:::-;1341:61;;;869:539;;;;;:::o;1613:412::-;1742:3;1780:6;1774:13;1805:1;1815:129;1829:6;1826:1;1823:13;1815:129;;;1927:4;1911:14;;;1907:25;;1901:32;1888:11;;;1881:53;1844:12;1815:129;;;-1:-1:-1;1999:1:184;1963:16;;1988:13;;;-1:-1:-1;1963:16:184;1613:412;-1:-1:-1;1613:412:184:o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "eq(bytes,bytes)": "cdb16840";
        readonly "neq(bytes,bytes)": "d37a20ba";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"eq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"neq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/Lib.sol\":\"Lib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"test/utils/Lib.sol\":{\"keccak256\":\"0x912d18df3f75cbd2b14b90a3974c71947dde5a7c53e20e106ae6f7bd18a68f1e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://853298cef661e6006681ea7066ab72dcda6f44efecec79ebdcef58649a543a74\",\"dweb:/ipfs/Qme9LSzGAwTfre5ZEW6AaAmQToNjS7BDYaoEA3HmPuDPAw\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "b1";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "b2";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "eq";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "b1";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "b2";
                    readonly type: "bytes";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "neq";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "test/utils/Lib.sol": "Lib";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/StdMath.sol": {
                readonly keccak256: "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2";
                readonly urls: readonly ["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92", "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/Vm.sol": {
                readonly keccak256: "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4";
                readonly urls: readonly ["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241", "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/console2.sol": {
                readonly keccak256: "0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea";
                readonly urls: readonly ["bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973", "dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"];
                readonly license: "MIT";
            };
            readonly "test/utils/Lib.sol": {
                readonly keccak256: "0x912d18df3f75cbd2b14b90a3974c71947dde5a7c53e20e106ae6f7bd18a68f1e";
                readonly urls: readonly ["bzz-raw://853298cef661e6006681ea7066ab72dcda6f44efecec79ebdcef58649a543a74", "dweb:/ipfs/Qme9LSzGAwTfre5ZEW6AaAmQToNjS7BDYaoEA3HmPuDPAw"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "test/utils/Lib.sol";
        readonly id: 146184;
        readonly exportedSymbols: {
            readonly Lib: readonly [146183];
            readonly Vm: readonly [36245];
            readonly VmSafe: readonly [35773];
            readonly console2: readonly [52434];
            readonly stdMath: readonly [31113];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:7753:183";
        readonly nodes: readonly [{
            readonly id: 145583;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:183";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 145585;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:183";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/console2.sol";
            readonly file: "forge-std/console2.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 146184;
            readonly sourceUnit: 52435;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 145584;
                    readonly name: "console2";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 52434;
                    readonly src: "73:8:183";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 145587;
            readonly nodeType: "ImportDirective";
            readonly src: "115:48:183";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdMath.sol";
            readonly file: "forge-std/StdMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 146184;
            readonly sourceUnit: 31114;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 145586;
                    readonly name: "stdMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 31113;
                    readonly src: "124:7:183";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 145590;
            readonly nodeType: "ImportDirective";
            readonly src: "164:46:183";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "forge-std/Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 146184;
            readonly sourceUnit: 36246;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 145588;
                    readonly name: "Vm";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 36245;
                    readonly src: "173:2:183";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 145589;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35773;
                    readonly src: "177:6:183";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 146183;
            readonly nodeType: "ContractDefinition";
            readonly src: "212:7579:183";
            readonly nodes: readonly [{
                readonly id: 145654;
                readonly nodeType: "FunctionDefinition";
                readonly src: "485:579:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 145653;
                    readonly nodeType: "Block";
                    readonly src: "628:436:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [145605];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 145605;
                            readonly mutability: "mutable";
                            readonly name: "current";
                            readonly nameLocation: "674:7:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 145653;
                            readonly src: "666:15:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 145604;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "666:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 145607;
                        readonly initialValue: {
                            readonly hexValue: "30";
                            readonly id: 145606;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "684:1:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "666:19:183";
                    }, {
                        readonly expression: {
                            readonly id: 145616;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 145608;
                                readonly name: "filteredLogs";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145602;
                                readonly src: "695:12:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct VmSafe.Log memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 145613;
                                        readonly name: "logs";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145595;
                                        readonly src: "727:4:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                                            readonly typeString: "struct VmSafe.Log memory[] memory";
                                        };
                                    };
                                    readonly id: 145614;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "732:6:183";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "727:11:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 145612;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "NewExpression";
                                    readonly src: "710:16:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure returns (struct VmSafe.Log memory[] memory)";
                                    };
                                    readonly typeName: {
                                        readonly baseType: {
                                            readonly id: 145610;
                                            readonly nodeType: "UserDefinedTypeName";
                                            readonly pathNode: {
                                                readonly id: 145609;
                                                readonly name: "VmSafe.Log";
                                                readonly nameLocations: readonly ["714:6:183", "721:3:183"];
                                                readonly nodeType: "IdentifierPath";
                                                readonly referencedDeclaration: 34725;
                                                readonly src: "714:10:183";
                                            };
                                            readonly referencedDeclaration: 34725;
                                            readonly src: "714:10:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Log_$34725_storage_ptr";
                                                readonly typeString: "struct VmSafe.Log";
                                            };
                                        };
                                        readonly id: 145611;
                                        readonly nodeType: "ArrayTypeName";
                                        readonly src: "714:12:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_storage_$dyn_storage_ptr";
                                            readonly typeString: "struct VmSafe.Log[]";
                                        };
                                    };
                                };
                                readonly id: 145615;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "710:29:183";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct VmSafe.Log memory[] memory";
                                };
                            };
                            readonly src: "695:44:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct VmSafe.Log memory[] memory";
                            };
                        };
                        readonly id: 145617;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "695:44:183";
                    }, {
                        readonly body: {
                            readonly id: 145648;
                            readonly nodeType: "Block";
                            readonly src: "791:125:183";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly id: 145636;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly baseExpression: {
                                            readonly expression: {
                                                readonly baseExpression: {
                                                    readonly id: 145629;
                                                    readonly name: "logs";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145595;
                                                    readonly src: "809:4:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                                                        readonly typeString: "struct VmSafe.Log memory[] memory";
                                                    };
                                                };
                                                readonly id: 145631;
                                                readonly indexExpression: {
                                                    readonly id: 145630;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145619;
                                                    readonly src: "814:1:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "809:7:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Log_$34725_memory_ptr";
                                                    readonly typeString: "struct VmSafe.Log memory";
                                                };
                                            };
                                            readonly id: 145632;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "817:6:183";
                                            readonly memberName: "topics";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 34720;
                                            readonly src: "809:14:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                                readonly typeString: "bytes32[] memory";
                                            };
                                        };
                                        readonly id: 145634;
                                        readonly indexExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 145633;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "824:1:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "809:17:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly id: 145635;
                                        readonly name: "selector";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145597;
                                        readonly src: "830:8:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "809:29:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 145647;
                                readonly nodeType: "IfStatement";
                                readonly src: "805:101:183";
                                readonly trueBody: {
                                    readonly id: 145646;
                                    readonly nodeType: "Block";
                                    readonly src: "840:66:183";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 145644;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 145637;
                                                    readonly name: "filteredLogs";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145602;
                                                    readonly src: "858:12:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                                                        readonly typeString: "struct VmSafe.Log memory[] memory";
                                                    };
                                                };
                                                readonly id: 145640;
                                                readonly indexExpression: {
                                                    readonly id: 145639;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "UnaryOperation";
                                                    readonly operator: "++";
                                                    readonly prefix: false;
                                                    readonly src: "871:9:183";
                                                    readonly subExpression: {
                                                        readonly id: 145638;
                                                        readonly name: "current";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 145605;
                                                        readonly src: "871:7:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "858:23:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Log_$34725_memory_ptr";
                                                    readonly typeString: "struct VmSafe.Log memory";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 145641;
                                                    readonly name: "logs";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145595;
                                                    readonly src: "884:4:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                                                        readonly typeString: "struct VmSafe.Log memory[] memory";
                                                    };
                                                };
                                                readonly id: 145643;
                                                readonly indexExpression: {
                                                    readonly id: 145642;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145619;
                                                    readonly src: "889:1:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "884:7:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Log_$34725_memory_ptr";
                                                    readonly typeString: "struct VmSafe.Log memory";
                                                };
                                            };
                                            readonly src: "858:33:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Log_$34725_memory_ptr";
                                                readonly typeString: "struct VmSafe.Log memory";
                                            };
                                        };
                                        readonly id: 145645;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "858:33:183";
                                    }];
                                };
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 145625;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 145622;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145619;
                                readonly src: "769:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 145623;
                                    readonly name: "logs";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145595;
                                    readonly src: "773:4:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                                        readonly typeString: "struct VmSafe.Log memory[] memory";
                                    };
                                };
                                readonly id: 145624;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "778:6:183";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "773:11:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "769:15:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 145649;
                        readonly initializationExpression: {
                            readonly assignments: readonly [145619];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 145619;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "762:1:183";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 145649;
                                readonly src: "754:9:183";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 145618;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "754:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 145621;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 145620;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "766:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "754:13:183";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 145627;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: false;
                                readonly src: "786:3:183";
                                readonly subExpression: {
                                    readonly id: 145626;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145619;
                                    readonly src: "786:1:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 145628;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "786:3:183";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "749:167:183";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "976:53:183";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "filteredLogs";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "997:12:183";
                                    }, {
                                        readonly name: "current";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1011:7:183";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "990:6:183";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "990:29:183";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "990:29:183";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 145605;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1011:7:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145602;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "997:12:183";
                            readonly valueSize: 1;
                        }];
                        readonly id: 145650;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "967:62:183";
                    }, {
                        readonly expression: {
                            readonly id: 145651;
                            readonly name: "filteredLogs";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 145602;
                            readonly src: "1045:12:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct VmSafe.Log memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 145603;
                        readonly id: 145652;
                        readonly nodeType: "Return";
                        readonly src: "1038:19:183";
                    }];
                };
                readonly documentation: {
                    readonly id: 145591;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "230:250:183";
                    readonly text: "@dev Filters an array of longs for events that match the provided\n      selector.\n @param logs The array of logs to filter.\n @param selector The selector to filter for.\n @return filteredLogs The filtered array of logs.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "filterLogs";
                readonly nameLocation: "494:10:183";
                readonly parameters: {
                    readonly id: 145598;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 145595;
                        readonly mutability: "mutable";
                        readonly name: "logs";
                        readonly nameLocation: "534:4:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145654;
                        readonly src: "514:24:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct VmSafe.Log[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 145593;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 145592;
                                    readonly name: "VmSafe.Log";
                                    readonly nameLocations: readonly ["514:6:183", "521:3:183"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 34725;
                                    readonly src: "514:10:183";
                                };
                                readonly referencedDeclaration: 34725;
                                readonly src: "514:10:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Log_$34725_storage_ptr";
                                    readonly typeString: "struct VmSafe.Log";
                                };
                            };
                            readonly id: 145594;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "514:12:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_storage_$dyn_storage_ptr";
                                readonly typeString: "struct VmSafe.Log[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 145597;
                        readonly mutability: "mutable";
                        readonly name: "selector";
                        readonly nameLocation: "556:8:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145654;
                        readonly src: "548:16:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 145596;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "548:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "504:66:183";
                };
                readonly returnParameters: {
                    readonly id: 145603;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 145602;
                        readonly mutability: "mutable";
                        readonly name: "filteredLogs";
                        readonly nameLocation: "614:12:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145654;
                        readonly src: "594:32:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct VmSafe.Log[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 145600;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 145599;
                                    readonly name: "VmSafe.Log";
                                    readonly nameLocations: readonly ["594:6:183", "601:3:183"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 34725;
                                    readonly src: "594:10:183";
                                };
                                readonly referencedDeclaration: 34725;
                                readonly src: "594:10:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Log_$34725_storage_ptr";
                                    readonly typeString: "struct VmSafe.Log";
                                };
                            };
                            readonly id: 145601;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "594:12:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Log_$34725_storage_$dyn_storage_ptr";
                                readonly typeString: "struct VmSafe.Log[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "593:34:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 145674;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1283:192:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 145673;
                    readonly nodeType: "Block";
                    readonly src: "1373:102:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "4572726f7228737472696e6729";
                                        readonly id: 145667;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "1442:15:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_08c379a0afcc32b1a39302f7cb8073359698411ab5fd6e3edb2c02c0b5fba8aa";
                                            readonly typeString: "literal_string \"Error(string)\"";
                                        };
                                        readonly value: "Error(string)";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_08c379a0afcc32b1a39302f7cb8073359698411ab5fd6e3edb2c02c0b5fba8aa";
                                            readonly typeString: "literal_string \"Error(string)\"";
                                        }];
                                        readonly id: 145666;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "1432:9:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 145668;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1432:26:183";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    }];
                                    readonly id: 145665;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1425:6:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes4_$";
                                        readonly typeString: "type(bytes4)";
                                    };
                                    readonly typeName: {
                                        readonly id: 145664;
                                        readonly name: "bytes4";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1425:6:183";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 145669;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1425:34:183";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                };
                            }, {
                                readonly id: 145670;
                                readonly name: "reason";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145657;
                                readonly src: "1461:6:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 145662;
                                    readonly name: "abi";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -1;
                                    readonly src: "1402:3:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_abi";
                                        readonly typeString: "abi";
                                    };
                                };
                                readonly id: 145663;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1406:18:183";
                                readonly memberName: "encodeWithSelector";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1402:22:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes4) pure returns (bytes memory)";
                                };
                            };
                            readonly id: 145671;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1402:66:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 145661;
                        readonly id: 145672;
                        readonly nodeType: "Return";
                        readonly src: "1383:85:183";
                    }];
                };
                readonly documentation: {
                    readonly id: 145655;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1070:208:183";
                    readonly text: "@dev Encodes a reason into a string error. This is useful for verifying\n      string errors in low-level calls.\n @param reason The reason to encode.\n @return The encoded string error.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toError";
                readonly nameLocation: "1292:7:183";
                readonly parameters: {
                    readonly id: 145658;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 145657;
                        readonly mutability: "mutable";
                        readonly name: "reason";
                        readonly nameLocation: "1323:6:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145674;
                        readonly src: "1309:20:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 145656;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1309:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1299:36:183";
                };
                readonly returnParameters: {
                    readonly id: 145661;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 145660;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145674;
                        readonly src: "1359:12:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 145659;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1359:5:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1358:14:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 145823;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1924:2036:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 145822;
                    readonly nodeType: "Block";
                    readonly src: "2039:1921:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [145685];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 145685;
                            readonly mutability: "mutable";
                            readonly name: "maxStringLength";
                            readonly nameLocation: "2329:15:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 145822;
                            readonly src: "2321:23:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 145684;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2321:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 145687;
                        readonly initialValue: {
                            readonly hexValue: "3739";
                            readonly id: 145686;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2347:2:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_79_by_1";
                                readonly typeString: "int_const 79";
                            };
                            readonly value: "79";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2321:28:183";
                    }, {
                        readonly assignments: readonly [145689];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 145689;
                            readonly mutability: "mutable";
                            readonly name: "rawResult";
                            readonly nameLocation: "2372:9:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 145822;
                            readonly src: "2359:22:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 145688;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2359:5:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 145694;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 145692;
                                readonly name: "maxStringLength";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145685;
                                readonly src: "2394:15:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 145691;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "2384:9:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (bytes memory)";
                                };
                                readonly typeName: {
                                    readonly id: 145690;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2388:5:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
                                };
                            };
                            readonly id: 145693;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2384:26:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2359:51:183";
                    }, {
                        readonly assignments: readonly [145696];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 145696;
                            readonly mutability: "mutable";
                            readonly name: "isNegative";
                            readonly nameLocation: "2688:10:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 145822;
                            readonly src: "2683:15:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 145695;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2683:4:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 145700;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 145699;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 145697;
                                readonly name: "num";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145677;
                                readonly src: "2701:3:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 145698;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2707:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "2701:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2683:25:183";
                    }, {
                        readonly expression: {
                            readonly id: 145709;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 145701;
                                readonly name: "num";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145677;
                                readonly src: "2718:3:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 145704;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 145702;
                                        readonly name: "num";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145677;
                                        readonly src: "2724:3:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly hexValue: "30";
                                        readonly id: 145703;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2730:1:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "2724:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 145707;
                                    readonly name: "num";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145677;
                                    readonly src: "2741:3:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 145708;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "2724:20:183";
                                readonly trueExpression: {
                                    readonly id: 145706;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "-";
                                    readonly prefix: true;
                                    readonly src: "2734:4:183";
                                    readonly subExpression: {
                                        readonly id: 145705;
                                        readonly name: "num";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145677;
                                        readonly src: "2735:3:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "2718:26:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 145710;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2718:26:183";
                    }, {
                        readonly expression: {
                            readonly id: 145731;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 145711;
                                    readonly name: "rawResult";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145689;
                                    readonly src: "2909:9:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 145715;
                                readonly indexExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 145714;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 145712;
                                        readonly name: "maxStringLength";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145685;
                                        readonly src: "2919:15:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 145713;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2937:1:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "2919:19:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "2909:30:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes1";
                                    readonly typeString: "bytes1";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 145727;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 145724;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 145722;
                                                        readonly name: "num";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 145677;
                                                        readonly src: "2977:3:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "%";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "3130";
                                                        readonly id: 145723;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "2983:2:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_10_by_1";
                                                            readonly typeString: "int_const 10";
                                                        };
                                                        readonly value: "10";
                                                    };
                                                    readonly src: "2977:8:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 145725;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "2976:10:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "+";
                                            readonly rightExpression: {
                                                readonly hexValue: "3438";
                                                readonly id: 145726;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "2989:2:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_48_by_1";
                                                    readonly typeString: "int_const 48";
                                                };
                                                readonly value: "48";
                                            };
                                            readonly src: "2976:15:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            }];
                                            readonly id: 145721;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "2968:7:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 145720;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "2968:7:183";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 145728;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2968:24:183";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 145719;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2962:5:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint8_$";
                                            readonly typeString: "type(uint8)";
                                        };
                                        readonly typeName: {
                                            readonly id: 145718;
                                            readonly name: "uint8";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2962:5:183";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 145729;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2962:31:183";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint8";
                                        readonly typeString: "uint8";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint8";
                                        readonly typeString: "uint8";
                                    }];
                                    readonly id: 145717;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2942:6:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                        readonly typeString: "type(bytes1)";
                                    };
                                    readonly typeName: {
                                        readonly id: 145716;
                                        readonly name: "bytes1";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2942:6:183";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 145730;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2942:61:183";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes1";
                                    readonly typeString: "bytes1";
                                };
                            };
                            readonly src: "2909:94:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes1";
                                readonly typeString: "bytes1";
                            };
                        };
                        readonly id: 145732;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2909:94:183";
                    }, {
                        readonly expression: {
                            readonly id: 145735;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 145733;
                                readonly name: "num";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145677;
                                readonly src: "3013:3:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "/=";
                            readonly rightHandSide: {
                                readonly hexValue: "3130";
                                readonly id: 145734;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3020:2:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_10_by_1";
                                    readonly typeString: "int_const 10";
                                };
                                readonly value: "10";
                            };
                            readonly src: "3013:9:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 145736;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3013:9:183";
                    }, {
                        readonly assignments: readonly [145738];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 145738;
                            readonly mutability: "mutable";
                            readonly name: "digits";
                            readonly nameLocation: "3040:6:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 145822;
                            readonly src: "3032:14:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 145737;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3032:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 145740;
                        readonly initialValue: {
                            readonly hexValue: "31";
                            readonly id: 145739;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "3049:1:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1_by_1";
                                readonly typeString: "int_const 1";
                            };
                            readonly value: "1";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3032:18:183";
                    }, {
                        readonly body: {
                            readonly id: 145801;
                            readonly nodeType: "Block";
                            readonly src: "3103:349:183";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 145756;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 145752;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 145750;
                                            readonly name: "decimals";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 145679;
                                            readonly src: "3121:8:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 145751;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3132:1:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "3121:12:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&&";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 145755;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 145753;
                                            readonly name: "digits";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 145738;
                                            readonly src: "3137:6:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly id: 145754;
                                            readonly name: "decimals";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 145679;
                                            readonly src: "3147:8:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "3137:18:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "3121:34:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly id: 145796;
                                    readonly nodeType: "Block";
                                    readonly src: "3241:179:183";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 145790;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 145768;
                                                    readonly name: "rawResult";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145689;
                                                    readonly src: "3259:9:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 145774;
                                                readonly indexExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 145773;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 145771;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly id: 145769;
                                                            readonly name: "maxStringLength";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 145685;
                                                            readonly src: "3269:15:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "-";
                                                        readonly rightExpression: {
                                                            readonly id: 145770;
                                                            readonly name: "digits";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 145738;
                                                            readonly src: "3287:6:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly src: "3269:24:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "31";
                                                        readonly id: 145772;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "3296:1:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_1_by_1";
                                                            readonly typeString: "int_const 1";
                                                        };
                                                        readonly value: "1";
                                                    };
                                                    readonly src: "3269:28:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "3259:39:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly commonType: {
                                                                readonly typeIdentifier: "t_int256";
                                                                readonly typeString: "int256";
                                                            };
                                                            readonly id: 145786;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly leftExpression: {
                                                                readonly components: readonly [{
                                                                    readonly commonType: {
                                                                        readonly typeIdentifier: "t_int256";
                                                                        readonly typeString: "int256";
                                                                    };
                                                                    readonly id: 145783;
                                                                    readonly isConstant: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: false;
                                                                    readonly lValueRequested: false;
                                                                    readonly leftExpression: {
                                                                        readonly id: 145781;
                                                                        readonly name: "num";
                                                                        readonly nodeType: "Identifier";
                                                                        readonly overloadedDeclarations: readonly [];
                                                                        readonly referencedDeclaration: 145677;
                                                                        readonly src: "3344:3:183";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_int256";
                                                                            readonly typeString: "int256";
                                                                        };
                                                                    };
                                                                    readonly nodeType: "BinaryOperation";
                                                                    readonly operator: "%";
                                                                    readonly rightExpression: {
                                                                        readonly hexValue: "3130";
                                                                        readonly id: 145782;
                                                                        readonly isConstant: false;
                                                                        readonly isLValue: false;
                                                                        readonly isPure: true;
                                                                        readonly kind: "number";
                                                                        readonly lValueRequested: false;
                                                                        readonly nodeType: "Literal";
                                                                        readonly src: "3350:2:183";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_rational_10_by_1";
                                                                            readonly typeString: "int_const 10";
                                                                        };
                                                                        readonly value: "10";
                                                                    };
                                                                    readonly src: "3344:8:183";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_int256";
                                                                        readonly typeString: "int256";
                                                                    };
                                                                }];
                                                                readonly id: 145784;
                                                                readonly isConstant: false;
                                                                readonly isInlineArray: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "TupleExpression";
                                                                readonly src: "3343:10:183";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_int256";
                                                                    readonly typeString: "int256";
                                                                };
                                                            };
                                                            readonly nodeType: "BinaryOperation";
                                                            readonly operator: "+";
                                                            readonly rightExpression: {
                                                                readonly hexValue: "3438";
                                                                readonly id: 145785;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: true;
                                                                readonly kind: "number";
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "Literal";
                                                                readonly src: "3356:2:183";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_rational_48_by_1";
                                                                    readonly typeString: "int_const 48";
                                                                };
                                                                readonly value: "48";
                                                            };
                                                            readonly src: "3343:15:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_int256";
                                                                readonly typeString: "int256";
                                                            };
                                                        }];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [{
                                                                readonly typeIdentifier: "t_int256";
                                                                readonly typeString: "int256";
                                                            }];
                                                            readonly id: 145780;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "ElementaryTypeNameExpression";
                                                            readonly src: "3335:7:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                                readonly typeString: "type(uint256)";
                                                            };
                                                            readonly typeName: {
                                                                readonly id: 145779;
                                                                readonly name: "uint256";
                                                                readonly nodeType: "ElementaryTypeName";
                                                                readonly src: "3335:7:183";
                                                                readonly typeDescriptions: {};
                                                            };
                                                        };
                                                        readonly id: 145787;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "typeConversion";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "3335:24:183";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        }];
                                                        readonly id: 145778;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "3329:5:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_uint8_$";
                                                            readonly typeString: "type(uint8)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 145777;
                                                            readonly name: "uint8";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "3329:5:183";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 145788;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "3329:31:183";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint8";
                                                        readonly typeString: "uint8";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_uint8";
                                                        readonly typeString: "uint8";
                                                    }];
                                                    readonly id: 145776;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3301:6:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                        readonly typeString: "type(bytes1)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 145775;
                                                        readonly name: "bytes1";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3301:6:183";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 145789;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3301:77:183";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "3259:119:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 145791;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "3259:119:183";
                                    }, {
                                        readonly expression: {
                                            readonly id: 145794;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 145792;
                                                readonly name: "num";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 145677;
                                                readonly src: "3396:3:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "/=";
                                            readonly rightHandSide: {
                                                readonly hexValue: "3130";
                                                readonly id: 145793;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3403:2:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_10_by_1";
                                                    readonly typeString: "int_const 10";
                                                };
                                                readonly value: "10";
                                            };
                                            readonly src: "3396:9:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly id: 145795;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "3396:9:183";
                                    }];
                                };
                                readonly id: 145797;
                                readonly nodeType: "IfStatement";
                                readonly src: "3117:303:183";
                                readonly trueBody: {
                                    readonly id: 145767;
                                    readonly nodeType: "Block";
                                    readonly src: "3157:78:183";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 145765;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 145757;
                                                    readonly name: "rawResult";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145689;
                                                    readonly src: "3175:9:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 145763;
                                                readonly indexExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 145762;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 145760;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly id: 145758;
                                                            readonly name: "maxStringLength";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 145685;
                                                            readonly src: "3185:15:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "-";
                                                        readonly rightExpression: {
                                                            readonly id: 145759;
                                                            readonly name: "digits";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 145738;
                                                            readonly src: "3203:6:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly src: "3185:24:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "31";
                                                        readonly id: 145761;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "3212:1:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_1_by_1";
                                                            readonly typeString: "int_const 1";
                                                        };
                                                        readonly value: "1";
                                                    };
                                                    readonly src: "3185:28:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "3175:39:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly hexValue: "2e";
                                                readonly id: 145764;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3217:3:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf";
                                                    readonly typeString: "literal_string \".\"";
                                                };
                                                readonly value: ".";
                                            };
                                            readonly src: "3175:45:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 145766;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "3175:45:183";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 145799;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "++";
                                    readonly prefix: false;
                                    readonly src: "3433:8:183";
                                    readonly subExpression: {
                                        readonly id: 145798;
                                        readonly name: "digits";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145738;
                                        readonly src: "3433:6:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 145800;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3433:8:183";
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 145749;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 145743;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 145741;
                                    readonly name: "num";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145677;
                                    readonly src: "3067:3:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 145742;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3074:1:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3067:8:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 145748;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 145744;
                                    readonly name: "digits";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145738;
                                    readonly src: "3079:6:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 145747;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 145745;
                                        readonly name: "decimals";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145679;
                                        readonly src: "3089:8:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 145746;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3100:1:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "3089:12:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "3079:22:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "3067:34:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 145802;
                        readonly nodeType: "WhileStatement";
                        readonly src: "3060:392:183";
                    }, {
                        readonly condition: {
                            readonly id: 145803;
                            readonly name: "isNegative";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 145696;
                            readonly src: "3566:10:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 145818;
                        readonly nodeType: "IfStatement";
                        readonly src: "3562:108:183";
                        readonly trueBody: {
                            readonly id: 145817;
                            readonly nodeType: "Block";
                            readonly src: "3578:92:183";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 145812;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 145804;
                                            readonly name: "rawResult";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 145689;
                                            readonly src: "3592:9:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        };
                                        readonly id: 145810;
                                        readonly indexExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 145809;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 145807;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly id: 145805;
                                                    readonly name: "maxStringLength";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145685;
                                                    readonly src: "3602:15:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "-";
                                                readonly rightExpression: {
                                                    readonly id: 145806;
                                                    readonly name: "digits";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145738;
                                                    readonly src: "3620:6:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly src: "3602:24:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly hexValue: "31";
                                                readonly id: 145808;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3629:1:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_1_by_1";
                                                    readonly typeString: "int_const 1";
                                                };
                                                readonly value: "1";
                                            };
                                            readonly src: "3602:28:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "3592:39:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly hexValue: "2d";
                                        readonly id: 145811;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3634:3:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561";
                                            readonly typeString: "literal_string \"-\"";
                                        };
                                        readonly value: "-";
                                    };
                                    readonly src: "3592:45:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes1";
                                        readonly typeString: "bytes1";
                                    };
                                };
                                readonly id: 145813;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3592:45:183";
                            }, {
                                readonly expression: {
                                    readonly id: 145815;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "++";
                                    readonly prefix: false;
                                    readonly src: "3651:8:183";
                                    readonly subExpression: {
                                        readonly id: 145814;
                                        readonly name: "digits";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145738;
                                        readonly src: "3651:6:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 145816;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3651:8:183";
                            }];
                        };
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "3802:129:183";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "3816:62:183";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "rawResult";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3830:9:183";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "maxStringLength";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3849:15:183";
                                            }, {
                                                readonly name: "digits";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3866:6:183";
                                            }];
                                            readonly functionName: {
                                                readonly name: "sub";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3845:3:183";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "3845:28:183";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3875:1:183";
                                            readonly type: "";
                                            readonly value: "1";
                                        }];
                                        readonly functionName: {
                                            readonly name: "sub";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3841:3:183";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3841:36:183";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3826:3:183";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3826:52:183";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "result";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3816:6:183";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "result";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3898:6:183";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "digits";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3910:6:183";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3918:1:183";
                                            readonly type: "";
                                            readonly value: "1";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3906:3:183";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3906:14:183";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3891:6:183";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3891:30:183";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3891:30:183";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 145738;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3866:6:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145738;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3910:6:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145685;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3849:15:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145689;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3830:9:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145682;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3816:6:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145682;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3898:6:183";
                            readonly valueSize: 1;
                        }];
                        readonly id: 145819;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "3793:138:183";
                    }, {
                        readonly expression: {
                            readonly id: 145820;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 145682;
                            readonly src: "3947:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 145683;
                        readonly id: 145821;
                        readonly nodeType: "Return";
                        readonly src: "3940:13:183";
                    }];
                };
                readonly documentation: {
                    readonly id: 145675;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1481:438:183";
                    readonly text: "@dev Converts a signed integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toString";
                readonly nameLocation: "1933:8:183";
                readonly parameters: {
                    readonly id: 145680;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 145677;
                        readonly mutability: "mutable";
                        readonly name: "num";
                        readonly nameLocation: "1958:3:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145823;
                        readonly src: "1951:10:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 145676;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1951:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 145679;
                        readonly mutability: "mutable";
                        readonly name: "decimals";
                        readonly nameLocation: "1979:8:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145823;
                        readonly src: "1971:16:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 145678;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1971:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1941:52:183";
                };
                readonly returnParameters: {
                    readonly id: 145683;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 145682;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "2031:6:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145823;
                        readonly src: "2017:20:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 145681;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2017:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2016:22:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 145934;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4412:1394:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 145933;
                    readonly nodeType: "Block";
                    readonly src: "4528:1278:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [145834];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 145834;
                            readonly mutability: "mutable";
                            readonly name: "maxStringLength";
                            readonly nameLocation: "4767:15:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 145933;
                            readonly src: "4759:23:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 145833;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4759:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 145836;
                        readonly initialValue: {
                            readonly hexValue: "3739";
                            readonly id: 145835;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "4785:2:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_79_by_1";
                                readonly typeString: "int_const 79";
                            };
                            readonly value: "79";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4759:28:183";
                    }, {
                        readonly assignments: readonly [145838];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 145838;
                            readonly mutability: "mutable";
                            readonly name: "rawResult";
                            readonly nameLocation: "4810:9:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 145933;
                            readonly src: "4797:22:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 145837;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4797:5:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 145843;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 145841;
                                readonly name: "maxStringLength";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145834;
                                readonly src: "4832:15:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 145840;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "4822:9:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (bytes memory)";
                                };
                                readonly typeName: {
                                    readonly id: 145839;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "4826:5:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
                                };
                            };
                            readonly id: 145842;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4822:26:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4797:51:183";
                    }, {
                        readonly expression: {
                            readonly id: 145861;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 145844;
                                    readonly name: "rawResult";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145838;
                                    readonly src: "5013:9:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 145848;
                                readonly indexExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 145847;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 145845;
                                        readonly name: "maxStringLength";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145834;
                                        readonly src: "5023:15:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 145846;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5041:1:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "5023:19:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "5013:30:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes1";
                                    readonly typeString: "bytes1";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 145858;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly components: readonly [{
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 145855;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly id: 145853;
                                                    readonly name: "num";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145826;
                                                    readonly src: "5060:3:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "%";
                                                readonly rightExpression: {
                                                    readonly hexValue: "3130";
                                                    readonly id: 145854;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "5066:2:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_10_by_1";
                                                        readonly typeString: "int_const 10";
                                                    };
                                                    readonly value: "10";
                                                };
                                                readonly src: "5060:8:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly id: 145856;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "5059:10:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "+";
                                        readonly rightExpression: {
                                            readonly hexValue: "3438";
                                            readonly id: 145857;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5072:2:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_48_by_1";
                                                readonly typeString: "int_const 48";
                                            };
                                            readonly value: "48";
                                        };
                                        readonly src: "5059:15:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 145852;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5053:5:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint8_$";
                                            readonly typeString: "type(uint8)";
                                        };
                                        readonly typeName: {
                                            readonly id: 145851;
                                            readonly name: "uint8";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5053:5:183";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 145859;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5053:22:183";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint8";
                                        readonly typeString: "uint8";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint8";
                                        readonly typeString: "uint8";
                                    }];
                                    readonly id: 145850;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5046:6:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                        readonly typeString: "type(bytes1)";
                                    };
                                    readonly typeName: {
                                        readonly id: 145849;
                                        readonly name: "bytes1";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5046:6:183";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 145860;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5046:30:183";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes1";
                                    readonly typeString: "bytes1";
                                };
                            };
                            readonly src: "5013:63:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes1";
                                readonly typeString: "bytes1";
                            };
                        };
                        readonly id: 145862;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5013:63:183";
                    }, {
                        readonly expression: {
                            readonly id: 145865;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 145863;
                                readonly name: "num";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145826;
                                readonly src: "5086:3:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "/=";
                            readonly rightHandSide: {
                                readonly hexValue: "3130";
                                readonly id: 145864;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5093:2:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_10_by_1";
                                    readonly typeString: "int_const 10";
                                };
                                readonly value: "10";
                            };
                            readonly src: "5086:9:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 145866;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5086:9:183";
                    }, {
                        readonly assignments: readonly [145868];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 145868;
                            readonly mutability: "mutable";
                            readonly name: "digits";
                            readonly nameLocation: "5113:6:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 145933;
                            readonly src: "5105:14:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 145867;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5105:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 145870;
                        readonly initialValue: {
                            readonly hexValue: "31";
                            readonly id: 145869;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "5122:1:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1_by_1";
                                readonly typeString: "int_const 1";
                            };
                            readonly value: "1";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5105:18:183";
                    }, {
                        readonly body: {
                            readonly id: 145928;
                            readonly nodeType: "Block";
                            readonly src: "5176:340:183";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 145886;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 145882;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 145880;
                                            readonly name: "decimals";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 145828;
                                            readonly src: "5194:8:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 145881;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5205:1:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "5194:12:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&&";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 145885;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 145883;
                                            readonly name: "digits";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 145868;
                                            readonly src: "5210:6:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly id: 145884;
                                            readonly name: "decimals";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 145828;
                                            readonly src: "5220:8:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "5210:18:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5194:34:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly id: 145923;
                                    readonly nodeType: "Block";
                                    readonly src: "5314:170:183";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 145917;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 145898;
                                                    readonly name: "rawResult";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145838;
                                                    readonly src: "5332:9:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 145904;
                                                readonly indexExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 145903;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 145901;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly id: 145899;
                                                            readonly name: "maxStringLength";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 145834;
                                                            readonly src: "5342:15:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "-";
                                                        readonly rightExpression: {
                                                            readonly id: 145900;
                                                            readonly name: "digits";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 145868;
                                                            readonly src: "5360:6:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly src: "5342:24:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "31";
                                                        readonly id: 145902;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "5369:1:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_1_by_1";
                                                            readonly typeString: "int_const 1";
                                                        };
                                                        readonly value: "1";
                                                    };
                                                    readonly src: "5342:28:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "5332:39:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 145914;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly components: readonly [{
                                                                readonly commonType: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                                readonly id: 145911;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly leftExpression: {
                                                                    readonly id: 145909;
                                                                    readonly name: "num";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 145826;
                                                                    readonly src: "5409:3:183";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_uint256";
                                                                        readonly typeString: "uint256";
                                                                    };
                                                                };
                                                                readonly nodeType: "BinaryOperation";
                                                                readonly operator: "%";
                                                                readonly rightExpression: {
                                                                    readonly hexValue: "3130";
                                                                    readonly id: 145910;
                                                                    readonly isConstant: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: true;
                                                                    readonly kind: "number";
                                                                    readonly lValueRequested: false;
                                                                    readonly nodeType: "Literal";
                                                                    readonly src: "5415:2:183";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_rational_10_by_1";
                                                                        readonly typeString: "int_const 10";
                                                                    };
                                                                    readonly value: "10";
                                                                };
                                                                readonly src: "5409:8:183";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            }];
                                                            readonly id: 145912;
                                                            readonly isConstant: false;
                                                            readonly isInlineArray: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "TupleExpression";
                                                            readonly src: "5408:10:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "+";
                                                        readonly rightExpression: {
                                                            readonly hexValue: "3438";
                                                            readonly id: 145913;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly kind: "number";
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "Literal";
                                                            readonly src: "5421:2:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_rational_48_by_1";
                                                                readonly typeString: "int_const 48";
                                                            };
                                                            readonly value: "48";
                                                        };
                                                        readonly src: "5408:15:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        }];
                                                        readonly id: 145908;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "5402:5:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_uint8_$";
                                                            readonly typeString: "type(uint8)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 145907;
                                                            readonly name: "uint8";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "5402:5:183";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 145915;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "5402:22:183";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint8";
                                                        readonly typeString: "uint8";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_uint8";
                                                        readonly typeString: "uint8";
                                                    }];
                                                    readonly id: 145906;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5374:6:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                        readonly typeString: "type(bytes1)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 145905;
                                                        readonly name: "bytes1";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5374:6:183";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 145916;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "5374:68:183";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "5332:110:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 145918;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "5332:110:183";
                                    }, {
                                        readonly expression: {
                                            readonly id: 145921;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 145919;
                                                readonly name: "num";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 145826;
                                                readonly src: "5460:3:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "/=";
                                            readonly rightHandSide: {
                                                readonly hexValue: "3130";
                                                readonly id: 145920;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5467:2:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_10_by_1";
                                                    readonly typeString: "int_const 10";
                                                };
                                                readonly value: "10";
                                            };
                                            readonly src: "5460:9:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 145922;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "5460:9:183";
                                    }];
                                };
                                readonly id: 145924;
                                readonly nodeType: "IfStatement";
                                readonly src: "5190:294:183";
                                readonly trueBody: {
                                    readonly id: 145897;
                                    readonly nodeType: "Block";
                                    readonly src: "5230:78:183";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 145895;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 145887;
                                                    readonly name: "rawResult";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145838;
                                                    readonly src: "5248:9:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 145893;
                                                readonly indexExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 145892;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 145890;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly id: 145888;
                                                            readonly name: "maxStringLength";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 145834;
                                                            readonly src: "5258:15:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "-";
                                                        readonly rightExpression: {
                                                            readonly id: 145889;
                                                            readonly name: "digits";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 145868;
                                                            readonly src: "5276:6:183";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly src: "5258:24:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "31";
                                                        readonly id: 145891;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "5285:1:183";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_1_by_1";
                                                            readonly typeString: "int_const 1";
                                                        };
                                                        readonly value: "1";
                                                    };
                                                    readonly src: "5258:28:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "5248:39:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly hexValue: "2e";
                                                readonly id: 145894;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5290:3:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf";
                                                    readonly typeString: "literal_string \".\"";
                                                };
                                                readonly value: ".";
                                            };
                                            readonly src: "5248:45:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 145896;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "5248:45:183";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 145926;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "++";
                                    readonly prefix: false;
                                    readonly src: "5497:8:183";
                                    readonly subExpression: {
                                        readonly id: 145925;
                                        readonly name: "digits";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145868;
                                        readonly src: "5497:6:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 145927;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5497:8:183";
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 145879;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 145873;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 145871;
                                    readonly name: "num";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145826;
                                    readonly src: "5140:3:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 145872;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5147:1:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "5140:8:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 145878;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 145874;
                                    readonly name: "digits";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145868;
                                    readonly src: "5152:6:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 145877;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 145875;
                                        readonly name: "decimals";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145828;
                                        readonly src: "5162:8:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 145876;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5173:1:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "5162:12:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "5152:22:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5140:34:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 145929;
                        readonly nodeType: "WhileStatement";
                        readonly src: "5133:383:183";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "5648:129:183";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "5662:62:183";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "rawResult";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5676:9:183";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "maxStringLength";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5695:15:183";
                                            }, {
                                                readonly name: "digits";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5712:6:183";
                                            }];
                                            readonly functionName: {
                                                readonly name: "sub";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5691:3:183";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5691:28:183";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5721:1:183";
                                            readonly type: "";
                                            readonly value: "1";
                                        }];
                                        readonly functionName: {
                                            readonly name: "sub";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5687:3:183";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5687:36:183";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5672:3:183";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5672:52:183";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "result";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5662:6:183";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "result";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5744:6:183";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "digits";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5756:6:183";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5764:1:183";
                                            readonly type: "";
                                            readonly value: "1";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5752:3:183";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5752:14:183";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5737:6:183";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5737:30:183";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5737:30:183";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 145868;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5712:6:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145868;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5756:6:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145834;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5695:15:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145838;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5676:9:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145831;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5662:6:183";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 145831;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5744:6:183";
                            readonly valueSize: 1;
                        }];
                        readonly id: 145930;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "5639:138:183";
                    }, {
                        readonly expression: {
                            readonly id: 145931;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 145831;
                            readonly src: "5793:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 145832;
                        readonly id: 145932;
                        readonly nodeType: "Return";
                        readonly src: "5786:13:183";
                    }];
                };
                readonly documentation: {
                    readonly id: 145824;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3966:441:183";
                    readonly text: "@dev Converts an unsigned integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toString";
                readonly nameLocation: "4421:8:183";
                readonly parameters: {
                    readonly id: 145829;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 145826;
                        readonly mutability: "mutable";
                        readonly name: "num";
                        readonly nameLocation: "4447:3:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145934;
                        readonly src: "4439:11:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 145825;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4439:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 145828;
                        readonly mutability: "mutable";
                        readonly name: "decimals";
                        readonly nameLocation: "4468:8:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145934;
                        readonly src: "4460:16:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 145827;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4460:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4429:53:183";
                };
                readonly returnParameters: {
                    readonly id: 145832;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 145831;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "4520:6:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 145934;
                        readonly src: "4506:20:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 145830;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4506:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4505:22:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 146003;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5812:448:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 146002;
                    readonly nodeType: "Block";
                    readonly src: "5913:347:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 145945;
                                readonly name: "prelude";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145936;
                                readonly src: "5936:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly hexValue: "5b";
                                readonly id: 145946;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5945:3:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_9f50164828976b6baa479ea39c718c745bbc0d2521b67dfde8474cbdc9711057";
                                    readonly typeString: "literal_string \"[\"";
                                };
                                readonly value: "[";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_9f50164828976b6baa479ea39c718c745bbc0d2521b67dfde8474cbdc9711057";
                                    readonly typeString: "literal_string \"[\"";
                                }];
                                readonly expression: {
                                    readonly id: 145942;
                                    readonly name: "console2";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 52434;
                                    readonly src: "5923:8:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$52434_$";
                                        readonly typeString: "type(library console2)";
                                    };
                                };
                                readonly id: 145944;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5932:3:183";
                                readonly memberName: "log";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 45095;
                                readonly src: "5923:12:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory) pure";
                                };
                            };
                            readonly id: 145947;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5923:26:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 145948;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5923:26:183";
                    }, {
                        readonly body: {
                            readonly id: 145988;
                            readonly nodeType: "Block";
                            readonly src: "6002:195:183";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 145965;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 145960;
                                        readonly name: "i";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 145950;
                                        readonly src: "6020:1:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 145964;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 145961;
                                                readonly name: "array";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 145939;
                                                readonly src: "6024:5:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                                    readonly typeString: "uint256[] memory";
                                                };
                                            };
                                            readonly id: 145962;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "6030:6:183";
                                            readonly memberName: "length";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "6024:12:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly hexValue: "31";
                                            readonly id: 145963;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6039:1:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1_by_1";
                                                readonly typeString: "int_const 1";
                                            };
                                            readonly value: "1";
                                        };
                                        readonly src: "6024:16:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "6020:20:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly id: 145986;
                                    readonly nodeType: "Block";
                                    readonly src: "6120:67:183";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "2020202020202020";
                                                readonly id: 145980;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6151:10:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b";
                                                    readonly typeString: "literal_string \"        \"";
                                                };
                                                readonly value: "        ";
                                            }, {
                                                readonly baseExpression: {
                                                    readonly id: 145981;
                                                    readonly name: "array";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145939;
                                                    readonly src: "6163:5:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                                        readonly typeString: "uint256[] memory";
                                                    };
                                                };
                                                readonly id: 145983;
                                                readonly indexExpression: {
                                                    readonly id: 145982;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145950;
                                                    readonly src: "6169:1:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "6163:8:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b";
                                                    readonly typeString: "literal_string \"        \"";
                                                }, {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                }];
                                                readonly expression: {
                                                    readonly id: 145977;
                                                    readonly name: "console2";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 52434;
                                                    readonly src: "6138:8:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$52434_$";
                                                        readonly typeString: "type(library console2)";
                                                    };
                                                };
                                                readonly id: 145979;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "6147:3:183";
                                                readonly memberName: "log";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 45061;
                                                readonly src: "6138:12:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$returns$__$";
                                                    readonly typeString: "function (string memory,uint256) pure";
                                                };
                                            };
                                            readonly id: 145984;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6138:34:183";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 145985;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6138:34:183";
                                    }];
                                };
                                readonly id: 145987;
                                readonly nodeType: "IfStatement";
                                readonly src: "6016:171:183";
                                readonly trueBody: {
                                    readonly id: 145976;
                                    readonly nodeType: "Block";
                                    readonly src: "6042:72:183";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "2020202020202020";
                                                readonly id: 145969;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6073:10:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b";
                                                    readonly typeString: "literal_string \"        \"";
                                                };
                                                readonly value: "        ";
                                            }, {
                                                readonly baseExpression: {
                                                    readonly id: 145970;
                                                    readonly name: "array";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145939;
                                                    readonly src: "6085:5:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                                        readonly typeString: "uint256[] memory";
                                                    };
                                                };
                                                readonly id: 145972;
                                                readonly indexExpression: {
                                                    readonly id: 145971;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 145950;
                                                    readonly src: "6091:1:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "6085:8:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }, {
                                                readonly hexValue: "2c";
                                                readonly id: 145973;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6095:3:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_3e7a35b97029f9e0cf6effd71c1a7958822e9a217d3a3aec886668a7dd8231cb";
                                                    readonly typeString: "literal_string \",\"";
                                                };
                                                readonly value: ",";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b";
                                                    readonly typeString: "literal_string \"        \"";
                                                }, {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                }, {
                                                    readonly typeIdentifier: "t_stringliteral_3e7a35b97029f9e0cf6effd71c1a7958822e9a217d3a3aec886668a7dd8231cb";
                                                    readonly typeString: "literal_string \",\"";
                                                }];
                                                readonly expression: {
                                                    readonly id: 145966;
                                                    readonly name: "console2";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 52434;
                                                    readonly src: "6060:8:183";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$52434_$";
                                                        readonly typeString: "type(library console2)";
                                                    };
                                                };
                                                readonly id: 145968;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "6069:3:183";
                                                readonly memberName: "log";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 45625;
                                                readonly src: "6060:12:183";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$__$";
                                                    readonly typeString: "function (string memory,uint256,string memory) pure";
                                                };
                                            };
                                            readonly id: 145974;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6060:39:183";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 145975;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6060:39:183";
                                    }];
                                };
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 145956;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 145953;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 145950;
                                readonly src: "5979:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 145954;
                                    readonly name: "array";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145939;
                                    readonly src: "5983:5:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                        readonly typeString: "uint256[] memory";
                                    };
                                };
                                readonly id: 145955;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5989:6:183";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5983:12:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5979:16:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 145989;
                        readonly initializationExpression: {
                            readonly assignments: readonly [145950];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 145950;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "5972:1:183";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 145989;
                                readonly src: "5964:9:183";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 145949;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "5964:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 145952;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 145951;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5976:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "5964:13:183";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 145958;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: false;
                                readonly src: "5997:3:183";
                                readonly subExpression: {
                                    readonly id: 145957;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 145950;
                                    readonly src: "5997:1:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 145959;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "5997:3:183";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "5959:238:183";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "202020205d";
                                readonly id: 145993;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6219:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_aba926a8471cf1b6e3f6131cd50d3daaf157c3ba5068bc6d78358ed5c2e7da07";
                                    readonly typeString: "literal_string \"    ]\"";
                                };
                                readonly value: "    ]";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_aba926a8471cf1b6e3f6131cd50d3daaf157c3ba5068bc6d78358ed5c2e7da07";
                                    readonly typeString: "literal_string \"    ]\"";
                                }];
                                readonly expression: {
                                    readonly id: 145990;
                                    readonly name: "console2";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 52434;
                                    readonly src: "6206:8:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$52434_$";
                                        readonly typeString: "type(library console2)";
                                    };
                                };
                                readonly id: 145992;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6215:3:183";
                                readonly memberName: "log";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 44948;
                                readonly src: "6206:12:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory) pure";
                                };
                            };
                            readonly id: 145994;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6206:21:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 145995;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6206:21:183";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "";
                                readonly id: 145999;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6250:2:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                    readonly typeString: "literal_string \"\"";
                                };
                                readonly value: "";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                    readonly typeString: "literal_string \"\"";
                                }];
                                readonly expression: {
                                    readonly id: 145996;
                                    readonly name: "console2";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 52434;
                                    readonly src: "6237:8:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$52434_$";
                                        readonly typeString: "type(library console2)";
                                    };
                                };
                                readonly id: 145998;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6246:3:183";
                                readonly memberName: "log";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 44948;
                                readonly src: "6237:12:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory) pure";
                                };
                            };
                            readonly id: 146000;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6237:16:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 146001;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6237:16:183";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "logArray";
                readonly nameLocation: "5821:8:183";
                readonly parameters: {
                    readonly id: 145940;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 145936;
                        readonly mutability: "mutable";
                        readonly name: "prelude";
                        readonly nameLocation: "5853:7:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146003;
                        readonly src: "5839:21:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 145935;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5839:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 145939;
                        readonly mutability: "mutable";
                        readonly name: "array";
                        readonly nameLocation: "5887:5:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146003;
                        readonly src: "5870:22:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 145937;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5870:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 145938;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5870:9:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5829:69:183";
                };
                readonly returnParameters: {
                    readonly id: 145941;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5913:0:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 146040;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6266:333:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 146039;
                    readonly nodeType: "Block";
                    readonly src: "6403:196:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 146017;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 146015;
                                    readonly name: "minimum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146007;
                                    readonly src: "6421:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 146016;
                                    readonly name: "maximum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146009;
                                    readonly src: "6432:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "6421:18:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4c69623a206d696e203e206d6178";
                                readonly id: 146018;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6441:16:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_4396c41319f83190fa71c858ec035e721b0116f384ff32fc1c4f691ca19dd6bf";
                                    readonly typeString: "literal_string \"Lib: min > max\"";
                                };
                                readonly value: "Lib: min > max";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_4396c41319f83190fa71c858ec035e721b0116f384ff32fc1c4f691ca19dd6bf";
                                    readonly typeString: "literal_string \"Lib: min > max\"";
                                }];
                                readonly id: 146014;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "6413:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 146019;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6413:45:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 146020;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6413:45:183";
                    }, {
                        readonly assignments: readonly [146022];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 146022;
                            readonly mutability: "mutable";
                            readonly name: "rangeSize";
                            readonly nameLocation: "6477:9:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 146039;
                            readonly src: "6469:17:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 146021;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6469:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 146028;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 146027;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 146025;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 146023;
                                    readonly name: "maximum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146009;
                                    readonly src: "6489:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 146024;
                                    readonly name: "minimum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146007;
                                    readonly src: "6499:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "6489:17:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 146026;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6509:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "6489:21:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6469:41:183";
                    }, {
                        readonly assignments: readonly [146030];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 146030;
                            readonly mutability: "mutable";
                            readonly name: "modValue";
                            readonly nameLocation: "6528:8:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 146039;
                            readonly src: "6520:16:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 146029;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6520:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 146034;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 146033;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 146031;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146005;
                                readonly src: "6539:5:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "%";
                            readonly rightExpression: {
                                readonly id: 146032;
                                readonly name: "rangeSize";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146022;
                                readonly src: "6547:9:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6539:17:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6520:36:183";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 146037;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 146035;
                                readonly name: "modValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146030;
                                readonly src: "6574:8:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly id: 146036;
                                readonly name: "minimum";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146007;
                                readonly src: "6585:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6574:18:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 146013;
                        readonly id: 146038;
                        readonly nodeType: "Return";
                        readonly src: "6567:25:183";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "normalizeToRange";
                readonly nameLocation: "6275:16:183";
                readonly parameters: {
                    readonly id: 146010;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146005;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "6309:5:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146040;
                        readonly src: "6301:13:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 146004;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6301:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146007;
                        readonly mutability: "mutable";
                        readonly name: "minimum";
                        readonly nameLocation: "6332:7:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146040;
                        readonly src: "6324:15:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 146006;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6324:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146009;
                        readonly mutability: "mutable";
                        readonly name: "maximum";
                        readonly nameLocation: "6357:7:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146040;
                        readonly src: "6349:15:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 146008;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6349:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6291:79:183";
                };
                readonly returnParameters: {
                    readonly id: 146013;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146012;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146040;
                        readonly src: "6394:7:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 146011;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6394:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6393:9:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 146086;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6605:401:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 146085;
                    readonly nodeType: "Block";
                    readonly src: "6738:268:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 146054;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 146052;
                                    readonly name: "minimum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146044;
                                    readonly src: "6756:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 146053;
                                    readonly name: "maximum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146046;
                                    readonly src: "6767:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6756:18:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4c69623a206d696e203e206d6178";
                                readonly id: 146055;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6776:16:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_4396c41319f83190fa71c858ec035e721b0116f384ff32fc1c4f691ca19dd6bf";
                                    readonly typeString: "literal_string \"Lib: min > max\"";
                                };
                                readonly value: "Lib: min > max";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_4396c41319f83190fa71c858ec035e721b0116f384ff32fc1c4f691ca19dd6bf";
                                    readonly typeString: "literal_string \"Lib: min > max\"";
                                }];
                                readonly id: 146051;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "6748:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 146056;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6748:45:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 146057;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6748:45:183";
                    }, {
                        readonly assignments: readonly [146059];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 146059;
                            readonly mutability: "mutable";
                            readonly name: "rangeSize";
                            readonly nameLocation: "6811:9:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 146085;
                            readonly src: "6804:16:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 146058;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6804:6:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 146065;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 146064;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 146062;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 146060;
                                    readonly name: "maximum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146046;
                                    readonly src: "6823:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 146061;
                                    readonly name: "minimum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 146044;
                                    readonly src: "6833:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6823:17:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 146063;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6843:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "6823:21:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6804:40:183";
                    }, {
                        readonly assignments: readonly [146067];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 146067;
                            readonly mutability: "mutable";
                            readonly name: "modValue";
                            readonly nameLocation: "6861:8:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 146085;
                            readonly src: "6854:15:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 146066;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6854:6:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 146071;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 146070;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 146068;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146042;
                                readonly src: "6872:5:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "%";
                            readonly rightExpression: {
                                readonly id: 146069;
                                readonly name: "rangeSize";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146059;
                                readonly src: "6880:9:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "6872:17:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6854:35:183";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 146074;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 146072;
                                readonly name: "modValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146067;
                                readonly src: "6904:8:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 146073;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6915:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "6904:12:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 146080;
                        readonly nodeType: "IfStatement";
                        readonly src: "6900:64:183";
                        readonly trueBody: {
                            readonly id: 146079;
                            readonly nodeType: "Block";
                            readonly src: "6918:46:183";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 146077;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 146075;
                                        readonly name: "modValue";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 146067;
                                        readonly src: "6932:8:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 146076;
                                        readonly name: "rangeSize";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 146059;
                                        readonly src: "6944:9:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "6932:21:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 146078;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "6932:21:183";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 146083;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 146081;
                                readonly name: "modValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146067;
                                readonly src: "6981:8:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly id: 146082;
                                readonly name: "minimum";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146044;
                                readonly src: "6992:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "6981:18:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 146050;
                        readonly id: 146084;
                        readonly nodeType: "Return";
                        readonly src: "6974:25:183";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "normalizeToRange";
                readonly nameLocation: "6614:16:183";
                readonly parameters: {
                    readonly id: 146047;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146042;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "6647:5:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146086;
                        readonly src: "6640:12:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 146041;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6640:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146044;
                        readonly mutability: "mutable";
                        readonly name: "minimum";
                        readonly nameLocation: "6669:7:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146086;
                        readonly src: "6662:14:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 146043;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6662:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146046;
                        readonly mutability: "mutable";
                        readonly name: "maximum";
                        readonly nameLocation: "6693:7:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146086;
                        readonly src: "6686:14:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 146045;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6686:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6630:76:183";
                };
                readonly returnParameters: {
                    readonly id: 146050;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146049;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146086;
                        readonly src: "6730:6:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 146048;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6730:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6729:8:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 146110;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7012:205:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 146109;
                    readonly nodeType: "Block";
                    readonly src: "7130:87:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [146098];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 146098;
                            readonly mutability: "mutable";
                            readonly name: "delta";
                            readonly nameLocation: "7148:5:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 146109;
                            readonly src: "7140:13:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 146097;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7140:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 146104;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 146101;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146088;
                                readonly src: "7170:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 146102;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146090;
                                readonly src: "7173:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 146099;
                                    readonly name: "stdMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31113;
                                    readonly src: "7156:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_stdMath_$31113_$";
                                        readonly typeString: "type(library stdMath)";
                                    };
                                };
                                readonly id: 146100;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7164:5:183";
                                readonly memberName: "delta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 31024;
                                readonly src: "7156:13:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 146103;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7156:19:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7140:35:183";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 146107;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 146105;
                                readonly name: "delta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146098;
                                readonly src: "7192:5:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<=";
                            readonly rightExpression: {
                                readonly id: 146106;
                                readonly name: "tolerance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146092;
                                readonly src: "7201:9:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "7192:18:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 146096;
                        readonly id: 146108;
                        readonly nodeType: "Return";
                        readonly src: "7185:25:183";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "approxEq";
                readonly nameLocation: "7021:8:183";
                readonly parameters: {
                    readonly id: 146093;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146088;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "7047:1:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146110;
                        readonly src: "7039:9:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 146087;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7039:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146090;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "7066:1:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146110;
                        readonly src: "7058:9:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 146089;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7058:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146092;
                        readonly mutability: "mutable";
                        readonly name: "tolerance";
                        readonly nameLocation: "7085:9:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146110;
                        readonly src: "7077:17:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 146091;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7077:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7029:71:183";
                };
                readonly returnParameters: {
                    readonly id: 146096;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146095;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146110;
                        readonly src: "7124:4:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 146094;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7124:4:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7123:6:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 146134;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7223:203:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 146133;
                    readonly nodeType: "Block";
                    readonly src: "7339:87:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [146122];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 146122;
                            readonly mutability: "mutable";
                            readonly name: "delta";
                            readonly nameLocation: "7357:5:183";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 146133;
                            readonly src: "7349:13:183";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 146121;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7349:7:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 146128;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 146125;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146112;
                                readonly src: "7379:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 146126;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146114;
                                readonly src: "7382:1:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly expression: {
                                    readonly id: 146123;
                                    readonly name: "stdMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31113;
                                    readonly src: "7365:7:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_stdMath_$31113_$";
                                        readonly typeString: "type(library stdMath)";
                                    };
                                };
                                readonly id: 146124;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7373:5:183";
                                readonly memberName: "delta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 31060;
                                readonly src: "7365:13:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$";
                                    readonly typeString: "function (int256,int256) pure returns (uint256)";
                                };
                            };
                            readonly id: 146127;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7365:19:183";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7349:35:183";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 146131;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 146129;
                                readonly name: "delta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146122;
                                readonly src: "7401:5:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<=";
                            readonly rightExpression: {
                                readonly id: 146130;
                                readonly name: "tolerance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 146116;
                                readonly src: "7410:9:183";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "7401:18:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 146120;
                        readonly id: 146132;
                        readonly nodeType: "Return";
                        readonly src: "7394:25:183";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "approxEq";
                readonly nameLocation: "7232:8:183";
                readonly parameters: {
                    readonly id: 146117;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146112;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "7257:1:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146134;
                        readonly src: "7250:8:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 146111;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7250:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146114;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "7275:1:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146134;
                        readonly src: "7268:8:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 146113;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7268:6:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146116;
                        readonly mutability: "mutable";
                        readonly name: "tolerance";
                        readonly nameLocation: "7294:9:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146134;
                        readonly src: "7286:17:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 146115;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7286:7:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7240:69:183";
                };
                readonly returnParameters: {
                    readonly id: 146120;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146119;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146134;
                        readonly src: "7333:4:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 146118;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7333:4:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7332:6:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 146158;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7432:175:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 146157;
                    readonly nodeType: "Block";
                    readonly src: "7505:102:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 146155;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 146146;
                                        readonly name: "b1";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 146136;
                                        readonly src: "7561:2:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 146144;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7544:3:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 146145;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7548:12:183";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7544:16:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 146147;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7544:20:183";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 146143;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7534:9:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 146148;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7534:31:183";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 146152;
                                        readonly name: "b2";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 146138;
                                        readonly src: "7596:2:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 146150;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7579:3:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 146151;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7583:12:183";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7579:16:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 146153;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7579:20:183";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 146149;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7569:9:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 146154;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7569:31:183";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "7534:66:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 146142;
                        readonly id: 146156;
                        readonly nodeType: "Return";
                        readonly src: "7515:85:183";
                    }];
                };
                readonly functionSelector: "cdb16840";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "eq";
                readonly nameLocation: "7441:2:183";
                readonly parameters: {
                    readonly id: 146139;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146136;
                        readonly mutability: "mutable";
                        readonly name: "b1";
                        readonly nameLocation: "7457:2:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146158;
                        readonly src: "7444:15:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 146135;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7444:5:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146138;
                        readonly mutability: "mutable";
                        readonly name: "b2";
                        readonly nameLocation: "7474:2:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146158;
                        readonly src: "7461:15:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 146137;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7461:5:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7443:34:183";
                };
                readonly returnParameters: {
                    readonly id: 146142;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146141;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146158;
                        readonly src: "7499:4:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 146140;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7499:4:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7498:6:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 146182;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7613:176:183";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 146181;
                    readonly nodeType: "Block";
                    readonly src: "7687:102:183";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 146179;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 146170;
                                        readonly name: "b1";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 146160;
                                        readonly src: "7743:2:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 146168;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7726:3:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 146169;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7730:12:183";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7726:16:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 146171;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7726:20:183";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 146167;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7716:9:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 146172;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7716:31:183";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 146176;
                                        readonly name: "b2";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 146162;
                                        readonly src: "7778:2:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 146174;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7761:3:183";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 146175;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7765:12:183";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7761:16:183";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 146177;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7761:20:183";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 146173;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7751:9:183";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 146178;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7751:31:183";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "7716:66:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 146166;
                        readonly id: 146180;
                        readonly nodeType: "Return";
                        readonly src: "7697:85:183";
                    }];
                };
                readonly functionSelector: "d37a20ba";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "neq";
                readonly nameLocation: "7622:3:183";
                readonly parameters: {
                    readonly id: 146163;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146160;
                        readonly mutability: "mutable";
                        readonly name: "b1";
                        readonly nameLocation: "7639:2:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146182;
                        readonly src: "7626:15:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 146159;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7626:5:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 146162;
                        readonly mutability: "mutable";
                        readonly name: "b2";
                        readonly nameLocation: "7656:2:183";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146182;
                        readonly src: "7643:15:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 146161;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7643:5:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7625:34:183";
                };
                readonly returnParameters: {
                    readonly id: 146166;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 146165;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 146182;
                        readonly src: "7681:4:183";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 146164;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7681:4:183";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7680:6:183";
                };
                readonly scope: 146183;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "Lib";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [146183];
            readonly name: "Lib";
            readonly nameLocation: "220:3:183";
            readonly scope: 146184;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 183;
};
//# sourceMappingURL=Lib.d.ts.map