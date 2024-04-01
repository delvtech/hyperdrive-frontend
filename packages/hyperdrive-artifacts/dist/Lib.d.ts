export declare const Lib: {
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
        readonly name: "eq";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
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
        readonly name: "neq";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x61029e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220ac6d004962e7b31b9a7ba8b41d8e1004191e47b1c8d5722617f77fea7a8a0ae464736f6c63430008140033";
        readonly sourceMap: "212:7579:233:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;212:7579:233;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063cdb1684014610045578063d37a20ba1461006c575b600080fd5b6100586100533660046101d5565b61007f565b604051901515815260200160405180910390f35b61005861007a3660046101d5565b6100d8565b6000816040516020016100929190610239565b60405160208183030381529060405280519060200120836040516020016100b99190610239565b6040516020818303038152906040528051906020012014905092915050565b6000816040516020016100eb9190610239565b60405160208183030381529060405280519060200120836040516020016101129190610239565b604051602081830303815290604052805190602001201415905092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261015957600080fd5b813567ffffffffffffffff8082111561017457610174610132565b604051601f8301601f19908116603f0116810190828211818310171561019c5761019c610132565b816040528381528660208588010111156101b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101e857600080fd5b823567ffffffffffffffff8082111561020057600080fd5b61020c86838701610148565b9350602085013591508082111561022257600080fd5b5061022f85828601610148565b9150509250929050565b6000825160005b8181101561025a5760208186018101518583015201610240565b50600092019182525091905056fea2646970667358221220ac6d004962e7b31b9a7ba8b41d8e1004191e47b1c8d5722617f77fea7a8a0ae464736f6c63430008140033";
        readonly sourceMap: "212:7579:233:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7432:175;;;;;;:::i;:::-;;:::i;:::-;;;1586:14:234;;1579:22;1561:41;;1549:2;1534:18;7432:175:233;;;;;;;7613:176;;;;;;:::i;:::-;;:::i;7432:175::-;7499:4;7596:2;7579:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7569:31;;;;;;7561:2;7544:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7534:31;;;;;;:66;7515:85;;7432:175;;;;:::o;7613:176::-;7681:4;7778:2;7761:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7751:31;;;;;;7743:2;7726:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;7716:31;;;;;;:66;;7697:85;;7613:176;;;;:::o;14:127:234:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:718;188:5;241:3;234:4;226:6;222:17;218:27;208:55;;259:1;256;249:12;208:55;295:6;282:20;321:18;358:2;354;351:10;348:36;;;364:18;;:::i;:::-;439:2;433:9;407:2;493:13;;-1:-1:-1;;489:22:234;;;513:2;485:31;481:40;469:53;;;537:18;;;557:22;;;534:46;531:72;;;583:18;;:::i;:::-;623:10;619:2;612:22;658:2;650:6;643:18;704:3;697:4;692:2;684:6;680:15;676:26;673:35;670:55;;;721:1;718;711:12;670:55;785:2;778:4;770:6;766:17;759:4;751:6;747:17;734:54;832:1;825:4;820:2;812:6;808:15;804:26;797:37;852:6;843:15;;;;;;146:718;;;;:::o;869:539::-;955:6;963;1016:2;1004:9;995:7;991:23;987:32;984:52;;;1032:1;1029;1022:12;984:52;1072:9;1059:23;1101:18;1142:2;1134:6;1131:14;1128:34;;;1158:1;1155;1148:12;1128:34;1181:49;1222:7;1213:6;1202:9;1198:22;1181:49;:::i;:::-;1171:59;;1283:2;1272:9;1268:18;1255:32;1239:48;;1312:2;1302:8;1299:16;1296:36;;;1328:1;1325;1318:12;1296:36;;1351:51;1394:7;1383:8;1372:9;1368:24;1351:51;:::i;:::-;1341:61;;;869:539;;;;;:::o;1613:412::-;1742:3;1780:6;1774:13;1805:1;1815:129;1829:6;1826:1;1823:13;1815:129;;;1927:4;1911:14;;;1907:25;;1901:32;1888:11;;;1881:53;1844:12;1815:129;;;-1:-1:-1;1999:1:234;1963:16;;1988:13;;;-1:-1:-1;1963:16:234;1613:412;-1:-1:-1;1613:412:234:o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "eq(bytes,bytes)": "cdb16840";
        readonly "neq(bytes,bytes)": "d37a20ba";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"eq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"b1\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"b2\",\"type\":\"bytes\"}],\"name\":\"neq\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/Lib.sol\":\"Lib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"test/utils/Lib.sol\":{\"keccak256\":\"0x912d18df3f75cbd2b14b90a3974c71947dde5a7c53e20e106ae6f7bd18a68f1e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://853298cef661e6006681ea7066ab72dcda6f44efecec79ebdcef58649a543a74\",\"dweb:/ipfs/Qme9LSzGAwTfre5ZEW6AaAmQToNjS7BDYaoEA3HmPuDPAw\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
        readonly id: 158545;
        readonly exportedSymbols: {
            readonly Lib: readonly [158544];
            readonly Vm: readonly [40813];
            readonly VmSafe: readonly [40341];
            readonly console2: readonly [57002];
            readonly stdMath: readonly [35681];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:7753:233";
        readonly nodes: readonly [{
            readonly id: 157944;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:233";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 157946;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:233";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/console2.sol";
            readonly file: "forge-std/console2.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 158545;
            readonly sourceUnit: 57003;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 157945;
                    readonly name: "console2";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 57002;
                    readonly src: "73:8:233";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 157948;
            readonly nodeType: "ImportDirective";
            readonly src: "115:48:233";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdMath.sol";
            readonly file: "forge-std/StdMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 158545;
            readonly sourceUnit: 35682;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 157947;
                    readonly name: "stdMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35681;
                    readonly src: "124:7:233";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 157951;
            readonly nodeType: "ImportDirective";
            readonly src: "164:46:233";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "forge-std/Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 158545;
            readonly sourceUnit: 40814;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 157949;
                    readonly name: "Vm";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40813;
                    readonly src: "173:2:233";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 157950;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40341;
                    readonly src: "177:6:233";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 158544;
            readonly nodeType: "ContractDefinition";
            readonly src: "212:7579:233";
            readonly nodes: readonly [{
                readonly id: 158015;
                readonly nodeType: "FunctionDefinition";
                readonly src: "485:579:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158014;
                    readonly nodeType: "Block";
                    readonly src: "628:436:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [157966];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 157966;
                            readonly mutability: "mutable";
                            readonly name: "current";
                            readonly nameLocation: "674:7:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158014;
                            readonly src: "666:15:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 157965;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "666:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 157968;
                        readonly initialValue: {
                            readonly hexValue: "30";
                            readonly id: 157967;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "684:1:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "666:19:233";
                    }, {
                        readonly expression: {
                            readonly id: 157977;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 157969;
                                readonly name: "filteredLogs";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 157963;
                                readonly src: "695:12:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct VmSafe.Log memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 157974;
                                        readonly name: "logs";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 157956;
                                        readonly src: "727:4:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                                            readonly typeString: "struct VmSafe.Log memory[] memory";
                                        };
                                    };
                                    readonly id: 157975;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "732:6:233";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "727:11:233";
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
                                    readonly id: 157973;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "NewExpression";
                                    readonly src: "710:16:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure returns (struct VmSafe.Log memory[] memory)";
                                    };
                                    readonly typeName: {
                                        readonly baseType: {
                                            readonly id: 157971;
                                            readonly nodeType: "UserDefinedTypeName";
                                            readonly pathNode: {
                                                readonly id: 157970;
                                                readonly name: "VmSafe.Log";
                                                readonly nameLocations: readonly ["714:6:233", "721:3:233"];
                                                readonly nodeType: "IdentifierPath";
                                                readonly referencedDeclaration: 39293;
                                                readonly src: "714:10:233";
                                            };
                                            readonly referencedDeclaration: 39293;
                                            readonly src: "714:10:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Log_$39293_storage_ptr";
                                                readonly typeString: "struct VmSafe.Log";
                                            };
                                        };
                                        readonly id: 157972;
                                        readonly nodeType: "ArrayTypeName";
                                        readonly src: "714:12:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_storage_$dyn_storage_ptr";
                                            readonly typeString: "struct VmSafe.Log[]";
                                        };
                                    };
                                };
                                readonly id: 157976;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "710:29:233";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct VmSafe.Log memory[] memory";
                                };
                            };
                            readonly src: "695:44:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct VmSafe.Log memory[] memory";
                            };
                        };
                        readonly id: 157978;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "695:44:233";
                    }, {
                        readonly body: {
                            readonly id: 158009;
                            readonly nodeType: "Block";
                            readonly src: "791:125:233";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly id: 157997;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly baseExpression: {
                                            readonly expression: {
                                                readonly baseExpression: {
                                                    readonly id: 157990;
                                                    readonly name: "logs";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 157956;
                                                    readonly src: "809:4:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                                                        readonly typeString: "struct VmSafe.Log memory[] memory";
                                                    };
                                                };
                                                readonly id: 157992;
                                                readonly indexExpression: {
                                                    readonly id: 157991;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 157980;
                                                    readonly src: "814:1:233";
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
                                                readonly src: "809:7:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Log_$39293_memory_ptr";
                                                    readonly typeString: "struct VmSafe.Log memory";
                                                };
                                            };
                                            readonly id: 157993;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "817:6:233";
                                            readonly memberName: "topics";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 39288;
                                            readonly src: "809:14:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                                readonly typeString: "bytes32[] memory";
                                            };
                                        };
                                        readonly id: 157995;
                                        readonly indexExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 157994;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "824:1:233";
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
                                        readonly src: "809:17:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly id: 157996;
                                        readonly name: "selector";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 157958;
                                        readonly src: "830:8:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "809:29:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 158008;
                                readonly nodeType: "IfStatement";
                                readonly src: "805:101:233";
                                readonly trueBody: {
                                    readonly id: 158007;
                                    readonly nodeType: "Block";
                                    readonly src: "840:66:233";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 158005;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 157998;
                                                    readonly name: "filteredLogs";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 157963;
                                                    readonly src: "858:12:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                                                        readonly typeString: "struct VmSafe.Log memory[] memory";
                                                    };
                                                };
                                                readonly id: 158001;
                                                readonly indexExpression: {
                                                    readonly id: 158000;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "UnaryOperation";
                                                    readonly operator: "++";
                                                    readonly prefix: false;
                                                    readonly src: "871:9:233";
                                                    readonly subExpression: {
                                                        readonly id: 157999;
                                                        readonly name: "current";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 157966;
                                                        readonly src: "871:7:233";
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
                                                readonly src: "858:23:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Log_$39293_memory_ptr";
                                                    readonly typeString: "struct VmSafe.Log memory";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 158002;
                                                    readonly name: "logs";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 157956;
                                                    readonly src: "884:4:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                                                        readonly typeString: "struct VmSafe.Log memory[] memory";
                                                    };
                                                };
                                                readonly id: 158004;
                                                readonly indexExpression: {
                                                    readonly id: 158003;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 157980;
                                                    readonly src: "889:1:233";
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
                                                readonly src: "884:7:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_Log_$39293_memory_ptr";
                                                    readonly typeString: "struct VmSafe.Log memory";
                                                };
                                            };
                                            readonly src: "858:33:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Log_$39293_memory_ptr";
                                                readonly typeString: "struct VmSafe.Log memory";
                                            };
                                        };
                                        readonly id: 158006;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "858:33:233";
                                    }];
                                };
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 157986;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 157983;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 157980;
                                readonly src: "769:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 157984;
                                    readonly name: "logs";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 157956;
                                    readonly src: "773:4:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                                        readonly typeString: "struct VmSafe.Log memory[] memory";
                                    };
                                };
                                readonly id: 157985;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "778:6:233";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "773:11:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "769:15:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 158010;
                        readonly initializationExpression: {
                            readonly assignments: readonly [157980];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 157980;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "762:1:233";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 158010;
                                readonly src: "754:9:233";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 157979;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "754:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 157982;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 157981;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "766:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "754:13:233";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 157988;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: false;
                                readonly src: "786:3:233";
                                readonly subExpression: {
                                    readonly id: 157987;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 157980;
                                    readonly src: "786:1:233";
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
                            readonly id: 157989;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "786:3:233";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "749:167:233";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "976:53:233";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "filteredLogs";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "997:12:233";
                                    }, {
                                        readonly name: "current";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1011:7:233";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "990:6:233";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "990:29:233";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "990:29:233";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 157966;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1011:7:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 157963;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "997:12:233";
                            readonly valueSize: 1;
                        }];
                        readonly id: 158011;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "967:62:233";
                    }, {
                        readonly expression: {
                            readonly id: 158012;
                            readonly name: "filteredLogs";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 157963;
                            readonly src: "1045:12:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct VmSafe.Log memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 157964;
                        readonly id: 158013;
                        readonly nodeType: "Return";
                        readonly src: "1038:19:233";
                    }];
                };
                readonly documentation: {
                    readonly id: 157952;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "230:250:233";
                    readonly text: "@dev Filters an array of longs for events that match the provided\n      selector.\n @param logs The array of logs to filter.\n @param selector The selector to filter for.\n @return filteredLogs The filtered array of logs.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "filterLogs";
                readonly nameLocation: "494:10:233";
                readonly parameters: {
                    readonly id: 157959;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 157956;
                        readonly mutability: "mutable";
                        readonly name: "logs";
                        readonly nameLocation: "534:4:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158015;
                        readonly src: "514:24:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct VmSafe.Log[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 157954;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 157953;
                                    readonly name: "VmSafe.Log";
                                    readonly nameLocations: readonly ["514:6:233", "521:3:233"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 39293;
                                    readonly src: "514:10:233";
                                };
                                readonly referencedDeclaration: 39293;
                                readonly src: "514:10:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Log_$39293_storage_ptr";
                                    readonly typeString: "struct VmSafe.Log";
                                };
                            };
                            readonly id: 157955;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "514:12:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_storage_$dyn_storage_ptr";
                                readonly typeString: "struct VmSafe.Log[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 157958;
                        readonly mutability: "mutable";
                        readonly name: "selector";
                        readonly nameLocation: "556:8:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158015;
                        readonly src: "548:16:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 157957;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "548:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "504:66:233";
                };
                readonly returnParameters: {
                    readonly id: 157964;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 157963;
                        readonly mutability: "mutable";
                        readonly name: "filteredLogs";
                        readonly nameLocation: "614:12:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158015;
                        readonly src: "594:32:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct VmSafe.Log[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 157961;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 157960;
                                    readonly name: "VmSafe.Log";
                                    readonly nameLocations: readonly ["594:6:233", "601:3:233"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 39293;
                                    readonly src: "594:10:233";
                                };
                                readonly referencedDeclaration: 39293;
                                readonly src: "594:10:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Log_$39293_storage_ptr";
                                    readonly typeString: "struct VmSafe.Log";
                                };
                            };
                            readonly id: 157962;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "594:12:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Log_$39293_storage_$dyn_storage_ptr";
                                readonly typeString: "struct VmSafe.Log[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "593:34:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 158035;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1283:192:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158034;
                    readonly nodeType: "Block";
                    readonly src: "1373:102:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "4572726f7228737472696e6729";
                                        readonly id: 158028;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "1442:15:233";
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
                                        readonly id: 158027;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "1432:9:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 158029;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1432:26:233";
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
                                    readonly id: 158026;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1425:6:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes4_$";
                                        readonly typeString: "type(bytes4)";
                                    };
                                    readonly typeName: {
                                        readonly id: 158025;
                                        readonly name: "bytes4";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1425:6:233";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 158030;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1425:34:233";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                };
                            }, {
                                readonly id: 158031;
                                readonly name: "reason";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158018;
                                readonly src: "1461:6:233";
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
                                    readonly id: 158023;
                                    readonly name: "abi";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -1;
                                    readonly src: "1402:3:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_abi";
                                        readonly typeString: "abi";
                                    };
                                };
                                readonly id: 158024;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1406:18:233";
                                readonly memberName: "encodeWithSelector";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1402:22:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes4) pure returns (bytes memory)";
                                };
                            };
                            readonly id: 158032;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1402:66:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 158022;
                        readonly id: 158033;
                        readonly nodeType: "Return";
                        readonly src: "1383:85:233";
                    }];
                };
                readonly documentation: {
                    readonly id: 158016;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1070:208:233";
                    readonly text: "@dev Encodes a reason into a string error. This is useful for verifying\n      string errors in low-level calls.\n @param reason The reason to encode.\n @return The encoded string error.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toError";
                readonly nameLocation: "1292:7:233";
                readonly parameters: {
                    readonly id: 158019;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158018;
                        readonly mutability: "mutable";
                        readonly name: "reason";
                        readonly nameLocation: "1323:6:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158035;
                        readonly src: "1309:20:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 158017;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1309:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1299:36:233";
                };
                readonly returnParameters: {
                    readonly id: 158022;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158021;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158035;
                        readonly src: "1359:12:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 158020;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1359:5:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1358:14:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 158184;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1924:2036:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158183;
                    readonly nodeType: "Block";
                    readonly src: "2039:1921:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [158046];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158046;
                            readonly mutability: "mutable";
                            readonly name: "maxStringLength";
                            readonly nameLocation: "2329:15:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158183;
                            readonly src: "2321:23:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 158045;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2321:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158048;
                        readonly initialValue: {
                            readonly hexValue: "3739";
                            readonly id: 158047;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2347:2:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_79_by_1";
                                readonly typeString: "int_const 79";
                            };
                            readonly value: "79";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2321:28:233";
                    }, {
                        readonly assignments: readonly [158050];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158050;
                            readonly mutability: "mutable";
                            readonly name: "rawResult";
                            readonly nameLocation: "2372:9:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158183;
                            readonly src: "2359:22:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 158049;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2359:5:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158055;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 158053;
                                readonly name: "maxStringLength";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158046;
                                readonly src: "2394:15:233";
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
                                readonly id: 158052;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "2384:9:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (bytes memory)";
                                };
                                readonly typeName: {
                                    readonly id: 158051;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2388:5:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
                                };
                            };
                            readonly id: 158054;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2384:26:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2359:51:233";
                    }, {
                        readonly assignments: readonly [158057];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158057;
                            readonly mutability: "mutable";
                            readonly name: "isNegative";
                            readonly nameLocation: "2688:10:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158183;
                            readonly src: "2683:15:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 158056;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2683:4:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158061;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 158060;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 158058;
                                readonly name: "num";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158038;
                                readonly src: "2701:3:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 158059;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2707:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "2701:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2683:25:233";
                    }, {
                        readonly expression: {
                            readonly id: 158070;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 158062;
                                readonly name: "num";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158038;
                                readonly src: "2718:3:233";
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
                                    readonly id: 158065;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 158063;
                                        readonly name: "num";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158038;
                                        readonly src: "2724:3:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly hexValue: "30";
                                        readonly id: 158064;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2730:1:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "2724:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 158068;
                                    readonly name: "num";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158038;
                                    readonly src: "2741:3:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 158069;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "2724:20:233";
                                readonly trueExpression: {
                                    readonly id: 158067;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "-";
                                    readonly prefix: true;
                                    readonly src: "2734:4:233";
                                    readonly subExpression: {
                                        readonly id: 158066;
                                        readonly name: "num";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158038;
                                        readonly src: "2735:3:233";
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
                            readonly src: "2718:26:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 158071;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2718:26:233";
                    }, {
                        readonly expression: {
                            readonly id: 158092;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 158072;
                                    readonly name: "rawResult";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158050;
                                    readonly src: "2909:9:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 158076;
                                readonly indexExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 158075;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 158073;
                                        readonly name: "maxStringLength";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158046;
                                        readonly src: "2919:15:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 158074;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2937:1:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "2919:19:233";
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
                                readonly src: "2909:30:233";
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
                                            readonly id: 158088;
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
                                                    readonly id: 158085;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 158083;
                                                        readonly name: "num";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 158038;
                                                        readonly src: "2977:3:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "%";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "3130";
                                                        readonly id: 158084;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "2983:2:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_10_by_1";
                                                            readonly typeString: "int_const 10";
                                                        };
                                                        readonly value: "10";
                                                    };
                                                    readonly src: "2977:8:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 158086;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "2976:10:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "+";
                                            readonly rightExpression: {
                                                readonly hexValue: "3438";
                                                readonly id: 158087;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "2989:2:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_48_by_1";
                                                    readonly typeString: "int_const 48";
                                                };
                                                readonly value: "48";
                                            };
                                            readonly src: "2976:15:233";
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
                                            readonly id: 158082;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "2968:7:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 158081;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "2968:7:233";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 158089;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2968:24:233";
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
                                        readonly id: 158080;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2962:5:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint8_$";
                                            readonly typeString: "type(uint8)";
                                        };
                                        readonly typeName: {
                                            readonly id: 158079;
                                            readonly name: "uint8";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2962:5:233";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 158090;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2962:31:233";
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
                                    readonly id: 158078;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2942:6:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                        readonly typeString: "type(bytes1)";
                                    };
                                    readonly typeName: {
                                        readonly id: 158077;
                                        readonly name: "bytes1";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2942:6:233";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 158091;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2942:61:233";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes1";
                                    readonly typeString: "bytes1";
                                };
                            };
                            readonly src: "2909:94:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes1";
                                readonly typeString: "bytes1";
                            };
                        };
                        readonly id: 158093;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2909:94:233";
                    }, {
                        readonly expression: {
                            readonly id: 158096;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 158094;
                                readonly name: "num";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158038;
                                readonly src: "3013:3:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "/=";
                            readonly rightHandSide: {
                                readonly hexValue: "3130";
                                readonly id: 158095;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3020:2:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_10_by_1";
                                    readonly typeString: "int_const 10";
                                };
                                readonly value: "10";
                            };
                            readonly src: "3013:9:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 158097;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3013:9:233";
                    }, {
                        readonly assignments: readonly [158099];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158099;
                            readonly mutability: "mutable";
                            readonly name: "digits";
                            readonly nameLocation: "3040:6:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158183;
                            readonly src: "3032:14:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 158098;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3032:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158101;
                        readonly initialValue: {
                            readonly hexValue: "31";
                            readonly id: 158100;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "3049:1:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1_by_1";
                                readonly typeString: "int_const 1";
                            };
                            readonly value: "1";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3032:18:233";
                    }, {
                        readonly body: {
                            readonly id: 158162;
                            readonly nodeType: "Block";
                            readonly src: "3103:349:233";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 158117;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 158113;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 158111;
                                            readonly name: "decimals";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 158040;
                                            readonly src: "3121:8:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 158112;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "3132:1:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "3121:12:233";
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
                                        readonly id: 158116;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 158114;
                                            readonly name: "digits";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 158099;
                                            readonly src: "3137:6:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly id: 158115;
                                            readonly name: "decimals";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 158040;
                                            readonly src: "3147:8:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "3137:18:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "3121:34:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly id: 158157;
                                    readonly nodeType: "Block";
                                    readonly src: "3241:179:233";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 158151;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 158129;
                                                    readonly name: "rawResult";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158050;
                                                    readonly src: "3259:9:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 158135;
                                                readonly indexExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 158134;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 158132;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly id: 158130;
                                                            readonly name: "maxStringLength";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 158046;
                                                            readonly src: "3269:15:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "-";
                                                        readonly rightExpression: {
                                                            readonly id: 158131;
                                                            readonly name: "digits";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 158099;
                                                            readonly src: "3287:6:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly src: "3269:24:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "31";
                                                        readonly id: 158133;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "3296:1:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_1_by_1";
                                                            readonly typeString: "int_const 1";
                                                        };
                                                        readonly value: "1";
                                                    };
                                                    readonly src: "3269:28:233";
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
                                                readonly src: "3259:39:233";
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
                                                            readonly id: 158147;
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
                                                                    readonly id: 158144;
                                                                    readonly isConstant: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: false;
                                                                    readonly lValueRequested: false;
                                                                    readonly leftExpression: {
                                                                        readonly id: 158142;
                                                                        readonly name: "num";
                                                                        readonly nodeType: "Identifier";
                                                                        readonly overloadedDeclarations: readonly [];
                                                                        readonly referencedDeclaration: 158038;
                                                                        readonly src: "3344:3:233";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_int256";
                                                                            readonly typeString: "int256";
                                                                        };
                                                                    };
                                                                    readonly nodeType: "BinaryOperation";
                                                                    readonly operator: "%";
                                                                    readonly rightExpression: {
                                                                        readonly hexValue: "3130";
                                                                        readonly id: 158143;
                                                                        readonly isConstant: false;
                                                                        readonly isLValue: false;
                                                                        readonly isPure: true;
                                                                        readonly kind: "number";
                                                                        readonly lValueRequested: false;
                                                                        readonly nodeType: "Literal";
                                                                        readonly src: "3350:2:233";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_rational_10_by_1";
                                                                            readonly typeString: "int_const 10";
                                                                        };
                                                                        readonly value: "10";
                                                                    };
                                                                    readonly src: "3344:8:233";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_int256";
                                                                        readonly typeString: "int256";
                                                                    };
                                                                }];
                                                                readonly id: 158145;
                                                                readonly isConstant: false;
                                                                readonly isInlineArray: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "TupleExpression";
                                                                readonly src: "3343:10:233";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_int256";
                                                                    readonly typeString: "int256";
                                                                };
                                                            };
                                                            readonly nodeType: "BinaryOperation";
                                                            readonly operator: "+";
                                                            readonly rightExpression: {
                                                                readonly hexValue: "3438";
                                                                readonly id: 158146;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: true;
                                                                readonly kind: "number";
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "Literal";
                                                                readonly src: "3356:2:233";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_rational_48_by_1";
                                                                    readonly typeString: "int_const 48";
                                                                };
                                                                readonly value: "48";
                                                            };
                                                            readonly src: "3343:15:233";
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
                                                            readonly id: 158141;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "ElementaryTypeNameExpression";
                                                            readonly src: "3335:7:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                                readonly typeString: "type(uint256)";
                                                            };
                                                            readonly typeName: {
                                                                readonly id: 158140;
                                                                readonly name: "uint256";
                                                                readonly nodeType: "ElementaryTypeName";
                                                                readonly src: "3335:7:233";
                                                                readonly typeDescriptions: {};
                                                            };
                                                        };
                                                        readonly id: 158148;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "typeConversion";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "3335:24:233";
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
                                                        readonly id: 158139;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "3329:5:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_uint8_$";
                                                            readonly typeString: "type(uint8)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 158138;
                                                            readonly name: "uint8";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "3329:5:233";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 158149;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "3329:31:233";
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
                                                    readonly id: 158137;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3301:6:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                        readonly typeString: "type(bytes1)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 158136;
                                                        readonly name: "bytes1";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3301:6:233";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 158150;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3301:77:233";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "3259:119:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 158152;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "3259:119:233";
                                    }, {
                                        readonly expression: {
                                            readonly id: 158155;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 158153;
                                                readonly name: "num";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 158038;
                                                readonly src: "3396:3:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "/=";
                                            readonly rightHandSide: {
                                                readonly hexValue: "3130";
                                                readonly id: 158154;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3403:2:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_10_by_1";
                                                    readonly typeString: "int_const 10";
                                                };
                                                readonly value: "10";
                                            };
                                            readonly src: "3396:9:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly id: 158156;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "3396:9:233";
                                    }];
                                };
                                readonly id: 158158;
                                readonly nodeType: "IfStatement";
                                readonly src: "3117:303:233";
                                readonly trueBody: {
                                    readonly id: 158128;
                                    readonly nodeType: "Block";
                                    readonly src: "3157:78:233";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 158126;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 158118;
                                                    readonly name: "rawResult";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158050;
                                                    readonly src: "3175:9:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 158124;
                                                readonly indexExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 158123;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 158121;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly id: 158119;
                                                            readonly name: "maxStringLength";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 158046;
                                                            readonly src: "3185:15:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "-";
                                                        readonly rightExpression: {
                                                            readonly id: 158120;
                                                            readonly name: "digits";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 158099;
                                                            readonly src: "3203:6:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly src: "3185:24:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "31";
                                                        readonly id: 158122;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "3212:1:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_1_by_1";
                                                            readonly typeString: "int_const 1";
                                                        };
                                                        readonly value: "1";
                                                    };
                                                    readonly src: "3185:28:233";
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
                                                readonly src: "3175:39:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly hexValue: "2e";
                                                readonly id: 158125;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3217:3:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf";
                                                    readonly typeString: "literal_string \".\"";
                                                };
                                                readonly value: ".";
                                            };
                                            readonly src: "3175:45:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 158127;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "3175:45:233";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 158160;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "++";
                                    readonly prefix: false;
                                    readonly src: "3433:8:233";
                                    readonly subExpression: {
                                        readonly id: 158159;
                                        readonly name: "digits";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158099;
                                        readonly src: "3433:6:233";
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
                                readonly id: 158161;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3433:8:233";
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 158110;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 158104;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 158102;
                                    readonly name: "num";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158038;
                                    readonly src: "3067:3:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 158103;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3074:1:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3067:8:233";
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
                                readonly id: 158109;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 158105;
                                    readonly name: "digits";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158099;
                                    readonly src: "3079:6:233";
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
                                    readonly id: 158108;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 158106;
                                        readonly name: "decimals";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158040;
                                        readonly src: "3089:8:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 158107;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3100:1:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "3089:12:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "3079:22:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "3067:34:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 158163;
                        readonly nodeType: "WhileStatement";
                        readonly src: "3060:392:233";
                    }, {
                        readonly condition: {
                            readonly id: 158164;
                            readonly name: "isNegative";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 158057;
                            readonly src: "3566:10:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 158179;
                        readonly nodeType: "IfStatement";
                        readonly src: "3562:108:233";
                        readonly trueBody: {
                            readonly id: 158178;
                            readonly nodeType: "Block";
                            readonly src: "3578:92:233";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 158173;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 158165;
                                            readonly name: "rawResult";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 158050;
                                            readonly src: "3592:9:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        };
                                        readonly id: 158171;
                                        readonly indexExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 158170;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 158168;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly id: 158166;
                                                    readonly name: "maxStringLength";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158046;
                                                    readonly src: "3602:15:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "-";
                                                readonly rightExpression: {
                                                    readonly id: 158167;
                                                    readonly name: "digits";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158099;
                                                    readonly src: "3620:6:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly src: "3602:24:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly hexValue: "31";
                                                readonly id: 158169;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3629:1:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_1_by_1";
                                                    readonly typeString: "int_const 1";
                                                };
                                                readonly value: "1";
                                            };
                                            readonly src: "3602:28:233";
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
                                        readonly src: "3592:39:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly hexValue: "2d";
                                        readonly id: 158172;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3634:3:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561";
                                            readonly typeString: "literal_string \"-\"";
                                        };
                                        readonly value: "-";
                                    };
                                    readonly src: "3592:45:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes1";
                                        readonly typeString: "bytes1";
                                    };
                                };
                                readonly id: 158174;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3592:45:233";
                            }, {
                                readonly expression: {
                                    readonly id: 158176;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "++";
                                    readonly prefix: false;
                                    readonly src: "3651:8:233";
                                    readonly subExpression: {
                                        readonly id: 158175;
                                        readonly name: "digits";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158099;
                                        readonly src: "3651:6:233";
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
                                readonly id: 158177;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3651:8:233";
                            }];
                        };
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "3802:129:233";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "3816:62:233";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "rawResult";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3830:9:233";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "maxStringLength";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3849:15:233";
                                            }, {
                                                readonly name: "digits";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3866:6:233";
                                            }];
                                            readonly functionName: {
                                                readonly name: "sub";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3845:3:233";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "3845:28:233";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3875:1:233";
                                            readonly type: "";
                                            readonly value: "1";
                                        }];
                                        readonly functionName: {
                                            readonly name: "sub";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3841:3:233";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3841:36:233";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3826:3:233";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3826:52:233";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "result";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3816:6:233";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "result";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3898:6:233";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "digits";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3910:6:233";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3918:1:233";
                                            readonly type: "";
                                            readonly value: "1";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3906:3:233";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3906:14:233";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3891:6:233";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3891:30:233";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3891:30:233";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 158099;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3866:6:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158099;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3910:6:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158046;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3849:15:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158050;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3830:9:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158043;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3816:6:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158043;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3898:6:233";
                            readonly valueSize: 1;
                        }];
                        readonly id: 158180;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "3793:138:233";
                    }, {
                        readonly expression: {
                            readonly id: 158181;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 158043;
                            readonly src: "3947:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 158044;
                        readonly id: 158182;
                        readonly nodeType: "Return";
                        readonly src: "3940:13:233";
                    }];
                };
                readonly documentation: {
                    readonly id: 158036;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1481:438:233";
                    readonly text: "@dev Converts a signed integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toString";
                readonly nameLocation: "1933:8:233";
                readonly parameters: {
                    readonly id: 158041;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158038;
                        readonly mutability: "mutable";
                        readonly name: "num";
                        readonly nameLocation: "1958:3:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158184;
                        readonly src: "1951:10:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 158037;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1951:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158040;
                        readonly mutability: "mutable";
                        readonly name: "decimals";
                        readonly nameLocation: "1979:8:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158184;
                        readonly src: "1971:16:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158039;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1971:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1941:52:233";
                };
                readonly returnParameters: {
                    readonly id: 158044;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158043;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "2031:6:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158184;
                        readonly src: "2017:20:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 158042;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2017:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2016:22:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 158295;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4412:1394:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158294;
                    readonly nodeType: "Block";
                    readonly src: "4528:1278:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [158195];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158195;
                            readonly mutability: "mutable";
                            readonly name: "maxStringLength";
                            readonly nameLocation: "4767:15:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158294;
                            readonly src: "4759:23:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 158194;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4759:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158197;
                        readonly initialValue: {
                            readonly hexValue: "3739";
                            readonly id: 158196;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "4785:2:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_79_by_1";
                                readonly typeString: "int_const 79";
                            };
                            readonly value: "79";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4759:28:233";
                    }, {
                        readonly assignments: readonly [158199];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158199;
                            readonly mutability: "mutable";
                            readonly name: "rawResult";
                            readonly nameLocation: "4810:9:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158294;
                            readonly src: "4797:22:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 158198;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4797:5:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158204;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 158202;
                                readonly name: "maxStringLength";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158195;
                                readonly src: "4832:15:233";
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
                                readonly id: 158201;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "4822:9:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (bytes memory)";
                                };
                                readonly typeName: {
                                    readonly id: 158200;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "4826:5:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
                                };
                            };
                            readonly id: 158203;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4822:26:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4797:51:233";
                    }, {
                        readonly expression: {
                            readonly id: 158222;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 158205;
                                    readonly name: "rawResult";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158199;
                                    readonly src: "5013:9:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 158209;
                                readonly indexExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 158208;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 158206;
                                        readonly name: "maxStringLength";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158195;
                                        readonly src: "5023:15:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 158207;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5041:1:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "5023:19:233";
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
                                readonly src: "5013:30:233";
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
                                        readonly id: 158219;
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
                                                readonly id: 158216;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly id: 158214;
                                                    readonly name: "num";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158187;
                                                    readonly src: "5060:3:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "%";
                                                readonly rightExpression: {
                                                    readonly hexValue: "3130";
                                                    readonly id: 158215;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "5066:2:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_10_by_1";
                                                        readonly typeString: "int_const 10";
                                                    };
                                                    readonly value: "10";
                                                };
                                                readonly src: "5060:8:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly id: 158217;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "5059:10:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "+";
                                        readonly rightExpression: {
                                            readonly hexValue: "3438";
                                            readonly id: 158218;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5072:2:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_48_by_1";
                                                readonly typeString: "int_const 48";
                                            };
                                            readonly value: "48";
                                        };
                                        readonly src: "5059:15:233";
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
                                        readonly id: 158213;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5053:5:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint8_$";
                                            readonly typeString: "type(uint8)";
                                        };
                                        readonly typeName: {
                                            readonly id: 158212;
                                            readonly name: "uint8";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5053:5:233";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 158220;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5053:22:233";
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
                                    readonly id: 158211;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5046:6:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                        readonly typeString: "type(bytes1)";
                                    };
                                    readonly typeName: {
                                        readonly id: 158210;
                                        readonly name: "bytes1";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5046:6:233";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 158221;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5046:30:233";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes1";
                                    readonly typeString: "bytes1";
                                };
                            };
                            readonly src: "5013:63:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes1";
                                readonly typeString: "bytes1";
                            };
                        };
                        readonly id: 158223;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5013:63:233";
                    }, {
                        readonly expression: {
                            readonly id: 158226;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 158224;
                                readonly name: "num";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158187;
                                readonly src: "5086:3:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "/=";
                            readonly rightHandSide: {
                                readonly hexValue: "3130";
                                readonly id: 158225;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5093:2:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_10_by_1";
                                    readonly typeString: "int_const 10";
                                };
                                readonly value: "10";
                            };
                            readonly src: "5086:9:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 158227;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5086:9:233";
                    }, {
                        readonly assignments: readonly [158229];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158229;
                            readonly mutability: "mutable";
                            readonly name: "digits";
                            readonly nameLocation: "5113:6:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158294;
                            readonly src: "5105:14:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 158228;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5105:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158231;
                        readonly initialValue: {
                            readonly hexValue: "31";
                            readonly id: 158230;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "5122:1:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_1_by_1";
                                readonly typeString: "int_const 1";
                            };
                            readonly value: "1";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5105:18:233";
                    }, {
                        readonly body: {
                            readonly id: 158289;
                            readonly nodeType: "Block";
                            readonly src: "5176:340:233";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 158247;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 158243;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 158241;
                                            readonly name: "decimals";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 158189;
                                            readonly src: "5194:8:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 158242;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5205:1:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "5194:12:233";
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
                                        readonly id: 158246;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 158244;
                                            readonly name: "digits";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 158229;
                                            readonly src: "5210:6:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly id: 158245;
                                            readonly name: "decimals";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 158189;
                                            readonly src: "5220:8:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "5210:18:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5194:34:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly id: 158284;
                                    readonly nodeType: "Block";
                                    readonly src: "5314:170:233";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 158278;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 158259;
                                                    readonly name: "rawResult";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158199;
                                                    readonly src: "5332:9:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 158265;
                                                readonly indexExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 158264;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 158262;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly id: 158260;
                                                            readonly name: "maxStringLength";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 158195;
                                                            readonly src: "5342:15:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "-";
                                                        readonly rightExpression: {
                                                            readonly id: 158261;
                                                            readonly name: "digits";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 158229;
                                                            readonly src: "5360:6:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly src: "5342:24:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "31";
                                                        readonly id: 158263;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "5369:1:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_1_by_1";
                                                            readonly typeString: "int_const 1";
                                                        };
                                                        readonly value: "1";
                                                    };
                                                    readonly src: "5342:28:233";
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
                                                readonly src: "5332:39:233";
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
                                                        readonly id: 158275;
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
                                                                readonly id: 158272;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly leftExpression: {
                                                                    readonly id: 158270;
                                                                    readonly name: "num";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 158187;
                                                                    readonly src: "5409:3:233";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_uint256";
                                                                        readonly typeString: "uint256";
                                                                    };
                                                                };
                                                                readonly nodeType: "BinaryOperation";
                                                                readonly operator: "%";
                                                                readonly rightExpression: {
                                                                    readonly hexValue: "3130";
                                                                    readonly id: 158271;
                                                                    readonly isConstant: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: true;
                                                                    readonly kind: "number";
                                                                    readonly lValueRequested: false;
                                                                    readonly nodeType: "Literal";
                                                                    readonly src: "5415:2:233";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_rational_10_by_1";
                                                                        readonly typeString: "int_const 10";
                                                                    };
                                                                    readonly value: "10";
                                                                };
                                                                readonly src: "5409:8:233";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            }];
                                                            readonly id: 158273;
                                                            readonly isConstant: false;
                                                            readonly isInlineArray: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "TupleExpression";
                                                            readonly src: "5408:10:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "+";
                                                        readonly rightExpression: {
                                                            readonly hexValue: "3438";
                                                            readonly id: 158274;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly kind: "number";
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "Literal";
                                                            readonly src: "5421:2:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_rational_48_by_1";
                                                                readonly typeString: "int_const 48";
                                                            };
                                                            readonly value: "48";
                                                        };
                                                        readonly src: "5408:15:233";
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
                                                        readonly id: 158269;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "5402:5:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_uint8_$";
                                                            readonly typeString: "type(uint8)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 158268;
                                                            readonly name: "uint8";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "5402:5:233";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 158276;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "5402:22:233";
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
                                                    readonly id: 158267;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5374:6:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                        readonly typeString: "type(bytes1)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 158266;
                                                        readonly name: "bytes1";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5374:6:233";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 158277;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "5374:68:233";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "5332:110:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 158279;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "5332:110:233";
                                    }, {
                                        readonly expression: {
                                            readonly id: 158282;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 158280;
                                                readonly name: "num";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 158187;
                                                readonly src: "5460:3:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "/=";
                                            readonly rightHandSide: {
                                                readonly hexValue: "3130";
                                                readonly id: 158281;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5467:2:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_10_by_1";
                                                    readonly typeString: "int_const 10";
                                                };
                                                readonly value: "10";
                                            };
                                            readonly src: "5460:9:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 158283;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "5460:9:233";
                                    }];
                                };
                                readonly id: 158285;
                                readonly nodeType: "IfStatement";
                                readonly src: "5190:294:233";
                                readonly trueBody: {
                                    readonly id: 158258;
                                    readonly nodeType: "Block";
                                    readonly src: "5230:78:233";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 158256;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 158248;
                                                    readonly name: "rawResult";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158199;
                                                    readonly src: "5248:9:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 158254;
                                                readonly indexExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 158253;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 158251;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly id: 158249;
                                                            readonly name: "maxStringLength";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 158195;
                                                            readonly src: "5258:15:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "-";
                                                        readonly rightExpression: {
                                                            readonly id: 158250;
                                                            readonly name: "digits";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 158229;
                                                            readonly src: "5276:6:233";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly src: "5258:24:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "31";
                                                        readonly id: 158252;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "5285:1:233";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_1_by_1";
                                                            readonly typeString: "int_const 1";
                                                        };
                                                        readonly value: "1";
                                                    };
                                                    readonly src: "5258:28:233";
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
                                                readonly src: "5248:39:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly hexValue: "2e";
                                                readonly id: 158255;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5290:3:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf";
                                                    readonly typeString: "literal_string \".\"";
                                                };
                                                readonly value: ".";
                                            };
                                            readonly src: "5248:45:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 158257;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "5248:45:233";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 158287;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "++";
                                    readonly prefix: false;
                                    readonly src: "5497:8:233";
                                    readonly subExpression: {
                                        readonly id: 158286;
                                        readonly name: "digits";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158229;
                                        readonly src: "5497:6:233";
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
                                readonly id: 158288;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5497:8:233";
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 158240;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 158234;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 158232;
                                    readonly name: "num";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158187;
                                    readonly src: "5140:3:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 158233;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5147:1:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "5140:8:233";
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
                                readonly id: 158239;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 158235;
                                    readonly name: "digits";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158229;
                                    readonly src: "5152:6:233";
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
                                    readonly id: 158238;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 158236;
                                        readonly name: "decimals";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158189;
                                        readonly src: "5162:8:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 158237;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5173:1:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "5162:12:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "5152:22:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5140:34:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 158290;
                        readonly nodeType: "WhileStatement";
                        readonly src: "5133:383:233";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "5648:129:233";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "5662:62:233";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "rawResult";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5676:9:233";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "maxStringLength";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5695:15:233";
                                            }, {
                                                readonly name: "digits";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5712:6:233";
                                            }];
                                            readonly functionName: {
                                                readonly name: "sub";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5691:3:233";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5691:28:233";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5721:1:233";
                                            readonly type: "";
                                            readonly value: "1";
                                        }];
                                        readonly functionName: {
                                            readonly name: "sub";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5687:3:233";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5687:36:233";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5672:3:233";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5672:52:233";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "result";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5662:6:233";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "result";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5744:6:233";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "digits";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5756:6:233";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5764:1:233";
                                            readonly type: "";
                                            readonly value: "1";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5752:3:233";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5752:14:233";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5737:6:233";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5737:30:233";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5737:30:233";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 158229;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5712:6:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158229;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5756:6:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158195;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5695:15:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158199;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5676:9:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158192;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5662:6:233";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 158192;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5744:6:233";
                            readonly valueSize: 1;
                        }];
                        readonly id: 158291;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "5639:138:233";
                    }, {
                        readonly expression: {
                            readonly id: 158292;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 158192;
                            readonly src: "5793:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 158193;
                        readonly id: 158293;
                        readonly nodeType: "Return";
                        readonly src: "5786:13:233";
                    }];
                };
                readonly documentation: {
                    readonly id: 158185;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3966:441:233";
                    readonly text: "@dev Converts an unsigned integer to a string with a specified amount of\n      decimals. In the event that the integer doesn't have any digits to\n      the left of the decimal place, zeros will be filled in.\n @param num The integer to be converted.\n @param decimals The number of decimal places to add. If zero, the the\n        decimal point is excluded.\n @return result The stringified integer.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toString";
                readonly nameLocation: "4421:8:233";
                readonly parameters: {
                    readonly id: 158190;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158187;
                        readonly mutability: "mutable";
                        readonly name: "num";
                        readonly nameLocation: "4447:3:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158295;
                        readonly src: "4439:11:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158186;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4439:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158189;
                        readonly mutability: "mutable";
                        readonly name: "decimals";
                        readonly nameLocation: "4468:8:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158295;
                        readonly src: "4460:16:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158188;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4460:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4429:53:233";
                };
                readonly returnParameters: {
                    readonly id: 158193;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158192;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "4520:6:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158295;
                        readonly src: "4506:20:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 158191;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4506:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4505:22:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 158364;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5812:448:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158363;
                    readonly nodeType: "Block";
                    readonly src: "5913:347:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 158306;
                                readonly name: "prelude";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158297;
                                readonly src: "5936:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly hexValue: "5b";
                                readonly id: 158307;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5945:3:233";
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
                                    readonly id: 158303;
                                    readonly name: "console2";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 57002;
                                    readonly src: "5923:8:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$57002_$";
                                        readonly typeString: "type(library console2)";
                                    };
                                };
                                readonly id: 158305;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5932:3:233";
                                readonly memberName: "log";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 49663;
                                readonly src: "5923:12:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory) pure";
                                };
                            };
                            readonly id: 158308;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5923:26:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 158309;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5923:26:233";
                    }, {
                        readonly body: {
                            readonly id: 158349;
                            readonly nodeType: "Block";
                            readonly src: "6002:195:233";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 158326;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 158321;
                                        readonly name: "i";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158311;
                                        readonly src: "6020:1:233";
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
                                        readonly id: 158325;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 158322;
                                                readonly name: "array";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 158300;
                                                readonly src: "6024:5:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                                    readonly typeString: "uint256[] memory";
                                                };
                                            };
                                            readonly id: 158323;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "6030:6:233";
                                            readonly memberName: "length";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "6024:12:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly hexValue: "31";
                                            readonly id: 158324;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6039:1:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1_by_1";
                                                readonly typeString: "int_const 1";
                                            };
                                            readonly value: "1";
                                        };
                                        readonly src: "6024:16:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "6020:20:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly id: 158347;
                                    readonly nodeType: "Block";
                                    readonly src: "6120:67:233";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "2020202020202020";
                                                readonly id: 158341;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6151:10:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b";
                                                    readonly typeString: "literal_string \"        \"";
                                                };
                                                readonly value: "        ";
                                            }, {
                                                readonly baseExpression: {
                                                    readonly id: 158342;
                                                    readonly name: "array";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158300;
                                                    readonly src: "6163:5:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                                        readonly typeString: "uint256[] memory";
                                                    };
                                                };
                                                readonly id: 158344;
                                                readonly indexExpression: {
                                                    readonly id: 158343;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158311;
                                                    readonly src: "6169:1:233";
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
                                                readonly src: "6163:8:233";
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
                                                    readonly id: 158338;
                                                    readonly name: "console2";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 57002;
                                                    readonly src: "6138:8:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$57002_$";
                                                        readonly typeString: "type(library console2)";
                                                    };
                                                };
                                                readonly id: 158340;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "6147:3:233";
                                                readonly memberName: "log";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 49629;
                                                readonly src: "6138:12:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$returns$__$";
                                                    readonly typeString: "function (string memory,uint256) pure";
                                                };
                                            };
                                            readonly id: 158345;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6138:34:233";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 158346;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6138:34:233";
                                    }];
                                };
                                readonly id: 158348;
                                readonly nodeType: "IfStatement";
                                readonly src: "6016:171:233";
                                readonly trueBody: {
                                    readonly id: 158337;
                                    readonly nodeType: "Block";
                                    readonly src: "6042:72:233";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "2020202020202020";
                                                readonly id: 158330;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6073:10:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_stringliteral_89a5837ba0b04e7f4fa7d652bb981ab9c43541d2ce7287403faa3371ce9e3b0b";
                                                    readonly typeString: "literal_string \"        \"";
                                                };
                                                readonly value: "        ";
                                            }, {
                                                readonly baseExpression: {
                                                    readonly id: 158331;
                                                    readonly name: "array";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158300;
                                                    readonly src: "6085:5:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                                        readonly typeString: "uint256[] memory";
                                                    };
                                                };
                                                readonly id: 158333;
                                                readonly indexExpression: {
                                                    readonly id: 158332;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 158311;
                                                    readonly src: "6091:1:233";
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
                                                readonly src: "6085:8:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }, {
                                                readonly hexValue: "2c";
                                                readonly id: 158334;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "string";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6095:3:233";
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
                                                    readonly id: 158327;
                                                    readonly name: "console2";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 57002;
                                                    readonly src: "6060:8:233";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$57002_$";
                                                        readonly typeString: "type(library console2)";
                                                    };
                                                };
                                                readonly id: 158329;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "6069:3:233";
                                                readonly memberName: "log";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 50193;
                                                readonly src: "6060:12:233";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$__$";
                                                    readonly typeString: "function (string memory,uint256,string memory) pure";
                                                };
                                            };
                                            readonly id: 158335;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6060:39:233";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 158336;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6060:39:233";
                                    }];
                                };
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 158317;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 158314;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158311;
                                readonly src: "5979:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 158315;
                                    readonly name: "array";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158300;
                                    readonly src: "5983:5:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                        readonly typeString: "uint256[] memory";
                                    };
                                };
                                readonly id: 158316;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5989:6:233";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5983:12:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5979:16:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 158350;
                        readonly initializationExpression: {
                            readonly assignments: readonly [158311];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 158311;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "5972:1:233";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 158350;
                                readonly src: "5964:9:233";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 158310;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "5964:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 158313;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 158312;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5976:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "5964:13:233";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 158319;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: false;
                                readonly src: "5997:3:233";
                                readonly subExpression: {
                                    readonly id: 158318;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158311;
                                    readonly src: "5997:1:233";
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
                            readonly id: 158320;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "5997:3:233";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "5959:238:233";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "202020205d";
                                readonly id: 158354;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6219:7:233";
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
                                    readonly id: 158351;
                                    readonly name: "console2";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 57002;
                                    readonly src: "6206:8:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$57002_$";
                                        readonly typeString: "type(library console2)";
                                    };
                                };
                                readonly id: 158353;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6215:3:233";
                                readonly memberName: "log";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 49516;
                                readonly src: "6206:12:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory) pure";
                                };
                            };
                            readonly id: 158355;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6206:21:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 158356;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6206:21:233";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "";
                                readonly id: 158360;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6250:2:233";
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
                                    readonly id: 158357;
                                    readonly name: "console2";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 57002;
                                    readonly src: "6237:8:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_console2_$57002_$";
                                        readonly typeString: "type(library console2)";
                                    };
                                };
                                readonly id: 158359;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6246:3:233";
                                readonly memberName: "log";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 49516;
                                readonly src: "6237:12:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory) pure";
                                };
                            };
                            readonly id: 158361;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6237:16:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 158362;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6237:16:233";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "logArray";
                readonly nameLocation: "5821:8:233";
                readonly parameters: {
                    readonly id: 158301;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158297;
                        readonly mutability: "mutable";
                        readonly name: "prelude";
                        readonly nameLocation: "5853:7:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158364;
                        readonly src: "5839:21:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 158296;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5839:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158300;
                        readonly mutability: "mutable";
                        readonly name: "array";
                        readonly nameLocation: "5887:5:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158364;
                        readonly src: "5870:22:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 158298;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5870:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 158299;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5870:9:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5829:69:233";
                };
                readonly returnParameters: {
                    readonly id: 158302;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5913:0:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 158401;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6266:333:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158400;
                    readonly nodeType: "Block";
                    readonly src: "6403:196:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 158378;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 158376;
                                    readonly name: "minimum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158368;
                                    readonly src: "6421:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 158377;
                                    readonly name: "maximum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158370;
                                    readonly src: "6432:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "6421:18:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4c69623a206d696e203e206d6178";
                                readonly id: 158379;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6441:16:233";
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
                                readonly id: 158375;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "6413:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 158380;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6413:45:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 158381;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6413:45:233";
                    }, {
                        readonly assignments: readonly [158383];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158383;
                            readonly mutability: "mutable";
                            readonly name: "rangeSize";
                            readonly nameLocation: "6477:9:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158400;
                            readonly src: "6469:17:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 158382;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6469:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158389;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 158388;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 158386;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 158384;
                                    readonly name: "maximum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158370;
                                    readonly src: "6489:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 158385;
                                    readonly name: "minimum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158368;
                                    readonly src: "6499:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "6489:17:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 158387;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6509:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "6489:21:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6469:41:233";
                    }, {
                        readonly assignments: readonly [158391];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158391;
                            readonly mutability: "mutable";
                            readonly name: "modValue";
                            readonly nameLocation: "6528:8:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158400;
                            readonly src: "6520:16:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 158390;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6520:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158395;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 158394;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 158392;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158366;
                                readonly src: "6539:5:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "%";
                            readonly rightExpression: {
                                readonly id: 158393;
                                readonly name: "rangeSize";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158383;
                                readonly src: "6547:9:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6539:17:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6520:36:233";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 158398;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 158396;
                                readonly name: "modValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158391;
                                readonly src: "6574:8:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly id: 158397;
                                readonly name: "minimum";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158368;
                                readonly src: "6585:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6574:18:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 158374;
                        readonly id: 158399;
                        readonly nodeType: "Return";
                        readonly src: "6567:25:233";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "normalizeToRange";
                readonly nameLocation: "6275:16:233";
                readonly parameters: {
                    readonly id: 158371;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158366;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "6309:5:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158401;
                        readonly src: "6301:13:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158365;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6301:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158368;
                        readonly mutability: "mutable";
                        readonly name: "minimum";
                        readonly nameLocation: "6332:7:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158401;
                        readonly src: "6324:15:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158367;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6324:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158370;
                        readonly mutability: "mutable";
                        readonly name: "maximum";
                        readonly nameLocation: "6357:7:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158401;
                        readonly src: "6349:15:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158369;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6349:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6291:79:233";
                };
                readonly returnParameters: {
                    readonly id: 158374;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158373;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158401;
                        readonly src: "6394:7:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158372;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6394:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6393:9:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 158447;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6605:401:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158446;
                    readonly nodeType: "Block";
                    readonly src: "6738:268:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 158415;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 158413;
                                    readonly name: "minimum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158405;
                                    readonly src: "6756:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 158414;
                                    readonly name: "maximum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158407;
                                    readonly src: "6767:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6756:18:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4c69623a206d696e203e206d6178";
                                readonly id: 158416;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6776:16:233";
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
                                readonly id: 158412;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "6748:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 158417;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6748:45:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 158418;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6748:45:233";
                    }, {
                        readonly assignments: readonly [158420];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158420;
                            readonly mutability: "mutable";
                            readonly name: "rangeSize";
                            readonly nameLocation: "6811:9:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158446;
                            readonly src: "6804:16:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 158419;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6804:6:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158426;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 158425;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 158423;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 158421;
                                    readonly name: "maximum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158407;
                                    readonly src: "6823:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 158422;
                                    readonly name: "minimum";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158405;
                                    readonly src: "6833:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6823:17:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 158424;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6843:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "6823:21:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6804:40:233";
                    }, {
                        readonly assignments: readonly [158428];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158428;
                            readonly mutability: "mutable";
                            readonly name: "modValue";
                            readonly nameLocation: "6861:8:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158446;
                            readonly src: "6854:15:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 158427;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6854:6:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158432;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 158431;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 158429;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158403;
                                readonly src: "6872:5:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "%";
                            readonly rightExpression: {
                                readonly id: 158430;
                                readonly name: "rangeSize";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158420;
                                readonly src: "6880:9:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "6872:17:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6854:35:233";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 158435;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 158433;
                                readonly name: "modValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158428;
                                readonly src: "6904:8:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 158434;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6915:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "6904:12:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 158441;
                        readonly nodeType: "IfStatement";
                        readonly src: "6900:64:233";
                        readonly trueBody: {
                            readonly id: 158440;
                            readonly nodeType: "Block";
                            readonly src: "6918:46:233";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 158438;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 158436;
                                        readonly name: "modValue";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158428;
                                        readonly src: "6932:8:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 158437;
                                        readonly name: "rangeSize";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158420;
                                        readonly src: "6944:9:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "6932:21:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 158439;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "6932:21:233";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 158444;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 158442;
                                readonly name: "modValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158428;
                                readonly src: "6981:8:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly id: 158443;
                                readonly name: "minimum";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158405;
                                readonly src: "6992:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "6981:18:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 158411;
                        readonly id: 158445;
                        readonly nodeType: "Return";
                        readonly src: "6974:25:233";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "normalizeToRange";
                readonly nameLocation: "6614:16:233";
                readonly parameters: {
                    readonly id: 158408;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158403;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "6647:5:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158447;
                        readonly src: "6640:12:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 158402;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6640:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158405;
                        readonly mutability: "mutable";
                        readonly name: "minimum";
                        readonly nameLocation: "6669:7:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158447;
                        readonly src: "6662:14:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 158404;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6662:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158407;
                        readonly mutability: "mutable";
                        readonly name: "maximum";
                        readonly nameLocation: "6693:7:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158447;
                        readonly src: "6686:14:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 158406;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6686:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6630:76:233";
                };
                readonly returnParameters: {
                    readonly id: 158411;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158410;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158447;
                        readonly src: "6730:6:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 158409;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6730:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6729:8:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 158471;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7012:205:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158470;
                    readonly nodeType: "Block";
                    readonly src: "7130:87:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [158459];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158459;
                            readonly mutability: "mutable";
                            readonly name: "delta";
                            readonly nameLocation: "7148:5:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158470;
                            readonly src: "7140:13:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 158458;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7140:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158465;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 158462;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158449;
                                readonly src: "7170:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 158463;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158451;
                                readonly src: "7173:1:233";
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
                                    readonly id: 158460;
                                    readonly name: "stdMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35681;
                                    readonly src: "7156:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_stdMath_$35681_$";
                                        readonly typeString: "type(library stdMath)";
                                    };
                                };
                                readonly id: 158461;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7164:5:233";
                                readonly memberName: "delta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35592;
                                readonly src: "7156:13:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 158464;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7156:19:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7140:35:233";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 158468;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 158466;
                                readonly name: "delta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158459;
                                readonly src: "7192:5:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<=";
                            readonly rightExpression: {
                                readonly id: 158467;
                                readonly name: "tolerance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158453;
                                readonly src: "7201:9:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "7192:18:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 158457;
                        readonly id: 158469;
                        readonly nodeType: "Return";
                        readonly src: "7185:25:233";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "approxEq";
                readonly nameLocation: "7021:8:233";
                readonly parameters: {
                    readonly id: 158454;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158449;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "7047:1:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158471;
                        readonly src: "7039:9:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158448;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7039:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158451;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "7066:1:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158471;
                        readonly src: "7058:9:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158450;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7058:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158453;
                        readonly mutability: "mutable";
                        readonly name: "tolerance";
                        readonly nameLocation: "7085:9:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158471;
                        readonly src: "7077:17:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158452;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7077:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7029:71:233";
                };
                readonly returnParameters: {
                    readonly id: 158457;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158456;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158471;
                        readonly src: "7124:4:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 158455;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7124:4:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7123:6:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 158495;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7223:203:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158494;
                    readonly nodeType: "Block";
                    readonly src: "7339:87:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [158483];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 158483;
                            readonly mutability: "mutable";
                            readonly name: "delta";
                            readonly nameLocation: "7357:5:233";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 158494;
                            readonly src: "7349:13:233";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 158482;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7349:7:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 158489;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 158486;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158473;
                                readonly src: "7379:1:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 158487;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158475;
                                readonly src: "7382:1:233";
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
                                    readonly id: 158484;
                                    readonly name: "stdMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35681;
                                    readonly src: "7365:7:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_stdMath_$35681_$";
                                        readonly typeString: "type(library stdMath)";
                                    };
                                };
                                readonly id: 158485;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7373:5:233";
                                readonly memberName: "delta";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35628;
                                readonly src: "7365:13:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$";
                                    readonly typeString: "function (int256,int256) pure returns (uint256)";
                                };
                            };
                            readonly id: 158488;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7365:19:233";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7349:35:233";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 158492;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 158490;
                                readonly name: "delta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158483;
                                readonly src: "7401:5:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<=";
                            readonly rightExpression: {
                                readonly id: 158491;
                                readonly name: "tolerance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 158477;
                                readonly src: "7410:9:233";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "7401:18:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 158481;
                        readonly id: 158493;
                        readonly nodeType: "Return";
                        readonly src: "7394:25:233";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "approxEq";
                readonly nameLocation: "7232:8:233";
                readonly parameters: {
                    readonly id: 158478;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158473;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "7257:1:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158495;
                        readonly src: "7250:8:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 158472;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7250:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158475;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "7275:1:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158495;
                        readonly src: "7268:8:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 158474;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7268:6:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158477;
                        readonly mutability: "mutable";
                        readonly name: "tolerance";
                        readonly nameLocation: "7294:9:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158495;
                        readonly src: "7286:17:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 158476;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7286:7:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7240:69:233";
                };
                readonly returnParameters: {
                    readonly id: 158481;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158480;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158495;
                        readonly src: "7333:4:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 158479;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7333:4:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7332:6:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 158519;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7432:175:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158518;
                    readonly nodeType: "Block";
                    readonly src: "7505:102:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 158516;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 158507;
                                        readonly name: "b1";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158497;
                                        readonly src: "7561:2:233";
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
                                            readonly id: 158505;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7544:3:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 158506;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7548:12:233";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7544:16:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 158508;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7544:20:233";
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
                                    readonly id: 158504;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7534:9:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 158509;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7534:31:233";
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
                                        readonly id: 158513;
                                        readonly name: "b2";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158499;
                                        readonly src: "7596:2:233";
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
                                            readonly id: 158511;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7579:3:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 158512;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7583:12:233";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7579:16:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 158514;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7579:20:233";
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
                                    readonly id: 158510;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7569:9:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 158515;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7569:31:233";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "7534:66:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 158503;
                        readonly id: 158517;
                        readonly nodeType: "Return";
                        readonly src: "7515:85:233";
                    }];
                };
                readonly functionSelector: "cdb16840";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "eq";
                readonly nameLocation: "7441:2:233";
                readonly parameters: {
                    readonly id: 158500;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158497;
                        readonly mutability: "mutable";
                        readonly name: "b1";
                        readonly nameLocation: "7457:2:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158519;
                        readonly src: "7444:15:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 158496;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7444:5:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158499;
                        readonly mutability: "mutable";
                        readonly name: "b2";
                        readonly nameLocation: "7474:2:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158519;
                        readonly src: "7461:15:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 158498;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7461:5:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7443:34:233";
                };
                readonly returnParameters: {
                    readonly id: 158503;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158502;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158519;
                        readonly src: "7499:4:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 158501;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7499:4:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7498:6:233";
                };
                readonly scope: 158544;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 158543;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7613:176:233";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 158542;
                    readonly nodeType: "Block";
                    readonly src: "7687:102:233";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                            readonly id: 158540;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 158531;
                                        readonly name: "b1";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158521;
                                        readonly src: "7743:2:233";
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
                                            readonly id: 158529;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7726:3:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 158530;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7730:12:233";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7726:16:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 158532;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7726:20:233";
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
                                    readonly id: 158528;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7716:9:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 158533;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7716:31:233";
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
                                        readonly id: 158537;
                                        readonly name: "b2";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 158523;
                                        readonly src: "7778:2:233";
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
                                            readonly id: 158535;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7761:3:233";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 158536;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7765:12:233";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7761:16:233";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 158538;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7761:20:233";
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
                                    readonly id: 158534;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7751:9:233";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 158539;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7751:31:233";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "7716:66:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 158527;
                        readonly id: 158541;
                        readonly nodeType: "Return";
                        readonly src: "7697:85:233";
                    }];
                };
                readonly functionSelector: "d37a20ba";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "neq";
                readonly nameLocation: "7622:3:233";
                readonly parameters: {
                    readonly id: 158524;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158521;
                        readonly mutability: "mutable";
                        readonly name: "b1";
                        readonly nameLocation: "7639:2:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158543;
                        readonly src: "7626:15:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 158520;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7626:5:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 158523;
                        readonly mutability: "mutable";
                        readonly name: "b2";
                        readonly nameLocation: "7656:2:233";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158543;
                        readonly src: "7643:15:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 158522;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7643:5:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7625:34:233";
                };
                readonly returnParameters: {
                    readonly id: 158527;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 158526;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 158543;
                        readonly src: "7681:4:233";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 158525;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7681:4:233";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7680:6:233";
                };
                readonly scope: 158544;
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
            readonly linearizedBaseContracts: readonly [158544];
            readonly name: "Lib";
            readonly nameLocation: "220:3:233";
            readonly scope: 158545;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 233;
};
//# sourceMappingURL=Lib.d.ts.map