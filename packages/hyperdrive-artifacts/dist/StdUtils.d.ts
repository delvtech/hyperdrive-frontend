export declare const StdUtils: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdUtils.sol\":\"StdUtils\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [];
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
                readonly "lib/forge-std/src/StdUtils.sol": "StdUtils";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/StdUtils.sol": {
                readonly keccak256: "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1";
                readonly urls: readonly ["bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140", "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/Vm.sol": {
                readonly keccak256: "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4";
                readonly urls: readonly ["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241", "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/interfaces/IMulticall3.sol": {
                readonly keccak256: "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a";
                readonly urls: readonly ["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0", "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/StdUtils.sol";
        readonly id: 39547;
        readonly exportedSymbols: {
            readonly IMulticall3: readonly [57486];
            readonly StdUtils: readonly [39546];
            readonly VmSafe: readonly [40662];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:10492:156";
        readonly nodes: readonly [{
            readonly id: 38700;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:156";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 38701;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:156";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 38703;
            readonly nodeType: "ImportDirective";
            readonly src: "100:57:156";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/interfaces/IMulticall3.sol";
            readonly file: "./interfaces/IMulticall3.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39547;
            readonly sourceUnit: 57487;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 38702;
                    readonly name: "IMulticall3";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 57486;
                    readonly src: "108:11:156";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 38705;
            readonly nodeType: "ImportDirective";
            readonly src: "158:32:156";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39547;
            readonly sourceUnit: 41135;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 38704;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40662;
                    readonly src: "166:6:156";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39546;
            readonly nodeType: "ContractDefinition";
            readonly src: "192:10331:156";
            readonly nodes: readonly [{
                readonly id: 38711;
                readonly nodeType: "VariableDeclaration";
                readonly src: "435:96:156";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "multicall";
                readonly nameLocation: "464:9:156";
                readonly scope: 39546;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_IMulticall3_$57486";
                    readonly typeString: "contract IMulticall3";
                };
                readonly typeName: {
                    readonly id: 38707;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 38706;
                        readonly name: "IMulticall3";
                        readonly nameLocations: readonly ["435:11:156"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 57486;
                        readonly src: "435:11:156";
                    };
                    readonly referencedDeclaration: 57486;
                    readonly src: "435:11:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IMulticall3_$57486";
                        readonly typeString: "contract IMulticall3";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly hexValue: "307863413131626465303539373762333633313136373032383836326245326131373339373643413131";
                        readonly id: 38709;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "488:42:156";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly value: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    }];
                    readonly expression: {
                        readonly argumentTypes: readonly [{
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        }];
                        readonly id: 38708;
                        readonly name: "IMulticall3";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 57486;
                        readonly src: "476:11:156";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_IMulticall3_$57486_$";
                            readonly typeString: "type(contract IMulticall3)";
                        };
                    };
                    readonly id: 38710;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "476:55:156";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IMulticall3_$57486";
                        readonly typeString: "contract IMulticall3";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 38728;
                readonly nodeType: "VariableDeclaration";
                readonly src: "537:92:156";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "561:2:156";
                readonly scope: 39546;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 38713;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 38712;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["537:6:156"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 40662;
                        readonly src: "537:6:156";
                    };
                    readonly referencedDeclaration: 40662;
                    readonly src: "537:6:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "6865766d20636865617420636f6465";
                                        readonly id: 38722;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "607:17:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d";
                                            readonly typeString: "literal_string \"hevm cheat code\"";
                                        };
                                        readonly value: "hevm cheat code";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d";
                                            readonly typeString: "literal_string \"hevm cheat code\"";
                                        }];
                                        readonly id: 38721;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "597:9:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 38723;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "597:28:156";
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
                                    readonly id: 38720;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "589:7:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 38719;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "589:7:156";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 38724;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "589:37:156";
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
                                readonly id: 38718;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "581:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 38717;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "581:7:156";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 38725;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "581:46:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint160";
                                readonly typeString: "uint160";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_uint160";
                                readonly typeString: "uint160";
                            }];
                            readonly id: 38716;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "573:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 38715;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "573:7:156";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 38726;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "573:55:156";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }];
                    readonly expression: {
                        readonly argumentTypes: readonly [{
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        }];
                        readonly id: 38714;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 40662;
                        readonly src: "566:6:156";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$40662_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 38727;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "566:63:156";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 38731;
                readonly nodeType: "VariableDeclaration";
                readonly src: "635:86:156";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CONSOLE2_ADDRESS";
                readonly nameLocation: "660:16:156";
                readonly scope: 39546;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 38729;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "635:7:156";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307830303030303030303030303030303030303036333646366537333646366336353265366336663637";
                    readonly id: 38730;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "679:42:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x000000000000000000636F6e736F6c652e6c6f67";
                };
                readonly visibility: "private";
            }, {
                readonly id: 38734;
                readonly nodeType: "VariableDeclaration";
                readonly src: "727:127:156";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INT256_MIN_ABS";
                readonly nameLocation: "752:14:156";
                readonly scope: 39546;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 38732;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "727:7:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638";
                    readonly id: 38733;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "777:77:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1";
                        readonly typeString: "int_const 5789...(69 digits omitted)...9968";
                    };
                    readonly value: "57896044618658097711785492504343953926634992332820282019728792003956564819968";
                };
                readonly visibility: "private";
            }, {
                readonly id: 38737;
                readonly nodeType: "VariableDeclaration";
                readonly src: "860:129:156";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SECP256K1_ORDER";
                readonly nameLocation: "885:15:156";
                readonly scope: 39546;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 38735;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "860:7:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313135373932303839323337333136313935343233353730393835303038363837393037383532383337353634323739303734393034333832363035313633313431353138313631343934333337";
                    readonly id: 38736;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "911:78:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907852837564279074904382605163141518161494337_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...4337";
                    };
                    readonly value: "115792089237316195423570985008687907852837564279074904382605163141518161494337";
                };
                readonly visibility: "private";
            }, {
                readonly id: 38740;
                readonly nodeType: "VariableDeclaration";
                readonly src: "995:125:156";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UINT256_MAX";
                readonly nameLocation: "1020:11:156";
                readonly scope: 39546;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 38738;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "995:7:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313135373932303839323337333136313935343233353730393835303038363837393037383533323639393834363635363430353634303339343537353834303037393133313239363339393335";
                    readonly id: 38739;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1042:78:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                    readonly value: "115792089237316195423570985008687907853269984665640564039457584007913129639935";
                };
                readonly visibility: "private";
            }, {
                readonly id: 38743;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1239:85:156";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CREATE2_FACTORY";
                readonly nameLocation: "1264:15:156";
                readonly scope: 39546;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 38741;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1239:7:156";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307834653539623434383437623337393537383538383932306341373846624632366330423439353643";
                    readonly id: 38742;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1282:42:156";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x4e59b44847b379578588920cA78FbF26c0B4956C";
                };
                readonly visibility: "private";
            }, {
                readonly id: 38873;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1546:1263:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38872;
                    readonly nodeType: "Block";
                    readonly src: "1646:1163:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 38757;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38755;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38747;
                                    readonly src: "1664:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 38756;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38749;
                                    readonly src: "1671:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "1664:10:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5374645574696c7320626f756e642875696e743235362c75696e743235362c75696e74323536293a204d6178206973206c657373207468616e206d696e2e";
                                readonly id: 38758;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1676:64:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_16c21f4eccdbbd49e5dc1331f271d929c25cafaf25207892b67e15553a16c5f2";
                                    readonly typeString: "literal_string \"StdUtils bound(uint256,uint256,uint256): Max is less than min.\"";
                                };
                                readonly value: "StdUtils bound(uint256,uint256,uint256): Max is less than min.";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_16c21f4eccdbbd49e5dc1331f271d929c25cafaf25207892b67e15553a16c5f2";
                                    readonly typeString: "literal_string \"StdUtils bound(uint256,uint256,uint256): Max is less than min.\"";
                                }];
                                readonly id: 38754;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1656:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 38759;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1656:85:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 38760;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1656:85:156";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 38767;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 38763;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38761;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38745;
                                    readonly src: "1970:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">=";
                                readonly rightExpression: {
                                    readonly id: 38762;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38747;
                                    readonly src: "1975:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "1970:8:156";
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
                                readonly id: 38766;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38764;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38745;
                                    readonly src: "1982:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 38765;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38749;
                                    readonly src: "1987:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "1982:8:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "1970:20:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 38770;
                        readonly nodeType: "IfStatement";
                        readonly src: "1966:34:156";
                        readonly trueBody: {
                            readonly expression: {
                                readonly id: 38768;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38745;
                                readonly src: "1999:1:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly functionReturnParameters: 38753;
                            readonly id: 38769;
                            readonly nodeType: "Return";
                            readonly src: "1992:8:156";
                        };
                    }, {
                        readonly assignments: readonly [38772];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 38772;
                            readonly mutability: "mutable";
                            readonly name: "size";
                            readonly nameLocation: "2019:4:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 38872;
                            readonly src: "2011:12:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 38771;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2011:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 38778;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 38777;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 38775;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38773;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38749;
                                    readonly src: "2026:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 38774;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38747;
                                    readonly src: "2032:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2026:9:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 38776;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2038:1:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "2026:13:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2011:28:156";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 38785;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 38781;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38779;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38745;
                                    readonly src: "2229:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly hexValue: "33";
                                    readonly id: 38780;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "2234:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_3_by_1";
                                        readonly typeString: "int_const 3";
                                    };
                                    readonly value: "3";
                                };
                                readonly src: "2229:6:156";
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
                                readonly id: 38784;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38782;
                                    readonly name: "size";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38772;
                                    readonly src: "2239:4:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 38783;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38745;
                                    readonly src: "2246:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2239:8:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "2229:18:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 38790;
                        readonly nodeType: "IfStatement";
                        readonly src: "2225:38:156";
                        readonly trueBody: {
                            readonly expression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 38788;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38786;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38747;
                                    readonly src: "2256:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 38787;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38745;
                                    readonly src: "2262:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2256:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly functionReturnParameters: 38753;
                            readonly id: 38789;
                            readonly nodeType: "Return";
                            readonly src: "2249:14:156";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 38801;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 38795;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38791;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38745;
                                    readonly src: "2277:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">=";
                                readonly rightExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38794;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 38792;
                                        readonly name: "UINT256_MAX";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38740;
                                        readonly src: "2282:11:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "33";
                                        readonly id: 38793;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2296:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_3_by_1";
                                            readonly typeString: "int_const 3";
                                        };
                                        readonly value: "3";
                                    };
                                    readonly src: "2282:15:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2277:20:156";
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
                                readonly id: 38800;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38796;
                                    readonly name: "size";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38772;
                                    readonly src: "2301:4:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38799;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 38797;
                                        readonly name: "UINT256_MAX";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38740;
                                        readonly src: "2308:11:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 38798;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38745;
                                        readonly src: "2322:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2308:15:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2301:22:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "2277:46:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 38809;
                        readonly nodeType: "IfStatement";
                        readonly src: "2273:82:156";
                        readonly trueBody: {
                            readonly expression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 38807;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38802;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38749;
                                    readonly src: "2332:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly components: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 38805;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 38803;
                                            readonly name: "UINT256_MAX";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38740;
                                            readonly src: "2339:11:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 38804;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38745;
                                            readonly src: "2353:1:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2339:15:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 38806;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "2338:17:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2332:23:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly functionReturnParameters: 38753;
                            readonly id: 38808;
                            readonly nodeType: "Return";
                            readonly src: "2325:30:156";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 38812;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 38810;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38745;
                                readonly src: "2455:1:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 38811;
                                readonly name: "max";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38749;
                                readonly src: "2459:3:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2455:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 38842;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38840;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38745;
                                    readonly src: "2634:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 38841;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38747;
                                    readonly src: "2638:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2634:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 38870;
                            readonly nodeType: "IfStatement";
                            readonly src: "2630:173:156";
                            readonly trueBody: {
                                readonly id: 38869;
                                readonly nodeType: "Block";
                                readonly src: "2643:160:156";
                                readonly statements: readonly [{
                                    readonly assignments: readonly [38844];
                                    readonly declarations: readonly [{
                                        readonly constant: false;
                                        readonly id: 38844;
                                        readonly mutability: "mutable";
                                        readonly name: "diff";
                                        readonly nameLocation: "2665:4:156";
                                        readonly nodeType: "VariableDeclaration";
                                        readonly scope: 38869;
                                        readonly src: "2657:12:156";
                                        readonly stateVariable: false;
                                        readonly storageLocation: "default";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly typeName: {
                                            readonly id: 38843;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2657:7:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly visibility: "internal";
                                    }];
                                    readonly id: 38848;
                                    readonly initialValue: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 38847;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 38845;
                                            readonly name: "min";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38747;
                                            readonly src: "2672:3:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 38846;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38745;
                                            readonly src: "2678:1:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2672:7:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "VariableDeclarationStatement";
                                    readonly src: "2657:22:156";
                                }, {
                                    readonly assignments: readonly [38850];
                                    readonly declarations: readonly [{
                                        readonly constant: false;
                                        readonly id: 38850;
                                        readonly mutability: "mutable";
                                        readonly name: "rem";
                                        readonly nameLocation: "2701:3:156";
                                        readonly nodeType: "VariableDeclaration";
                                        readonly scope: 38869;
                                        readonly src: "2693:11:156";
                                        readonly stateVariable: false;
                                        readonly storageLocation: "default";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly typeName: {
                                            readonly id: 38849;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2693:7:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly visibility: "internal";
                                    }];
                                    readonly id: 38854;
                                    readonly initialValue: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 38853;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 38851;
                                            readonly name: "diff";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38844;
                                            readonly src: "2707:4:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "%";
                                        readonly rightExpression: {
                                            readonly id: 38852;
                                            readonly name: "size";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38772;
                                            readonly src: "2714:4:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2707:11:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "VariableDeclarationStatement";
                                    readonly src: "2693:25:156";
                                }, {
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 38857;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 38855;
                                            readonly name: "rem";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38850;
                                            readonly src: "2736:3:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 38856;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "2743:1:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "2736:8:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 38860;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "2732:24:156";
                                    readonly trueBody: {
                                        readonly expression: {
                                            readonly id: 38858;
                                            readonly name: "min";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38747;
                                            readonly src: "2753:3:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly functionReturnParameters: 38753;
                                        readonly id: 38859;
                                        readonly nodeType: "Return";
                                        readonly src: "2746:10:156";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 38867;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 38861;
                                            readonly name: "result";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38752;
                                            readonly src: "2770:6:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 38866;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 38864;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly id: 38862;
                                                    readonly name: "max";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 38749;
                                                    readonly src: "2779:3:156";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "-";
                                                readonly rightExpression: {
                                                    readonly id: 38863;
                                                    readonly name: "rem";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 38850;
                                                    readonly src: "2785:3:156";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly src: "2779:9:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "+";
                                            readonly rightExpression: {
                                                readonly hexValue: "31";
                                                readonly id: 38865;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "2791:1:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_1_by_1";
                                                    readonly typeString: "int_const 1";
                                                };
                                                readonly value: "1";
                                            };
                                            readonly src: "2779:13:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2770:22:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 38868;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "2770:22:156";
                                }];
                            };
                        };
                        readonly id: 38871;
                        readonly nodeType: "IfStatement";
                        readonly src: "2451:352:156";
                        readonly trueBody: {
                            readonly id: 38839;
                            readonly nodeType: "Block";
                            readonly src: "2464:160:156";
                            readonly statements: readonly [{
                                readonly assignments: readonly [38814];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 38814;
                                    readonly mutability: "mutable";
                                    readonly name: "diff";
                                    readonly nameLocation: "2486:4:156";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 38839;
                                    readonly src: "2478:12:156";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 38813;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2478:7:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 38818;
                                readonly initialValue: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38817;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 38815;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38745;
                                        readonly src: "2493:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 38816;
                                        readonly name: "max";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38749;
                                        readonly src: "2497:3:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2493:7:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "2478:22:156";
                            }, {
                                readonly assignments: readonly [38820];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 38820;
                                    readonly mutability: "mutable";
                                    readonly name: "rem";
                                    readonly nameLocation: "2522:3:156";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 38839;
                                    readonly src: "2514:11:156";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 38819;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2514:7:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 38824;
                                readonly initialValue: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38823;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 38821;
                                        readonly name: "diff";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38814;
                                        readonly src: "2528:4:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "%";
                                    readonly rightExpression: {
                                        readonly id: 38822;
                                        readonly name: "size";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38772;
                                        readonly src: "2535:4:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2528:11:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "2514:25:156";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38827;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 38825;
                                        readonly name: "rem";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38820;
                                        readonly src: "2557:3:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "30";
                                        readonly id: 38826;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2564:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "2557:8:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 38830;
                                readonly nodeType: "IfStatement";
                                readonly src: "2553:24:156";
                                readonly trueBody: {
                                    readonly expression: {
                                        readonly id: 38828;
                                        readonly name: "max";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38749;
                                        readonly src: "2574:3:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly functionReturnParameters: 38753;
                                    readonly id: 38829;
                                    readonly nodeType: "Return";
                                    readonly src: "2567:10:156";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 38837;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 38831;
                                        readonly name: "result";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38752;
                                        readonly src: "2591:6:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 38836;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 38834;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 38832;
                                                readonly name: "min";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 38747;
                                                readonly src: "2600:3:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "+";
                                            readonly rightExpression: {
                                                readonly id: 38833;
                                                readonly name: "rem";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 38820;
                                                readonly src: "2606:3:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "2600:9:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly hexValue: "31";
                                            readonly id: 38835;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "2612:1:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1_by_1";
                                                readonly typeString: "int_const 1";
                                            };
                                            readonly value: "1";
                                        };
                                        readonly src: "2600:13:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2591:22:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 38838;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2591:22:156";
                            }];
                        };
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_bound";
                readonly nameLocation: "1555:6:156";
                readonly parameters: {
                    readonly id: 38750;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38745;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1570:1:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38873;
                        readonly src: "1562:9:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38744;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1562:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 38747;
                        readonly mutability: "mutable";
                        readonly name: "min";
                        readonly nameLocation: "1581:3:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38873;
                        readonly src: "1573:11:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38746;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1573:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 38749;
                        readonly mutability: "mutable";
                        readonly name: "max";
                        readonly nameLocation: "1594:3:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38873;
                        readonly src: "1586:11:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38748;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1586:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1561:37:156";
                };
                readonly returnParameters: {
                    readonly id: 38753;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38752;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "1638:6:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38873;
                        readonly src: "1630:14:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38751;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1630:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1629:16:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 38898;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2815:190:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38897;
                    readonly nodeType: "Block";
                    readonly src: "2914:91:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 38890;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 38884;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38882;
                                readonly src: "2924:6:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 38886;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38875;
                                    readonly src: "2940:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 38887;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38877;
                                    readonly src: "2943:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 38888;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38879;
                                    readonly src: "2948:3:156";
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
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 38885;
                                    readonly name: "_bound";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [38873, 39020];
                                    readonly referencedDeclaration: 38873;
                                    readonly src: "2933:6:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 38889;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2933:19:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2924:28:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 38891;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2924:28:156";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "426f756e6420526573756c74";
                                readonly id: 38893;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2975:14:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_237b64d156191d73cf174e4433495e27feb7a7083e87d06235be591548fb5c52";
                                    readonly typeString: "literal_string \"Bound Result\"";
                                };
                                readonly value: "Bound Result";
                            }, {
                                readonly id: 38894;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38882;
                                readonly src: "2991:6:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_237b64d156191d73cf174e4433495e27feb7a7083e87d06235be591548fb5c52";
                                    readonly typeString: "literal_string \"Bound Result\"";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 38892;
                                readonly name: "console2_log";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [39520, 39545];
                                readonly referencedDeclaration: 39520;
                                readonly src: "2962:12:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (string memory,uint256) view";
                                };
                            };
                            readonly id: 38895;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2962:36:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 38896;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2962:36:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bound";
                readonly nameLocation: "2824:5:156";
                readonly parameters: {
                    readonly id: 38880;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38875;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2838:1:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38898;
                        readonly src: "2830:9:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38874;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2830:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 38877;
                        readonly mutability: "mutable";
                        readonly name: "min";
                        readonly nameLocation: "2849:3:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38898;
                        readonly src: "2841:11:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38876;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2841:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 38879;
                        readonly mutability: "mutable";
                        readonly name: "max";
                        readonly nameLocation: "2862:3:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38898;
                        readonly src: "2854:11:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38878;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2854:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2829:37:156";
                };
                readonly returnParameters: {
                    readonly id: 38883;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38882;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "2906:6:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38898;
                        readonly src: "2898:14:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38881;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2898:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2897:16:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 39020;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3011:1145:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39019;
                    readonly nodeType: "Block";
                    readonly src: "3107:1049:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 38912;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38910;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38902;
                                    readonly src: "3125:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 38911;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38904;
                                    readonly src: "3132:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "3125:10:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5374645574696c7320626f756e6428696e743235362c696e743235362c696e74323536293a204d6178206973206c657373207468616e206d696e2e";
                                readonly id: 38913;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3137:61:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_0fd736be0f0596d130ab62399a2ecc4855db1de6a3b01be590df45aa0de73247";
                                    readonly typeString: "literal_string \"StdUtils bound(int256,int256,int256): Max is less than min.\"";
                                };
                                readonly value: "StdUtils bound(int256,int256,int256): Max is less than min.";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_0fd736be0f0596d130ab62399a2ecc4855db1de6a3b01be590df45aa0de73247";
                                    readonly typeString: "literal_string \"StdUtils bound(int256,int256,int256): Max is less than min.\"";
                                }];
                                readonly id: 38909;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3117:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 38914;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3117:82:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 38915;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3117:82:156";
                    }, {
                        readonly assignments: readonly [38917];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 38917;
                            readonly mutability: "mutable";
                            readonly name: "_x";
                            readonly nameLocation: "3635:2:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39019;
                            readonly src: "3627:10:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 38916;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3627:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 38939;
                        readonly initialValue: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 38920;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38918;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38900;
                                    readonly src: "3640:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 38919;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3644:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3640:5:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38936;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [{
                                            readonly id: 38933;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38900;
                                            readonly src: "3694:1:156";
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
                                            readonly id: 38932;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3686:7:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 38931;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3686:7:156";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 38934;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3686:10:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 38935;
                                        readonly name: "INT256_MIN_ABS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38734;
                                        readonly src: "3699:14:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3686:27:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 38937;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3685:29:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 38938;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "3640:74:156";
                            readonly trueExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38929;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 38927;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 38921;
                                            readonly name: "INT256_MIN_ABS";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38734;
                                            readonly src: "3649:14:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 38926;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "UnaryOperation";
                                            readonly operator: "~";
                                            readonly prefix: true;
                                            readonly src: "3666:11:156";
                                            readonly subExpression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 38924;
                                                    readonly name: "x";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 38900;
                                                    readonly src: "3675:1:156";
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
                                                    readonly id: 38923;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3667:7:156";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 38922;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3667:7:156";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 38925;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3667:10:156";
                                                readonly tryCall: false;
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
                                        readonly src: "3649:28:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 38928;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3680:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "3649:32:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 38930;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3648:34:156";
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
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3627:87:156";
                    }, {
                        readonly assignments: readonly [38941];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 38941;
                            readonly mutability: "mutable";
                            readonly name: "_min";
                            readonly nameLocation: "3732:4:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39019;
                            readonly src: "3724:12:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 38940;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3724:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 38963;
                        readonly initialValue: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 38944;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38942;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38902;
                                    readonly src: "3739:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 38943;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3745:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3739:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38960;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [{
                                            readonly id: 38957;
                                            readonly name: "min";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38902;
                                            readonly src: "3797:3:156";
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
                                            readonly id: 38956;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3789:7:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 38955;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3789:7:156";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 38958;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3789:12:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 38959;
                                        readonly name: "INT256_MIN_ABS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38734;
                                        readonly src: "3804:14:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3789:29:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 38961;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3788:31:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 38962;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "3739:80:156";
                            readonly trueExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38953;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 38951;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 38945;
                                            readonly name: "INT256_MIN_ABS";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38734;
                                            readonly src: "3750:14:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 38950;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "UnaryOperation";
                                            readonly operator: "~";
                                            readonly prefix: true;
                                            readonly src: "3767:13:156";
                                            readonly subExpression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 38948;
                                                    readonly name: "min";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 38902;
                                                    readonly src: "3776:3:156";
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
                                                    readonly id: 38947;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3768:7:156";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 38946;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3768:7:156";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 38949;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3768:12:156";
                                                readonly tryCall: false;
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
                                        readonly src: "3750:30:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 38952;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3783:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "3750:34:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 38954;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3749:36:156";
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
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3724:95:156";
                    }, {
                        readonly assignments: readonly [38965];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 38965;
                            readonly mutability: "mutable";
                            readonly name: "_max";
                            readonly nameLocation: "3837:4:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39019;
                            readonly src: "3829:12:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 38964;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3829:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 38987;
                        readonly initialValue: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 38968;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 38966;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38904;
                                    readonly src: "3844:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 38967;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3850:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3844:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38984;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [{
                                            readonly id: 38981;
                                            readonly name: "max";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38904;
                                            readonly src: "3902:3:156";
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
                                            readonly id: 38980;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3894:7:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 38979;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3894:7:156";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 38982;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3894:12:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 38983;
                                        readonly name: "INT256_MIN_ABS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38734;
                                        readonly src: "3909:14:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3894:29:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 38985;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3893:31:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 38986;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "3844:80:156";
                            readonly trueExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38977;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 38975;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 38969;
                                            readonly name: "INT256_MIN_ABS";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38734;
                                            readonly src: "3855:14:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 38974;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "UnaryOperation";
                                            readonly operator: "~";
                                            readonly prefix: true;
                                            readonly src: "3872:13:156";
                                            readonly subExpression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 38972;
                                                    readonly name: "max";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 38904;
                                                    readonly src: "3881:3:156";
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
                                                    readonly id: 38971;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3873:7:156";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 38970;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3873:7:156";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 38973;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3873:12:156";
                                                readonly tryCall: false;
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
                                        readonly src: "3855:30:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 38976;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3888:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "3855:34:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 38978;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3854:36:156";
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
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3829:95:156";
                    }, {
                        readonly assignments: readonly [38989];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 38989;
                            readonly mutability: "mutable";
                            readonly name: "y";
                            readonly nameLocation: "3943:1:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39019;
                            readonly src: "3935:9:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 38988;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3935:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 38995;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 38991;
                                readonly name: "_x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38917;
                                readonly src: "3954:2:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 38992;
                                readonly name: "_min";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38941;
                                readonly src: "3958:4:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 38993;
                                readonly name: "_max";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38965;
                                readonly src: "3964:4:156";
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
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 38990;
                                readonly name: "_bound";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38873, 39020];
                                readonly referencedDeclaration: 38873;
                                readonly src: "3947:6:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 38994;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3947:22:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3935:34:156";
                    }, {
                        readonly expression: {
                            readonly id: 39017;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 38996;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38907;
                                readonly src: "4057:6:156";
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
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 38999;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 38997;
                                        readonly name: "y";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38989;
                                        readonly src: "4066:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 38998;
                                        readonly name: "INT256_MIN_ABS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38734;
                                        readonly src: "4070:14:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4066:18:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 39014;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 39012;
                                            readonly name: "y";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38989;
                                            readonly src: "4130:1:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 39013;
                                            readonly name: "INT256_MIN_ABS";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 38734;
                                            readonly src: "4134:14:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "4130:18:156";
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
                                        readonly id: 39011;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4123:6:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_int256_$";
                                            readonly typeString: "type(int256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 39010;
                                            readonly name: "int256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4123:6:156";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 39015;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4123:26:156";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 39016;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "4066:83:156";
                                readonly trueExpression: {
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 39008;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 39006;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "UnaryOperation";
                                            readonly operator: "~";
                                            readonly prefix: true;
                                            readonly src: "4094:21:156";
                                            readonly subExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 39004;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 39002;
                                                        readonly name: "INT256_MIN_ABS";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 38734;
                                                        readonly src: "4096:14:156";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly id: 39003;
                                                        readonly name: "y";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 38989;
                                                        readonly src: "4113:1:156";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly src: "4096:18:156";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }];
                                                readonly id: 39005;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "4095:20:156";
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
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "+";
                                        readonly rightExpression: {
                                            readonly hexValue: "31";
                                            readonly id: 39007;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "4118:1:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1_by_1";
                                                readonly typeString: "int_const 1";
                                            };
                                            readonly value: "1";
                                        };
                                        readonly src: "4094:25:156";
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
                                        readonly id: 39001;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4087:6:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_int256_$";
                                            readonly typeString: "type(int256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 39000;
                                            readonly name: "int256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4087:6:156";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 39009;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4087:33:156";
                                    readonly tryCall: false;
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
                            readonly src: "4057:92:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 39018;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4057:92:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_bound";
                readonly nameLocation: "3020:6:156";
                readonly parameters: {
                    readonly id: 38905;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38900;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "3034:1:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39020;
                        readonly src: "3027:8:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38899;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3027:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 38902;
                        readonly mutability: "mutable";
                        readonly name: "min";
                        readonly nameLocation: "3044:3:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39020;
                        readonly src: "3037:10:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38901;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3037:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 38904;
                        readonly mutability: "mutable";
                        readonly name: "max";
                        readonly nameLocation: "3056:3:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39020;
                        readonly src: "3049:10:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38903;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3049:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3026:34:156";
                };
                readonly returnParameters: {
                    readonly id: 38908;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38907;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "3099:6:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39020;
                        readonly src: "3092:13:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38906;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3092:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3091:15:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 39048;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4162:199:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39047;
                    readonly nodeType: "Block";
                    readonly src: "4257:104:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 39037;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 39031;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39029;
                                readonly src: "4267:6:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 39033;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39022;
                                    readonly src: "4283:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly id: 39034;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39024;
                                    readonly src: "4286:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly id: 39035;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39026;
                                    readonly src: "4291:3:156";
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
                                    }, {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly id: 39032;
                                    readonly name: "_bound";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [38873, 39020];
                                    readonly referencedDeclaration: 39020;
                                    readonly src: "4276:6:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_int256_$_t_int256_$_t_int256_$returns$_t_int256_$";
                                        readonly typeString: "function (int256,int256,int256) pure returns (int256)";
                                    };
                                };
                                readonly id: 39036;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4276:19:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "4267:28:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 39038;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4267:28:156";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "426f756e6420726573756c74";
                                readonly id: 39040;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4318:14:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_81387530263afdcc351da6c89e6a10d49583b5beb1fecaddd0371443f1cd026f";
                                    readonly typeString: "literal_string \"Bound result\"";
                                };
                                readonly value: "Bound result";
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 39043;
                                    readonly name: "result";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39029;
                                    readonly src: "4346:6:156";
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
                                    readonly expression: {
                                        readonly id: 39041;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38728;
                                        readonly src: "4334:2:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 39042;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4337:8:156";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40201;
                                    readonly src: "4334:11:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 39044;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4334:19:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_81387530263afdcc351da6c89e6a10d49583b5beb1fecaddd0371443f1cd026f";
                                    readonly typeString: "literal_string \"Bound result\"";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 39039;
                                readonly name: "console2_log";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [39520, 39545];
                                readonly referencedDeclaration: 39545;
                                readonly src: "4305:12:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory) view";
                                };
                            };
                            readonly id: 39045;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4305:49:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 39046;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4305:49:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bound";
                readonly nameLocation: "4171:5:156";
                readonly parameters: {
                    readonly id: 39027;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39022;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "4184:1:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39048;
                        readonly src: "4177:8:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 39021;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4177:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39024;
                        readonly mutability: "mutable";
                        readonly name: "min";
                        readonly nameLocation: "4194:3:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39048;
                        readonly src: "4187:10:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 39023;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4187:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39026;
                        readonly mutability: "mutable";
                        readonly name: "max";
                        readonly nameLocation: "4206:3:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39048;
                        readonly src: "4199:10:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 39025;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4199:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4176:34:156";
                };
                readonly returnParameters: {
                    readonly id: 39030;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39029;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "4249:6:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39048;
                        readonly src: "4242:13:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 39028;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4242:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4241:15:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 39066;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4367:160:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39065;
                    readonly nodeType: "Block";
                    readonly src: "4459:68:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 39063;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 39055;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39053;
                                readonly src: "4469:6:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 39057;
                                    readonly name: "privateKey";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39050;
                                    readonly src: "4485:10:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly hexValue: "31";
                                    readonly id: 39058;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4497:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                }, {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 39061;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 39059;
                                        readonly name: "SECP256K1_ORDER";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38737;
                                        readonly src: "4500:15:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 39060;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4518:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "4500:19:156";
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
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 39056;
                                    readonly name: "_bound";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [38873, 39020];
                                    readonly referencedDeclaration: 38873;
                                    readonly src: "4478:6:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 39062;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4478:42:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "4469:51:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 39064;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4469:51:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "boundPrivateKey";
                readonly nameLocation: "4376:15:156";
                readonly parameters: {
                    readonly id: 39051;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39050;
                        readonly mutability: "mutable";
                        readonly name: "privateKey";
                        readonly nameLocation: "4400:10:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39066;
                        readonly src: "4392:18:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 39049;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4392:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4391:20:156";
                };
                readonly returnParameters: {
                    readonly id: 39054;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39053;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "4451:6:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39066;
                        readonly src: "4443:14:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 39052;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4443:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4442:16:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 39100;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4533:259:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39099;
                    readonly nodeType: "Block";
                    readonly src: "4610:182:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 39077;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 39074;
                                        readonly name: "b";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 39068;
                                        readonly src: "4628:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 39075;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4630:6:156";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4628:8:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly hexValue: "3332";
                                    readonly id: 39076;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4640:2:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_32_by_1";
                                        readonly typeString: "int_const 32";
                                    };
                                    readonly value: "32";
                                };
                                readonly src: "4628:14:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5374645574696c73206279746573546f55696e74286279746573293a204279746573206c656e67746820657863656564732033322e";
                                readonly id: 39078;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4644:55:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_15bc16f8ce72c26d4fbf91f28e31f7cbe900e6386b04cf90f353bff0f5b2da88";
                                    readonly typeString: "literal_string \"StdUtils bytesToUint(bytes): Bytes length exceeds 32.\"";
                                };
                                readonly value: "StdUtils bytesToUint(bytes): Bytes length exceeds 32.";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_15bc16f8ce72c26d4fbf91f28e31f7cbe900e6386b04cf90f353bff0f5b2da88";
                                    readonly typeString: "literal_string \"StdUtils bytesToUint(bytes): Bytes length exceeds 32.\"";
                                }];
                                readonly id: 39073;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4620:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 39079;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4620:80:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 39080;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4620:80:156";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 39090;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly hexValue: "3332";
                                            readonly id: 39087;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "4755:2:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_32_by_1";
                                                readonly typeString: "int_const 32";
                                            };
                                            readonly value: "32";
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly expression: {
                                                readonly id: 39088;
                                                readonly name: "b";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 39068;
                                                readonly src: "4760:1:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            };
                                            readonly id: 39089;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4762:6:156";
                                            readonly memberName: "length";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4760:8:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "4755:13:156";
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
                                        readonly id: 39086;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "NewExpression";
                                        readonly src: "4745:9:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function (uint256) pure returns (bytes memory)";
                                        };
                                        readonly typeName: {
                                            readonly id: 39085;
                                            readonly name: "bytes";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4749:5:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                                readonly typeString: "bytes";
                                            };
                                        };
                                    };
                                    readonly id: 39091;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4745:24:156";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }, {
                                    readonly id: 39092;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39068;
                                    readonly src: "4771:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }, {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 39083;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "4728:3:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 39084;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4732:12:156";
                                    readonly memberName: "encodePacked";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4728:16:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 39093;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4728:45:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }, {
                                readonly components: readonly [{
                                    readonly id: 39095;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4776:7:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 39094;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4776:7:156";
                                        readonly typeDescriptions: {};
                                    };
                                }];
                                readonly id: 39096;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "4775:9:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                    readonly typeString: "type(uint256)";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }, {
                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                    readonly typeString: "type(uint256)";
                                }];
                                readonly expression: {
                                    readonly id: 39081;
                                    readonly name: "abi";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -1;
                                    readonly src: "4717:3:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_abi";
                                        readonly typeString: "abi";
                                    };
                                };
                                readonly id: 39082;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4721:6:156";
                                readonly memberName: "decode";
                                readonly nodeType: "MemberAccess";
                                readonly src: "4717:10:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                    readonly typeString: "function () pure";
                                };
                            };
                            readonly id: 39097;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4717:68:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 39072;
                        readonly id: 39098;
                        readonly nodeType: "Return";
                        readonly src: "4710:75:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bytesToUint";
                readonly nameLocation: "4542:11:156";
                readonly parameters: {
                    readonly id: 39069;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39068;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "4567:1:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39100;
                        readonly src: "4554:14:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 39067;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4554:5:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4553:16:156";
                };
                readonly returnParameters: {
                    readonly id: 39072;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39071;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39100;
                        readonly src: "4601:7:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 39070;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4601:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4600:9:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 39285;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5026:1962:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39284;
                    readonly nodeType: "Block";
                    readonly src: "5129:1859:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 39112;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 39110;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39105;
                                readonly src: "5455:5:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30783030";
                                readonly id: 39111;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5464:4:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0x00";
                            };
                            readonly src: "5455:13:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 39134;
                        readonly nodeType: "IfStatement";
                        readonly src: "5451:134:156";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786436";
                                                readonly id: 39119;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5539:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_214_by_1";
                                                    readonly typeString: "int_const 214";
                                                };
                                                readonly value: "0xd6";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_214_by_1";
                                                    readonly typeString: "int_const 214";
                                                }];
                                                readonly id: 39118;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5532:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39117;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5532:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39120;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5532:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 39123;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5553:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                };
                                                readonly value: "0x94";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                }];
                                                readonly id: 39122;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5546:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39121;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5546:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39124;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5546:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 39125;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39103;
                                            readonly src: "5560:8:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783830";
                                                readonly id: 39128;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5577:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_128_by_1";
                                                    readonly typeString: "int_const 128";
                                                };
                                                readonly value: "0x80";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_128_by_1";
                                                    readonly typeString: "int_const 128";
                                                }];
                                                readonly id: 39127;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5570:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39126;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5570:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39129;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5570:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }];
                                            readonly expression: {
                                                readonly id: 39115;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "5515:3:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 39116;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5519:12:156";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5515:16:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 39130;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5515:68:156";
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
                                        readonly id: 39114;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "5505:9:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 39131;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5505:79:156";
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
                                    readonly id: 39113;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39495;
                                    readonly src: "5482:22:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 39132;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5482:103:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 39109;
                            readonly id: 39133;
                            readonly nodeType: "Return";
                            readonly src: "5475:110:156";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 39137;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 39135;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39105;
                                readonly src: "5599:5:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<=";
                            readonly rightExpression: {
                                readonly hexValue: "30783766";
                                readonly id: 39136;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5608:4:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_127_by_1";
                                    readonly typeString: "int_const 127";
                                };
                                readonly value: "0x7f";
                            };
                            readonly src: "5599:13:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 39159;
                        readonly nodeType: "IfStatement";
                        readonly src: "5595:134:156";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786436";
                                                readonly id: 39144;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5683:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_214_by_1";
                                                    readonly typeString: "int_const 214";
                                                };
                                                readonly value: "0xd6";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_214_by_1";
                                                    readonly typeString: "int_const 214";
                                                }];
                                                readonly id: 39143;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5676:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39142;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5676:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39145;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5676:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 39148;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5697:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                };
                                                readonly value: "0x94";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                }];
                                                readonly id: 39147;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5690:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39146;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5690:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39149;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5690:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 39150;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39103;
                                            readonly src: "5704:8:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 39153;
                                                readonly name: "nonce";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 39105;
                                                readonly src: "5720:5:156";
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
                                                readonly id: 39152;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5714:5:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint8_$";
                                                    readonly typeString: "type(uint8)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39151;
                                                    readonly name: "uint8";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5714:5:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39154;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5714:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint8";
                                                readonly typeString: "uint8";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_uint8";
                                                readonly typeString: "uint8";
                                            }];
                                            readonly expression: {
                                                readonly id: 39140;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "5659:3:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 39141;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5663:12:156";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5659:16:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 39155;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5659:68:156";
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
                                        readonly id: 39139;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "5649:9:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 39156;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5649:79:156";
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
                                    readonly id: 39138;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39495;
                                    readonly src: "5626:22:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 39157;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5626:103:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 39109;
                            readonly id: 39158;
                            readonly nodeType: "Return";
                            readonly src: "5619:110:156";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 39166;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 39160;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39105;
                                readonly src: "5882:5:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<=";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_rational_255_by_1";
                                    readonly typeString: "int_const 255";
                                };
                                readonly id: 39165;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_rational_256_by_1";
                                        readonly typeString: "int_const 256";
                                    };
                                    readonly id: 39163;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly hexValue: "32";
                                        readonly id: 39161;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5891:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_2_by_1";
                                            readonly typeString: "int_const 2";
                                        };
                                        readonly value: "2";
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "**";
                                    readonly rightExpression: {
                                        readonly hexValue: "38";
                                        readonly id: 39162;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5894:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_8_by_1";
                                            readonly typeString: "int_const 8";
                                        };
                                        readonly value: "8";
                                    };
                                    readonly src: "5891:4:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_256_by_1";
                                        readonly typeString: "int_const 256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly hexValue: "31";
                                    readonly id: 39164;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5898:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                };
                                readonly src: "5891:8:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_255_by_1";
                                    readonly typeString: "int_const 255";
                                };
                            };
                            readonly src: "5882:17:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 39192;
                        readonly nodeType: "IfStatement";
                        readonly src: "5878:148:156";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786437";
                                                readonly id: 39173;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5966:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_215_by_1";
                                                    readonly typeString: "int_const 215";
                                                };
                                                readonly value: "0xd7";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_215_by_1";
                                                    readonly typeString: "int_const 215";
                                                }];
                                                readonly id: 39172;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5959:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39171;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5959:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39174;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5959:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 39177;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5980:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                };
                                                readonly value: "0x94";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                }];
                                                readonly id: 39176;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5973:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39175;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5973:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39178;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5973:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 39179;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39103;
                                            readonly src: "5987:8:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783831";
                                                readonly id: 39182;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6004:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_129_by_1";
                                                    readonly typeString: "int_const 129";
                                                };
                                                readonly value: "0x81";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_129_by_1";
                                                    readonly typeString: "int_const 129";
                                                }];
                                                readonly id: 39181;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5997:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39180;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5997:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39183;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5997:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 39186;
                                                readonly name: "nonce";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 39105;
                                                readonly src: "6017:5:156";
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
                                                readonly id: 39185;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6011:5:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint8_$";
                                                    readonly typeString: "type(uint8)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39184;
                                                    readonly name: "uint8";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6011:5:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39187;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6011:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint8";
                                                readonly typeString: "uint8";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_uint8";
                                                readonly typeString: "uint8";
                                            }];
                                            readonly expression: {
                                                readonly id: 39169;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "5942:3:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 39170;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5946:12:156";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5942:16:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 39188;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5942:82:156";
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
                                        readonly id: 39168;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "5932:9:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 39189;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5932:93:156";
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
                                    readonly id: 39167;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39495;
                                    readonly src: "5909:22:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 39190;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5909:117:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 39109;
                            readonly id: 39191;
                            readonly nodeType: "Return";
                            readonly src: "5902:124:156";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 39199;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 39193;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39105;
                                readonly src: "6040:5:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<=";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_rational_65535_by_1";
                                    readonly typeString: "int_const 65535";
                                };
                                readonly id: 39198;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_rational_65536_by_1";
                                        readonly typeString: "int_const 65536";
                                    };
                                    readonly id: 39196;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly hexValue: "32";
                                        readonly id: 39194;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6049:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_2_by_1";
                                            readonly typeString: "int_const 2";
                                        };
                                        readonly value: "2";
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "**";
                                    readonly rightExpression: {
                                        readonly hexValue: "3136";
                                        readonly id: 39195;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6052:2:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_16_by_1";
                                            readonly typeString: "int_const 16";
                                        };
                                        readonly value: "16";
                                    };
                                    readonly src: "6049:5:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_65536_by_1";
                                        readonly typeString: "int_const 65536";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly hexValue: "31";
                                    readonly id: 39197;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6057:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                };
                                readonly src: "6049:9:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_65535_by_1";
                                    readonly typeString: "int_const 65535";
                                };
                            };
                            readonly src: "6040:18:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 39225;
                        readonly nodeType: "IfStatement";
                        readonly src: "6036:149:156";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786438";
                                                readonly id: 39206;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6124:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_216_by_1";
                                                    readonly typeString: "int_const 216";
                                                };
                                                readonly value: "0xd8";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_216_by_1";
                                                    readonly typeString: "int_const 216";
                                                }];
                                                readonly id: 39205;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6117:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39204;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6117:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39207;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6117:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 39210;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6138:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                };
                                                readonly value: "0x94";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                }];
                                                readonly id: 39209;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6131:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39208;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6131:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39211;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6131:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 39212;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39103;
                                            readonly src: "6145:8:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783832";
                                                readonly id: 39215;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6162:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_130_by_1";
                                                    readonly typeString: "int_const 130";
                                                };
                                                readonly value: "0x82";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_130_by_1";
                                                    readonly typeString: "int_const 130";
                                                }];
                                                readonly id: 39214;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6155:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39213;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6155:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39216;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6155:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 39219;
                                                readonly name: "nonce";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 39105;
                                                readonly src: "6176:5:156";
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
                                                readonly id: 39218;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6169:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint16_$";
                                                    readonly typeString: "type(uint16)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39217;
                                                    readonly name: "uint16";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6169:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39220;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6169:13:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint16";
                                                readonly typeString: "uint16";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_uint16";
                                                readonly typeString: "uint16";
                                            }];
                                            readonly expression: {
                                                readonly id: 39202;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "6100:3:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 39203;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "6104:12:156";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "6100:16:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 39221;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6100:83:156";
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
                                        readonly id: 39201;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "6090:9:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 39222;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6090:94:156";
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
                                    readonly id: 39200;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39495;
                                    readonly src: "6067:22:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 39223;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6067:118:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 39109;
                            readonly id: 39224;
                            readonly nodeType: "Return";
                            readonly src: "6060:125:156";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 39232;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 39226;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39105;
                                readonly src: "6199:5:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<=";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_rational_16777215_by_1";
                                    readonly typeString: "int_const 16777215";
                                };
                                readonly id: 39231;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_rational_16777216_by_1";
                                        readonly typeString: "int_const 16777216";
                                    };
                                    readonly id: 39229;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly hexValue: "32";
                                        readonly id: 39227;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6208:1:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_2_by_1";
                                            readonly typeString: "int_const 2";
                                        };
                                        readonly value: "2";
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "**";
                                    readonly rightExpression: {
                                        readonly hexValue: "3234";
                                        readonly id: 39228;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6211:2:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_24_by_1";
                                            readonly typeString: "int_const 24";
                                        };
                                        readonly value: "24";
                                    };
                                    readonly src: "6208:5:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_16777216_by_1";
                                        readonly typeString: "int_const 16777216";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly hexValue: "31";
                                    readonly id: 39230;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6216:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                };
                                readonly src: "6208:9:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_16777215_by_1";
                                    readonly typeString: "int_const 16777215";
                                };
                            };
                            readonly src: "6199:18:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 39258;
                        readonly nodeType: "IfStatement";
                        readonly src: "6195:149:156";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786439";
                                                readonly id: 39239;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6283:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_217_by_1";
                                                    readonly typeString: "int_const 217";
                                                };
                                                readonly value: "0xd9";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_217_by_1";
                                                    readonly typeString: "int_const 217";
                                                }];
                                                readonly id: 39238;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6276:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39237;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6276:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39240;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6276:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 39243;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6297:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                };
                                                readonly value: "0x94";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_148_by_1";
                                                    readonly typeString: "int_const 148";
                                                }];
                                                readonly id: 39242;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6290:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39241;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6290:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39244;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6290:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 39245;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39103;
                                            readonly src: "6304:8:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783833";
                                                readonly id: 39248;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6321:4:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_131_by_1";
                                                    readonly typeString: "int_const 131";
                                                };
                                                readonly value: "0x83";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_131_by_1";
                                                    readonly typeString: "int_const 131";
                                                }];
                                                readonly id: 39247;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6314:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39246;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6314:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39249;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6314:12:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 39252;
                                                readonly name: "nonce";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 39105;
                                                readonly src: "6335:5:156";
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
                                                readonly id: 39251;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6328:6:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint24_$";
                                                    readonly typeString: "type(uint24)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39250;
                                                    readonly name: "uint24";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6328:6:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 39253;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6328:13:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint24";
                                                readonly typeString: "uint24";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            }, {
                                                readonly typeIdentifier: "t_uint24";
                                                readonly typeString: "uint24";
                                            }];
                                            readonly expression: {
                                                readonly id: 39235;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "6259:3:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 39236;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "6263:12:156";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "6259:16:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 39254;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6259:83:156";
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
                                        readonly id: 39234;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "6249:9:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 39255;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6249:94:156";
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
                                    readonly id: 39233;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39495;
                                    readonly src: "6226:22:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 39256;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6226:118:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 39109;
                            readonly id: 39257;
                            readonly nodeType: "Return";
                            readonly src: "6219:125:156";
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30786461";
                                            readonly id: 39265;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6911:4:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_218_by_1";
                                                readonly typeString: "int_const 218";
                                            };
                                            readonly value: "0xda";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_rational_218_by_1";
                                                readonly typeString: "int_const 218";
                                            }];
                                            readonly id: 39264;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "6904:6:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                readonly typeString: "type(bytes1)";
                                            };
                                            readonly typeName: {
                                                readonly id: 39263;
                                                readonly name: "bytes1";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6904:6:156";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 39266;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6904:12:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30783934";
                                            readonly id: 39269;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6925:4:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_148_by_1";
                                                readonly typeString: "int_const 148";
                                            };
                                            readonly value: "0x94";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_rational_148_by_1";
                                                readonly typeString: "int_const 148";
                                            }];
                                            readonly id: 39268;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "6918:6:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                readonly typeString: "type(bytes1)";
                                            };
                                            readonly typeName: {
                                                readonly id: 39267;
                                                readonly name: "bytes1";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6918:6:156";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 39270;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6918:12:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    }, {
                                        readonly id: 39271;
                                        readonly name: "deployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 39103;
                                        readonly src: "6932:8:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30783834";
                                            readonly id: 39274;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6949:4:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_132_by_1";
                                                readonly typeString: "int_const 132";
                                            };
                                            readonly value: "0x84";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_rational_132_by_1";
                                                readonly typeString: "int_const 132";
                                            }];
                                            readonly id: 39273;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "6942:6:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                readonly typeString: "type(bytes1)";
                                            };
                                            readonly typeName: {
                                                readonly id: 39272;
                                                readonly name: "bytes1";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6942:6:156";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 39275;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6942:12:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 39278;
                                            readonly name: "nonce";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39105;
                                            readonly src: "6963:5:156";
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
                                            readonly id: 39277;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "6956:6:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint32_$";
                                                readonly typeString: "type(uint32)";
                                            };
                                            readonly typeName: {
                                                readonly id: 39276;
                                                readonly name: "uint32";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6956:6:156";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 39279;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6956:13:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint32";
                                            readonly typeString: "uint32";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        }, {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        }, {
                                            readonly typeIdentifier: "t_uint32";
                                            readonly typeString: "uint32";
                                        }];
                                        readonly expression: {
                                            readonly id: 39261;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "6887:3:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 39262;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6891:12:156";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "6887:16:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 39280;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6887:83:156";
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
                                    readonly id: 39260;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "6877:9:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 39281;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6877:94:156";
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
                                readonly id: 39259;
                                readonly name: "addressFromLast20Bytes";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39495;
                                readonly src: "6841:22:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                    readonly typeString: "function (bytes32) pure returns (address)";
                                };
                            };
                            readonly id: 39282;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6841:140:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 39109;
                        readonly id: 39283;
                        readonly nodeType: "Return";
                        readonly src: "6834:147:156";
                    }];
                };
                readonly documentation: {
                    readonly id: 39101;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4798:223:156";
                    readonly text: "@dev Compute the address a contract will be deployed at for a given deployer address and nonce\n @notice adapted from Solmate implementation (https://github.com/Rari-Capital/solmate/blob/main/src/utils/LibRLP.sol)";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "computeCreateAddress";
                readonly nameLocation: "5035:20:156";
                readonly parameters: {
                    readonly id: 39106;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39103;
                        readonly mutability: "mutable";
                        readonly name: "deployer";
                        readonly nameLocation: "5064:8:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39285;
                        readonly src: "5056:16:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 39102;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5056:7:156";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39105;
                        readonly mutability: "mutable";
                        readonly name: "nonce";
                        readonly nameLocation: "5082:5:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39285;
                        readonly src: "5074:13:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 39104;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5074:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5055:33:156";
                };
                readonly returnParameters: {
                    readonly id: 39109;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39108;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39285;
                        readonly src: "5120:7:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 39107;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5120:7:156";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5119:9:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 39312;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6994:280:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39311;
                    readonly nodeType: "Block";
                    readonly src: "7155:119:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30786666";
                                            readonly id: 39302;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "7229:4:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_255_by_1";
                                                readonly typeString: "int_const 255";
                                            };
                                            readonly value: "0xff";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_rational_255_by_1";
                                                readonly typeString: "int_const 255";
                                            }];
                                            readonly id: 39301;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "7222:6:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                readonly typeString: "type(bytes1)";
                                            };
                                            readonly typeName: {
                                                readonly id: 39300;
                                                readonly name: "bytes1";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "7222:6:156";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 39303;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7222:12:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    }, {
                                        readonly id: 39304;
                                        readonly name: "deployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 39291;
                                        readonly src: "7236:8:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 39305;
                                        readonly name: "salt";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 39287;
                                        readonly src: "7246:4:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 39306;
                                        readonly name: "initcodeHash";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 39289;
                                        readonly src: "7252:12:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }, {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }];
                                        readonly expression: {
                                            readonly id: 39298;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7205:3:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 39299;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7209:12:156";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7205:16:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 39307;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7205:60:156";
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
                                    readonly id: 39297;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7195:9:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 39308;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7195:71:156";
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
                                readonly id: 39296;
                                readonly name: "addressFromLast20Bytes";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39495;
                                readonly src: "7172:22:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                    readonly typeString: "function (bytes32) pure returns (address)";
                                };
                            };
                            readonly id: 39309;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7172:95:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 39295;
                        readonly id: 39310;
                        readonly nodeType: "Return";
                        readonly src: "7165:102:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "computeCreate2Address";
                readonly nameLocation: "7003:21:156";
                readonly parameters: {
                    readonly id: 39292;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39287;
                        readonly mutability: "mutable";
                        readonly name: "salt";
                        readonly nameLocation: "7033:4:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39312;
                        readonly src: "7025:12:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 39286;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7025:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39289;
                        readonly mutability: "mutable";
                        readonly name: "initcodeHash";
                        readonly nameLocation: "7047:12:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39312;
                        readonly src: "7039:20:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 39288;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7039:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39291;
                        readonly mutability: "mutable";
                        readonly name: "deployer";
                        readonly nameLocation: "7069:8:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39312;
                        readonly src: "7061:16:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 39290;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7061:7:156";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7024:54:156";
                };
                readonly returnParameters: {
                    readonly id: 39295;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39294;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39312;
                        readonly src: "7142:7:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 39293;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7142:7:156";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7141:9:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 39329;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7383:181:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39328;
                    readonly nodeType: "Block";
                    readonly src: "7482:82:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 39323;
                                readonly name: "salt";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39315;
                                readonly src: "7521:4:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }, {
                                readonly id: 39324;
                                readonly name: "initCodeHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39317;
                                readonly src: "7527:12:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }, {
                                readonly id: 39325;
                                readonly name: "CREATE2_FACTORY";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38743;
                                readonly src: "7541:15:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }, {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 39322;
                                readonly name: "computeCreate2Address";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [39312, 39329];
                                readonly referencedDeclaration: 39312;
                                readonly src: "7499:21:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$_t_bytes32_$_t_address_$returns$_t_address_$";
                                    readonly typeString: "function (bytes32,bytes32,address) pure returns (address)";
                                };
                            };
                            readonly id: 39326;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7499:58:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 39321;
                        readonly id: 39327;
                        readonly nodeType: "Return";
                        readonly src: "7492:65:156";
                    }];
                };
                readonly documentation: {
                    readonly id: 39313;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7280:98:156";
                    readonly text: "@dev returns the address of a contract created with CREATE2 using the default CREATE2 deployer";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "computeCreate2Address";
                readonly nameLocation: "7392:21:156";
                readonly parameters: {
                    readonly id: 39318;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39315;
                        readonly mutability: "mutable";
                        readonly name: "salt";
                        readonly nameLocation: "7422:4:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39329;
                        readonly src: "7414:12:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 39314;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7414:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39317;
                        readonly mutability: "mutable";
                        readonly name: "initCodeHash";
                        readonly nameLocation: "7436:12:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39329;
                        readonly src: "7428:20:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 39316;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7428:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7413:36:156";
                };
                readonly returnParameters: {
                    readonly id: 39321;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39320;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39329;
                        readonly src: "7473:7:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 39319;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7473:7:156";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7472:9:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 39343;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7788:135:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39342;
                    readonly nodeType: "Block";
                    readonly src: "7869:54:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 39338;
                                readonly name: "creationCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39332;
                                readonly src: "7899:12:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }, {
                                readonly hexValue: "";
                                readonly id: 39339;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "7913:2:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                    readonly typeString: "literal_string \"\"";
                                };
                                readonly value: "";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                    readonly typeString: "literal_string \"\"";
                                }];
                                readonly id: 39337;
                                readonly name: "hashInitCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [39343, 39362];
                                readonly referencedDeclaration: 39362;
                                readonly src: "7886:12:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (bytes memory,bytes memory) pure returns (bytes32)";
                                };
                            };
                            readonly id: 39340;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7886:30:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 39336;
                        readonly id: 39341;
                        readonly nodeType: "Return";
                        readonly src: "7879:37:156";
                    }];
                };
                readonly documentation: {
                    readonly id: 39330;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7570:213:156";
                    readonly text: "@dev returns the hash of the init code (creation code + no args) used in CREATE2 with no constructor arguments\n @param creationCode the creation code of a contract C, as returned by type(C).creationCode";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "hashInitCode";
                readonly nameLocation: "7797:12:156";
                readonly parameters: {
                    readonly id: 39333;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39332;
                        readonly mutability: "mutable";
                        readonly name: "creationCode";
                        readonly nameLocation: "7823:12:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39343;
                        readonly src: "7810:25:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 39331;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7810:5:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7809:27:156";
                };
                readonly returnParameters: {
                    readonly id: 39336;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39335;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39343;
                        readonly src: "7860:7:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 39334;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7860:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7859:9:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 39362;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8196:171:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39361;
                    readonly nodeType: "Block";
                    readonly src: "8296:71:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 39356;
                                    readonly name: "creationCode";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39346;
                                    readonly src: "8340:12:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }, {
                                    readonly id: 39357;
                                    readonly name: "args";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39348;
                                    readonly src: "8354:4:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }, {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 39354;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "8323:3:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 39355;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8327:12:156";
                                    readonly memberName: "encodePacked";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "8323:16:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 39358;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8323:36:156";
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
                                readonly id: 39353;
                                readonly name: "keccak256";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: -8;
                                readonly src: "8313:9:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                };
                            };
                            readonly id: 39359;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8313:47:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 39352;
                        readonly id: 39360;
                        readonly nodeType: "Return";
                        readonly src: "8306:54:156";
                    }];
                };
                readonly documentation: {
                    readonly id: 39344;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7929:262:156";
                    readonly text: "@dev returns the hash of the init code (creation code + ABI-encoded args) used in CREATE2\n @param creationCode the creation code of a contract C, as returned by type(C).creationCode\n @param args the ABI-encoded arguments to the constructor of C";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "hashInitCode";
                readonly nameLocation: "8205:12:156";
                readonly parameters: {
                    readonly id: 39349;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39346;
                        readonly mutability: "mutable";
                        readonly name: "creationCode";
                        readonly nameLocation: "8231:12:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39362;
                        readonly src: "8218:25:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 39345;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8218:5:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39348;
                        readonly mutability: "mutable";
                        readonly name: "args";
                        readonly nameLocation: "8258:4:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39362;
                        readonly src: "8245:17:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 39347;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8245:5:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8217:46:156";
                };
                readonly returnParameters: {
                    readonly id: 39352;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39351;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39362;
                        readonly src: "8287:7:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 39350;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8287:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8286:9:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 39476;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8478:1124:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39475;
                    readonly nodeType: "Block";
                    readonly src: "8628:974:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [39374];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 39374;
                            readonly mutability: "mutable";
                            readonly name: "tokenCodeSize";
                            readonly nameLocation: "8646:13:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39475;
                            readonly src: "8638:21:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 39373;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8638:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 39375;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8638:21:156";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "8678:59:156";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "8692:35:156";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "token";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8721:5:156";
                                    }];
                                    readonly functionName: {
                                        readonly name: "extcodesize";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8709:11:156";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8709:18:156";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "tokenCodeSize";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8692:13:156";
                                }];
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 39364;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8721:5:156";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 39374;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8692:13:156";
                            readonly valueSize: 1;
                        }];
                        readonly id: 39376;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "8669:68:156";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 39380;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 39378;
                                    readonly name: "tokenCodeSize";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39374;
                                    readonly src: "8754:13:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 39379;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8770:1:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "8754:17:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5374645574696c7320676574546f6b656e42616c616e63657328616464726573732c616464726573735b5d293a20546f6b656e2061646472657373206973206e6f74206120636f6e74726163742e";
                                readonly id: 39381;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8773:80:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e1cfd8db054d28c838f90dd4aca17e279a1b93ad4e1fab977a6ceb92cad655fe";
                                    readonly typeString: "literal_string \"StdUtils getTokenBalances(address,address[]): Token address is not a contract.\"";
                                };
                                readonly value: "StdUtils getTokenBalances(address,address[]): Token address is not a contract.";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_e1cfd8db054d28c838f90dd4aca17e279a1b93ad4e1fab977a6ceb92cad655fe";
                                    readonly typeString: "literal_string \"StdUtils getTokenBalances(address,address[]): Token address is not a contract.\"";
                                }];
                                readonly id: 39377;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "8746:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 39382;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8746:108:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 39383;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8746:108:156";
                    }, {
                        readonly assignments: readonly [39385];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 39385;
                            readonly mutability: "mutable";
                            readonly name: "length";
                            readonly nameLocation: "8929:6:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39475;
                            readonly src: "8921:14:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 39384;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8921:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 39388;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 39386;
                                readonly name: "addresses";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39367;
                                readonly src: "8938:9:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly id: 39387;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "8948:6:156";
                            readonly memberName: "length";
                            readonly nodeType: "MemberAccess";
                            readonly src: "8938:16:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8921:33:156";
                    }, {
                        readonly assignments: readonly [39394];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 39394;
                            readonly mutability: "mutable";
                            readonly name: "calls";
                            readonly nameLocation: "8990:5:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39475;
                            readonly src: "8964:31:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57331_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                            readonly typeName: {
                                readonly baseType: {
                                    readonly id: 39392;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 39391;
                                        readonly name: "IMulticall3.Call";
                                        readonly nameLocations: readonly ["8964:11:156", "8976:4:156"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 57331;
                                        readonly src: "8964:16:156";
                                    };
                                    readonly referencedDeclaration: 57331;
                                    readonly src: "8964:16:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Call_$57331_storage_ptr";
                                        readonly typeString: "struct IMulticall3.Call";
                                    };
                                };
                                readonly id: 39393;
                                readonly nodeType: "ArrayTypeName";
                                readonly src: "8964:18:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_Call_$57331_storage_$dyn_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call[]";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 39401;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 39399;
                                readonly name: "length";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39385;
                                readonly src: "9021:6:156";
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
                                readonly id: 39398;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "8998:22:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Call_$57331_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (struct IMulticall3.Call memory[] memory)";
                                };
                                readonly typeName: {
                                    readonly baseType: {
                                        readonly id: 39396;
                                        readonly nodeType: "UserDefinedTypeName";
                                        readonly pathNode: {
                                            readonly id: 39395;
                                            readonly name: "IMulticall3.Call";
                                            readonly nameLocations: readonly ["9002:11:156", "9014:4:156"];
                                            readonly nodeType: "IdentifierPath";
                                            readonly referencedDeclaration: 57331;
                                            readonly src: "9002:16:156";
                                        };
                                        readonly referencedDeclaration: 57331;
                                        readonly src: "9002:16:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Call_$57331_storage_ptr";
                                            readonly typeString: "struct IMulticall3.Call";
                                        };
                                    };
                                    readonly id: 39397;
                                    readonly nodeType: "ArrayTypeName";
                                    readonly src: "9002:18:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_Call_$57331_storage_$dyn_storage_ptr";
                                        readonly typeString: "struct IMulticall3.Call[]";
                                    };
                                };
                            };
                            readonly id: 39400;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8998:30:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57331_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct IMulticall3.Call memory[] memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8964:64:156";
                    }, {
                        readonly body: {
                            readonly id: 39429;
                            readonly nodeType: "Block";
                            readonly src: "9075:189:156";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 39427;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 39412;
                                            readonly name: "calls";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39394;
                                            readonly src: "9147:5:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_array$_t_struct$_Call_$57331_memory_ptr_$dyn_memory_ptr";
                                                readonly typeString: "struct IMulticall3.Call memory[] memory";
                                            };
                                        };
                                        readonly id: 39414;
                                        readonly indexExpression: {
                                            readonly id: 39413;
                                            readonly name: "i";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39403;
                                            readonly src: "9153:1:156";
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
                                        readonly src: "9147:8:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Call_$57331_memory_ptr";
                                            readonly typeString: "struct IMulticall3.Call memory";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 39417;
                                            readonly name: "token";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39364;
                                            readonly src: "9184:5:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783730613038323331";
                                                readonly id: 39420;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "9224:10:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_1889567281_by_1";
                                                    readonly typeString: "int_const 1889567281";
                                                };
                                                readonly value: "0x70a08231";
                                            }, {
                                                readonly components: readonly [{
                                                    readonly baseExpression: {
                                                        readonly id: 39421;
                                                        readonly name: "addresses";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 39367;
                                                        readonly src: "9237:9:156";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                                            readonly typeString: "address[] memory";
                                                        };
                                                    };
                                                    readonly id: 39423;
                                                    readonly indexExpression: {
                                                        readonly id: 39422;
                                                        readonly name: "i";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 39403;
                                                        readonly src: "9247:1:156";
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
                                                    readonly src: "9237:12:156";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }];
                                                readonly id: 39424;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "9236:14:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_1889567281_by_1";
                                                    readonly typeString: "int_const 1889567281";
                                                }, {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                }];
                                                readonly expression: {
                                                    readonly id: 39418;
                                                    readonly name: "abi";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -1;
                                                    readonly src: "9201:3:156";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_magic_abi";
                                                        readonly typeString: "abi";
                                                    };
                                                };
                                                readonly id: 39419;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9205:18:156";
                                                readonly memberName: "encodeWithSelector";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "9201:22:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes4) pure returns (bytes memory)";
                                                };
                                            };
                                            readonly id: 39425;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "9201:50:156";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 39415;
                                                readonly name: "IMulticall3";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 57486;
                                                readonly src: "9158:11:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IMulticall3_$57486_$";
                                                    readonly typeString: "type(contract IMulticall3)";
                                                };
                                            };
                                            readonly id: 39416;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9170:4:156";
                                            readonly memberName: "Call";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 57331;
                                            readonly src: "9158:16:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_struct$_Call_$57331_storage_ptr_$";
                                                readonly typeString: "type(struct IMulticall3.Call storage pointer)";
                                            };
                                        };
                                        readonly id: 39426;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "structConstructorCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly ["9176:6:156", "9191:8:156"];
                                        readonly names: readonly ["target", "callData"];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9158:95:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Call_$57331_memory_ptr";
                                            readonly typeString: "struct IMulticall3.Call memory";
                                        };
                                    };
                                    readonly src: "9147:106:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Call_$57331_memory_ptr";
                                        readonly typeString: "struct IMulticall3.Call memory";
                                    };
                                };
                                readonly id: 39428;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9147:106:156";
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 39408;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 39406;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39403;
                                readonly src: "9058:1:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 39407;
                                readonly name: "length";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39385;
                                readonly src: "9062:6:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "9058:10:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 39430;
                        readonly initializationExpression: {
                            readonly assignments: readonly [39403];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 39403;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "9051:1:156";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 39430;
                                readonly src: "9043:9:156";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 39402;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "9043:7:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 39405;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 39404;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9055:1:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "9043:13:156";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 39410;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: true;
                                readonly src: "9070:3:156";
                                readonly subExpression: {
                                    readonly id: 39409;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39403;
                                    readonly src: "9072:1:156";
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
                            readonly id: 39411;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "9070:3:156";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "9038:226:156";
                    }, {
                        readonly assignments: readonly [null, 39435];
                        readonly declarations: readonly [null, {
                            readonly constant: false;
                            readonly id: 39435;
                            readonly mutability: "mutable";
                            readonly name: "returnData";
                            readonly nameLocation: "9328:10:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39475;
                            readonly src: "9313:25:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "bytes[]";
                            };
                            readonly typeName: {
                                readonly baseType: {
                                    readonly id: 39433;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "9313:5:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
                                };
                                readonly id: 39434;
                                readonly nodeType: "ArrayTypeName";
                                readonly src: "9313:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                    readonly typeString: "bytes[]";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 39440;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 39438;
                                readonly name: "calls";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39394;
                                readonly src: "9362:5:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_Call_$57331_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct IMulticall3.Call memory[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_array$_t_struct$_Call_$57331_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct IMulticall3.Call memory[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 39436;
                                    readonly name: "multicall";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38711;
                                    readonly src: "9342:9:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IMulticall3_$57486";
                                        readonly typeString: "contract IMulticall3";
                                    };
                                };
                                readonly id: 39437;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9352:9:156";
                                readonly memberName: "aggregate";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 57364;
                                readonly src: "9342:19:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_payable$_t_array$_t_struct$_Call_$57331_memory_ptr_$dyn_memory_ptr_$returns$_t_uint256_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (struct IMulticall3.Call memory[] memory) payable external returns (uint256,bytes memory[] memory)";
                                };
                            };
                            readonly id: 39439;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9342:26:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$";
                                readonly typeString: "tuple(uint256,bytes memory[] memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "9310:58:156";
                    }, {
                        readonly expression: {
                            readonly id: 39447;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 39441;
                                readonly name: "balances";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39371;
                                readonly src: "9442:8:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                    readonly typeString: "uint256[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 39445;
                                    readonly name: "length";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39385;
                                    readonly src: "9467:6:156";
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
                                    readonly id: 39444;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "NewExpression";
                                    readonly src: "9453:13:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure returns (uint256[] memory)";
                                    };
                                    readonly typeName: {
                                        readonly baseType: {
                                            readonly id: 39442;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "9457:7:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 39443;
                                        readonly nodeType: "ArrayTypeName";
                                        readonly src: "9457:9:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                            readonly typeString: "uint256[]";
                                        };
                                    };
                                };
                                readonly id: 39446;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9453:21:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                    readonly typeString: "uint256[] memory";
                                };
                            };
                            readonly src: "9442:32:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                readonly typeString: "uint256[] memory";
                            };
                        };
                        readonly id: 39448;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9442:32:156";
                    }, {
                        readonly body: {
                            readonly id: 39473;
                            readonly nodeType: "Block";
                            readonly src: "9521:75:156";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 39471;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 39459;
                                            readonly name: "balances";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39371;
                                            readonly src: "9535:8:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                                readonly typeString: "uint256[] memory";
                                            };
                                        };
                                        readonly id: 39461;
                                        readonly indexExpression: {
                                            readonly id: 39460;
                                            readonly name: "i";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 39450;
                                            readonly src: "9544:1:156";
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
                                        readonly src: "9535:11:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly baseExpression: {
                                                readonly id: 39464;
                                                readonly name: "returnData";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 39435;
                                                readonly src: "9560:10:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                                    readonly typeString: "bytes memory[] memory";
                                                };
                                            };
                                            readonly id: 39466;
                                            readonly indexExpression: {
                                                readonly id: 39465;
                                                readonly name: "i";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 39450;
                                                readonly src: "9571:1:156";
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
                                            readonly src: "9560:13:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 39468;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "9576:7:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 39467;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "9576:7:156";
                                                    readonly typeDescriptions: {};
                                                };
                                            }];
                                            readonly id: 39469;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "9575:9:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }, {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            }];
                                            readonly expression: {
                                                readonly id: 39462;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "9549:3:156";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 39463;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9553:6:156";
                                            readonly memberName: "decode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "9549:10:156";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                readonly typeString: "function () pure";
                                            };
                                        };
                                        readonly id: 39470;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9549:36:156";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9535:50:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 39472;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9535:50:156";
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 39455;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 39453;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39450;
                                readonly src: "9504:1:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 39454;
                                readonly name: "length";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 39385;
                                readonly src: "9508:6:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "9504:10:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 39474;
                        readonly initializationExpression: {
                            readonly assignments: readonly [39450];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 39450;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "9497:1:156";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 39474;
                                readonly src: "9489:9:156";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 39449;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "9489:7:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 39452;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 39451;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9501:1:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "9489:13:156";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 39457;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: true;
                                readonly src: "9516:3:156";
                                readonly subExpression: {
                                    readonly id: 39456;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39450;
                                    readonly src: "9518:1:156";
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
                            readonly id: 39458;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "9516:3:156";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "9484:112:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTokenBalances";
                readonly nameLocation: "8487:16:156";
                readonly parameters: {
                    readonly id: 39368;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39364;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "8512:5:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39476;
                        readonly src: "8504:13:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 39363;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8504:7:156";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39367;
                        readonly mutability: "mutable";
                        readonly name: "addresses";
                        readonly nameLocation: "8536:9:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39476;
                        readonly src: "8519:26:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 39365;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8519:7:156";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 39366;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "8519:9:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8503:43:156";
                };
                readonly returnParameters: {
                    readonly id: 39372;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39371;
                        readonly mutability: "mutable";
                        readonly name: "balances";
                        readonly nameLocation: "8614:8:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39476;
                        readonly src: "8597:25:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 39369;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8597:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 39370;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "8597:9:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8596:27:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 39495;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9822:144:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39494;
                    readonly nodeType: "Block";
                    readonly src: "9905:61:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 39489;
                                        readonly name: "bytesValue";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 39478;
                                        readonly src: "9946:10:156";
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
                                        readonly id: 39488;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "9938:7:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                            readonly typeString: "type(uint256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 39487;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "9938:7:156";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 39490;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9938:19:156";
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
                                    readonly id: 39486;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "9930:7:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint160_$";
                                        readonly typeString: "type(uint160)";
                                    };
                                    readonly typeName: {
                                        readonly id: 39485;
                                        readonly name: "uint160";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9930:7:156";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 39491;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9930:28:156";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint160";
                                    readonly typeString: "uint160";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint160";
                                    readonly typeString: "uint160";
                                }];
                                readonly id: 39484;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "9922:7:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 39483;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "9922:7:156";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 39492;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9922:37:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 39482;
                        readonly id: 39493;
                        readonly nodeType: "Return";
                        readonly src: "9915:44:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "addressFromLast20Bytes";
                readonly nameLocation: "9831:22:156";
                readonly parameters: {
                    readonly id: 39479;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39478;
                        readonly mutability: "mutable";
                        readonly name: "bytesValue";
                        readonly nameLocation: "9862:10:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39495;
                        readonly src: "9854:18:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 39477;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9854:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9853:20:156";
                };
                readonly returnParameters: {
                    readonly id: 39482;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39481;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39495;
                        readonly src: "9896:7:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 39480;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9896:7:156";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9895:9:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 39520;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10096:207:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39519;
                    readonly nodeType: "Block";
                    readonly src: "10161:142:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [39503, null];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 39503;
                            readonly mutability: "mutable";
                            readonly name: "status";
                            readonly nameLocation: "10177:6:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39519;
                            readonly src: "10172:11:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 39502;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10172:4:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, null];
                        readonly id: 39516;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "6c6f6728737472696e672c75696e7432353629";
                                    readonly id: 39511;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10249:21:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_b60e72ccf6d57ab53eb84d7e94a9545806ed7f93c4d5673f11a64f03471e584e";
                                        readonly typeString: "literal_string \"log(string,uint256)\"";
                                    };
                                    readonly value: "log(string,uint256)";
                                }, {
                                    readonly id: 39512;
                                    readonly name: "p0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39497;
                                    readonly src: "10272:2:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 39513;
                                    readonly name: "p1";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39499;
                                    readonly src: "10276:2:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_b60e72ccf6d57ab53eb84d7e94a9545806ed7f93c4d5673f11a64f03471e584e";
                                        readonly typeString: "literal_string \"log(string,uint256)\"";
                                    }, {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 39509;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "10225:3:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 39510;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10229:19:156";
                                    readonly memberName: "encodeWithSignature";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "10225:23:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function (string memory) pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 39514;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10225:54:156";
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
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 39506;
                                        readonly name: "CONSOLE2_ADDRESS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38731;
                                        readonly src: "10196:16:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }];
                                        readonly id: 39505;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "10188:7:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 39504;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "10188:7:156";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 39507;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10188:25:156";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 39508;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10214:10:156";
                                readonly memberName: "staticcall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "10188:36:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) view returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 39515;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10188:92:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10171:109:156";
                    }, {
                        readonly expression: {
                            readonly id: 39517;
                            readonly name: "status";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 39503;
                            readonly src: "10290:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 39518;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10290:6:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "console2_log";
                readonly nameLocation: "10105:12:156";
                readonly parameters: {
                    readonly id: 39500;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39497;
                        readonly mutability: "mutable";
                        readonly name: "p0";
                        readonly nameLocation: "10132:2:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39520;
                        readonly src: "10118:16:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 39496;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10118:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39499;
                        readonly mutability: "mutable";
                        readonly name: "p1";
                        readonly nameLocation: "10144:2:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39520;
                        readonly src: "10136:10:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 39498;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10136:7:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10117:30:156";
                };
                readonly returnParameters: {
                    readonly id: 39501;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10161:0:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 39545;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10309:212:156";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 39544;
                    readonly nodeType: "Block";
                    readonly src: "10380:141:156";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [39528, null];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 39528;
                            readonly mutability: "mutable";
                            readonly name: "status";
                            readonly nameLocation: "10396:6:156";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 39544;
                            readonly src: "10391:11:156";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 39527;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10391:4:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, null];
                        readonly id: 39541;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "6c6f6728737472696e672c737472696e6729";
                                    readonly id: 39536;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10468:20:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_4b5c4277d556d03fbf5ee534fba41dc13982b44f2fa82f1d48fdd8b5b5b692ac";
                                        readonly typeString: "literal_string \"log(string,string)\"";
                                    };
                                    readonly value: "log(string,string)";
                                }, {
                                    readonly id: 39537;
                                    readonly name: "p0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39522;
                                    readonly src: "10490:2:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 39538;
                                    readonly name: "p1";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 39524;
                                    readonly src: "10494:2:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_4b5c4277d556d03fbf5ee534fba41dc13982b44f2fa82f1d48fdd8b5b5b692ac";
                                        readonly typeString: "literal_string \"log(string,string)\"";
                                    }, {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 39534;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "10444:3:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 39535;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10448:19:156";
                                    readonly memberName: "encodeWithSignature";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "10444:23:156";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function (string memory) pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 39539;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10444:53:156";
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
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 39531;
                                        readonly name: "CONSOLE2_ADDRESS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 38731;
                                        readonly src: "10415:16:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }];
                                        readonly id: 39530;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "10407:7:156";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 39529;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "10407:7:156";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 39532;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10407:25:156";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 39533;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10433:10:156";
                                readonly memberName: "staticcall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "10407:36:156";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) view returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 39540;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10407:91:156";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10390:108:156";
                    }, {
                        readonly expression: {
                            readonly id: 39542;
                            readonly name: "status";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 39528;
                            readonly src: "10508:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 39543;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10508:6:156";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "console2_log";
                readonly nameLocation: "10318:12:156";
                readonly parameters: {
                    readonly id: 39525;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 39522;
                        readonly mutability: "mutable";
                        readonly name: "p0";
                        readonly nameLocation: "10345:2:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39545;
                        readonly src: "10331:16:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 39521;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10331:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 39524;
                        readonly mutability: "mutable";
                        readonly name: "p1";
                        readonly nameLocation: "10363:2:156";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 39545;
                        readonly src: "10349:16:156";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 39523;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10349:6:156";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10330:36:156";
                };
                readonly returnParameters: {
                    readonly id: 39526;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10380:0:156";
                };
                readonly scope: 39546;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "private";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "StdUtils";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [39546];
            readonly name: "StdUtils";
            readonly nameLocation: "210:8:156";
            readonly scope: 39547;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 156;
};
//# sourceMappingURL=StdUtils.d.ts.map